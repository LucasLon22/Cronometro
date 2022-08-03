let h1 = document.getElementsByTagName("h1")[0]
let start = document.getElementById("str")
let stop = document.getElementById("stp")
let reset = document.getElementById("rst")
let hora = 0
let minuto = 0
let segundo = 0
let t

const iniciar = () => {
    segundo++
    if (segundo >= 60) {
        segundo = 0; minuto++
        if (minuto >= 60) { minuto = 0; hora++ }
    }
}

const agregar = () => {
    iniciar()
    h1.textContent = (hora > 9 ? hora : "0" + hora) + ":" + (minuto > 9 ? minuto : "0" + minuto) + ":" + (segundo > 9 ? segundo : "0" + segundo)
    timer()

}

const timer = () => {
    t = setTimeout(agregar, 1000)
}

timer()

str.addEventListener(`click`, timer)

const limpiar = () => {
    clearTimeout(t)

}

stp.addEventListener(`click`, limpiar)

const reiniciar = () => {
    h1.textContent = "00:00:00"
    segundo = 0; minuto = 0; hora = 0;
}

rst.addEventListener(`click`, reiniciar)