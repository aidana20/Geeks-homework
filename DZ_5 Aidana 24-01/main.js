
const input= document.getElementById('input')
const createButton =document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo =()=> {
    if(input.value.trim()==='') {
        input.value = ''
        return false
    } else{
        const div =document.createElement('div')
        const text = document.createElement('h3')
        const del = document.createElement('delete')
        const edit = document.createElement('edit')
        const buttons = document.createElement('buttons')

        buttons.setAttribute('class','buttons')
        del.setAttribute('class', 'delete')
        edit.setAttribute('class', 'edit')
        div.setAttribute('class','block_text')


        text.innerHTML=input.value
        edit.innerHTML = 'Edit'
        del.innerHTML = 'Delete'
        div.append(text,buttons)
        todoList.prepend(div)
        buttons.append(del,edit)

        del.onclick = function(){
            div.remove()
        }
        edit.onclick = function (){
            let btn = prompt(`Ты редактируешь текст или слово: ${text.innerText} :`)
            if (btn !== null) {
                text.innerText = btn;
            }
            else if(btn===' '){
                return false
            }
        }
    }
    input.value = ''
}
createButton.onclick=()=>createTodo()
window.addEventListener('keydown',(event)=>{
    if(event.keyCode===13){
        createTodo()
        console.log('Enter')
    }
})
