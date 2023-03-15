//задание 1
var num1 = prompt('Введите первое число')
var num2 = prompt('Введите второе число')

function numResult (){
 if(Number(num1) < Number(num2)){
console.log(Number(num1))
 }else if (Number(num1) > Number(num2)){
console.log(Number(num2))
}else{
     alert('ERROR')
 }
 }
 numResult()

//Задание2

var result= prompt('Aidana')
function newPage() {
 console.log(result.length)
}
newPage(result)

//Задание3

const  num1 = Number( prompt('Введите первое число'))
const  oper = prompt('Введите операцию')
const  num2 = Number( prompt('Введите второе число'))

function numResult (one, two){
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
numResult(num1, num2)