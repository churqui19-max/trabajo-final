function verificarParImpar() {
      const num = parseInt(document.getElementById('numero').value);

      if (isNaN(num)) {
        document.getElementById('resultadoParImpar').innerHTML = 'Ingresa un número válido.';
        return;
      }

      if (num % 2 === 0) {
        document.getElementById('resultadoParImpar').innerHTML = `El número ${num} es <strong>PAR</strong>.`;
      } else {
        document.getElementById('resultadoParImpar').innerHTML = `El número ${num} es <strong>IMPAR</strong>.`;
      }
    }

    function mostrarTabla() {
      let resultado = '<ul>';

      for (let i = 1; i <= 10; i++) {
        resultado += `<li>5 x ${i} = ${5 * i}</li>`;
      }

      resultado += '</ul>';
      document.getElementById('resultadoTabla').innerHTML = resultado;
    }