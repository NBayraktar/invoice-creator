const prices = [];
const btnWash = document.getElementById('btn-wash');
const btnMow = document.getElementById('btn-mow');
const btnPull = document.getElementById('btn-pull');
const washCarP = document.getElementById('wash-car-p');
const mowLownP = document.getElementById('mow-lawn-p');
const pullWeedsP = document.getElementById('pull-weeds-p');
const totalAmount = document.getElementById('total-amount');

btnWash.addEventListener('click', function () {
  addPriceToArray(10, washCarP);

})

btnMow.addEventListener('click', function () {
  addPriceToArray(20, mowLownP);
})

btnPull.addEventListener('click', function () {
  addPriceToArray(30, pullWeedsP);
})

function addPriceToArray(amount, services) {
  prices.push(amount);
  services.innerHTML += amount;
  calculateTotal()
}


function calculateTotal() {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
  }
  return totalAmount.innerHTML += sum;
}