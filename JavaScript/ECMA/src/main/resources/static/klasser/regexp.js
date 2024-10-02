"use strict";

function demo0() {
    const elbilRegExp = /\bE[A-Z]\d{5}\b/;
    const bilnummre = "SP12345 TS97143 EB76554 EL12121 AC453 EV65656";

    if (elbilRegExp.test(bilnummre)) {
        console.log("Inneholder elbil");
    } else {
        console.log("Inneholder ikke elbil");
    }
}

function demo1() {
    const elbilRegExp = /\bE[A-Z]\d{5}\b/;
    const bilnummre = "SP12345 TS97143 EB765 EL121212 AC453";

    if (elbilRegExp.test(bilnummre)) {
        console.log("Inneholder elbil");
    } else {
        console.log("Inneholder ikke elbil");
    }
}

function demo2() {
    const pattern = "\\bE[A-Z]\\d{5}\\b";
    const elbilRegExp = new RegExp(pattern);
    const bilnummre = "SP12345 TS97143 EB76554 EL12121 AC453 EV65656";

    if (elbilRegExp.test(bilnummre)) {
        console.log("Inneholder elbil");
    } else {
        console.log("Inneholder ikke elbil");
    }
}

function demo3() {
    const ordpattern = /\p{Letter}+/ug;
    const tekstarray = document.getElementById("story").value.match(ordpattern);
    if (tekstarray === null) return;

    const result = new Set();
    tekstarray.forEach(ord => { result.add(ord.toLocaleLowerCase("nb-NO")) })
    console.log(`Fant ${result.size} unike ord i teksten`);
}

function demo4() {
    const ordpattern = /\p{Letter}+/ug;
    const tekstarray = document.getElementById("story").value.match(ordpattern);
    if (tekstarray === null) return;

    const result = new Map();
    tekstarray.forEach(ord => {
        const ordlower = ord.toLocaleLowerCase("nb-NO");
        let count;
        if (result.has(ordlower)) {
            count = result.get(ordlower);
        } else {
            count = 0;
        }
        ++count;
        result.set(ordlower,count)
    })

    result.forEach((count,ord) => {
        console.log(`${ord}: ${count}`);
    })
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
