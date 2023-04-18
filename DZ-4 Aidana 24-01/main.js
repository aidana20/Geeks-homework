// ЗАДАНИЕ 1

let increment = document.getElementById("increment")
let decrement = document.getElementById("decrement")
let number_tag = document.getElementById("number")
let num = 0
increment.addEventListener("click", function () {
    num++;
    number_tag.textContent = num
    number_tag.style.color = "green"
})

decrement.addEventListener("click", function () {
    num--;
    if(num < 0){
        num = 0
    }
    number_tag.textContent = num
    number_tag.style.color = "red"
})

//ЗАДАНИЕ 2
document.querySelector('.block').onmousemove = function(event) {
    event = event || window.event;
    console.log(event);
    document.querySelector('.x').innerHTML = event.offsetX;
    document.querySelector('.y').innerHTML = event.offsetY;
}




// ЗАДАНИЕ 3

const color = prompt("Введите цвета светофора \nкрасный\nжелтый\nзеленый").toLowerCase().trim()

switch (color) {
    case "красный" :
        document.getElementsByClassName("red")[0].style.backgroundColor = "red"
        document.getElementsByClassName("red")[0].textContent = "STOP!!!"
        break;
    case "желтый" :
        document.getElementsByClassName("yellow")[0].style.backgroundColor = "yellow"
        document.getElementsByClassName("yellow")[0].textContent = "GET READY!"
        break;
    case "зеленый" :
        document.getElementsByClassName("green")[0].style.backgroundColor = "green"
        document.getElementsByClassName("green")[0].textContent = "GO!"
        break;
    default:
        document.getElementsByClassName('red') [0].textContent='TRY'
        document.getElementsByClassName('yellow') [0].textContent='AGAIN'
        document.getElementsByClassName('green') [0].textContent='!!!'
        document.getElementsByClassName('red') [0].style.color='black'
        document.getElementsByClassName('yellow') [0].style.color='black'
        document.getElementsByClassName('green') [0].style.color='black'
}