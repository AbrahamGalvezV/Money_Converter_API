// Función asíncrona para obtener la lista de divisas y llenar los selectores
async function fillSelectors() {
  try {
    const answer = await fetch('https://v6.exchangerate-api.com/v6/3aac3354aab9d55f5d183ccf/codes');
    const data = await answer.json();

    if (data.result === "success") {
      const symbols = data.supported_codes;
      const selector1 = document.getElementById("selectorValue1");
      const selector2 = document.getElementById("selectorValue2");

      selector1.innerHTML = "";
      selector2.innerHTML = "";

      symbols.forEach(([code, description]) => {
        const option1 = document.createElement('option');
        option1.value = code;
        option1.textContent = `${code} - ${description}`;
        selector1.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = code;
        option2.textContent = `${code} - ${description}`;
        selector2.appendChild(option2);
      });
    } else {
      console.error('Error getting currency symbols:', data);
    }
  } catch (error) {
    console.error('Error al solicitar símbolo:', error);
  }
}

// Llama a la función asíncrona para llenar los selectores al cargar la página
document.addEventListener('DOMContentLoaded', fillSelectors);

// Función asíncrona para obtener y mostrar la tasa de cambio
async function getExchangeRate() {
  try {
    const value1 = document.getElementById("selectorValue1").value.toUpperCase();
    const value2 = document.getElementById("selectorValue2").value.toUpperCase();
    const amount = parseFloat(document.getElementById("number").value);

    if (isNaN(amount) || amount <= 0) {
      document.getElementById("result").textContent = "0";
      return;
    }

    const answer = await fetch(`https://v6.exchangerate-api.com/v6/3aac3354aab9d55f5d183ccf/pair/${value1}/${value2}`);
    const data = await answer.json();

    if (data.result === "success") {
      const changeRate = data.conversion_rate;
      const result = amount * changeRate;
      document.getElementById("result").textContent = result.toFixed(2);
    } else {
      document.getElementById("result").textContent = "Error getting exchange rate";
    }
  } catch (error) {
    document.getElementById("result").textContent = "Error getting exchange rate";
  }
}

document.getElementById("selectorValue1").addEventListener("change", getExchangeRate);
document.getElementById("selectorValue2").addEventListener("change", getExchangeRate);
document.getElementById("number").addEventListener("input", getExchangeRate);
