let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

 const resetGame=()=>{
    boxEnable();
    turn=true;
    emp();
    count=0;
    msgContainer.classList.add("hide");
    
}

 const emp=()=>{
    for(box of boxes){
        box.innerText="";
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        //  console.log("box was clicked");
        if(turn===true){
        box.innerText="X";
         turn=false;   
        }   else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    })
})

const gameDraw=()=>{
    msg.innerText="Game Was A Draw";
    msgContainer.classList.remove("hide");
    boxDisable();
}

const boxDisable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const boxEnable=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    boxDisable();
}
const checkWinner=()=>{
    for(let pattern of winPatterns){

        let posVal1=boxes[pattern[0]].innerText;
        let posVal2=boxes[pattern[1]].innerText;
        let posVal3=boxes[pattern[2]].innerText;
        
        if(posVal1!="" && posVal2!="" && posVal3!=""){
            if(posVal1===posVal2 && posVal2===posVal3){
                // console.log("winner",posVal1);
                showWinner(posVal1);
            }
        }
    }
}

resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);
