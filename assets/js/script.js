

// Primera pregunta
const imagen = document.getElementById('primeraImagen')
let flag = false
imagen.addEventListener('click', () => {
    if (!flag) {
        imagen.style.border = "1px solid red";
        flag = true;
    } else {
        imagen.style.border = "none"; 
        flag = false; 
    }
});

// Segunda pregunta
const btn = document.getElementById('botonSegundaPregunta')
const cantidadStickers = document.getElementById('cantidadSticker') 
btn.addEventListener('click', () => {
    let contadorPrimerSticker = document.getElementById('cantidadGoku')
    let contadorSegundoSticker = document.getElementById('cantidadPicolo')
    let contadorTercerSticker = document.getElementById('cantidadVegeta')
    const sumaStickers = Number(contadorPrimerSticker.value) + Number(contadorSegundoSticker.value) + Number(contadorTercerSticker.value)
    
    if ( sumaStickers <= 10 ){
        cantidadStickers.innerHTML= 'Llevas '+ sumaStickers.toString() +' Stickers';
    }else{
        cantidadStickers.innerHTML= 'Llevas demasiados stickers';
    }
})
// Tercera pregunta
const contraseñaDefault=911
const contraseñaDefault2=714
const btnTercera= document.getElementById('botonTerceraPregunta')
const parrafoContraseña=document.getElementById('parrafoContraseña')
btnTercera.addEventListener('click', ()=>{
    let primerNumero = document.getElementById('primerNumero').value
    let segundoNumero = document.getElementById('segundoNumero').value
    let tercerNumero = document.getElementById('tercerNumero').value
    if (primerNumero+segundoNumero+tercerNumero === contraseñaDefault.toString()){
        parrafoContraseña.innerHTML= "password 1 correcto"
    }else if(primerNumero+segundoNumero+tercerNumero === contraseñaDefault2.toString()){
        parrafoContraseña.innerHTML= "password 2 correcto"
    }else{
        parrafoContraseña.innerHTML= "password incorrecto"
    }
})