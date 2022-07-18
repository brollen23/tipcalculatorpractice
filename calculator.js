let billAmount = document.querySelector("#billA");
let totalNumG = document.querySelector("#numOfG");
let tipP = document.querySelector("#tipP");
let tipAmount = document.querySelector("#tipA");
let totalAmount = document.querySelector("#totalA");
let buttons= document.querySelectorAll(".tipButton");
let button = document.querySelector("#btn");

button.addEventListener("click", function(){
    billAmount = document.querySelector("#billA").value;
    tipP = document.querySelector("#tipP").value;
    tipAmount = document.querySelector("#tipA").value= parseFloat(billAmount)/ tipP;
    totalAmount = document.querySelector("#totalA").value = parseFloat(billAmount) + parseFloat(tipAmount).toFixed(2);
})



function tipButtonHandler(event){
    let button = event.currentTarget;
    tipAmount = parseFloat(button.innerText);
    document.querySelector("#tipP").value = tipAmount;
}
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", tipButtonHandler);
}
