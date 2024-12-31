// Questão 8: Normalizar uma lista de números (min-max normalization).
function normalizar(numeros: number[]): number[] {
    const min = valorMinimo(numeros);
    const max = valorMaximo(numeros);
    return numeros.map(num => (num - min) / (max - min));
  }
  
  const numeros8 = [10, 20, 30, 40, 50];
  console.log(`A lista normalizada é: ${normalizar(numeros8)}`);
  