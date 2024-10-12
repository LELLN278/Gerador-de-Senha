import gerarSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const checkMaiuscula = document.querySelector('.check-maiusculas');
const checkMinuscula = document.querySelector('.check-minusculas');
const checkNumero = document.querySelector('.check-numeros');
const checkSimbolo = document.querySelector('.check-simbolos');
const botaoSenha = document.querySelector('.gerar-senha');


export default function  () {
    botaoSenha.addEventListener('click', () => {
        senhaGerada.innerHTML= gerar();
    });
};

function gerar() {
    const senha = gerarSenha(
        qtdCaracteres.value,
        checkMaiuscula.checked,
        checkMinuscula.checked,
        checkNumero.checked,
        checkSimbolo.checked
    );

    return senha || 'Nenhuma opção selecionada';
}
