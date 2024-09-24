"use strict";

/**
 * Klasse med demonstrasjon
 */
class Demo {
    /**
     * Initialiserer demonstrasjon
     * @param {HTMLButtonElement} stopButton - HTML button element som stopper demonstrasjon
     */
    constructor(stopButton) {
        this.stop = this.stop.bind(this);
        this.changeColor = this.changeColor.bind(this);

        /** @private {Array.<String>} */ this.colors = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime',
                       'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal',
                       'white', 'yellow']
        /** @private {Number} */ this.index = 0
        /** @private {Number} */ this.timer = null

        stopButton.addEventListener('click',this.stop);
        this.startTimer();
    }

     /**
     * Metode som stopper demonstrasjonen.
     * @private
     * @listens Button:click
     */
    stop() {
        window.clearInterval(this.timer);
        document.body.style.background='white';
        document.documentElement.style.background='white';
    }

    /**
     * Metode henter neste farge i fargesekvensen.
     * @private
     */
    getColor() {
        const color = this.colors[this.index];
        this.index = (this.index+1) % this.colors.length;
        return color;
    }

    /**
     * Metode endrer bargrunnsfarge for websiden til neste i fargesekvensen
     * @private
     */
    changeColor() {
        const color = this.getColor();
        document.body.style.background = color;
        document.documentElement.style.background = color;
    }

    /**
     * Metode starter timer som regelmessig endrer bakgrunnsfarge på websiden
     * @private
     */
    startTimer() {
        this.timer = window.setInterval(this.changeColor,3000);
    }
}

function init() {
    const stopBt = document.getElementById("stopDemo");
    new Demo(stopBt);
}
document.addEventListener('DOMContentLoaded',init);
