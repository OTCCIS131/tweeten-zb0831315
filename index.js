let buttons = document.getElementsByClassName("glyphicon glyphicon-heart")
buttons = Array.from(buttons)
buttons.forEach(button =>{
    button.addEventListener("click", e =>{
        let currentCount = button.nextSibling.textContent//.trim
        newCount = parseInt(currentCount) + 1
        button.nextSibling.textContent = newCount
    })
})