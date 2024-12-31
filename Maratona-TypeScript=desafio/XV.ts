// Questão 15: Verificar se um número é primo.
function ehPrimo(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
  
  const numeroPrimo = 17;
  console.log(`O número ${numeroPrimo} é primo? ${ehPrimo(numeroPrimo)}`);
  