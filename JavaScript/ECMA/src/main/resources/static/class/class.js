class Dice {
    #value = null;
    #maxnumber;

    constructor(maxnumber = 6) {
        this.#maxnumber = maxnumber;
    }

    getValue() {
        return this.#value;
    }

    throwDice() {
        this.#value = 1 + Math.trunc(this.#maxnumber * Math.random());
    }
}

const dicecontroller = {
    count: 0,
    dice: new Dice(),

    roll() {
        this.dice.throwDice();
        ++this.count;
        console.log(`Test ${this.count}: Terningen viser ${this.dice.getValue()}`);
    },

    start() {
        this.roll();        
        window.setInterval(this.roll.bind(this), 2000);
    }
}

dicecontroller.start();
