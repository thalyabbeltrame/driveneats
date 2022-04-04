let mainCourse = null;
let drink = null;
let dessert = null;
let mainCoursePrice = null;
let drinkPrice = null;
let dessertPrice = null;
let totalPrice = null;

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
  totalPrice =
    Number(mainCoursePrice) + Number(drinkPrice) + Number(dessertPrice);
  updateInformations();
  document.querySelector(".confirm-order-container").classList.remove("hidden");
}

function updateInformations() {
  document.querySelector(
    ".confirm-order-content .main-course"
  ).innerHTML = `<h3>${mainCourse}</h3> 
  <span>${mainCoursePrice.replace(".", ",")}</span>`;
  document.querySelector(
    ".confirm-order-content .drink"
  ).innerHTML = `<h3>${drink}</h3> 
  <span>${drinkPrice.replace(".", ",")}</span>`;
  document.querySelector(
    ".confirm-order-content .dessert"
  ).innerHTML = `<h3>${dessert}</h3> 
  <span> ${dessertPrice.replace(".", ",")}</span>`;
  document.querySelector(".confirm-order-content .total-value span").innerText =
    formatPrice().format(totalPrice);
}

function confirmOrder() {
  const message = `Olá, gostaria de fazer o pedido:
- Prato: ${mainCourse}
- Bebida: ${drink}
- Sobremesa: ${dessert}
Total: ${formatPrice().format(totalPrice)}
  
Nome: ${prompt(
    "Por gentileza, poderia me informar seu nome?",
    "Insira seu nome aqui"
  )}
Endereço: ${prompt(
    "Agora, seu endereço, por favor!",
    "Insira seu endereço aqui"
  )}`;

  window.open(
    `https://wa.me/5521999999999?text=${encodeURIComponent(message)}`
  );

  document.querySelector(".confirm-order-container").classList.add("hidden");
}

function cancelOrder() {
  document.querySelector(".confirm-order-container").classList.add("hidden");
}

function formatPrice() {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
}
