let myInput = document.querySelector(".email");
  
 let val = /\w+@\w+.(com|net|org|io)/ig;

 let valMessage = document.querySelector(".val-message");
   
 let reqMessage = document.querySelector(".req-message");
 let valIcon = document.querySelector(".val-icon");


 myInput.addEventListener("input",() => {
        if(myInput.value.match(val)){
                valIcon.style.display = "none";
                myInput.classList.remove("not-valid");
                valMessage.style.display = "none";
                myInput.classList.add("valid");
        }else{
                myInput.classList.remove("valid");
                valMessage.style.display = "block";
                myInput.classList.add("not-valid");
                valIcon.style.display = "block";
        }
});
myInput.addEventListener("focusout", () => {
        if(myInput.value.match(val)){
                return true;
        }else{
        myInput.classList.remove("not-valid");
        valMessage.style.display = "none";
        reqMessage.style.display = "block";
}
});
myInput.addEventListener("focus", () => {
        reqMessage.style.display = "none";
        if(myInput.value.match(val)){
                valIcon.style.display = "none";
                myInput.classList.remove("not-valid");
                valMessage.style.display = "none";
                myInput.classList.add("valid");
        }else{
                myInput.classList.remove("valid");
                valMessage.style.display = "block";
                myInput.classList.add("not-valid");
                valIcon.style.display = "block";
        }
})



let nInput = document.querySelector(".name");
let nVal = /\w+\s\w+/ig;

nInput.addEventListener("input", () => {
        if(nInput.value.match(nVal)){
                nInput.classList.add("valid");
                nInput.classList.remove("not-valid");
        }else{
                nInput.classList.remove("valid");
                nInput.classList.add("not-valid");
        }
})


nInput.addEventListener("focusout", () => {
        if(nInput.value.match(nVal)){
                return true;
        }else{
        nInput.classList.remove("not-valid");
}
});
