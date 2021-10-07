// 03 - Arrays
//    a) Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
//        "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11(utilizar console.log).
//    b) Ordenar el array de meses alfabéticamente y mostrarlo por consola(utilizar sort).
//    c) Agregar un elemento al principio y al final del array(utilizar unshift y push).
//    d) Quitar un elemento del principio y del final del array(utilizar shift y pop).
//    e) Invertir el orden del array(utilizar reverse).
//    f) Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
//    g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre(utilizar slice).


console.log('************************* Exercise 03 *************************')

function separator(exerciseId) {
  console.log(`------------------- Exercise 03 - ${exerciseId} -------------------`)
}

var arrayVar = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

function exercise03a() {
  separator('a')
  console.log(`arrayVar[4] = ${arrayVar[4]}`)
  console.log(`arrayVar[10] = ${arrayVar[10]}`)
}

function exercise03b() {
  separator('b')
  arrayVar.sort()
  console.log('Sorted arrayVar:')
  console.log(arrayVar)
}

function exercise03c() {
  separator('c')
  arrayVar.unshift('FirstEl')
  arrayVar.push('LastEl')
  console.log('Using unshift and push:')
  console.log(arrayVar)
}

function exercise03d() {
  separator('d')
  arrayVar.shift()
  arrayVar.pop()
  console.log('Using shift and pop:')
  console.log(arrayVar)
}

function exercise03e() {
  separator('e')
  console.log('Using reverse:')
  arrayVar.reverse()
  console.log(arrayVar)
}

function exercise03f() {
  var joinedArr = arrayVar.join('-')
  separator('f')
  console.log('Using .join("-"):')
  console.log(joinedArr)
}

function exercise03g() {
  var slicedArr = arrayVar.slice(arrayVar.indexOf('Noviembre'), arrayVar.indexOf('Mayo') + 1)
  separator('g')
  console.log('Using slice and indexOf:')
  console.log(slicedArr)
}

exercise03a()
exercise03b()
exercise03c()
exercise03d()
exercise03e()
exercise03f()
exercise03g()
