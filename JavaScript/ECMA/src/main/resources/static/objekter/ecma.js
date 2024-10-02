"use strict";

function demo0() {
    // Type bestemmes ved tilordning, og type kan endres
    let aa = 77.66;
    console.log(typeof aa);
    aa = 'Ole';
    console.log(typeof aa);
}

function demo1() {
    // Viser type til variabel
    // Primitiv type
    let aa = "Hei";
    console.log(typeof aa);
    console.log(aa instanceof String);
}

function demo2() {
    // Viser type til variabel
    let dag = new String("Lørdag");
    console.log(typeof dag);
    console.log(dag instanceof String);
}

function aFunc(aa = 88) {
    // Funksjon med default verdi på parameter
    console.log(aa);
}

function demo3() {
    // Kaller funksjon og gir verdi til parameter
    aFunc(77);
}

function demo4() {
    /**
     * Kaller funksjon uten å gi verdi til parameter.
     * Da blir default verdi brukt.
     */
    aFunc();
}

function demo5() {
    /**
     * Kaller funksjon med flere argumenter enn formelle parametre.
     * Første argument gir verdi til funksjonen sin eneste foremelle parameter.
     */

    aFunc("a", "b", "c");
}

function bFunc(x, y, ...z) {
    /**
     * Rest-operator gjør bruk av "arguments" unødvendig.
     * Rest-operator tar resterende argumenter og fyller i en Array.
     * Her tilordenes første argument til x, andre til y. Resterende argeumenter fylles inn i z som vil være en Array.
     */
    console.log(x);
    console.log(y);
    console.log(z);
}

function demo6() {
    /**
     * Kaller funksjon med fire argumenter.
     * - Første argument, 1, tilordnes til parameter x i bFunc.
     * - Andre argument, "abc", tilordnes til parameter y i bFunc.
     * - Resterende argumenter fylles inn i parameter z som vil være en Array.
     */
    bFunc(1, "abc", Math.PI, Math.E, Number.EPSILON);
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
            case "demo4":
            case "demo5":
                functext = aFunc.toString();
                functext += "\n\n";
                break;
            case "demo6":
                functext = bFunc.toString();
                functext += "\n\n";
                break;
            default:
                functext = "";
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
