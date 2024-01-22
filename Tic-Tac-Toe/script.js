const buttons = document.querySelectorAll('.box');
const message = document.getElementById('msg')
let turn = true;
function button(){
    buttons.forEach((button) => {
        button.addEventListener('click', ()=> {
             if (turn) {
                button.innerHTML='x';
                button.disabled = 'disabled';
                turn=false;
             }
             else{
                button.innerHTML='o';
                button.disabled = 'disabled';
                turn=true;
             }
            checkWinners();
        });
    });
}
button();

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

function checkWinners() {
    let isTie = true;

    for(let pattern of winPattern)
    {
        let pos1 = buttons[pattern[0]].innerHTML;
        let pos2 = buttons[pattern[1]].innerHTML;
        let pos3 = buttons[pattern[2]].innerHTML;
        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if(pos1 === pos2 && pos2===pos3){
                buttons[pattern[0]].style.backgroundColor = '#52b788';
                buttons[pattern[1]].style.backgroundColor = '#52b788';
                buttons[pattern[2]].style.backgroundColor = '#52b788';

                message.innerHTML = `${pos1.toUpperCase()} is Winner`;
                buttons.forEach(button => button.disabled='disabled');
                return;
            }
        }
        if (isTie && (pos1 === '' || pos2 === '' || pos3 === '')) {
            isTie = false;
        }
    }
    if (isTie) {
        message.innerHTML = "It\'s a Tie";
    }
}

document.getElementById('reset-btn')
.addEventListener('click', ()=>{
    location.reload();
})