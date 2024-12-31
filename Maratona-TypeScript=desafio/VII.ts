// Questão 7: Calcular o desvio padrão de uma lista de números.
function calcularDesvioPadrao(numeros: number[]): number {
    return Math.sqrt(calcularVariancia(numeros));
  }
  
  const numeros7 = [10, 20, 30, 40, 50];
  console.log(`O desvio padrão é: ${calcularDesvioPadrao(numeros7)}`);
  