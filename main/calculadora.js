// Función para obtener la lista de divisas y llenar los selectores
async function llenarSelectores() {
  try {
      // URL de la API con tu clave de API
      const respuesta = await fetch('https://v6.exchangerate-api.com/v6/3aac3354aab9d55f5d183ccf/codes');
      // console.log(respuesta);
      
      const datos = await respuesta.json();
      // console.log(datos, 'datos');
      

      // Verifica si la respuesta es exitosa
      if (datos.result === "success") {
          const simbolos = datos.supported_codes;

          // console.log(simbolos);
          

          // Selecciona los elementos <select> en el DOM
          const selector1 = document.getElementById("selectorValue1");
          const selector2 = document.getElementById("selectorValue2");

          // Limpia los selectores antes de llenarlos
          selector1.innerHTML = '';
          selector2.innerHTML = '';

          // Recorre los símbolos y crea opciones para los selectores
          simbolos.forEach(([codigo, descripcion]) => {
              const opcion1 = document.createElement('option');
              opcion1.value = codigo;
              opcion1.textContent = `${codigo} - ${descripcion}`;
              selector1.appendChild(opcion1);

              

              const opcion2 = document.createElement('option');
              opcion2.value = codigo;
              opcion2.textContent = `${codigo} - ${descripcion}`;
              selector2.appendChild(opcion2);
          });
      } else {
          console.error('Error al obtener los símbolos de las divisas:', datos);
      }
  } catch (error) {
      console.error('Error al realizar la solicitud de símbolos:', error);
  }
}

// Llama a la función para llenar los selectores al cargar la página
document.addEventListener('DOMContentLoaded', llenarSelectores);

// Función para obtener y mostrar la tasa de cambio
async function obtenerTasaCambio() {
  try {
      const value1 = document.getElementById("selectorValue1").value.toUpperCase();
      const value2 = document.getElementById("selectorValue2").value.toUpperCase();
      const cantidad = parseFloat(document.getElementById("number").value);

      if (isNaN(cantidad) || cantidad <= 0) {
          document.getElementById("result").textContent = "0";
          return;
      }

      const respuesta = await fetch(`https://v6.exchangerate-api.com/v6/3aac3354aab9d55f5d183ccf/pair/${value1}/${value2}`);
      console.log(respuesta);
      
      
      const datos = await respuesta.json();
      console.log(datos);

      if (datos.result === "success") {
          const tasaCambio = datos.conversion_rate;
          console.log(`La tasa de cambio de ${value1} a ${value2} es: ${tasaCambio}`);

          const resultado = cantidad * tasaCambio;
          document.getElementById("result").textContent = resultado.toFixed(2);
      } else {
          console.error('Error al obtener la tasa de cambio:', datos);
          document.getElementById("result").textContent = "Error";
      }

  } catch (error) {
      console.error('Error al obtener la tasa de cambio:', error);
      document.getElementById("result").textContent = "Error";
  }
}

// Agregar eventos para actualizar la tasa de cambio al cambiar los selectores o el input
document.getElementById("selectorValue1").addEventListener("change", obtenerTasaCambio);
document.getElementById("selectorValue2").addEventListener("change", obtenerTasaCambio);
document.getElementById("number").addEventListener("input", obtenerTasaCambio);
