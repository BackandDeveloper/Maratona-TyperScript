// Questão 6: Calcular a variância de uma lista de números.
function calcularVariancia(numeros: number[]): number {
    const media = calcularMedia(numeros);
    const somaDosQuadrados = numeros.reduce((acc, val) => acc + (val - media) ** 2, 0);
    return somaDosQuadrados / (numeros.length - 1);
  }
  
  const numeros6 = [10, 20, 30, 40, 50];
  console.log(`A variância é: ${calcularVariancia(numeros6)}`);
  