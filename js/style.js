function palindroma(parola)
{
    let parola_split = parola.split('')
    let parola_reverse = parola_split.reverse();
    let parola_join = parola_reverse.join('');

    console.log(parola_split);
    console.log(parola_reverse);
    console.log(parola_join);

    if (parola === parola_join) {
        return true
    }
    else {
        return false
    }
};

let parola = prompt('Inserisci una parola');

let risultato = palindroma(parola);

if (risultato) {
    alert(`${parola} è una parola palindroma`)
}
else {
    alert(`${parola} non è una parola palindroma`)
}