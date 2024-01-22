// Elementos para manipular
let digitalElement = document.querySelector('.digital') // Display de horas
let sElement = document.querySelector('.p_s') // Ponteiro dos segundos
let mElement = document.querySelector('.p_m') // Ponteiro dos minutos
let hElement = document.querySelector('.p_h') // Ponteiro das horas

// Função para gerar e exibir a hora atual no display digital e analógico
function updateClock() {
    let now = new Date() // Data e hora atual
    let hour = now.getHours() // Hora atual
    let minute = now.getMinutes() // Minuto atual
    let second = now.getSeconds() // Segundo atual

    digitalElement.innerHTML = (`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`) // Exibe a hora no display por meio do retorno da função de formatação

    // Conversão dos graus do ponteiro (CSS) em número equivalente a hora, minuto e segundo
    let sDeg = ((360 / 60) * second ) - 90
    let mDeg = ((360 / 60) * minute ) - 90
    let hDeg = ((360 / 12) * hour ) - 90

    // Alteração (CSS) da posição do ponteiro de hora, minuto e segundo
    sElement.style.transform = `rotate(${sDeg}deg)`
    mElement.style.transform = `rotate(${mDeg}deg)`
    hElement.style.transform = `rotate(${hDeg}deg)`
}

// Função para formatar o número zero no display do relógio, recebe um número (Hora completa) como parâmetro
function fixZero(time) {
    return time < 10 ? `0${time}` : time // Retorna o número concatenada com um 0 se o valor for menor do que 1, ou o próprio número quando maior
}

setInterval(updateClock, 1000) //  Chama uma vez a função updateClock a cada segundo
updateClock() // Chama uma vez a função updateClock