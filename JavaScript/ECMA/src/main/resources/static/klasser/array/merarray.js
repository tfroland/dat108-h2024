"use strict";


function demo0() {
    const farger = ["rød", "grønn"];
    const flerefarger = ["blå", "gul"];

    farger.concat(flerefarger).forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo1() {
    const farger = ["rød", "gul"];
    const flerefarger = ["grønn", "blå"];

    farger.splice(1, 0, ...flerefarger);

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo2() {
    const farger = ["rød", "gul", "grønn", "blå"];

    farger.splice(1, 2);

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo3() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];
    const flerefarger = ["grønn", "blå"];

    farger.splice(1, 2, ...flerefarger);

    farger.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo4() {
    const farger = ["rød", "gul"];
    const flerefarger = ["grønn", "blå"];

    const nytabell = farger.toSpliced(1, 0, ...flerefarger);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo5() {
    const farger = ["rød", "gul", "grønn", "blå"];

    const nytabell = farger.toSpliced(1, 2);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo6() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];
    const flerefarger = ["grønn", "blå"];

    const nytabell = farger.toSpliced(1, 2, ...flerefarger);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo7() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];

    const nytabell = farger.slice(1, 3);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo8() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];

    const nytabell = farger.slice(3);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo9() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];

    const nytabell = farger.slice(1, -2);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo10() {
    const farger = ["rød", "gul", "hvit", "svart", "brun"];

    const nytabell = farger.slice(-4, -2);

    nytabell.forEach(
        (farge, index) => { console.log(`${index}: ${farge}`) }
    );
}

function demo11() {
    const tabell = [1, 2, 7, 3, 9, 8];

    if (tabell.every(tall => tall >= 0)) {
        console.log("Kun ikke-negative tall");
    } else {
        console.log("Noen tall er negative");
    }
}

function demo12() {
    const tabell = [1, 2, -7, 3, -9, 8];

    if (tabell.every(tall => tall >= 0)) {
        console.log("Kun ikke-negative tall");
    } else {
        console.log("Noen tall er negative");
    }
}

function demo13() {
    const tabell = [1, 2, -7, 3, -9, 8];

    if (tabell.some(tall => tall >= 0)) {
        console.log("Tabellen har minst ett ikke-negative tall");
    } else {
        console.log("Alle tall er negative");
    }
}

function demo14() {
    const farger = ["rød", "grønn", "blå", "gul"];

    if (farger.includes("grønn")) {
        console.log("Tabellen inneholder fargen grønn");
    } else {
        console.log("Tabellen inneholder ikke fargen grønn");
    }
}

function demo15() {
    const farger = ["rød", "grønn", "blå", "gul"];

    if (farger.includes("fiolett")) {
        console.log("Tabellen inneholder fargen fiolett");
    } else {
        console.log("Tabellen inneholder ikke fargen fiolett");
    }
}
function demo16() {
    const tabell = [1, 2, -7, 3, -9, 8]

    tabell.filter(tall => tall >= 0).forEach(
        tall => { console.log(tall) }
    );
}

function demo17() {
    const tabell = [1, 2, -7];

    const nytabell = tabell.map(tall => tall * tall);

    nytabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo18() {
    const tabell = ["1", "", "23"];
    const nytabell = tabell.map(
        element => element.padStart(2, "0")
    );

    nytabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo19() {
    const tabell = [1, 2, -7, 3, -9, 8];

    const nytabell = tabell.toSorted((a, b) => a - b);

    nytabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo20() {
    const tabell = [1, 2, -7, 3, -9, 8];

    // Obs: tabellen blir endret, ingen ny tabell, returner samme tabell
    tabell.sort((a, b) => a - b);

    tabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo21() {
    const tidstreng = "1::23";
    const tabell = tidstreng.split(":");

    tabell.forEach(
        tall => { console.log(tall) }
    );
}

function demo22() {
    const tabell = ["01", "00", "23"];
    const nytidstreng = tabell.join(":");

    console.log(nytidstreng);
}

function demo23() {
    const nytidstreng = "1::23".split(":").map(element => element.padStart(2, "0")).join(":");

    console.log(nytidstreng);
}

function demo24() {
    const tabell = [1, 2, 3, 4, 5, 6];

    const sum = tabell.reduce(
        (akumulator, verdi) => akumulator + verdi
    );

    console.log(sum);
}

function demo25() {
    const tabell = [1, 2, 3, 4, 5, 6];

    const sum = tabell.reduce(
        (akumulator, verdi) => akumulator * verdi
    );

    console.log(sum);
}

function demo26() {
    const tabell = [-12, 2, 356, 42, 51, 6];

    const sum = tabell.reduce(
        (akumulator, verdi) => Math.max(akumulator,verdi)
    );

    console.log(sum);
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
