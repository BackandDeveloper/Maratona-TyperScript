// Questão 9: Calcular a correlação entre duas listas de números.
function calcularCorrelacao(lista1: number[], lista2: number[]): number {
    const media1 = calcularMedia(lista1);
    const media2 = calcularMedia(lista2);
    const numerador = lista1.reduce((acc, val, i) => acc + (val - media1) * (lista2[i] - media2), 0);
    const denominador = Math.sqrt(
      lista1.reduce((acc, val) => acc + (val - media1) ** 2, 0) *
      lista2.reduce((acc, val) => acc + (val - media2) ** 2, 0)
    );
    return numerador / denominador;
  }
  
  const lista1 = [10, 20, 30, 40, 50];
  const lista2 = [15, 25, 35, 45, 55];
  console.log(`A correlação é: ${calcularCorrelacao(lista1, lista2)}`);
  