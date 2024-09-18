"use strict";

/**
 * Klasse for å håndtere HTML-tabell med personer
 */
class Personlist {

    #tableElement;

    /**
     * Oppretter HTML tabell og rekke med overskrifter
     */
    constructor() {
        /** @private {HTMLElement} */ this.#tableElement = document.createElement("table");
        const headRow = this.#tableElement.insertRow(-1);
        headRow.appendChild(document.createElement("th")).textContent = "Fornavn";
        headRow.appendChild(document.createElement("th")).textContent = "Etternavn";
    }

    /**
     * Getter som henter refereranse til HTML-tabellen
     * @public
     * @returns {HTMLTable}
     */
    get root() { return this.#tableElement };

    /**
     * Metoden for å legge til en person i HTML-tabellen
     * @public
     * @param {String} fname - Fornavn
     * @param {String} lname - Etternavn
     */
    add(fname, lname) {
        const memberRow = this.#tableElement.insertRow(-1);
        memberRow.insertCell(-1).textContent = fname;
        memberRow.insertCell(-1).textContent = lname;
    }
}

/**
 * Klasse for å hente ut data fra input-elementer og vise person på websiden
 */
class PageController {
    
    #memberlist;
    #fnameElement;
    #lnameElement;
    #listContainer;
    
    /**
     * Oppretter referanser til HTML-elemeter for å legge til ny person.
     * Legger på lytter på button for å legge til ny person i HTML-tabell.
     * @param {HTMLElement} rootElement - HTML container element for applikasjonen.
     */
    constructor(rootElement) {
        this.#memberlist = null;

        const divInput = rootElement.querySelector("div[data-input]");
        this.#fnameElement = divInput.querySelector("input[name='fname']");
        this.#lnameElement = divInput.querySelector("input[name='lname']");
        this.#listContainer = rootElement.querySelector("div[data-memberlist]");
        const addButton = divInput.querySelector("button[data-addmember]");
        addButton.addEventListener('click', this.addPerson.bind(this));
    }

    /**
     * Metode legger til ny person fra data i input-elementer.
     * @private
     */
    addPerson() {
        const fname = this.#fnameElement.value.trim();
        const lname = this.#lnameElement.value.trim();
        if (fname === "") return;
        if (lname === "") return;
        if (this.#memberlist == null) {
            this.#memberlist = new Personlist();
            this.#listContainer.appendChild(this.#memberlist.root);
        }
        this.#memberlist.add(fname, lname);
        this.#fnameElement.value = "";
        this.#lnameElement.value = "";
    }
}

function init() {
    const rootElement = document.getElementById("root");
    new PageController(rootElement);
}

document.addEventListener('DOMContentLoaded', init);
