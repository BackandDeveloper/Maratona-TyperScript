// Questão 2: Encontrar o valor máximo em uma lista de números.
function valorMaximo(numeros: number[]): number {
    return Math.max(...numeros);
  }
  
  const numeros2 = [10, 20, 30, 40, 50];
  console.log(`O valor máximo é: ${valorMaximo(numeros2)}`);
  