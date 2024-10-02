"use strict";

function demo0() {
    const value = 32;
    console.log(`typeof: ${typeof value}`);

}

function demo1() {
    const value = 32.456;
    console.log(`typeof: ${typeof value}`);
}

function demo2() {
    const value = NaN;

    if (isNaN(value)) {
        console.log(`${typeof value} har verdi ${value}`);
    }
}

function demo3() {
    const value = Infinity;

    if (value === Infinity) {
        console.log(`${typeof value} har verdi ${value}`);
    }
}

function demo4() {
    const value = Math.sin("DAT108");

    if (isNaN(value)) {
        console.log(`${typeof value} har verdi ${value}`);
    }
}

function demo5() {
    const value = 10 ** 1000;

    if (value === Infinity) {
        console.log(`${typeof value} har verdi ${value}`);
    }
}

function demo6() {
    const value = Math.pow(10, 1000);

    if (! isFinite(value)) {
        console.log(`${typeof value} sin verdi er ${value}`);
    }
}

function demo7() {
    const value = Number.MAX_VALUE;
    console.log(`Value har verdi ${value}`);
    console.log(`Det største mulige Number er ${Number.MAX_VALUE}`);
}

function demo8() {
    const value = Number.MAX_SAFE_INTEGER;
    console.log(`Value har verdi ${value}`);
    console.log(`Det største mulige Number som heltall er ${Number.MAX_SAFE_INTEGER}`);
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
