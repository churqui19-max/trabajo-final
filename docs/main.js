document.getElementById("menu").addEventListener("click", function (e) {
  e.preventDefault();

  const ejercicio = e.target.dataset.ej;
  if (!ejercicio) return;

  const acciones = {
    1: ej1,
    2: ej2,
    3: ej3,
    4: ej4,
    5: ej5,
    6: ej6
  };

  acciones[ejercicio]?.();
});

/* ======================
   FUNCIONES AUXILIARES
====================== */

const pedirNumero = (mensaje, min = 0, max = Infinity) => {
  let valor;
  do {
    valor = parseFloat(prompt(mensaje));
  } while (isNaN(valor) || valor < min || valor > max);
  return valor;
};

/* ======================
   EJERCICIOS
====================== */

function ej1() {
  const edad = pedirNumero("Ingresa tu edad:", 0);

  if (edad >= 18)
    alert("Puedes ver la película.");
  else if (edad >= 13)
    alert("Puedes verla con un adulto.");
  else
    alert("No puedes ver esta película.");
}

function ej2() {
  const precio = pedirNumero("Ingresa el precio:", 0.01);
  let descuento = 0;

  if (precio > 100) descuento = 0.20;
  else if (precio >= 50) descuento = 0.10;

  const total = precio * (1 - descuento);

  alert(
    `Precio: $${precio.toFixed(2)}
Descuento: ${descuento * 100}%
Total: $${total.toFixed(2)}`
  );
}

function ej3() {
  const pares = [];
  let suma = 0;

  for (let i = 1; i <= 10; i++) {
    const num = i * 2;
    pares.push(num);
    suma += num;
  }

  alert(`Números pares: ${pares.join(", ")}\nSuma: ${suma}`);
}

function ej4() {
  let saldo = 1000;
  let opcion;

  do {
    opcion = prompt("¿Retirar o depositar?").toLowerCase();
  } while (!["retirar", "depositar"].includes(opcion));

  const monto = pedirNumero("Ingresa el monto:", 1);

  if (opcion === "depositar") {
    saldo += monto;
  } else if (monto <= saldo) {
    saldo -= monto;
  } else {
    alert("Fondos insuficientes");
    return;
  }

  alert(`Operación exitosa.\nSaldo actual: $${saldo}`);
}

function ej5() {
  const objetivo = Math.floor(Math.random() * 10) + 1;
  let intentos = 0;

  while (intentos < 3) {
    const intento = pedirNumero("Adivina el número (1–10):", 1, 10);
    intentos++;

    if (intento === objetivo) {
      alert("🎉 ¡Ganaste!");
      return;
    }

    alert(intento < objetivo ? "El número es mayor" : "El número es menor");
  }

  alert(`❌ Perdiste. El número era ${objetivo}`);
}

function ej6() {
  const promedio = pedirNumero("Promedio (0–10):", 0, 10);
  const reprobadas = pedirNumero("Materias reprobadas:", 0);

  let tiempoCompleto;
  do {
    const r = prompt("¿Tiempo completo? (si / no)").toLowerCase();
    if (r === "si" || r === "sí") tiempoCompleto = true;
    if (r === "no") tiempoCompleto = false;
  } while (tiempoCompleto === undefined);

  let clasificacion;

  if (promedio >= 9 && reprobadas === 0 && tiempoCompleto)
    clasificacion = "EXCELENTE";
  else if (promedio >= 7.5 && reprobadas <= 1)
    clasificacion = "BUENO";
  else if (promedio >= 6 || reprobadas === 2)
    clasificacion = "REGULAR";
  else
    clasificacion = "EN RIESGO";

  alert(`Clasificación: ${clasificacion}`);
}
