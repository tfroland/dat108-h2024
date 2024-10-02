"use strict";

function demo0() {
    // Direkte tilordne verdier til objektegenskaper
    const person = {
        'id': 121,
        'navn': "Ole"
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo1() {
    // Tilordne verdier til objektegenskaper via variabelverdier
    const number = 121;
    const name = "Ole";

    const person = {
        'id': number,
        'navn': name
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo2() {
    // Tilordne verdier til objekt via variabler
    const id = 121;
    const navn = "Ole";

    const person = {
        id,
        navn
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo3() {
    // Tilordne verdier til objekt med uttrykk for navn på egenskap
    const p1 = "id";
    const p2 = "navnet";

    const person = {
        [p1]: 121,
        [p2.substring(0, 4)]: "Ole"
    };

    console.log(`person.id: ${person.id}`);
    console.log(`person.navn: ${person.navn}`);
}

function demo4() {
    // Objekt med funksjon
    const person = {
        born: new Date(1997, 0, 5), // 5. januar 1997
        name: "Ole",
        numdays: function() {
            const milliseconds = Date.now() - this.born.getTime();
            const days = Math.floor(milliseconds / 86400000);
            return days;
        }
    };

    console.log(`${person.name} er ${person.numdays()} dager gammel`);
}

function demo5() {
    // Objekt med funksjon uttrykt på kortform
    const person = {
        born: new Date(1997, 0, 5), // 5. januar 1997
        name: "Ole",
        numdays() {
            const milliseconds = Date.now() - this.born.getTime();
            const days = Math.floor(milliseconds / 86400000);
            return days;
        }
    };

    console.log(`${person.name} er ${person.numdays()} dager gammel`);
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
