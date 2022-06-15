//Problema 1 = Saber que onda con la Disco
let nombre='Isaac'
let edad='18'

if (edad>=18 && nombre==('Mario' ||'Carlos')){
    console.log('Entre señor VIP')
} else if (edad>=18){
    console.log('Ingresas a la discoteca')
} else if (edad<=18){
    console.log('No puedes ingresar a la dico')
} else{
    console.log('No sé ni siquiera como te llamas')
}

//Piedra, papel, tijera, ¿lagarto, Spock?
//Problema 2 versión visual studio
let personaA='tijera'
let personaB='piedra'

if (personaA=='piedra' && personaB=='papel'){
    console.log('Gana la persona A')
} else if (personaA=='piedra' && personaB=='tijera'){
    console.log('Gana la persona B')
} else if (personaA=='papel' && personaB=='piedra'){
    console.log('Gana la persona A')
} else if (personaA=='papel' && personaB=='tijera'){
    console.log('Gana la persona B')
} else if (personaA=='tijera' && personaB=='piedra'){
    console.log('Gana la persona B')
} else if (personaA=='tijera' && personaB=='papel'){
    console.log('Gana la persona A')
} else if (personaA===personaB){
    console.log('Esto es un empate')
} else{
    console.log('Muy listo Sheldon, lleva tu lagarto a otra parte')
}

// Problema 2 versión explorador
let personaA=prompt('Tira la persona A')
let personaB=prompt('Tira la persona B')

if (personaA=='piedra'&&personaB=='papel'){
    console.log('Gana la persona A')
} else if (personaA=='piedra'&&personaB=='tijera'){
    alert('Gana la persona B')
} else if (personaA=='papel'&&personaB=='piedra'){
    alert('Gana la persona A')
} else if (personaA=='papel'&&personaB=='tijera'){
    alert('Gana la persona B')
} else if (personaA=='tijera'&&personaB=='piedra'){
    alert('Gana la persona B')
} else if (personaA=='tijera'&&personaB=='papel'){
    alert('Gana la persona A')
} else if (personaA===personaB){
    alert('Esto es un empate')
} else{
    alert('Muy listo Sheldon, lleva tu lagarto a otra parte')
}

// Problema 3
let numero=prompt('Dame un número')
let divi= numero/2

if(divi-Math.floor(divi) == 0){
    console.log("Si se puede dividir")
} else{
    console.log("No se puede dividir")
}

//Problema 4
let numero=prompt('Dame un número')
let divi= numero/2

if(divi-Math.floor(divi) == 0){
    alert('El número que me diste es par')
} else{
    alert('El número que me diste es impar')
}

//Problema 5
let numero=prompt('Dame un número')

if(numero==1000){
    alert('Ganaste un premio')
} else{
    alert('Sigue participando')
}

//Problema 6
let numero1=prompt('Dame un número')
let numero2=prompt('Dame otro número')

if(numero1>numero2){
    alert('El primer número es mayor que el segundo')
} else{
    alert('El segundo número es mayor que el primero')
}

//Problema 7
let A=prompt('Dame un número')
let B=prompt('Dame otro número')
let C=prompt('Dame otro número más')

if((A==B)||(A==C)||(B==C)){
    alert('Dos de los números son iguales')
} else if((B>A) && (B>C)){
    alert('El segundo número es mayor')
} else if((C>A) && (C>B)){
    alert('El tercer número es mayor')
} else if((A>B) && (A>C)){
    alert('El primer número es mayor')
} else{
    alert('No tengo idea de lo que me diste')
}