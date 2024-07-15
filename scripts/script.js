const $ = document
const burgerMenuIcon = $.querySelector(".fa-bars")
const navBar = $.getElementById("navBar")
const burgerMenu =$.getElementById("burgerMenu")
let isTrue = true

burgerMenuIcon.addEventListener("click", function(){
    // console.log("clicked")
    if(isTrue){
        burgerMenu.style.display="block"
        isTrue = false
    }else{
        burgerMenu.style.display = "none"
        isTrue = true
    }
    

})