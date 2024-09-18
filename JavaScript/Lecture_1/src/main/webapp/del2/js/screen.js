"use strict";

/**
 * Klasse for å finne skjermdata, og vise resultatet på netsiden.
 */
class DemoController {
    /**
     * Viser data, og legger på lytter for skjermrotasjon.
     * @param {HTMLElement} rootElement - HTML container element med elementer der resultatet skal vises.
     */
    constructor(rootElement) {
        /** @private {HTMLElement} */ this.root = rootElement;

        screen.addEventListener('orientationchange',() => {window.alert('You turned the screen')});
        rootElement.querySelector("span[data-availHeight]").textContent = this.#show(screen.availHeight);
        rootElement.querySelector("span[data-availWidth]").textContent =  this.#show(screen.availWidth);
        rootElement.querySelector("span[data-colorDepth]").textContent =  this.#show(screen.colorDepth);
        rootElement.querySelector("span[data-height]").textContent =  this.#show(screen.height);
        rootElement.querySelector("span[data-orientationtype]").textContent =  this.#show(screen.orientation.type);
        rootElement.querySelector("span[data-orientationangle]").textContent =  this.#show(screen.orientation.angle);
        rootElement.querySelector("span[data-pixelDepth]").textContent =  this.#show(screen.pixelDepth);
        rootElement.querySelector("span[data-width]").textContent = this.#show(screen.width);
    }

    /**
     * Metode returner String for input data
     * @private
     * @param {String|undefined|null} value - Verdi som skal retuernes som String
     * @returns {String}
     */
    #show(value) {
        if (value == null) {
            return "null";
        } else {
            if (typeof value == "string") {
                if (value.trim() === "") {
                    return "<empty string>";
                } else {
                    return value;
                }
            } else {
                return value;
            }
        }
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new DemoController(rootElement);
}
document.addEventListener('DOMContentLoaded',init);
