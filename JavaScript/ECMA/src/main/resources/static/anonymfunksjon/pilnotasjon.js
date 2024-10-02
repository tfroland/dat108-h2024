"use strict";

function demo0() {
    /**
     * Pil-notasjon for anonym funksjon gir en mer kompakt syntaks.
     * I kallet av "z" er siste argument en anonym funksjon ved pil-notasjon.
     * Også funksjonen "z" blir opprettet ved pil-notasjon.
     *
     * Hvis funksjon med pil-notasjon kun tar ett argument kan vi
     * utelate parenteser rundt argument.
     *
     * Hvis funksjon med pil-notasjon kun returnerer verdi kan vi utelate
     * "return" hvis vi også utlater "{}" rundt funksjonskroppen.
     *
     * I kallet av "z" demonstrerers dette.
     */

    const z = (a,b,c) => c(a+b);

    const res = z(12, 32, x => 2*x);

    console.log(res);
}

function demo1() {
    // Funksjon "y" som kun returnerer verdi, "a+b".
    const y = (a,b) => a+b;

    console.log(y(3, 4));
}

function demo2() {
    // Funksjon "y" tar kun ett argument, og som kun returnerer verdi.
    const y = person => `Hello ${person}`;

    console.log(y('Ole Olsen'));
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
