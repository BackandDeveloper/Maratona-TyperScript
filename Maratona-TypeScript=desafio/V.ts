// Questão 5: Calcular a moda de uma lista de números.
function calcularModa(numeros: number[]): number {
    const frequencia: { [key: number]: number } = {};
    let maxFreq = 0;
    let moda = numeros[0];
  
    for (const num of numeros) {
      frequencia[num] = (frequencia[num] || 0) + 1;
      if (frequencia[num] > maxFreq) {
        maxFreq = frequencia[num];
        moda = num;
      }
    }
  
    return moda;
  }
  
  const numeros5 = [10, 20, 30, 40, 50, 10, 20, 10];
  console.log(`A moda é: ${calcularModa(numeros5)}`);
  