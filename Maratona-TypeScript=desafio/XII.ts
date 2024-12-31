// Questão 13: Verificar se uma string é um palíndromo.
function ehPalindromo(str: string): boolean {
    const strLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const strReversa = strLimpa.split('').reverse().join('');
    return strLimpa === strReversa;
  }
  
  const palavra = "A man, a plan, a canal, Panama";
  console.log(`A string é um palíndromo? ${ehPalindromo(palavra)}`);
  