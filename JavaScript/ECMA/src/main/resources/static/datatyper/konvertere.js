"use strict";


function demo0() {
    const tall = Math.PI;
    console.log(`${typeof tall} har verdi ${tall}`);

    const tallSomStreng = tall.toFixed(2);
    console.log(`${typeof tallSomStreng} har verdi ${tallSomStreng}`);
}

function demo1() {
    const tall = Math.PI;
    console.log(`${typeof tall} har verdi ${tall}`);

    const tallSomStreng = tall.toString(); // Konverterer tall til tekststreng
    console.log(`${typeof tallSomStreng} har verdi ${tallSomStreng}`);
}

function demo2() {
    const tallSomStreng = "3.14";
    console.log(`${typeof tallSomStreng} har verdi ${tallSomStreng}`);

    const tall = parseFloat(tallSomStreng); // Konverterer tekst til flyttall
    console.log(`${typeof tall} har verdi ${tall}`);
}

function demo3() {
    const tallSomStreng = "12345.7";
    console.log(`${typeof tallSomStreng} har verdi ${tallSomStreng}`);

    const tall = parseInt(tallSomStreng); // Konverterer tekst til heltall
    console.log(`${typeof tall} har verdi ${tall}`);
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
