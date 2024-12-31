// Questão 1: Calcular a média de uma lista de números.
function calcularMedia(numeros: number[]): number {
    const soma = numeros.reduce((acc, val) => acc + val, 0);
    return soma / numeros.length;
  }
  
  const numeros1 = [10, 20, 30, 40, 50];
  console.log(`A média é: ${calcularMedia(numeros1)}`);
  