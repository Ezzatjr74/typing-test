let mybox = document.getElementById("box");
let score = document.getElementById('ourscore');
let ourtimer = document.getElementById('ourtimer');
let mystr = document.getElementById("myinput");
let arrstr = mystr.textContent.toString();
let timer = 30;
let counter = 0;
let i = 0;

window.addEventListener("keydown",function(e){
    //     stop function if typing done
    if(i == 181 || timer == 0)return

    let eleletter = document.createElement('span');
    let ourkey =  String.fromCharCode(e.keyCode).toLowerCase();
    eleletter.textContent = `${arrstr[i]}`;
    mybox.appendChild(eleletter);


    if (arrstr[i] == ourkey){
        mybox.style.border = "6px green solid"
        counter++
    }else{
        eleletter.style.color = 'red'
        mybox.style.border = "6px red solid"
    }
    
    // stop counte and printe score

//   counte start 
if (i == 0){
    this.setInterval(countdown,1000)
}
// counte start and stop 
function countdown (){

    if(timer == 0 || i >= 180)return
    timer--
    ourtimer.innerText = `Socend  
    ${timer}`;
    if (timer == 0){
        scores()
    }
}
if(timer == 0 || i >= 180){
    scores()
    this.clearInterval(countdown)
}
//    score function
    function scores (){
    let num = Math.floor((( counter/ 181) * 100));
    score.style.top = '110px'
    score.innerText = `YourScore
                       ${num}%`;    
}
    
        i++
        
    
})

