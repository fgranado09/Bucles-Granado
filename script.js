let blanc = " "
let nombreUsuario = prompt("Ingrese su nombre")

let numeroIngresado = parseInt(prompt(nombreUsuario + blanc + "Ingresá la cantidad de veces que querés ser saludado"))

for (let i = 1; i <= numeroIngresado; i++) {
    console.log("Hola" + blanc + i)
}
if(numeroIngresado <= 5){
    alert("Hola" + blanc + numeroIngresado + blanc + "veces," + blanc + nombreUsuario + "!")
}
else if(numeroIngresado > 5){
    alert("Hola" + blanc + numeroIngresado + blanc + "veces," + blanc + nombreUsuario + "! ¿Tantas veces querés ser saludadx? Miedo")
}
