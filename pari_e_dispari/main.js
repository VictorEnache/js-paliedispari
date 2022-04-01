let pari_dispari = prompt('inserisci "pari" oppure "dispari", qualsiasi altra parola sarà considerata dispari');

/* per limitare gli errori che  possono generarsi, ogni volta che l'utente inserisce una parola 
diversa da 'pari', in automatico la sua scelta diventa dispari*/
if(pari_dispari !== 'pari'){
    pari_dispari = 'dispari'
}

let numero_utente = parseInt(prompt('scegli un numero compreso tra 1 e 5'))

//finche l'utente non sceglie un numero compreso tra '1' e '5' il gioco non prosegue
while (numero_utente <= 0 || numero_utente > 5 || isNaN(numero_utente)){
    numero_utente =  parseInt(prompt('Il numero inserito è errato si prega di inserire un numero compreso tra 1 e 5'))
}

let somma;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

let numero_random = getRandomInteger(1, 5)

somma = numero_utente + numero_random

function pari (number) {
    if(number % 2 === 0){
        return true
    }
    else{
        return false
    }
}

console.log(`l'utente ha scelto: ${pari_dispari}`)
console.log(`l'utente ha scelto il numero: ${numero_utente}`)
console.log(`Il computer ha generato il numero: ${numero_random}`)

if (pari_dispari === 'pari' && pari(somma)){
    console.log("Vince l'utente")
}
else if (pari_dispari === 'dispari' && !pari(somma)){
    console.log("Vince l'utente")
}
else{
    console.log("Vince il PC")
}