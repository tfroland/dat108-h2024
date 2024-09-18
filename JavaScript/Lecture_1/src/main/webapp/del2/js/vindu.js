"use strict";

/**
 * Klasse for å arbeide med foreldrevinduet, "opener"
 */
class Demo {
    /**
     * Legger på lytter på knapp for å endre bakgrunnsfarge i foreldrevindu.
     * @param {HTMLButtonElement} buttonElement - HTML button for hendelseshåndterer.
     */
    constructor(buttonElement) {
        buttonElement.addEventListener('click',this.#changeBgColor.bind(this));
    }

    /**
     * Metode som toggler "className" på foreldrevindu, for å endre bakgrunnsfarge.
     * @private
     */
    #changeBgColor() {
        opener.document.body.classList.toggle("newwindow_emph");
    }
}

function init() {
    const chBt = document.getElementById("chbg");
    new Demo(chBt);
}
document.addEventListener('DOMContentLoaded',init);
