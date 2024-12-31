// Questão 16: Implementar uma função para encontrar o enésimo número da sequência de Fibonacci.
function fibonacci(n: number): number {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }
  
  const n = 10;
  console.log(`O ${n}º número da sequência de Fibonacci é: ${fibonacci(n)}`);
  