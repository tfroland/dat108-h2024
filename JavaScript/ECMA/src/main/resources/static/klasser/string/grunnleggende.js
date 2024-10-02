"use strict";

function demo0() {
    const farge = "rød";
    const nyfarge = new String("rød");

    if (farge == nyfarge) {
        console.log("Operator ==: Likhet hvis samme verdi selv om forskjellige typer");
    }
}

function demo1() {
    const farge = "rød";
    const nyfarge = new String("rød");

    if (farge === nyfarge) {
    } else {
        console.log("Operator ===: Likhet kun hvis både verdi og type er lik");
    }
}

function demo2() {
    const tall = 5;
    const tallstreng = "5";

    if (tall == tallstreng) {
        console.log("Operator ==: Likhet hvis samme verdi selv om forskjellige typer");
    }
}

function demo3() {
    const tall = 5;
    const tallstreng = "5";

    if (tall === tallstreng) {
    } else {
        console.log("Operator ===: Likhet kun hvis både verdi og type er lik");
    }
}

function demo4() {
    const start = "Hei alle i faget";
    const end = "DAT108";
    const message = start.concat(" '", end, "'");
    console.log(message);
}

function demo5() {
    const start = "Hei alle i faget";
    const end = "DAT108";
    const message = `${start} '${end}'`;
    console.log(message);
}

function demo6() {
    const farger = "       rød  blå      ";
    console.log(`Uten trim      - Fargen er: '${farger}'`);
    console.log(`Med trim       - fargen er: '${farger.trim()}'`);
    console.log(`Med trimStart  - fargen er: '${farger.trimStart()}'`);
    console.log(`Med trimEnd    - fargen er: '${farger.trimEnd()}'`);
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
