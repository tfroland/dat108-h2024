"use strict";

function demo0() {
    const elbiler = new Set();
    elbiler.add("EK12345");
    elbiler.add("EK54321");
    elbiler.add("EK12345");

    elbiler.forEach(elbil => { console.log(elbil) });
}

function demo1() {
    const elbiler = new Set();
    elbiler.add("EK12345");
    elbiler.add("EK54321");
    elbiler.add("SP12345");

    elbiler.delete("SP12345");

    elbiler.forEach(elbil => { console.log(elbil) });
}

function demo2() {
    const elbiler = new Set();
    elbiler.add("SP12345");
    elbiler.add("SP54321");
    elbiler.clear();

    elbiler.add("EK12345");
    elbiler.add("EK54321");

    elbiler.forEach(elbil => { console.log(elbil) });
}

function demo3() {
    const elbiler = new Set();
    elbiler.add("EK12345");
    elbiler.add("EK54321");

    if (elbiler.has("EK12345")) {
        console.log("Sett inneholder 'EK12345'");
    }
}


function demo4() {
    const elbiler = new Set();
    elbiler.add("EK12345");
    elbiler.add("EK54321");

    const iterator = elbiler.values();

    let element = iterator.next();
    while (!element.done) {
        console.log(`Elbil: ${element.value}`);
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
