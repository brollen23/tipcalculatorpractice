let billAmount = document.querySelector("#billA");
let totalNumG = document.querySelector("#numOfG");
let tipP = document.querySelector("#tipP");
let tipAmout = document.querySelector("#tipA");
let totalAmount = document.querySelector("#totalA");
let buttons= document.querySelectorAll(".tipButton");

function tipButtonHandler(event){
    let button = event.currentTarget;
    tipAmout = parseFloat(button.innerText);
    document.querySelector("#tipP").value = tipAmout;
}
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", tipButtonHandler);
}
document.getElementById("calculate").onClick = function(){
    calculateTip();
};

// //Hide the tip amount until calculate button is pressed
// document.getElementById("tipA").style.display = "none";