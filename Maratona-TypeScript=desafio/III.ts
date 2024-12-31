// Questão 3: Encontrar o valor mínimo em uma lista de números.
function valorMinimo(numeros: number[]): number {
    return Math.min(...numeros);
  }
  
  const numeros3 = [10, 20, 30, 40, 50];
  console.log(`O valor mínimo é: ${valorMinimo(numeros3)}`);
  