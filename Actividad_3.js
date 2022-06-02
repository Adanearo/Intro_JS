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
}

//Problema 2 versión explorador
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
}

