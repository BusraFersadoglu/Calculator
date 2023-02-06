// HTML Elements
let elements = `<div class="container">
<div class="title">
  <p>SPLI</p>
  <p>TTER</p>
</div>
<div class="main">
  <div class="left-side">
    <div class="bill">
      <p>Bill</p>
      <i class="fa-solid fa-dollar-sign icon"></i>
      <input type="number" class="input" value="0" min="0" id="bill-input"/>
    </div>
    <div class="select-tip">
      <p>Select tip %</p>
      <div class="tip-buttons">
        <input type="button" value="5" class="tips tip-5"></input>
        <input type="button" value="10" class="tips tip-10"></input>
        <input type="button" value="15" class="tips tip-15"></input>
        <input type="button" value="25" class="tips tip-25"></input>
        <input type="button" value="50" class="tips tip-50"></input>
        <input type="number" placeholder="Custom" class="tips custom-input" id="custom-input" min="0" max="100"/>
      </div>
    </div>
    <div class="number-of-people">
      <p>Number of people <span id="warn">Can't be zero</span> </p>
      <i class="fa-solid fa-user icon"></i>
      <input type="number" class="input" value="0" id="people-input" min="1"/>
    </div>
  </div>

  <div class="rigth-side">
    <div>
      <div class="tip-amount">
        <div>
          <p>Tip Amount</p>
          <small>/ person</small>
        </div>
        <div class="sum-tip">
          <p class="sum" id="tip-amount">$0.00</p>
        </div>
      </div>
      <div class="total">
        <div>
          <p>Total</p>
          <small>/ person</small>
        </div>
        <div class="sum-total">
          <p class="sum" id="total-amount">$0.00</p>
        </div>
      </div>
    </div>
    <div class="reset-button">
      <button id="resetBtn">RESET</button>
    </div>
  </div>
</div>
</div>`;

document.write(elements);

// CSS Style

let styles = `
* {
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    list-style: none;
    scroll-behavior: smooth;
  }
  *:focus {
    outline: 0;
  }
  
  html {
    background-color: #c5e4e7;
    height: 100vh;
  }
  .title {
    text-align: center;
    margin: 3rem auto;
    color: #00474a;
    letter-spacing: 5px;
    line-height: 2rem;
    font-weight: 600;
  }
  .main {
    background-color: #ffffff;
    width: 50rem;
    height: 25rem;
    margin: 5rem auto;
    border-radius: 2rem;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  }
  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1rem;
  }
  .left-side p {
    color: grey;
  }
  .left-side .input {
    color: #00474a;
    background-color: #f0f9fa;
    border-radius: 0.2rem;
    width: 80%;
    height: 2.5rem;
    text-align: right;
    margin: 0.5rem;
    padding: 0.5rem;
    cursor: pointer;
  }
  .left-side .input:focus {
    border: 2px solid #29c2ae;
  }
  .bill {
    position: relative;
  }
  .select-tip {
    margin: 1.5rem 0;
  }
  .select-tip input {
    color: #ffffff;
    background-color: #00474a;
    height: 3rem;
    width: 6rem;
    margin: 0.5rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    cursor: pointer;
  }
  .select-tip input:focus {
    background-color: #29c2ae;
    color: #00474a;
  }
  .select-tip .custom-input {
    color: #00474a;
    font-weight: 600;
    background-color: #f0f9fa;
    height: 3rem;
    width: 6rem;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.3rem;
    font-size: 1rem;
    text-align: center;
    cursor: pointer;
  }
  .custom-input:focus {
    border: 2px solid #29c2ae;
  }
  .number-of-people {
    position: relative;
  }
  .rigth-side {
    background-color: #00474a;
    color: #fff;
    width: 65%;
    border-radius: 2rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .rigth-side small {
    color: #0b676d;
  }
  .reset-button {
    margin: 0 auto;
  }
  .reset-button button {
    background-color: #0b676d;
    color: #00474a;
    width: 15rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: 600;
  }
  .reset-button button:active {
    color: #00474a;
    background-color: #29c2ae;
  }
  .tip-amount,
  .total {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem;
  }
  .sum {
    font-size: 2rem;
    color: #29c2ae;
  }
  .icon {
    position: absolute;
    left: 1rem;
    top: 2.3rem;
    color: grey;
  }
  #warn {
    color: red;
    margin-left: 8rem;
    display: none;
  }
  `;

let styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Selectors

const numberOfPeople = document.getElementById("people-input");
const billTipAmount = document.getElementById("tip-amount");
const billTotalAmount = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");
const warn = document.getElementById("warn");
const resetTip = document.getElementById("resetBtn");

function handleCalculation(tip) {
  const billAmount = Number(document.getElementById("bill-input").value);
  let tipAmount = 0;
  let totalAmount = 0;

  if (billAmount == 0 || numberOfPeople.value == 0) {
    alert("Enter valid data");
    numberOfPeople.style.border = "2px solid red";
    warn.style.display = "inline-block";
  } else {
    numberOfPeople.style.border = "2px solid #00474a";
    warn.style.display = "none";

    tipAmount = billAmount * (tip.value / 100);
    totalAmount = (billAmount + tipAmount) / numberOfPeople.value;
  }
  billTipAmount.innerText = tipAmount.toFixed(2);
  billTotalAmount.innerText = totalAmount.toFixed(2);
}
function handleReset() {
  document.getElementById("bill-input").value = "";
  numberOfPeople.value = "";
  billTipAmount.innerText = "$0.00";
  billTotalAmount.innerText = "$0.00";
}

tips.forEach((tip) => {
  tip.addEventListener("click", () => {
    handleCalculation(tip);
  });
});

resetTip.addEventListener("click", handleReset);
