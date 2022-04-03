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
  mainCoursePrice = Number(
    element.querySelector("span").innerText.replace("R$ ", "").replace(",", ".")
  );

  const selectedMainCourse = document.querySelector(".main-courses .selected");
  if (selectedMainCourse !== null) {
    selectedMainCourse.classList.remove("selected");
    selectedMainCourse.querySelector("ion-icon").classList.add("hidden");
  }
  if (selectedMainCourse !== element) {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
  }
  checkForSelectedOptions();
}

function selectDrink(element) {
  drink = element.querySelector("h3").innerText;
  drinkPrice = Number(
    element.querySelector("span").innerText.replace("R$", "").replace(",", ".")
  );

  selectedDrink = document.querySelector(".drinks .selected");
  if (selectedDrink !== null) {
    selectedDrink.classList.remove("selected");
    selectedDrink.querySelector("ion-icon").classList.add("hidden");
  }
  if (selectedDrink !== element) {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
  }
  checkForSelectedOptions();
}

function selectDessert(element) {
  dessert = element.querySelector("h3").innerText;
  dessertPrice = Number(
    element.querySelector("span").innerText.replace("R$", "").replace(",", ".")
  );

  selectedDessert = document.querySelector(".desserts .selected");
  if (selectedDessert !== null) {
    selectedDessert.classList.remove("selected");
    selectedDessert.querySelector("ion-icon").classList.add("hidden");
  }
  if (selectedDessert !== element) {
    element.classList.add("selected");
    element.querySelector("ion-icon").classList.remove("hidden");
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
    totalPrice = (mainCoursePrice + drinkPrice + dessertPrice).toFixed(2);

    document.querySelector(".confirm-order-content .main-course h3").innerText =
      mainCourse;
    document.querySelector(
      ".confirm-order-content .main-course span"
    ).innerText = mainCoursePrice;
    document.querySelector(".confirm-order-content .drink h3").innerText =
      drink;
    document.querySelector(".confirm-order-content .drink span").innerText =
      drinkPrice;
    document.querySelector(".confirm-order-content .dessert h3").innerText =
      dessert;
    document.querySelector(".confirm-order-content .dessert span").innerText =
      dessertPrice;
    document.querySelector(
      ".confirm-order-content .total-value span"
    ).innerText += totalPrice;

    document
      .querySelector(".confirm-order-container")
      .classList.remove("hidden");
  }
}

function isNullOrEmpty(value) {
  return value === null || value === "";
}
