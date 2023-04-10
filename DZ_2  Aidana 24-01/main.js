 //Задание 1
var arr= [10,20,30,50,235,3000,415,650, 555 ]
    for (var i = 0; i < arr.length; i++){
    var numbersSort = arr[i].toString()
    if (numbersSort[0] === '1' || numbersSort[0] ==='2' || numbersSort[0]==='5') {
        console.log(numbersSort)
    }
    else{
        console.log('ERROR')
    }
}
//Задание 2
 for (var i = 20; i >= 0; i--) {
    console.log(i);
 }

//ЗАДАНИЕ 3
var  svetofor =prompt('Введите цвета светофора: красный, желтый или зеленый').toLocaleLowerCase().trim()
var object= {
    name:'красный',
    name1:'желтый',
    name2:'зеленый'
}
 switch (svetofor) {
     case object.name:
         alert( 'Стоп!');
         break;
     case object.name1:
         alert( 'Приготовься!' );
         break;
     case object.name2:
         alert( 'Иди!' );
         break;
     default:
         alert( "Введите цвета!" );
 }

 // Задание № 4
 var arr = []
 for (var i = 0; i < 11; i++) {
     arr[i] = i
 }
 console.log(arr)

