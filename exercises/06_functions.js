// 06 - Funciones
//    a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar
//        el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
//    b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//        mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
//    c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
//    d) A la función suma del ejercicio 6 b) agregarle una llamada que valide que los números sean enteros.En caso que haya
//        decimales mostrar un alerta con el error y retorna el número convertido a entero(redondeado).
//    e) Convertir la validación del ejercicio 6 b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.


console.log('************************* Exercise 06 *************************');

function separator(exerciseId) {
  console.log(`------------------- Exercise 06 - ${exerciseId} -------------------`)
}


//    a) Crear una función suma que reciba dos valores numéricos y retorne el resultado.Ejecutar la función y guardar
//        el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
function suma(a, b) {
  return a + b
}

var resultadoSuma = suma(10, 5)
separator('a')
console.log('resultadoSuma = suma(10, 5)')
console.log(`resultadoSuma = ${resultadoSuma}`)


//    b) A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//        mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One of the function attributes is not a number')
    return NaN
  }
  return a + b
}

separator('b')
var resultadoSuma = suma(10, 5)
console.log('resultadoSuma = suma(10, 5)')
console.log(`resultadoSuma = ${resultadoSuma}`)

var resultadoSuma = suma(10, 'asd')
console.log('resultadoSuma = suma(10, "asd")')
console.log(`resultadoSuma = ${resultadoSuma}`)

//    c) Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
function validateInteger(a) {
  return a % 1 === 0 ? true : false
}

separator('c')

var validateIntegerResult = validateInteger(1)
console.log('validateIntegerResult = validateInteger(1)')
console.log(`resultadoSuma = ${validateIntegerResult}`)

var validateIntegerResult = validateInteger(1.1)
console.log('validateIntegerResult = validateInteger(1.1)')
console.log(`resultadoSuma = ${validateIntegerResult}`)

//    d) A la función suma del ejercicio 6 b) agregarle una llamada que valide que los números sean enteros.En caso que haya
//        decimales mostrar un alerta con el error y retorna el número convertido a entero(redondeado).
function suma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('One of the function attributes is not a number')
    return NaN
  }

  if (!validateInteger(a) || !validateInteger(b)) {
    alert('One of the function attributes is not an integer')
    return Math.round(a + b)
  }

  return a + b
}

separator('d')

var resultadoSuma = suma(10, 5)
console.log('resultadoSuma = suma(10, 5)')
console.log(`resultadoSuma = ${resultadoSuma}`)

var resultadoSuma = suma(10, 5.5)
console.log('resultadoSuma = suma(10, 5.5)')
console.log(`resultadoSuma = ${resultadoSuma}`)

//    e) Convertir la validación del ejercicio 6 b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.
function validateIsNumber(a) {
  return typeof a === 'number' ? true : false
}

function suma(a, b) {
  if (!validateIsNumber(a) || !validateIsNumber(b)) {
    alert('One of the function attributes is not a number')
    return NaN
  }

  if (!validateInteger(a) || !validateInteger(b)) {
    alert('One of the function attributes is not an integer')
    return Math.round(a + b)
  }

  return a + b
}

separator('e')

var resultadoSuma = suma(10, 5)
console.log('resultadoSuma = suma(10, 5)')
console.log(`resultadoSuma = ${resultadoSuma}`)

var resultadoSuma = suma(10, 5.5)
console.log('resultadoSuma = suma(10, 5.5)')
console.log(`resultadoSuma = ${resultadoSuma}`)

var resultadoSuma = suma(10, 'asd')
console.log('resultadoSuma = suma(10, "asd")')
console.log(`resultadoSuma = ${resultadoSuma}`)
