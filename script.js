const prices = [];
const btnWash = document.getElementById('btn-wash');
const btnMow = document.getElementById('btn-mow');
const btnPull = document.getElementById('btn-pull');


btnWash.addEventListener('click', function () {
  addPrice(10);
})

btnMow.addEventListener('click', function () {
  addPrice(20);
})

btnPull.addEventListener('click', function () {
  addPrice(30);
})


function addPrice(amount) {
  prices.push(amount);
  console.log(prices);
}