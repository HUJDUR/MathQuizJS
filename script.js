
let tacanOdgovor;
let unos;
let brojTacnih = 0;

function brisanjePolja() {
    document.getElementById('unos').value = " ";
    document.getElementById('pitanje').innerHTML = ' ';
}

function randomBroj() {
    return Math.floor(Math.random() * (+100 - +1)) + +1;
}

function randomOperacija() {
    return Math.floor(Math.random() * (+5 - +1)) + +1;
}

function pitanje() {
    let prviBroj = randomBroj();
    let drugiBroj = randomBroj();
    let operacija = randomOperacija();

    switch (operacija) {
        case 1 : //sabiranje
            tacanOdgovor = prviBroj + drugiBroj;
            document.getElementById('pitanje').append(`${prviBroj} + ${drugiBroj} = ?`);
            break;
        case 2 : //oduzimanje
            tacanOdgovor = prviBroj - drugiBroj;
            document.getElementById('pitanje').append(`${prviBroj} - ${drugiBroj} = ?`);
            break;
        case 3 : //mnozenje
            tacanOdgovor = prviBroj * drugiBroj;
            document.getElementById('pitanje').append(`${prviBroj} * ${drugiBroj} = ?`);
            break;
        case 4 : //djeljenje
            tacanOdgovor = Math.round(prviBroj / drugiBroj);
            document.getElementById('pitanje').append(`${prviBroj} / ${drugiBroj} = ?`);
            break;
    }
}

function provjera() {
    unos = document.getElementById('unos').value;

    if (unos == tacanOdgovor) {
        document.getElementById('odgovor').innerHTML = "Pogodili ste!";
        brojTacnih++;
        brisanjePolja();
        pitanje();
    } else {
        document.getElementById('odgovor').innerHTML = `Nazalost niste pogodili...Ukupno ste uradili ${brojTacnih} zadataka!`;
        brisanjePolja();
    }
}

pitanje();