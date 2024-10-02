"use strict";

function demo0() {
    const bilnummre = "SP12345TS97143EB76554";
    //                 0123456789...
    //           -              ...987654321          
    const nummer = bilnummre.slice(0, 7);
    const rest = bilnummre.slice(7);
    const siste = bilnummre.slice(-7);

    console.log(`Første bilnummer er ${nummer}`);
    console.log(`Resten av teksten: ${rest}`);
    console.log(`Siste bilnummer er ${siste}`);
}

function demo1() {
    const bilnummre = "SP12345TS97143EB76554";
    const nummer = "TS97143";

    if (bilnummre.includes(nummer)) {
        console.log(`Bilnummre inneholder ${nummer}`);
    }
}

function demo2() {
    const bilnummre = "SP12345TS97143EB76554";
    const nummer = "TS97143";
    const index = bilnummre.indexOf(nummer);

    if (index === -1) {
        console.log(`Bilnummer ${nummer} finnes ikke i teksten`);
    } else {
        console.log(`Bilnummer ${nummer} finnes i posisjon ${index} i teksten`);
    }
}

function demo3() {
    const elbilRegExp = /\bE[A-Z]\d{5}\b/g;
    const bilnummre = "SP12345 TS97143 EB76554 EL12121 AC453 EV65656";
    const result = bilnummre.match(elbilRegExp);

    result.forEach(nummer => { console.log(`Elbil ${nummer}`) });
}

function demo4() {
    const elbilRegExp = /\b(E[A-Z])(\d{5})\b/g;
    const bilnummre = "SP12345 TS97143 EB76554 EL12121 AC453 EV65656";

    /*
     * matchAll returnerer en iterator, konverterer til Array for å kunne bruke forEach
     */
    const result = Array.from(bilnummre.matchAll(elbilRegExp));
    result.forEach(
        ([bilnummer, tegn, nummer]) => console.log(`Bil ${bilnummer} med bokstaver ${tegn} har nummer ${nummer}`)
    );
}

// https://www.regular-expressions.info/unicode.html
function demo5() {
    const emojiRegExp = /\p{Emoji}+/gu;
    const tekst = "Hei dere 😂☝. Idag er det ☔ vær. Vi ses imorgen ☝";
    const result = tekst.match(emojiRegExp);

    result.forEach(data => { console.log(`Fant: ${data}`) });
}

function demo6() {
    const person = "Ola Nordmann";

    // \p{L} og \p{Letter} gir det samme
    const enavnReg = /\s\p{Letter}+$/u;

    const skjult = person.replace(enavnReg, " NN");
    console.log(skjult);
}

function demo7() {
    const tekst = "Ola Per AnnE aNne Gro lene Åsø Marie Tor";

    // Ordgrense ved \b virker kun med bokstavene a-ZA-Z
    const navnReg = /(?<=\P{L}|^)\p{Lu}\p{Ll}+(?=\P{L}|$)/gu;

    const result = tekst.match(navnReg);

    result.forEach(navn => { console.log(`Fant: ${navn}`) });
}


function demo8() {
    const person = "Ola Nordmann";

    const skjult = person.replace("Nordmann", "NN");
    console.log(skjult);
}

function demo9() {
    const person = "Ola Nordmann";
    const delnavnRegExp = /(\p{Letter}+)\s+(\p{Letter}+)/ug;

    const navn = person.replace(delnavnRegExp, "$2; $1");
    console.log(navn);
}

function demo10() {
    const person = "Olaa Nordmaann";

    const navn = person.replaceAll("aa", "å");
    console.log(navn);
}

function demo11() {
    let person = "aTle-johaN";
    const navnReg = /(^|-)(\p{Ll})/gu;

    person = person.toLocaleLowerCase(navigator.language);

    const navn = person.replace(navnReg,
        (_m, s, tegn) => `${s}${tegn.toLocaleUpperCase(navigator.language)}`
    );

    console.log(navn);
}

const demomanager = {
    init(demoHandler) {
        this.demoHandler = demoHandler;
        this.viewcode = this.viewcode.bind(this);

        /**
        * Legger til lytter for hendelse 'click' på alle HTML BUTTON elementer.
        * Ved 'click' på en HTML BUTTON kjøres flere metoder:
        * 1. console.clear som tømmer konsollet
        * 3. En metode gitt av elementet sitt attributt 'data-demo'.
        * 2. Objektet sin metode 'viewcode' som viser kilden for metoden i punktet over.
        * Verdien til 'data-demo' er 'demo0' for første BUTTON, 'demo1' for neste osv.
        */

        const buttons = this.demoHandler.getElementsByTagName("button");
        Array.from(buttons).forEach(
            (button) => {
                const methodName = button.getAttribute("data-demo");
                if (window[methodName] === undefined) return;
                const method = window[methodName];
                if (typeof method !== "function") return;
                button.addEventListener('click', console.clear, true);
                button.addEventListener('click', this.viewcode, true);
                button.addEventListener("click", method);
            }
        )
    },

    viewcode(event) {
        const viewElm = this.demoHandler.querySelector("pre[data-viewelm]");
        const methodName = event.currentTarget.getAttribute("data-demo");
        if (window[methodName] === undefined) return;

        const functext = window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);
