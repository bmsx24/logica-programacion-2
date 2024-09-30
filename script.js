const celcius = document.getElementById("celcius");
const resultado = document.getElementById("resultado");

function convertir(){
    const valorCelcius = parseFloat(celcius.value);
    if (isNaN(valorCelcius)) {
        resultado.textContent = "Error: La temperatura debe ser un número.";
    } else {
        const kelvin = valorCelcius + 273.15;
        const faren = (valorCelcius * (9/5)) + 32;
        resultado.textContent = `Grados Kelvin: ${kelvin.toFixed(2)}\nGrados Fahrenheit: ${faren.toFixed(1)}`;
    }
}