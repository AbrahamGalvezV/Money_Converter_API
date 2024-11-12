function convertTemperature() {
  const number = parseFloat(document.getElementById("number").value);
  const value1 = document.getElementById("selectorValue1").value;
  const value2 = document.getElementById("selectorValue2").value;

  // Verificamos que el numero ha sido ingresado
  if (isNaN(number)) {
    document.getElementById("result").textContent =
      "Please enter a numerical value";
    return;
  }

  // Calculamos y mostramos el resultado según el valor seleccionado
  let result = "";

  if (value1 === "eur") { // Si se introducen celsius en el box 1

    if (value2 === "usd") { // Si se introducen celsius en el box 2
      const dollars = Math.floor(number * 1.08);
      result = `${number} € is ${dollars} $`;
    } 
    
    else if (value2 === "jpy") {
      const yenes = Math.floor(number * 165.94);
      result = `${number} € is ${yenes} ¥`;
    } 
    
    else if (value2 === "gbp") {
      const yenes = Math.floor(number * 0.90);
      result = `${number} € is ${yenes} £`;
    } 
    
    else if (value2 === "chf") {
      const francs = Math.floor(number * 1.07);
      result = `${number} € is ${francs} Swiss Francs`;
    }     
    
    else if (value2 === "krw") {
      const wones = Math.floor(number * 1462.10);
      result = `${number} € is ${wones} ₩`;
    } 
    
    else {
      result = `${number} €`;
    }

  } 
  
  else if (value1 === "usd") { // Si se introducen dolares en el box 1

    if (value2 === "eur") { 
      const euro = Math.floor(number * 0.92);
      result = `${number} $ is ${euro} €`;
    } 
    
    else if (value2 === "jpy") {
      const yenes = Math.floor(number * 153.83);
      result = `${number} $ is ${yenes} ¥`;
    } 
    
    else if (value2 === "gbp") {
      const libras = Math.floor(number * 0.83);
      result = `${number} $ is ${libras} £`;
    } 
    
    else if (value2 === "chf") {
      const francs = Math.floor(number * 0.99);
      result = `${number} $ is ${francs} Swiss Francs`;
    } 
    
    else if (value2 === "krw") {
      const wones = Math.floor(number * 1354.40);
      result = `${number} $ is ${wones} ₩`;
    } 
    
    else {
      result = `${number} $`;
    }

  } 
  
  else if (value1 === "jpy"){

    if (value2 === "eur") { 
      const euro = Math.floor(number * 0.006);
      result = `${number} ¥ is ${euro} €`;
    }  
    
    else if (value2 === "usd") { 
      const dollars = Math.floor(number * 0.0065);
      result = `${number} ¥ is ${dollars} $`;
    } 

    else if (value2 === "gbp") {
      const libras = Math.floor(number * 0.0054);
      result = `${number} $ is ${libras} £`;
    } 

    else if (value2 === "chf") {
      const francs = Math.floor(number * 0.0065);
      result = `${number} ¥ is ${francs} Swiss Francs`;
    } 
    
    else if (value2 === "krw") {
      const wones = Math.floor(number * 8.80);
      result = `${number} ¥ is ${wones} ₩`;
    } 
    
    else {
      result = `${number} ¥`;
    }

  } 
  
  else if (value1 === "gbp") {

    if (value2 === "eur") { 
      const euro = Math.floor(number * 1.11);
      result = `${number} £ is ${euro} €`;
    }  
    
    else if (value2 === "usd") { 
      const dollars = Math.floor(number * 1.20);
      result = `${number} £ is ${dollars} $`;
    } 

    else if (value2 === "jpy") {
      const yenes = Math.floor(number * 179.03);
      result = `${number} $ is ${yenes} ¥`;
    } 

    else if (value2 === "chf") {
      const francs = Math.floor(number * 1.15);
      result = `${number} £ is ${francs} Swiss Francs`;
    } 
    
    else if (value2 === "krw") {
      const wones = Math.floor(number * 1569.85);
      result = `${number} £ is ${wones} ₩`;
    } 
    
    else {
      result = `${number} £`;
    }

  } 
  
  else if (value1 === "chf") {

    if (value2 === "eur") { 
      const euro = Math.floor(number * 0.94);
      result = `${number} Swiss Francs is ${euro} €`;
    }  
    
    else if (value2 === "usd") { 
      const dollars = Math.floor(number * 1.01);
      result = `${number} Swiss Francs is ${dollars} $`;
    } 

    else if (value2 === "jpy") {
      const yens = Math.floor(number * 155.48);
      result = `${number} Swiss Francs is ${yens} ¥`;
    } 

    else if (value2 === "gbp") {
      const libras = Math.floor(number * 0.87);
      result = `${number} Swiss Francs is ${libras} £`;
    } 

    else if (value2 === "krw") {
      const wones = Math.floor(number * 1372.65);
      result = `${number} Swiss Francs is ${wones} ₩`;
    } 
    
    else {
      result = `${number} Swiss Francs`;
    }

  } 
  
  else if (value1 === "krw") {

    if (value2 === "eur") { 
      const euros = Math.floor(number * 0.00068);
      result = `${number} KRW is ${euros} €`;
    }  
    
    else if (value2 === "usd") { 
      const dollars = Math.floor(number * 0.00074);
      result = `${number} KRW is ${dollars} $`;
    } 

    else if (value2 === "jpy") {
      const yens = Math.floor(number * '0.11');
      result = `${number} KRW is ${yens} ¥`;
    } 

    else if (value2 === "gbp") {
      const libras = Math.floor(number * 0.00011);
      result = `${number} KRW is ${libras} £`;
    }  

    else if (value2 === "chf") {
      const francs = Math.floor(number * 0.00073);
      result = `${number} £ is ${francs} Francos Suizos`;
    }
    
    else {
      result = `${number} South Korean Won`;
    }

  } 
  
  else {
    result = `The entered value is not defined`;
  }

  document.getElementById("result").textContent = result;
}

// Asignamos los eventos a los selectores y al input
document
  .getElementById("selectorValue1")
  .addEventListener("change", convertTemperature);
document
  .getElementById("selectorValue2")
  .addEventListener("change", convertTemperature);
document.getElementById("number").addEventListener("input", convertTemperature);
