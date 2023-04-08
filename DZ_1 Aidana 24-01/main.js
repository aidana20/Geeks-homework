var grade = Number(prompt('Оцените наше приложение! C 1 до 10ти баллов'))
if (grade>=5 && grade<=10){
    alert('Спасибо за высокую оценку!')
} else if (grade<5){
    alert('Мы работаем над улучшением сервиса!')
}
else{
    alert('ERROR!')
}




var weeks =prompt('Введите ENG или RUS')
if(weeks==='RUS'){
    console.log( ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'])
}else if (weeks==='ENG'){
    console.log(['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'])
}else{
    alert('Ошибка, Введите значение RUS или ENG')
}





