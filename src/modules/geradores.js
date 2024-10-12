const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraNumero = () => String.fromCharCode(rand(48,57));
const geraLetMaiuscula = () => String.fromCharCode(rand(65,90));
const geraLetMiniscula = () => String.fromCharCode(rand(97,122));
const simbolos = '!@#$%¨&*()-_=+[]{}~^´`";:,<.>\|/?';
const geraSimbolo = () => simbolos[rand(0, simbolos.length)];

export default function gerarSenha(qtd, maiuscula, minuscula, numero, simbolo) {
    const senhaArray = [];
    qtd = Number(qtd);

    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraLetMaiuscula());
        minuscula && senhaArray.push(geraLetMiniscula());
        numero && senhaArray.push(geraNumero());
        simbolo && senhaArray.push(geraSimbolo());
    }

    return senhaArray.join('').slice(0, qtd);
}
