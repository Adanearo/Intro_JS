// Ejercicios de Objetos y sus métodos básicos:


// Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 /*
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
            console.log(student.name)
            console.log(student['age'])
            student.name='Steve Jobs'
            console.log(student.name)


/* Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra: */

    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
            console.log(Object.getOwnPropertyNames(student))
            console.log(Object.keys(student))
            console.log(Object.values(student))

/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
            console.log(Object.hasOwn(student,'name'))

/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar:
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
            console.log(student)
            delete student.rollno
            console.log(student)

/**
 * Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
La nueva edad debe ser 35.
 */ 
var student = {
    name: "David Rayy",
    age: 34,
    job: "engineer",
    hobbies: ['Sky', 'football', 'walking my dog']
};
            console.log(student.age)
            student.age=35
            console.log(student.age)

/**
 * Escriba un programa para añadir una nueva propiedad al siguiente objeto:
    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
            Object.defineProperty(student, 'pet',{
                value:'horse',
                enumerable:true
            })
            console.log(student)

/**
 * Crea un código para llenar un objecto vacio:
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
*/
const objeto = {}
            console.log(objeto)
            Object.defineProperties(objeto,{
                color:{
                    value:'verde',
                    enumerable:true
                },
                tamaño:{
                    value:'grande',
                    enumerable:true
                },
                peso:{
                    value:120,
                    enumerable:true
                },
                cantidad:{
                    value:25,
                    enumerable:true
                },
            })
            console.log(objeto)

/*una función que reciba un objeto y un string…
El string va a ser el nombre de una propiedad, y
esa función tiene que validar si existe esa propiedad dentro del objeto que le mandes
la función debe retornar true o false*/

var Car = {
    wheels: 4,
    company: 'honda',
    name: 'civic',
    year: 2016
}
            console.log(Object.hasOwn(Car,'company'))
   
/*Create an object that will be filled only by a function inside of it,
    and not from someone outside of it's function.. example:
let myObject = {
    myFunction: function ()... // This function is supposed to fill this object
}
myObject.myNewProp = "Hello world" // This should throw an exception or error because we don't want this object to be filled from outside...
It supposed to be filled using it's own function
Add any type of element on the object.. arrays, objects, int, strings, etc*/