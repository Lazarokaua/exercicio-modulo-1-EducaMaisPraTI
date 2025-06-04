// Implementar ehDataValida(dia, mes, ano) que retorna true se a data existir (considerar meses 28–31 dias e anos bissextos) e false caso contrário. 
const input = require("prompt-sync")()
const dia = Number(input("Dia: "))
const mes = Number(input("Mês: "))
const ano = Number(input("Ano: "))

console.log(ehDataValida(dia, mes, ano) ? "Data válida" : "Data inválida")


function ehDataValida(dia, mes, ano) {

    const diasPorMes = {
        1: 31,
        2: ehBissexto(ano) ? 29 : 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31
    }


    if (mes < 1 || mes > 12) return false
    if (dia < 1) return false
    if (dia > diasPorMes[mes]) return false

    return true
}

function ehBissexto(ano) {
    if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
        return true
    }


    return false
}