let items = document.querySelectorAll(".ele");
let win=document.querySelector('#winner');
let stop=1;
let count=0;
let player='X';
let declare=()=>{
    if(win.innerHTML===''){
    const text=`${player},Lost the game due to timer`
    win.innerHTML=text
    stop=0;
    }
}
let state=true;
let check=()=>{
    if(items[0].innerHTML==='X' && items[1].innerHTML==='X' && items[2].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[0].innerHTML==='O' && items[1].innerHTML==='O' && items[2].innerHTML==='O'){
        win.innerHTML="O won the game";
    }else if(items[3].innerHTML==='O' && items[4].innerHTML==='O' && items[5].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[3].innerHTML==='X' && items[4].innerHTML==='X' && items[5].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[6].innerHTML==='X' && items[7].innerHTML==='X' && items[8].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[6].innerHTML==='O' && items[7].innerHTML==='O' && items[8].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[0].innerHTML==='X' && items[3].innerHTML==='X' && items[6].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[0].innerHTML==='O' && items[3].innerHTML==='O' && items[6].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[1].innerHTML==='X' && items[4].innerHTML==='X' && items[7].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[1].innerHTML==='O' && items[4].innerHTML==='O' && items[7].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[2].innerHTML==='X' && items[5].innerHTML==='X' && items[8].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[2].innerHTML==='O' && items[5].innerHTML==='O' && items[8].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[0].innerHTML==='X' && items[4].innerHTML==='X' && items[8].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[0].innerHTML==='O' && items[4].innerHTML==='O' && items[8].innerHTML==='O'){
         win.innerHTML="O won the game";
    }else if(items[2].innerHTML==='X' && items[4].innerHTML==='X' && items[6].innerHTML==='X'){
        win.innerHTML="X won the game";
    }else if(items[2].innerHTML==='O' && items[4].innerHTML==='O' && items[6].innerHTML==='O'){
         win.innerHTML="O won the game";
    }

}
let countdown=10
startTimer(countdown);
function startTimer(countdown) {
    let timerDisplay = document.getElementById("Timer");
     intervalId = setInterval(function() {
        countdown--;
        timerDisplay.innerHTML = countdown;
        if (countdown <= 0) {
            clearInterval(intervalId);
            console.log(player,"Countdown finished!");
            declare()
        }
    }, 1000);
    return intervalId;
}
function resetTimer() {
    clearInterval(intervalId);
    let newCountdown = 10;
     intervalId = startTimer(newCountdown);
}



let over=1;
items.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.innerHTML===''){
        if(state && stop){
                    if(player==='X'){
                    element.innerHTML="X";
                    element.style.backgroundColor='red';
                    player='O';
                    count++;
                    resetTimer();
                    }
                }else{
                    if(stop){
                    element.innerHTML="O";
                    element.style.backgroundColor='green';
                    player='X';
                    count++;
                    clearInterval();
                    resetTimer();
                    }
                }
                check();
                if(count==9){
                    win.innerHTML="Draw";
                }
                state=!state;
               if(stop){
                console.log('timeout')
                return;
               }
            }
            
           
    });
});
