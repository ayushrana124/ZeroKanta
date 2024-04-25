let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#newGame");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true; // if box once clicked Cant be clicked again

        checkWinner();
    });
});

const checkWinner = () => {
  for(let pattern of winPattern){
let pos1Val = boxes[pattern[0]].innerText;
let pos2Val = boxes[pattern[1]].innerText;
let pos3Val = boxes[pattern[2]].innerText;

if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
      }
}
  }
};

const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgCont.classList.add("hide");
}


const showWinner =  (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disabledBoxes();
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

