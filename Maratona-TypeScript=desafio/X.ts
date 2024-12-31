// Questão 10: Calcular a regressão linear simples entre duas listas de números.
function calcularRegressaoLinear(lista1: number[], lista2: number[]): { slope: number, intercept: number } {
    const media1 = calcularMedia(lista1);
    const media2 = calcularMedia(lista2);
    const numerador = lista1.reduce((acc, val, i) => acc + (val - media1) * (lista2[i] - media2), 0);
    const denominador = lista1.reduce((acc, val) => acc + (val - media1) ** 2, 0);
    const slope = numerador / denominador;
    const intercept = media2 - slope * media1;
    return { slope, intercept };
  }
  
  const lista1_10 = [10, 20, 30, 40, 50];
  const lista2_10 = [15, 25, 35, 45, 55];
  const { slope, intercept } = calcularRegressaoLinear(lista1_10, lista2_10);
  console.log(`A equação da regressão linear é: y = ${slope}x + ${intercept}`);
  