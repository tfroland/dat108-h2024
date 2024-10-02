"use strict";

function demo0() {
    // JSON for å opprette tabell - bruk dette formatet
    const farger = ["rød", "grønn", "blå", "gul"];

    for (const farge of farger) {
        console.log(farge);
    }
}

function demo1() {
    // new Array for å opprtte tabell - Unngå denne
    const farger = new Array("rød", "grønn", "blå", "gul");

    for (const farge of farger) {
        console.log(farge);
    }
}

function demo2() {
    // Array for å oprette tabelle
    const farger = Array("rød", "grønn", "blå", "gul");

    for (const farge of farger) {
        console.log(farge);
    }
}

function demo3() {
    const tabell = new Array(5);

    console.log(tabell.length);

    for (let i = 0; i < tabell.length; ++i) {
        console.log(`tabell[${i}]: ${typeof tabell[i]}`);
    }
}

function demo4() {
    const farger = [];
    farger[farger.length] = "rød";
    farger[farger.length] = "grønn";

    farger.forEach(
        farge => { console.log(farge) }
    );
}

function demo5() {
    const farger = ["rød", "grønn"];

    farger.push("sort");
    farger.unshift("hvit");
    farger.forEach(
        farge => { console.log(farge) }
    );
}

function demo6() {
    const farger = ["rød", "grønn", "blå", "gul"];

    console.log(`shift: ${farger.shift()}`);
    console.log(`pop: ${farger.pop()}`);

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo7() {
    const farger = ["rød", "grønn"];

    for (let i = 0; i < farger.length; ++i) {
        console.log(`farger[${i}]: ${farger[i]}`);
    }
}

function demo8() {
    const farger = ["rød", "grønn"];

    for (const farge of farger) {
        console.log(farge);
    }
}

function demo9() {
    const farger = ["rød", "grønn"];
    const iterator = farger.values();

    for (const farge of iterator) {
        console.log(farge);
    }
}

function demo10() {
    const farger = ["rød", "grønn"];
    const iterator = farger.entries();

    let element = iterator.next();
    while (!element.done) {
        const [id, value] = element.value;
        console.log(`${id}: ${value}`);
        element = iterator.next();
    }
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

        functext = window[methodName].toString();
        viewElm.textContent = functext;
        viewElm.classList.add("demo");
    }
}

function init() {
    const rootDemoHandler = document.getElementById("demoHandler");
    demomanager.init(rootDemoHandler);
}
document.addEventListener('DOMContentLoaded', init);
