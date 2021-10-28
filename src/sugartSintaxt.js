console.log('sugart syntax')

//const condition = true
//let result = ''
//if (condition) {
//    result = 'correct';
//} else {
//    result = 'incorrect';
//}
//console.log('Este resultado' + result);

//Sugarts Syntax
//const condition1 = false
//console.log(`Este es el resultado ${condition1 ? 'correct': 'incorrect'}`);

//Spread operator
//let arr = ['b', 'c', 'd']
//let a = 'a';
//console.log([a, ...arr])

//Propiedades dinámicas
//let id = 'Fede'
//const Fede = {
    //foo: "bar",
    //apellido: 'Osandon',
    //[ "nom_" + id]: 42,
//}
//console.log(Fede);

//Deep matching
//let id = 'Juan'
//const Fede = {
  //  foo: "bar",
  //  apellido: 'Osandon',
  //  [ "nom_" + id]: 42,
//}
//const { foo, apellido } = Fede
//console.log(apellido);

//const { foo, apellido: ape } = Fede
//console.log(ape);

//Asignación en desestructuración
let id = 'Juan'
const Fede = {
    foo: "bar",
    apellido: 'Osandon',
    [ "nom_" + id]: 42,
    edad: 25,
}

const { foo, apellido: ape, edad = 20} = Fede
console.log(edad);