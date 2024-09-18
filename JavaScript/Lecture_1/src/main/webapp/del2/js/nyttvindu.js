"use strict";

/**
 * Klasse for å opprette og arbeide med et nytt netteleservindu.
 */
class Display {

    #windowRef;
    #open = false;

    constructor() { }

    openwindow() {
        if (! this.#checkopen()) {
            this.#open = true;
            this.#windowRef = window.open('vindu.html', 'nyttVindu',
                `height=200,width=300,screenX=30,screenY=50 \
             ,resizable,scrollbars,menubar,status,titlebar,toolbar`);
        }
    }

    /**
     * Metode som toggler "className" på nytt vindu, for å endre bakgrunnsfarge.
     * @public
     */
    changeBackground() {
        if (this.#checkopen()) {
            this.#windowRef.document.body.classList.toggle("newwindow_emph");
        }
    }

    /**
     * Metoden endrer størrelse på nytt vindu.
     * @public
     * @param {number} x - Ny størrelse i piksler i X-retning
     * @param {number} y - Ny størrelse i piksler i Y-retning
     */
    resizeTo(x, y) {
        if (this.#checkopen()) {
            this.#windowRef.resizeTo(x, y);
        }
    }

    /**
     * Metoden flytter det nye vinduet på datamaskin-skjermen.
     * @public
     * @param {number} x - Antall piksler forflytning i X-retning
     * @param {number} y - Antall piksler forflytning i Y-retning
     */
    moveBy(x, y) {
        if (this.#checkopen()) {
            this.#windowRef.moveTo(x, y);
        }
    }

    #checkopen() {
        if (! this.#open) return false;
        return (! this.#windowRef.closed);
    }
}

/**
 * Klasse for å knytte buttons på websiden til metoder for å arbeide med
 * et nytt vindu
 */
class WindowController {

    #otherwindow;

    /**
     * Binder metoder til klikk-hendelse på HTML button elementer.
     * @param {HTMLElement} rootElement - HTML container-element
     */
    constructor(rootElement) {
        //this.resizeTo = this.resizeTo.bind(this);
        //this.moveBy = this.moveBy.bind(this);

        this.#otherwindow = new Display();

        const newBt = rootElement.querySelector("button[data-action='newwindow']");
        newBt.addEventListener('click', this.#newWindow.bind(this));

        const chbgBt = rootElement.querySelector("button[data-action='chbg']");
        chbgBt.addEventListener('click', this.#changeBackground.bind(this));

        /*
        const resizeBt = rootElement.querySelector("button[data-action='resizebg']");
        resizeBt.addEventListener('click', () => { this.#resizeTo(1000, 700) });

        const moveBt = rootElement.querySelector("button[data-action='move']");
        moveBt.addEventListener('click', () => { this.#moveBy(50, 50) });
        */
    }

    /**
     * Metode som oppretter et nytt vindu
     * @private
     * @listens Button[data-action='newwindow']:click
     */
    #newWindow() {
        this.#otherwindow.openwindow();
    }

    /**
     * Metode som endrer bakgrunnsfarge på nytt vindu
     * @private
     * @listens Button[data-action='chbg']:click
     */
    #changeBackground() {
        this.#otherwindow.changeBackground();
    }

    /**
     * Metode som endrer størrelse på nytt vindu.
     * @private
     * @listens Button[data-action='resizebg']:click
     * @param {number} x - Ny størrelse i piksler i X-retning
     * @param {number} y - Ny størrelse i piksler i Y-retning
     */
    #resizeTo(x, y) {
        this.#otherwindow.resizeTo(x, y);
    }

    /**
     * Metode som flytter nytt vindu på skjermen.
     * @private
     * @listens Button[data-action='move']:click
     * @param {number} x - Antall piksler forflytning i X-retning
     * @param {number} y - Antall piksler forflytning i Y-retning
     */
    #moveBy(x, y) {
        this.#otherwindow.moveBy(x, y);
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new WindowController(rootElement);
}
document.addEventListener('DOMContentLoaded', init);
