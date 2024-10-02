"use strict";

function demo0() {
    // Tilordne variabler fra verdier til objekt
    const person = {
        'id': 121,
        'fornavn': "Ole",
        'etternavn': "Olsen"
    };

    const { id, fornavn, etternavn } = person;

    console.log(`id: ${id}`);
    console.log(`fornavn: ${fornavn}`);
    console.log(`etternavn: ${etternavn}`);
}

function demo1() {
    /**
     * Tilordne variabler fra verdier til objekt,
     * og der variabelnavn ikke er likt med nøkler i objekt.
     */

    const person = {
        'id': 121,
        'fornavn': "Ole",
        'etternavn': "Olsen"
    };

    const { 'id': a, 'fornavn': b, 'etternavn': c } = person;

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
}

function showPerson({ id, firstname, lastname }) {
    // Tilordning av funksjonsparametre fra objekt git som parameter.
    console.log(`id: ${id}`);
    console.log(`firstname: ${firstname}`);
    console.log(`lastname: ${lastname}`);
}

function demo2() {
    const person = {
        'id': 12,
        'firstname': 'Ole',
        'lastname': 'Olsen'
    };

    showPerson(person);
}

function showPersonAlt({ 'identitet': id, 'firstname': fn, 'lastname': ln }) {
    /**
     * Tilordning av funksjonsparametre fra objekt gitt som parameter,
     * og der parameternavn ikke er likt med nøkler i objekt.
     */

    console.log(`id: ${id}`);
    console.log(`fn: ${fn}`);
    console.log(`ln: ${ln}`);
}

function demo3() {
    const person = {
        'identitet': 12,
        'firstname': 'Ole',
        'lastname': 'Olsen'
    };

    showPersonAlt(person);
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
            case "demo2":
                functext = showPerson.toString()
                functext += "\n\n"
                break
            case "demo3":
                functext = showPersonAlt.toString()
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
