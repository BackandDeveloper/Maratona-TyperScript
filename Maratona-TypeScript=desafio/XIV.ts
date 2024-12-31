// Questão 14: Calcular o fatorial de um número.
function calcularFatorial(n: number): number {
    if (n === 0) return 1;
    return n * calcularFatorial(n - 1);
  }
  
  const numero = 5;
  console.log(`O fatorial de ${numero} é: ${calcularFatorial(numero)}`);
  