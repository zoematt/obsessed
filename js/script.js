console.log("java script is loading");

function beyonce(){
    alert("Beyonce wins the most grammy in history!")
}

let accept = document.querySelector('#cookie_policy')
function acceptCookies() {
    accept.remove()
}

let likeCount = 0
let like= document.querySelector('.likes')
function addLike(){
    likeCount ++
    like.innerText = likeCount
}