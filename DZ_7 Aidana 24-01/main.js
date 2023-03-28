 //ЗАДАНИЕ 1

class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
        this.price = options.price
        this.steering=options.steering
        this.year=options.year
    }
    start(){
        console.log(`${this.model} 'Машина заведена'`)
    }

}
class Lexus extends Cars{
    constructor(options) {
        super(options);
    }
}
const lexus = new Lexus({
    model: 'Lexus 570',
    color: 'white',
    wheels: 4,
    price:"15000$",
})
lexus.start()

class Honda extends Cars{
    constructor(options) {
        super(options);
    }
}
const honda = new Honda({
    model: 'Honda Avancier',
    color: 'red',
    wheels: 4,
    steering:'right'
})
honda.start()


class Bugatti extends Cars{
    constructor(options) {
        super(options);
    }
}
const bugatti = new Bugatti({
    model: 'Bugatti Chiron',
    color: 'black',
    wheels: 4,
    year:2016
})
bugatti.start()


//Задание 2

const color = prompt("Введите цвет светофора")

class Svetofor {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}


class Circle extends Svetofor {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
    }
}

if (color === "красный") {
    const red = new Circle({
        selector: "#red",
        color: "red"
    })
} else if (color === "желтый") {
    const yellow = new Circle({
        selector: "#yellow",
        color: "yellow"
    })
} else if (color === "зеленый") {
    const green = new Circle({
        selector: "#green",
        color: "green"
    })
} else {
    alert("ERROR")
}
