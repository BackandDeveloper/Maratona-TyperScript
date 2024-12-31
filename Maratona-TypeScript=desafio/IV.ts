// Questão 4: Calcular a mediana de uma lista de números.
function calcularMediana(numeros: number[]): number {
    numeros.sort((a, b) => a - b);
    const meio = Math.floor(numeros.length / 2);
  
    if (numeros.length % 2 === 0) {
      return (numeros[meio - 1] + numeros[meio]) / 2;
    } else {
      return numeros[meio];
    }
  }
  
  const numeros4 = [10, 20, 30, 40, 50];
  console.log(`A mediana é: ${calcularMediana(numeros4)}`);
  