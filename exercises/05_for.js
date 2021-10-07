// 05 - For
//    a) Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle
//        for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
//    b) Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
//    c) Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle
//        for para ir guardando cada palabra dentro de la variable sentence.Al final mostrar una única alerta con la cadena completa.
//    d) Crear una array vacío y con un bucle for de 10 repeticiones.Llenar el array con el número de la repetición, es decir que al 
//        final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. 
//        Mostrar por la consola del navegador el array final(utilizar console.log).


console.log("************************* Exercise 05 *************************");

function separator(exerciseId) {
  console.log(`------------------- Exercise 05 - ${exerciseId} -------------------`)
}

var arrayVar = ["enero", "febrero", "marzo", "abril", "mayo"]

function exercise05a() {
  separator('a')
  for (let id = 0; id < arrayVar.length; id++) {
    alert(arrayVar[id])
  }
}

function exercise05b() {
  separator('b')
  for (let id = 0; id < arrayVar.length; id++) {
    arrayVar[id] = arrayVar[id].substring(0, 1).toUpperCase() + arrayVar[id].substring(1).toLowerCase()
    alert(arrayVar[id])
  }
}

var sentence = ''

function exercise05c() {
  separator('c')
  for (let id = 0; id < arrayVar.length; id++) {
    sentence += arrayVar[id]
  }
  alert(sentence)
}

var emptyArr = []

function exercise05d() {
  separator('d')
  for (let id = 0; id < 10; id++) {
    emptyArr.push(id)
  }
  console.log(emptyArr)
}

exercise05a()
exercise05b()
exercise05c()
exercise05d()
