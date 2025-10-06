let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let unique=document.querySelector("#unique");
let neww=document.querySelector("#new");
let turnO=true;
const winning=[
    [0,1,2],
    [1,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
];
function refresh(){
    unique.innerText="";
    unique.style.backgroundColor="red";
}
function disableboxes(){
    for(let box of boxes){
        box.disabled=true;
    }
};
function enableboxes(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
function onwin(a){
    unique.style.backgroundColor="green";
    unique.innerText=`CONGRATS ${a}`;
    disableboxes();
}
boxes.forEach((box) => {
      box.addEventListener("click",function add(){
        console.log("box clicked"); 
        if(turnO){  //player O
           box.innerText="O";
           turnO=false;
        }
        else{  //player X
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
      })
}) 
function checkWinner(){
    for(let patt of winning){
            let pos1=boxes[patt[0]].innerText;
          let pos2=  boxes[patt[1]].innerText;
            let pos3=boxes[patt[2]].innerText;
            if(pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2 && pos2===pos3){
                  onwin(pos1);
               console.log("winner");
                }
    }

}}
function resetGame(){
    turnO=true;
    enableboxes();
    refresh();
};
neww.addEventListener("click", resetGame);
reset.addEventListener("click",resetGame);