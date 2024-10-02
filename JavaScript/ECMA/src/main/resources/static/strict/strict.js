"use strict";

function demo0() {
    /**
     * Aksesserer variabel som ikke er deklarert.
     * Dette er tillat, men ikke i "strict" modus.
     */

    ta = 6;
    console.log(ta);
}

function demo1() {
    /**
     * Forsøker å gi verdi til NaN som er en konstant.
     * Kontanten blir ikke endret, men koden gir ingen feilmelding.
     * Koden vil feile kun i "strict mode".
     */

    NaN = 6;
    console.log(NaN);
}

function demo2() {
    /**
     * Forsøker å endre en kun lesbar egenskap.
     * Egenskapen blir ikke endret, men koden gir ingen feilmelding.
     * Koden vil feile kun i "strict mode".
     */

    let o = {
        "number": 7
    };
    Object.freeze(o);
    console.log(o.number);
    o.number = 6;
    console.log(o.number);
}

function demo3() {
    /**
     * Forsøker å bruke et reservert ord som variabel.
     * Dette er tillatt, men ikke hvis "strict mode".
     */

    eval("let public = 6");
    console.log(eval("public"));
}

function showthis() {

    /**
     * I "strict mode" vil "this" være "undefined" hvis det ikke finnes
     * en naturlig verdi for "this".
     * 
     * Uten "strict mode" vil "this" være en referanse til "window" hvis det ikke finnes en
     * naturlig verdi for "this".
     */
    
    console.log(this);
}

function demo4() {
    showthis();
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

        functext = '"use strict";';
        functext += "\n\n";

        switch (methodName) {
            case "demo4":
                functext += showthis.toString();
                functext += "\n\n";
                break;
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
