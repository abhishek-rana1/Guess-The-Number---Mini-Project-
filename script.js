const submitBtn=document.querySelector('.submit');
const inputValue=document.querySelector('.guess-input');
const h2=document.querySelector('h2');
const previousGuessValue=document.querySelector(".previous-guess");
const storePreviousGuess=[];
const remainGuess=document.querySelector(".guess-remaining");
let remainGuessValue=10;
let nextBtn=document.querySelector(".next-btn");
let welcomePage=document.querySelector(".welcome-page");
let userName=document.querySelector(".username");
let displayUserName=document.querySelector(".welcome");

nextBtn.addEventListener("click",function(){
    localStorage.setItem("username",userName.value);
    displayUserName.innerHTML=`Welcome ${userName.value} 😀`;
    welcomePage.style.display="none";
})

window.addEventListener("DOMContentLoaded",function(){
    let userInput = this.localStorage.getItem("username");
    if(userInput){
        console.log(userInput)
        displayUserName.innerHTML=userInput;
        displayUserName.innerHTML=`Welcome ${userInput} 😀`;
        welcomePage.style.display="none";
        // this.localStorage.clear();
        
    }
})

// Code Start From Here 
submitBtn.addEventListener("click",function(){
   valueCheck();
   if(inputValue.value!=="" && parseInt(inputValue.value ) && inputValue.value<=100){

    compare();
    previousGuess();
    remainGuessFunction();
           
   }


   else{}
})


// Functions 

function valueCheck(){
    if(inputValue.value!=="" && parseInt(inputValue.value ) && inputValue.value<=100){
       
    }
 
    else{
       alert("Enter A Number Between 1 to 100 !");
    }
}


function compare(){
    let random=Math.floor(Math.random()*100)+1;
    if(inputValue.value==random){
        h2.textContent="You Guess a Right Number";
        h2.style.cssText="color:blue;";

        setTimeout(() => {
    remainGuess.innerHTML=`You Win ! 🥳`;
    return alert (previousGuessValue.innerHTML=`Congratulations 🎉! You Win 🥳🎉 ${window.location.reload()}`);
}, 1000);
       
            
    }

    else{
     
        h2.textContent="You Guess a Wrong Number !";
        h2.style.cssText="color:red;";
        setTimeout(() => {
           h2.style.transition = "all 0.7s linear";
           h2.style.color="black";
            h2.textContent="Your Guess is ? ";
            
        }, 1500);
   }

 
   console.log(random);
}

function previousGuess(){
    if(remainGuessValue>0){ 
        storePreviousGuess.push(inputValue.value);
        previousGuessValue.innerHTML=`Your Previous Guesses Are : ${storePreviousGuess}`
    }

    else{
        return alert(previousGuessValue.innerHTML=`GAME OVER!  Your Previous Guesses Are : ${storePreviousGuess} ${window.location.reload()}`);
    }

}

function remainGuessFunction(){
if(remainGuessValue>0){
    remainGuessValue=remainGuessValue-1;
    remainGuess.innerHTML=`Your Guess Remaining Are : ${remainGuessValue}`;
    
}

else{
    return remainGuess.innerHTML="Game Over!";
}
}


