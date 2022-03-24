//window.comunicacion.registroValido('OK')

window.comunicacion.inicioCorrecto(function (event, args) {
  console.log(args)
})

var form = document.getElementById('formulario')
form.addEventListener('submit', event => {
  event.preventDefault()
  //más líneas de código

  let alto = document.getElementById('alto').value
  let ancho = document.getElementById('ancho').value
  let filtro = document.getElementById('filtro').value

  let imagen_respuesta = document.getElementById('respuesta')

  let path_busqueda = ''

  if (alto == '' && ancho == '' && filtro == '') {
    path_busqueda = `https://cataas.com/cat?json=true`
  } else if (alto != '' && ancho == '' && filtro == '') {
    path_busqueda = `https://cataas.com/cat?height=${alto}&json=true`
  } else if (alto == '' && ancho != '' && filtro == '') {
    path_busqueda = `https://cataas.com/cat?width=${ancho}&json=true`
  } else if (alto == '' && ancho == '' && filtro != '') {
    path_busqueda = `https://cataas.com/cat?filter=${filtro}&json=true`
  } else if (alto != '' && ancho != '' && filtro == '') {
    path_busqueda = `https://cataas.com/cat?height=${alto}&width=${ancho}&json=true`
  } else if (alto != '' && ancho == '' && filtro != '') {
    path_busqueda = `https://cataas.com/cat?height=${alto}&filter=${filtro}&json=true`
  } else if (alto == '' && ancho != '' && filtro != '') {
    path_busqueda = `https://cataas.com/cat?width=${ancho}&filter=${filtro}&json=true`
  } else {
    path_busqueda = `https://cataas.com/cat?height=${alto}&width=${ancho}&filter=${filtro}&json=true`
  }

  fetch(path_busqueda)
    .then(response => response.json())
    .then(gato => {
      imagen_respuesta.setAttribute('src', `https://cataas.com/${gato.url}`)
      setTimeout(function () {
        document.getElementById('respuesta').scrollIntoView()
      }, 600)
    })
})
