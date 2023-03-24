// Задание № 2
const input = document.getElementById('nameInp')
const text = document.querySelector('.text')


input.addEventListener("keydown", (event) => {
    if (event.keyCode === 13) {
        let arr = []

        const reverse = input.value.split("").reverse().join("")
        arr.push(reverse)
        arr.forEach((element) => {
            const div = document.createElement("div")
            const button = document.createElement("button")
            button.innerHTML = "delete"

            button.onclick = () => {
                div.remove()
            }

            div.innerHTML = element
            div.append(button)
            text.append(div)
        })
    }
})
//Задание № 1
// input.addEventListener('input',()=>{
//     const reverse = input.value.split("").reverse().join("")
//     text.innerHTML = reverse
// })

