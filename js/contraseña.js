 function verificarPassword() {
      const pass = document.getElementById('password').value;

      if (pass.length < 6) {
        document.getElementById('resultadoPassword').innerHTML = '❌ Error: la contraseña debe tener al menos 6 caracteres.';
      } else {
        document.getElementById('resultadoPassword').innerHTML = '✅ Acceso concedido.';
      }
    }

    // Práctica 6
    function celsiusAFahrenheit(c) {
      return (c * 9 / 5) + 32;
    }

    function convertir() {
      const c = parseFloat(document.getElementById('celsius').value);

      if (isNaN(c)) {
        document.getElementById('resultadoTemperatura').innerHTML = 'Ingresa un número válido.';
        return;
      }

      const f = celsiusAFahrenheit(c);
      document.getElementById('resultadoTemperatura').innerHTML = `${c} °C = ${f.toFixed(2)} °F`;
}