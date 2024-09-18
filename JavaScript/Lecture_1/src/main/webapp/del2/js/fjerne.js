"use strict";

/**
 * Klasse med demonstrasjon
 */
class PageController {
    constructor() {
        document.body.addEventListener('click',this.#removeElement.bind(this));
    }

    /**
     * Button click event
     *
     * @event ClickEvent
     */

    /**
     * Metode fjerner element som blir kliket på
     * @private
     * @listens Button:click
     * @param {ClickEvent} event - ClickEvent objektet for klikk på element
     */
    #removeElement(event) {
        const element = event.target;
        element.remove();
    }
}


function init () {
    new PageController();
}
document.addEventListener('DOMContentLoaded',init);
