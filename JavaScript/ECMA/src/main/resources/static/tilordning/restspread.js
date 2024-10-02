"use strict";

function demo0() {
    // Tilordne variabler fra verdier i en tabell, og bruk av rest-operator "...".
    const [a, b, ...rest] = [2, 5, 12, 14, 16];

    console.log(a * b);
    console.log(`rest.length: ${rest.length}`);
    console.log(`rest: ${rest[0]}, ${rest[1]}, ${rest[2]}`);
}

function demo1() {
    // Utpakke verdier fra tabell, og samtidig redefinere tabell.
    let array = [2, 5, 12, 14, 16];
    let a, b;
    [a, b, ...array] = array;

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`array.length: ${array.length}`);
    array.forEach((element, index) => { console.log(`array[${index}]: ${element}`) });
}

function demo2() {
    // Fjerne de to første verdier i tabell.
    let array = [2, 5, 12, 14, 16];
    [, , ...array] = array;

    array.forEach((element, index) => { console.log(`array[${index}]: ${element}`) });
}

function sumrekursiv([a, ...rest]) {
    if (rest.length === 0) {
        return a;
    } else {
        return a + sumrekursiv(rest);
    }
}

function demo3() {
    const array = [1, 23, 33, -45, 56, 432, 987, 54];
    const result = sumrekursiv(array);
    console.log(result);
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
            case "demo3":
                functext = sumrekursiv.toString()
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
