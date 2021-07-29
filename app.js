const email = document.querySelector('.form-email')
const contraseña = document.querySelector('.form-password')
const boton = document.querySelector('.btn-form')
const parrafo = document.querySelector('.parrafo-form')
const inputPassword = document.getElementById('password')
const inputEmail = document.getElementById('email')
const form = document.querySelector('.formulario')
const mensajePassword = document.querySelector('.mensaje-password')
const containerMensaje = document.querySelector('.container-mensaje-contraseña')
const cruz = document.querySelector('.cruz-mensaje')
const imgMensaje = document.querySelector('.mensaje-img')
const h2Mensaje = document.querySelector('.mensaje-bienvenido')
const pMensaje = document.querySelector('.mensaje-desarrollo')
const registrate = document.querySelector('.parrafo-form-span')

window.addEventListener('load', () => {
    email.classList.toggle('form-email-active')
    contraseña.classList.toggle('form-password-active')
    boton.classList.toggle('btn-form-active')
    parrafo.classList.toggle('parrafo-form-active')
})

document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', validarFormulario)
})

var estado = false

function validarFormulario(e) {
    e.preventDefault()
    containerMensaje.classList.add('container-mensaje-contraseña-active')
    estado = true

    if (estado == true) {
        imgMensaje.classList.add('mensaje-img-active')
        h2Mensaje.classList.add('mensaje-bienvenido-active')
        pMensaje.classList.add('mensaje-desarrollo-active')
    } else {
        imgMensaje.classList.remove('mensaje-img-active')
        h2Mensaje.classList.remove('mensaje-bienvenido-active')
        pMensaje.classList.remove('mensaje-desarrollo-active')
    }
}

registrate.addEventListener('click', () => {
    containerMensaje.classList.add('container-mensaje-contraseña-active')
    estado = true

    if (estado == true) {
        imgMensaje.classList.add('mensaje-img-active')
        h2Mensaje.classList.add('mensaje-bienvenido-active')
        pMensaje.classList.add('mensaje-desarrollo-active')
    } else {
        imgMensaje.classList.remove('mensaje-img-active')
        h2Mensaje.classList.remove('mensaje-bienvenido-active')
        pMensaje.classList.remove('mensaje-desarrollo-active')
    }
})

cruz.addEventListener('click', () => {
    containerMensaje.classList.remove('container-mensaje-contraseña-active')
    estado = false
})