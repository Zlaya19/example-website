const ime = document.getElementById('ime');
const prezime = document.getElementById('prezime');
const adresa = document.getElementById('adresa');
const eMail = document.getElementById('eMail');
const njemacki = document.getElementById('njemacki');
const BHS = document.getElementById('BHS');
const telefon = document.getElementById('telefon');
const zanimanje = document.getElementById('zanimanje');

const btn = document.getElementById('btn');

let counter = '';


class Korisnik {
    constructor(id, ime, prezime, adresa, telefon, eMail, zanimanje, njemacki, BHS, ) {
        this.id = id;
        this.ime = ime;
        this.prezime = prezime;
        this.adresa = adresa;
        this.telefon = telefon;
        this.eMail = eMail;
        this.zanimanje = zanimanje;
        this.njemacki = njemacki;
        this.BHS = BHS;
    }
}


btn.addEventListener('click', getText);

function getText() {
    
    counter++;
    let korisnik1 = new Korisnik(counter, ime.value, prezime.value, adresa.value,
                        telefon.value, eMail.value, zanimanje.value, njemacki.value, BHS.value);

    console.log(korisnik1);
}

