//Calculo MILILITROS e concentração necessário
const peso = document.getElementById('peso');
const mgkg = document.getElementById('mgkg');
const concentracao = document.getElementById('concentracao');
const calcular = document.getElementById('calcular');
const doseNecessaria = document.getElementById('dose_necessaria');
const mgmlNecessario = document.getElementById('mgml_necessario');
const mlNecessario = document.getElementById('ml_necessario');

calcular.addEventListener('click', calcularResultado);

function calcularResultado() {
  const doseNecessariaCalculada = peso.value * mgkg.value;
  doseNecessaria.value = doseNecessariaCalculada;

  const mgmlNecessarioCalculado = concentracao.value * 10;
  mgmlNecessario.value = mgmlNecessarioCalculado;

  const mlNecessarioCalculado = mgmlNecessarioCalculado !== 0 ? doseNecessariaCalculada / mgmlNecessarioCalculado : 0;
  mlNecessario.value = mlNecessarioCalculado;
}