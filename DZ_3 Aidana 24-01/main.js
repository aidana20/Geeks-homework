//задание 1
let parameter1 = prompt('Введите первое число')
let parameter2 = prompt('Введите второе число')

function numResult (){
 if(Number(parameter1) < Number(parameter2)){
console.log(Number(parameter1))
 }else if (Number(parameter1) > Number(parameter2)){
console.log(Number(parameter2))
}else{
     alert('ERROR')
 }
 }
 numResult()

//Задание2

let result= prompt('Aidana')
function newPage() {
 console.log(result.length)
}
newPage(result)

//Задание3

const  num1 = Number( prompt('Введите первое число'))
const  oper = prompt('Введите операцию')
const  num2 = Number( prompt('Введите второе число'))

function Calculate (one, two){
    if(isNaN( two) || isNaN(one) || (one,two <= 0) ){
        alert("У вас ошибка, пожалуйста введите корректно")
    }else if(oper === "+"){
        alert(num1 + " + " + num2 + " = " + ( num1 + num2 ))
  }else if(oper === "-"){
        alert(num1 + " - " + num2 + " = " + ( num1 - num2 ))
    } else if(oper === "/"){
    alert(num1 + " / " + num2 + " = " + ( num1 / num2 ))
    }else if(oper === "*"){
        alert(num1 + " * " + num2 + " = " + ( num1 * num2 ))
    }else {
        alert("Введите операцию правильно")
}
}
Calculate(num1, num2)