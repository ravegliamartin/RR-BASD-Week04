// 02 - Strings
//    a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula(utilizar toUpperCase).
//    b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 
//       caracteres guardando el resultado en una nueva variable(utilizar substring).
//    c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3
//       caracteres guardando el resultado en una nueva variable(utilizar substring).
//    d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra
//       en mayúscula y las demás en minúscula.Guardar el resultado en una nueva variable(utilizar substring, toUpperCase, toLowerCase y el operador + ).
//    e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.Encontrar la posición
//       del primer espacio en blanco y guardarla en una variable(utilizar indexOf).
//    f) Crear una variable de tipo string con al menos 2 palabras largas(10 caracteres y algún espacio entre medio).
//       Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
//       palabras en mayúscula y las demás letras en minúscula(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador + ). 

console.log('************************* Exercise 02 *************************')

function separator(exerciseId) {
  console.log(`------------------- Exercise 02 - ${exerciseId} -------------------`)
}

function exercise02a() {
  var stringVar = 'MoreThanTenCharString'
  separator('a')
  console.log(`stringVar = ${stringVar}`)
  console.log(`stringVar.toUpperCase() = ${stringVar.toUpperCase()}`)
}

function exercise02b() {
  var stringVar = 'MoreThanTenCharString'
  var substringVar = stringVar.substring(0, 5)
  separator('b')
  console.log(`stringVar = ${stringVar}`)
  console.log('substringVar = stringVar.substring(0,5)')
  console.log(`substringVar = ${substringVar}`)
}

function exercise02c() {
  var stringVar = 'MoreThanTenCharString'
  var substringVar = stringVar.substring(stringVar.length - 3)
  separator('c')
  console.log(`stringVar = ${stringVar}`)
  console.log('substringVar = stringVar.substring(stringVar.length - 3)')
  console.log(`substringVar = ${substringVar}`)
}

function exercise02d() {
  var stringVar = 'MoreThanTenCharString'
  var transformedString = stringVar.substring(0, 1).toUpperCase() + stringVar.substring(1).toLowerCase()
  separator('d')
  console.log(`stringVar = ${stringVar}`)
  console.log('transformedString = stringVar.substring(0, 1).toUpperCase() + stringVar.substring(1).toLowerCase()')
  console.log(`transformedString = ${transformedString}`)
}

function exercise02e() {
  var stringVar = 'More Than Ten Char String'
  var firstBlank = stringVar.indexOf(' ')
  separator('e')
  console.log(`stringVar = ${stringVar}`)
  console.log('firstBlank = stringVar.indexOf(" ")')
  console.log(`firstBlank = ${firstBlank}`)
}

function exercise02f() {
  var stringVar = 'cHaR sTRinG'
  var blankSpaceOffset = stringVar.indexOf(' ') + 1
  var capitalizedString = stringVar.substring(0, 1).toUpperCase() + stringVar.substring(1, blankSpaceOffset).toLowerCase() +
    stringVar.substring(blankSpaceOffset, blankSpaceOffset + 1).toUpperCase() + stringVar.substring(blankSpaceOffset + 1).toLowerCase()
  separator('f')
  console.log(`stringVar = ${stringVar}`)
  console.log(`capitalizedString = ${capitalizedString}`)
}

exercise02a()
exercise02b()
exercise02c()
exercise02d()
exercise02e()
exercise02f()
