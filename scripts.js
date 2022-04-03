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
  mainCourse = null;
  mainCoursePrice = null;

  const selectedMainCourse = document.querySelector(".main-courses .selected");
  if (selectedMainCourse !== null) {
    selectedMainCourse.classList.remove("selected");
    selectedMainCourse.querySelector("ion-icon").classList.add("hidden");
  } else {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
  }
  if (selectedMainCourse !== element) {
    mainCourse = element.querySelector("h3").innerText;
    mainCoursePrice = Number(
      element
        .querySelector("span")
        .innerText.replace("R$ ", "")
        .replace(",", ".")
    );
  }
  checkForSelectedOptions();
}

function selectDrink(element) {
  drink = null;
  drinkPrice = null;

  selectedDrink = document.querySelector(".drinks .selected");
  if (selectedDrink !== null) {
    selectedDrink.classList.remove("selected");
    selectedDrink.querySelector("ion-icon").classList.add("hidden");
  } else {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
  }

  if (selectedDrink !== element) {
    drink = element.querySelector("h3").innerText;
    drinkPrice = Number(
      element
        .querySelector("span")
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
  }
  checkForSelectedOptions();
}

function selectDessert(element) {
  dessert = null;
  dessertPrice = null;

  selectedDessert = document.querySelector(".desserts .selected");
  if (selectedDessert !== null) {
    selectedDessert.classList.remove("selected");
    selectedDessert.querySelector("ion-icon").classList.add("hidden");
  } else {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
  }

  if (selectedDessert !== element) {
    dessert = element.querySelector("h3").innerText;
    dessertPrice = Number(
      element
        .querySelector("span")
        .innerText.replace("R$", "")
        .replace(",", ".")
    );
  }
  checkForSelectedOptions();
}

function checkForSelectedOptions() {
  if (mainCourse !== null && drink !== null && dessert !== null) {
    document.querySelector(".ending").classList.remove("hidden");
    document.querySelector(".on-hold").classList.add("hidden");
  } else {
    document.querySelector(".ending").classList.add("hidden");
    document.querySelector(".on-hold").classList.remove("hidden");
  }
}

function saveOrder() {
  customerName = prompt("Por gentileza, poderia me informar seu nome?");
  customerAddress = prompt("Agora, seu endereço, por favor!");

  if (!isNullOrEmpty(customerName) && !isNullOrEmpty(customerAddress)) {
    totalPrice = calculateTotalPrice();

    document.querySelector(".confirm-order-content .main-course h3").innerText =
      mainCourse;
    document.querySelector(
      ".confirm-order-content .main-course span"
    ).innerText = Number(mainCoursePrice).toFixed(2);
    document.querySelector(".confirm-order-content .drink h3").innerText =
      drink;
    document.querySelector(".confirm-order-content .drink span").innerText =
      Number(drinkPrice).toFixed(2);
    document.querySelector(".confirm-order-content .dessert h3").innerText =
      dessert;
    document.querySelector(".confirm-order-content .dessert span").innerText =
      Number(dessertPrice).toFixed(2);
    document.querySelector(
      ".confirm-order-content .total-value span"
    ).innerText += totalPrice;

    document
      .querySelector(".confirm-order-container")
      .classList.remove("hidden");
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
  return (totalPrice = (mainCoursePrice + drinkPrice + dessertPrice).toFixed(
    2
  ));
}

function isNullOrEmpty(value) {
  return value === null || value === "";
}
