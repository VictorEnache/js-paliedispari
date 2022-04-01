/* Chiedere all’utente di inserire una parola. Creare una funzione 
per capire se la parola inserita è palindroma */

function parola_palindroma (parola){

    let parola_al_contrario = '';
    let parola_upperCase = parola.toUpperCase()
    
    for(let i = (parola.length)-1; i >= 0; i--){
        let singolo_carattere = parola_upperCase[i]
        parola_al_contrario += `${singolo_carattere}`
    }
    console.log(parola)
    if(parola_upperCase === parola_al_contrario ){
        return true
    }
    else{
        return false
    }


}


let parola_inserita = prompt('inserisci una parola e vediamo se è un palindroma').toLocaleUpperCase(); 


//stampo a console il risultato della funzione.
console.log(parola_palindroma(parola_inserita))