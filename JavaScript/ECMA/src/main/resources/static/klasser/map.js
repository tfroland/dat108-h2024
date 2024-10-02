"use strict";

function demo0() {
    const studenter = new Map();
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    const student = studenter.get(521);
    console.log(`521: ${student.fornavn} ${student.etternavn}`);
}

function demo1() {
    const studenter = new Map();
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    const id = 521;
    if (studenter.has(id)) {
        console.log(`Har student med id ${id}`);
    } else {
        console.log(`Ingen student med id ${id}`);
    }
}

function demo2() {
    const studenter = new Map();;
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    const id = 520;
    if (studenter.has(id)) {
        console.log(`Har student med id ${id}`);
    } else {
        console.log(`Ingen student med id ${id}`);
    }
}

function demo3() {
    const studenter = new Map();
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    studenter.forEach(
        (student, id) => {
            console.log(`${id}: ${student.fornavn} ${student.etternavn}`);
        }
    );
}

function demo4() {
    const studenter = new Map();
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    for (let [id, student] of studenter.entries()) {
        console.log(`${id}: ${student.fornavn} ${student.etternavn}`);
    }
}

function demo5() {
    const studenter = new Map();
    studenter.set(123, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(521, { fornavn: "Anne", etternavn: "Annesen" });

    const iterator = studenter.entries()

    let element = iterator.next();
    while (!element.done) {
        const [id, student] = element.value;
        console.log(`${id}: ${student.fornavn} ${student.etternavn}`);
        element = iterator.next();
    }
}

function demo6() {
    const studenter = new Map();
    const ole = Symbol();
    const anne = Symbol();

    studenter.set(ole, { fornavn: "Ole", etternavn: "Olsen" });
    studenter.set(anne, { fornavn: "Anne", etternavn: "Annesen" });

    if (studenter.has(ole)) {
        const student = studenter.get(ole);
        console.log(`Fant student ${student.fornavn} ${student.etternavn}`);
    } else {
        console.log(`Fant ikke student`);
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
