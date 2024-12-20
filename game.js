let box = document.querySelectorAll(".box");
let rstgame = document.querySelector("#resetbtn");
let new_btn = document.querySelector("#newgame");
let msg_container = document.querySelector(".msg_container");
let message = document.querySelector("#msg");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

box.forEach((box) =>  {
    box.addEventListener("click", () => {
        if(turnO === true)  {
            box.innerText = "O";
            turnO = false;
        }
        else    {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

         cheakwinner();

    })
}) 


const showWinner = (winner) =>  {
    message.innerText = `Congratulation ! Winner is ${winner}`;
    msg_container.classList.remove("hide");
    
}


const cheakwinner = ()    =>  {
    for(let pattern of winpatterns) {
    
    let pos1value = box[pattern[0]].innerText;
    let pos2value = box[pattern[1]].innerText;
    let pos3value = box[pattern[2]].innerText;

    if(pos1value != "" && pos2value != "" && pos3value != "")   {
        if(pos1value == pos2value && pos2value == pos3value)    {
        showWinner(pos1value);
        }
      }  
    }
};
   
const disableboxes = ()   =>  {
    for(let boxes of box)   {
        box.disabled = true;
    }
}

const enableboxes = ()   =>  {
    for(let boxes of box)   {
        boxes.disabled = false;
    }
}
    
const resetbtn = ()  =>    {
    turnO = true;
    enableboxes();
    msg_container.classList.add("hide");
}


new_btn.addEventListener("click",resetbtn);
rstgame.addEventListener("click",resetbtn);


// let count = 0;

//  const cont = ()  =>  {
//     count++;
//     console.log(count);
//    }

//    box.addEventListener("click",cont)