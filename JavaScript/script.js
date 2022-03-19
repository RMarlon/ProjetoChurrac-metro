let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotaCarne = carnePP(duracao) * adultos +(carnePP(duracao) / 2 * criancas);
    let qtdTotaCerveja = cervejaPP(duracao) * adultos;
    let qtdTotaOutrasBebidas = outrasBebidasPP(duracao) * adultos +(outrasBebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${Math.ceil(qtdTotaCarne / 1000)} Kg de carne </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotaCerveja / 355)} Latas de Cervejas </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotaOutrasBebidas / 2000)} Garrafas de 2L de outras bebidas </p>`; 
}

function carnePP(duracao) {
    if (duracao > 6) return 650;
    else
        return 400;
}

function cervejaPP(duracao) {
    if (duracao > 6) return 2000;
    else
        return 1200;
}

function outrasBebidasPP(duracao) {
    if (duracao > 6) return 1200;
    else
        return 1000;
}