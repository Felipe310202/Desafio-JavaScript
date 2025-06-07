// Função genérica para pegar os valores dos inputs e o elemento de resultado
function obterValores() {
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);
    const res = document.getElementById('resultado');

    // Validação para garantir que os campos não estão vazios
    if (isNaN(n1) || isNaN(n2)) {
        res.textContent = "Por favor, insira números válidos em ambos os campos.";
        return null;
    }

    return { n1, n2, res };
}

// Função para Somar
function somar() {
    const valores = obterValores();
    if (valores) {
        const soma = valores.n1 + valores.n2;
        valores.res.textContent = `O resultado da soma é: ${soma}`;
    }
}

// Função para Subtrair
function subtrair() {
    const valores = obterValores();
    if (valores) {
        const subtracao = valores.n1 - valores.n2;
        valores.res.textContent = `O resultado da subtração é: ${subtracao}`;
    }
}

// Função para Multiplicar
function multiplicar() {
    const valores = obterValores();
    if (valores) {
        const multiplicacao = valores.n1 * valores.n2;
        valores.res.textContent = `O resultado da multiplicação é: ${multiplicacao}`;
    }
}

// Função para Dividir
function dividir() {
    const valores = obterValores();
    if (valores) {
        if (valores.n2 === 0) {
            valores.res.textContent = "Erro: Não é possível dividir por zero.";
            return;
        }
        const divisao = valores.n1 / valores.n2;
        valores.res.textContent = `O resultado da divisão é: ${divisao.toFixed(2)}`; // Limita a 2 casas decimais
    }
}

// Função para Potenciação
function potencia() {
    const valores = obterValores();
    if (valores) {
        const potenciacao = valores.n1 ** valores.n2; // n1 elevado a n2
        valores.res.textContent = `O resultado da potenciação é: ${potenciacao}`;
    }
}