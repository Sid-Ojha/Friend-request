var istatus = document.querySelector("h5")
// var addFriend = document.querySelector("#add")
// var removeFriend = document.querySelector("#remove")


// addFriend.addEventListener("click", function(){
//     istatus.innerHTML = "Friends"
//     istatus.style.color ="green"
// })

// removeFriend.addEventListener("click",function(){
//     istatus.innerHTML ="Stranger"
//     istatus.style.color = "red"
// })

var btn = document.querySelector("#btn")
var check = 0

btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        btn.innerHTML = "remove Friend"
        btn.style.backgroundColor = "#dadada"
        btn.style.color = "black"
        check = 1
    }

    else {
        istatus.innerHTML = "Stranger"
        istatus.style.color = "red"
        btn.innerHTML = "add Friend"
        btn.style.backgroundColor = "green"
        btn.style.color = "#fff"
        check = 0
    }
})