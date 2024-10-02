"use strict";

function visFarge(farge, index) {
    console.log(`${index}: ${farge}`);
}

function demo0() {
    const farger = ["rød", "grønn"];

    farger.forEach(visFarge);
}

function demo1() {
    const farger = ["rød", "grønn"];

    farger.forEach(
        farge => { console.log(farge) }
    );
}
function demo2() {
    const farger = ["rød", "grønn"];

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}


function demo3() {
    /* Denne koden feiler.
     * getElementsByTagName returnerer en liste, HTMLCollection.
     * Denne strukturen er indeksert, men har ingen forEach metode.
     */

    console.log("Denne vil feile!");
    document.getElementsByTagName("button").forEach( // Error, no forEach method
        element => { console.log(element.getAttribute('data-demo')) }
    );
}

function demo4() {
    // Bruker statiske metoden Array.from for å lage en en tabell av liste
    const demoHandler = document.getElementById("demoHandler");
    Array.from(demoHandler.getElementsByTagName("button")).forEach(
        element => { console.log(element.textContent) }
    );
}

function demo5() {
    // querySelectorAll returnerer en liste som har forEach
    document.querySelectorAll("button").forEach(
        element => { console.log(element.textContent) }
    );
}


function demo18() {
    const farger = ["rød", "grønn", "blå", "gul"];

    console.log(`shift: ${farger.shift()}`);
    console.log(`pop: ${farger.pop()}`);

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}


function demo19() {
    const tabell = [1, 2, 7, 3, 9, 8];

    if (tabell.every(tall => tall >= 0)) {
        console.log("Kun ikke-negative tall");
    } else {
        console.log("Noen tall er negative");
    }
}

function demo20() {
    const tabell = [1, 2, -7, 3, -9, 8];

    if (tabell.every(tall => tall >= 0)) {
        console.log("Kun ikke-negative tall");
    } else {
        console.log("Noen tall er negative");
    }
}

function demo21() {
    const tabell = [1, 2, -7, 3, -9, 8];

    if (tabell.some(tall => tall >= 0)) {
        console.log("Tabellen har minst ett ikke-negative tall");
    } else {
        console.log("Alle tall er negative");
    }
}

function demo22() {
    const farger = ["rød", "grønn", "blå", "gul"];

    if (farger.includes("grønn")) {
        console.log("Tabellen inneholder fargen grønn");
    } else {
        console.log("Tabellen inneholder ikke fargen grønn");
    }
}

function demo23() {
    const farger = ["rød", "grønn", "blå", "gul"];

    if (farger.includes("fiolett")) {
        console.log("Tabellen inneholder fargen fiolett");
    } else {
        console.log("Tabellen inneholder ikke fargen fiolett");
    }
}
function demo24() {
    const tabell = [1, 2, -7, 3, -9, 8]

    tabell.filter(tall => tall >= 0).forEach(
        tall => { console.log(tall) }
    );
}


function demo25() {
    const tabell = [1, 2, -7, 3, -9, 8];

    // Obs: tabellen blir endret, ingen ny tabell, returner samme tabell
    tabell.sort((a, b) => a - b);

    tabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo26() {
    const tabell = [1, 2, -7];

    const nytabell = tabell.map(tall => tall * tall);

    nytabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo27() {
    const tidstreng = "1::23";
    const tabell = tidstreng.split(":");

    tabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo28() {
    const tabell = ["1","","23"];
    const nytabell = tabell.map(
        element => element.padStart(2,"0")
    );

    nytabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo29() {
    const tabell = ["01","00","23"];
    const nytidstreng = tabell.join(":");

    console.log(nytidstreng);
}

function demo30() {
    const nytidstreng = "1::23".split(":").map(element => element.padStart(2,"0")).join(":");

    console.log(nytidstreng);
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
            case "demo0":
                functext = visFarge.toString()
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
