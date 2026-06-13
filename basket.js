// CLEAR BASKET ON FRESH LOAD
localStorage.removeItem('basket');

// GET BASKET FROM STORAGE
function getBasket() {
  return JSON.parse(localStorage.getItem('basket')) || [];
}

// ADD ITEM TO BASKET
function addToBasket(name, price) {
  const basket = getBasket();
  const existing = basket.find(item => item.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    basket.push({ name, price, quantity: 1 });
  }
  localStorage.setItem('basket', JSON.stringify(basket));
  updateBasketCount();
}

// UPDATE BASKET COUNT IN NAV
function updateBasketCount() {
  const basket = getBasket();
  const total = basket.reduce((sum, item) => sum + item.quantity, 0);
  const counter = document.getElementById('basket-count');
  if (counter) counter.textContent = total;
}

// HAMBURGER MENU
window.onload = function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }
};

// RUN ON PAGE LOAD
updateBasketCount();