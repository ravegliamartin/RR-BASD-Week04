// 01 - Variables y Operadores
//    a) Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3 er variable.
//    b) Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3 er variable.
//    c) Crear dos variables de tipo String y sumar el largo de cada variable(cantidad de letras del string) guardando el resultado de la suma en una 3 er variable(utilizar length).

console.log("********************* Exercise 01 *********************");

function separator(exerciseId) {
  console.log(`------------------- Exercise 01 - ${exerciseId} -------------------`)
}

function exercise01a() {
  var firstNumber = 15,
    secondNumber = 30
  var sumResult = firstNumber + secondNumber
  separator('a')
  console.log(`firstNumber = ${firstNumber}`)
  console.log(`secondNumber = ${secondNumber}`)
  console.log(`firstNumber + secondNumber = ${sumResult}`)
}

function exercise01b() {
  var name = 'Martin',
    surname = 'Raveglia'
  var fullName = name + ' ' + surname
  separator('b')
  console.log(`name = ${name}`)
  console.log(`surname = ${surname}`)
  console.log(`name + surname = ${fullName}`)
}

function exercise01c() {
  var name = 'Martin',
    surname = 'Raveglia'
  var totalLength = name.length + surname.length
  separator('c')
  console.log(`name = ${name}`)
  console.log(`surname = ${surname}`)
  console.log(`name.length + surname.length = ${totalLength}`)
}

exercise01a()
exercise01b()
exercise01c()
