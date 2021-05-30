var icons =  document.getElementsByClassName("f");
var div = document.getElementById("changer-div");
var textTag = document.getElementById("texta");
var nameTag = document.getElementById("name");
var btnTag = document.getElementById("button")
function change(index) {
    div.style.justifyContent = "flex-start"
    textTag.style.display = "block"
    btnTag.style.display = "block"
    for (var i = icons.length - 1; i >= 0; i--) {
        if (index != i) {
          icons[i].style.display = "none" 
        }


    }
}

function send(){
nameTag.innerText = textTag.value
textTag.style.display = "none"
btnTag.style.display = "none"
nameTag.style.color = "yellow"
nameTag.style.fontSize ="48px"
}












































