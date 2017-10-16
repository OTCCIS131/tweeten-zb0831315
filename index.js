// let buttons = document.getElementsByClassName("glyphicon glyphicon-heart")
// buttons = Array.from(buttons)
// buttons.forEach(button =>{
//     button.addEventListener("click", e =>{
//         let currentCount = button.nextSibling.textContent//.trim
//         newCount = parseInt(currentCount) + 1
//         button.nextSibling.textContent = newCount
//     })
// })

$(function(){
    $('.glyphicon').click(event => {
        let currentCount = $(event.target).next().text()
        let newCount = parseInt(currentCount) + 1
 
        $(event.target).next().text(newCount)
    })

    $("#newTweet").submit(function (e){
        e.preventDefault()
        let newTweetInput = $('.text-box-comment', $(this))
        let newTweet = newTweetInput.val()

    let newTweetElement = $('.panel-body', $('.panel-default')).clone()

    newTweetElement.text(newTweet)

    let newTweetElement = $('<div class="panel-body">' + newTweet +'</div>')

    newTweetElement.addClass('panel-body')

    newTweetElement.text(newTweet)

    $("#newTweet").append(newTweetElement)
    newTweetInput.val('')
    })
})