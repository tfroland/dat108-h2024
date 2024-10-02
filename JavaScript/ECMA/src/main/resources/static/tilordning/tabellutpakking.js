"use strict";

function demo0() {
    //Tilordne variabler fra verdier i en tabell.
    const [a, b] = [2, 5];

    console.log(a * b);
}

function demo1() {
    // Tilordne variabler fra verdier i en tabell.
    const array = [2, 5];
    const [a, b] = array;

    console.log(a * b);
}

function demo2() {
    // Tilordne to variabler fra verdier i en tabell, og kaste resten.
    const [a, b] = [2, 5, 12, 14, 16];
    console.log(a * b);
}

function demo3() {
    //Tilordne flere variabler fra tabell med færre verdier
    const [a, b, c, d] = [2];
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
    console.log(`d: ${d}`);
}

function demo4() {
    /**
     * Tilordne variabler fra verdier i en tabell.
     *
     * Endel operatorer i JavaScript har flere betydninger, bla. "[]" som både er JSON
     * syntaks for tabell og indekseringsoperator.
     *
     * I noen situasjoner må vi bruke ";" for å klargjøre betydningen.
     * Uten ";" i eksempelet under vil nettleser lese:
     * let b = "grønn"[a,b]
     *
     * [a,b] blir oppfattet som indekser på "grønn", og ikke JSON for en tabell.
     */

    let a = "rød";
    let b = "grønn"; // Må ha semikolon her
    [a, b] = [b, a];

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
}

function demo5() {
    /**
     * Tilordne variabler fra verdier i en tabell.
     * Verdier som ikke trengs kan utelates, og ",," angir en variabel-posisjon
     * der det ikke tilordnes verdi til variabel.
     */

    const [a,,c] = [1, 2, 3, 4, 5];

    console.log(`a: ${a}`);
    console.log(`c: ${c}`);
}

function summer([a, b]) {
    // Tilordning av funksjonsparametre fra tabell gitt som parameter.
    return a + b;
}

function demo6() {
    const array = [12, 2];
    const result = summer(array);
    console.log(result);
}

function produkt([a, b = 1, c = 2]) {
    /**
     * Tilordning av funksjonsparametre fra tabell gitt som parameter,
     * med default verdier for noen parametre.
     */

    return a * b * c;
}

function demo7() {
    const array = [12, 3];
    const result = produkt(array);
    console.log(result);
}

function getFirstLastDigits(number) {
    /**
     * Metoden returnerer array med to heltall, [first,last], som er første og
     * siste siffer i input forstått som tall i ti-tall systemet.
     *
     * Siffrene finnes med tallmanipulasjon.
     */

    number = Math.abs(number);
    const last = number % 10;

    let first = 0;
    while (number !== 0) {
        first = number;
        number = Math.trunc(number / 10);
    }
    return [first, last];
}

function demo8() {
    // Tilordne variabler fra verdier fra tabell gitt som returverdi fra funksjon.
    const [first, last] = getFirstLastDigits(13468345);
    console.log(`First digit: ${first}`);
    console.log(`Last digit: ${last}`);
}

function getFirstLastDigitsAlt(number) {
    /**
     * Metoden returnerer tabell med to heltall, [first,last], som er første og
     * siste tegn i input.

     * Tegnene finnes ved å bruke String metoder.
     */

    number = Math.abs(number);
    const numberString = number.toString();
    const first = numberString.slice(0, 1);
    const last = numberString.slice(-1);

    return [parseInt(first), parseInt(last)];
}

function demo9() {
    // Tilordne variabler fra verdier fra tabell gitt som returverdi fra funksjon.
    const [first, last] = getFirstLastDigitsAlt(13468345);
    console.log(`First digit: ${first}`);
    console.log(`Last digit: ${last}`);
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
        let functext;
        const methodName = event.currentTarget.getAttribute("data-demo");
        if (window[methodName] === undefined) return;

        switch (methodName) {
            case "demo6":
                functext = summer.toString()
                functext += "\n\n"
                break
            case "demo7":
                functext = produkt.toString()
                functext += "\n\n"
                break
            case "demo8":
                functext = getFirstLastDigits.toString()
                functext += "\n\n"
                break
            case "demo9":
                functext = getFirstLastDigitsAlt.toString()
                functext += "\n\n"
                break
            default:
                functext = ""
        }

        functext += window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);
