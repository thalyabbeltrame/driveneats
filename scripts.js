// Global variables
let mainCourse = null;
let drink = null;
let dessert = null;

let mainCoursePrice = null;
let drinkPrice = null;
let dessertPrice = null;
let totalPrice = null;

let customerName;
let customerAddress;

function selectMainCourse(element) {
  mainCourse = element.querySelector("h3").innerText;
  mainCoursePrice = element
    .querySelector("span")
    .innerText.replace("R$ ", "")
    .replace(",", ".");

  const selectedMainCourse = document.querySelector(".main-courses .selected");
  if (selectedMainCourse !== null) {
    selectedMainCourse.classList.remove("selected");
    selectedMainCourse.querySelector("ion-icon").classList.add("hidden");
  }
  element.classList.add("selected");
  element.querySelector("ion-icon").classList.remove("hidden");
  checkForSelectedOptions();
}

function selectDrink(element) {
  drink = element.querySelector("h3").innerText;
  drinkPrice = element
    .querySelector("span")
    .innerText.replace("R$ ", "")
    .replace(",", ".");

  selectedDrink = document.querySelector(".drinks .selected");
  if (selectedDrink !== null) {
    selectedDrink.classList.remove("selected");
    selectedDrink.querySelector("ion-icon").classList.add("hidden");
  }
  element.classList.add("selected");
  element.querySelector("ion-icon").classList.remove("hidden");
  checkForSelectedOptions();
}

function selectDessert(element) {
  dessert = element.querySelector("h3").innerText;
  dessertPrice = element
    .querySelector("span")
    .innerText.replace("R$ ", "")
    .replace(",", ".");

  selectedDessert = document.querySelector(".desserts .selected");
  if (selectedDessert !== null) {
    selectedDessert.classList.remove("selected");
    selectedDessert.querySelector("ion-icon").classList.add("hidden");
  }
  element.classList.add("selected");
  element.querySelector("ion-icon").classList.remove("hidden");
  checkForSelectedOptions();
}

function checkForSelectedOptions() {
  if (mainCourse !== null && drink !== null && dessert !== null) {
    document.querySelector("footer button").classList.add("enabled");
    document.querySelector("footer button").disabled = false;
    document.querySelector("footer button p").innerText = "Fechar pedido";
  }
}

function saveOrder() {
  customerName = prompt("Por gentileza, poderia me informar seu nome?");
  customerAddress = prompt("Agora, seu endereço, por favor!");
  if (!isNullOrEmpty(customerName) && !isNullOrEmpty(customerAddress)) {
    totalPrice = calculateTotalPrice();
    updateInformations();
  } else {
    document.querySelector(
      ".confirm-order-content .total-value span"
    ).innerText = "R$ ";
  }
}

function confirmOrder() {
  const message = `Olá, gostaria de fazer o pedido:\n- Prato: ${mainCourse}\n- Bebida: ${drink}\n- Sobremesa: ${dessert}\nTotal: R$ ${totalPrice}\n\nNome: ${customerName}\nEndereço: ${customerAddress}`;
  window.open(
    `https://wa.me/5521999999999?text=${encodeURIComponent(message)}`
  );
  document.querySelector(".confirm-order-container").classList.add("hidden");
}

function cancelOrder() {
  document.querySelector(".confirm-order-container").classList.add("hidden");
  document.querySelector(".confirm-order-content .total-value span").innerText =
    "R$ ";
}

function calculateTotalPrice() {
  return (
    Number(mainCoursePrice) +
    Number(drinkPrice) +
    Number(dessertPrice)
  ).toFixed(2);
}

function updateInformations() {
  document.querySelector(".confirm-order-content .main-course h3").innerText =
    mainCourse;
  document.querySelector(".confirm-order-content .main-course span").innerText =
    mainCoursePrice.replace(".", ",");
  document.querySelector(".confirm-order-content .drink h3").innerText = drink;
  document.querySelector(".confirm-order-content .drink span").innerText =
    drinkPrice.replace(".", ",");
  document.querySelector(".confirm-order-content .dessert h3").innerText =
    dessert;
  document.querySelector(".confirm-order-content .dessert span").innerText =
    dessertPrice.replace(".", ",");
  document.querySelector(
    ".confirm-order-content .total-value span"
  ).innerText += totalPrice.replace(".", ",");
  document.querySelector(".confirm-order-container").classList.remove("hidden");
}

function isNullOrEmpty(value) {
  return value === null || value === "";
}
