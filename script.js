const bill = document.querySelector("#bill")
const people = document.querySelector("#people");
const custom = document.querySelector("#custom");
const button = document.querySelector("#button");
const tip = document.querySelector("#tip");
const total = document.querySelector("#total");
const wrongBill = document.querySelector(".wrong-bill");
const wrongPeople = document.querySelector(".wrong-people")
const tipButtons = document.querySelectorAll(".grid-item")


let peopleAmount, billAmount, tipAmount, totalAmount;
let tipRate = 0



function rst(){
 location.reload()
}

bill.addEventListener('input', calculate);
bill.addEventListener('click', () => {
  bill.value = "";
})

people.addEventListener('input', calculate);
people.addEventListener("click", () => {
  people.value = "";
})

tipButtons.forEach((tipRates) => {
  tipRates.addEventListener("click", changeRate)
})

custom.addEventListener('input', customRate);
custom.addEventListener('click', customRate)

function calculate(){
  peopleAmount = +people.value;
  billAmount = +bill.value;
  tipAmount = billAmount * tipRate;
  totalAmount = billAmount + tipAmount;
  
  
  if ( billAmount > 0 && peopleAmount > 0) {
    let tipSingle = tipAmount / people.value;
    let totalSingle = totalAmount / people.value;
    tip.innerText = `$${tipSingle.toFixed(2)}`
    total.innerText = `$${totalSingle.toFixed(2)}`;
    wrongBill.style.display = "none";
    wrongPeople.style.display = "none";
    people.style.border = "none";
    bill.style.border = "none";
    } else if (bill.value <= 0){
    wrongBill.style.display = "inline-block";
    bill.style.border = "1px solid red";
    } else if (peopleAmount <= 0){
    wrongPeople.style.display = "inline-block";
    people.style.border = "1px solid red";
  }

}

function changeRate(click){
  tipButtons.forEach((tipRates) => {
    tipRates.classList.remove('active');
    if(click.target.innerText == tipRates.innerText){
      tipRates.classList.add('active');
      tipRate = parseInt(tipRates.innerText) / 100;
    }
  })
  calculate();
} 

function customRate(){
  tipRate = custom.value / 100;
  calculate();
}

