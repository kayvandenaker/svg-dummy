pin6 = document.getElementById("pin-6");
pin7 = document.getElementById("pin-7");
content = document.getElementById("content");

const colors = [
    {
        color: "green",
        info: "nature"
    },
    {
        color: "blue",
        info: "sky"
    },
    {
        color: "red",
        info: "rose"
    },
    {
        color: "purple",
        info: "eggplant"
    }
]

document.addEventListener("DOMContentLoaded", function(){

    pin6.onclick = function(){ setContent(pin6) }
    pin7.onclick = function(){ setContent(pin7) }

    function setContent(pin){
        content.innerHTML = pin.id + ": ";
        for (let i = 0; i < pin.children.length; i++) {
            let colorTag = pin.children[i].className.animVal;
            if(colorTag !== undefined && colorTag !== ""){
                let obj = colors.find(o => o.color === colorTag);
                content.innerHTML += obj.color + " is " + obj.info + ", ";
            }
        }
    }

});