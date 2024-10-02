"use strict";

function demo0() {
    const value = true;

    if (value) {
        console.log(`${typeof value} sin verdi er ${value}`);
    }
}

function demo1() {
    const value = false;

    if (!value) {
        console.log(`${typeof value} sin verdi er ${value}`);
    }
}

function demo2() {
    const value = 4 > 2;

    if (value) {
        console.log(`${typeof value} sin verdi er ${value}`);
    }
}

function demo3() {
    const value = "ole" === "per";

    if (!value) {
        console.log(`${typeof value} sin verdi er ${value}`);
    }
}

function demo4() {
    const student1 = "Per";
    const student2 = new String("Per");


    if (student1 == student2) {
        console.log("Samme verdi med '=='");
    }

    if (!(student1 === student2)) {
        console.log("Ulik verdi eller type med '==='");
    }
}

function demo5() {
    const tall1 = 55;
    const tall2 = new Number(55);


    if (tall1 == tall2) {
        console.log("Samme verdi med '=='");
    } else {
        console.log("Ulik verdi");
    }

    if (!(tall1 === tall2)) {
        console.log("Ulik verdi eller type med '==='");
    }
}

function demo6() {
    const b1 = true;
    const b2 = new Boolean(true);


    if (b1 == b2) {
        console.log("Samme verdi med '=='");
    } else {
        console.log("Ulik verdi");
    }

    if (!(b1 === b2)) {
        console.log("Ulik verdi eller type med '==='");
    }
}

function demo7() {
    const student1 = "Per";
    const student2 = new String("Per");

    if (student1 != student2) {
    } else {
        console.log("De to verdiene er like med '!='");
    }

    if (student1 !== student2) {
        console.log("Ulik verdi eller type med '!=='");
    }
}

function demo8() {
    const tall1 = 55;
    const tall2 = new Number(55);


    if (tall1 != tall2) {
    } else {
        console.log("Samme verdi ved sjekk med '!='");
    }

    if (tall1 !== tall2) {
        console.log("Ulik verdi eller type ved sjekk med '!=='");
    }
}

function demo9() {
    const b1 = true;
    const b2 = new Boolean(true);


    if (b1 != b2) {
    } else {
        console.log("Samme verdi ved sjekk med '!='");
    }

    if (b1 !== b2) {
        console.log("Ulik verdi eller type ved sjekk med '!='");
    }
}

function demo10() {
    const value = undefined;

    if (value) {
    } else {
        console.log(`${value} gir usann i en bolsk sammenheng`);
    }
}

function demo11() {
    const value = null;

    if (value) {
    } else {
        console.log(`${value} gir usann i en bolsk sammenheng`);
    }
}


function demo12() {
    const value = NaN;
    console.log(`typeof: ${typeof value}`);

    if (value) {
    } else {
        console.log(`${value} gir usann i en bolsk sammenheng`);
    }
}

function demo13() {
    const value = "";

    if (value) {
    } else {
        console.log("Tom streng ir usann i en bolsk sammenheng");
    }
}

function demo14() {
    const value = 0;

    if (value) {
    } else {
        console.log(`Tallet ${value} gir usann i en bolsk sammenheng`);
    }
}

function demo15() {
    const value = Infinity;

    if (value) {
        console.log(`Tallet ${value} gir sann i en bolsk sammenheng`);
    }
}

function demo16() {
    const value = 17.4;

    if (value) {
        console.log(`Tallet ${value} gir sann i en bolsk sammenheng`);
    }
}

function demo17() {
    const value = "Velkommen til DAT108";

    if (value) {
        console.log(`Strengen "${value}" gir sann i en bolsk sammenheng`);
    }
}

function demo18() {
    const value = "0";

    if (value) {
        console.log(`Strengen "${value}" gir sann i en bolsk sammenheng`);
    }
}

function demo19() {
    const value = "false";

    if (value) {
        console.log(`Strengen "${value}" gir sann i en bolsk sammenheng`);
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
