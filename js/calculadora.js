function calcular() {
const n1 = parseFloat(document.getElementById('num1').value);
const n2 = parseFloat(document.getElementById('num2').value);


if (isNaN(n1) || isNaN(n2)) {
document.getElementById('resultado').innerHTML = 'Por favor ingresa ambos números.';
return;
}


const suma = n1 + n2;
const resta = n1 - n2;
const multiplicacion = n1 * n2;
const division = n2 !== 0 ? (n1 / n2).toFixed(2) : 'No se puede dividir entre 0';


document.getElementById('resultado').innerHTML = `
<p><strong>Suma:</strong> ${suma}</p>
<p><strong>Resta:</strong> ${resta}</p>
<p><strong>Multiplicación:</strong> ${multiplicacion}</p>
<p><strong>División:</strong> ${division}</p>
`;
}