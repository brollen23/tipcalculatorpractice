let billAmount = document.querySelector("#billA");
let totalNumG = document.querySelector("#numOfG");
let tipP = document.querySelector("#tipP");
let tipAmount = document.querySelector("#tipA");
let totalAmount = document.querySelector("#totalA");
let buttons= document.querySelectorAll(".tipButton");
let button = document.querySelector("#calculate");

button.addEventListener("click", function(){
    billAmount = document.querySelector("#billA").value;
    tipP = document.querySelector("#tipP").value;
    let numberOfPeople = parseFloat(totalNumG.value);
    tipAmount = document.querySelector("#tipA").value= (parseFloat(billAmount) * tipP/ 100 /numberOfPeople).toFixed(2);
    document.querySelector("#totalA").value = (parseFloat(billAmount) / numberOfPeople + parseFloat(tipAmount)).toFixed(2);
})



function tipButtonHandler(event){
    let button = event.currentTarget;
    tipAmount = parseFloat(button.innerText);
    document.querySelector("#tipP").value = tipAmount;
}
for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", tipButtonHandler);
}
