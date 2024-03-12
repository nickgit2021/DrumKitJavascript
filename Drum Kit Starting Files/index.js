// adding click-event listner to all buttons having class ".drum" using for loop in one go.
for(i=0; i < document.querySelectorAll(".drum").length ; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
    let buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);  
    addAnimation(buttonInnerHtml);
});
}

//add keypress-event listner to entire HTML document and Detecting which key is pressed via a "key" property of "event" (event.key)
document.addEventListener("keypress", function(event){
    makeSound(event.key);    //(event:keypressed or key released) and (.key: which key is pressed or released).
    addAnimation(event.key);
});

// function definition that are called in both above blocks of code for click and keypressed events.
function makeSound(key){
    switch (key){
        case 'w':
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;
        case 'a':
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
        case 's':
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;  
        case 'd':
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break;  
        case 'j':
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        case 'k':
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
        case 'l':
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;
        default:
            alert("Sorry!!!!! No Sound Found..")
            break;
     }
}

function addAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); 
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);

}

