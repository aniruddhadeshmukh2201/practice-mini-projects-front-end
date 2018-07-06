var button = document.querySelector("button");
isPurple = false;

// button.addEventListener("click", function(){
//     if(isPurple){
//     document.querySelector("body").style.background = "white";
//
//     } else {
//     document.body.style.background = "purple";
//
//     }
//     isPurple = !isPurple;
// });
button.addEventListener("click", function(){
document.body.classList.toggle("purple");

});
