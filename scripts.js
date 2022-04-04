let mainCourseName = null;
let drinkName = null;
let dessertName = null;
let mainCoursePrice = null;
let drinkPrice = null;
let dessertPrice = null;
let totalPrice = null;

function selectOption(element, typeOption) {
  const selected = document
    .querySelector(typeOption)
    .querySelector(".selected");
  if (selected !== null && selected !== element) {
    selected.classList.remove("selected");
    selected.querySelector("ion-icon").classList.add("hidden");
  }
  element.classList.toggle("selected");
  element.querySelector("ion-icon").classList.toggle("hidden");
  checkForSelectedOptions();
}

function checkForSelectedOptions() {
  let selectedOptions = document.querySelectorAll(".selected");
  if (selectedOptions.length === 3) {
    document.querySelector("footer button").classList.add("enabled");
    document.querySelector("footer button").disabled = false;
    document.querySelector("footer button p").innerText = "Fechar pedido";

    mainCourseName = document.querySelector(
      ".main-courses .selected h3"
    ).innerText;
    drinkName = document.querySelector(".drinks .selected h3").innerText;
    dessertName = document.querySelector(".desserts .selected h3").innerText;
    mainCoursePrice = document
      .querySelector(".main-courses .selected span")
      .innerText.replace("R$ ", "")
      .replace(",", ".");
    drinkPrice = document
      .querySelector(".drinks .selected span")
      .innerText.replace("R$ ", "")
      .replace(",", ".");
    dessertPrice = document
      .querySelector(".desserts .selected span")
      .innerText.replace("R$ ", "")
      .replace(",", ".");
  } else {
    document.querySelector("footer button").classList.remove("enabled");
    document.querySelector("footer button").disabled = true;
    document.querySelector("footer button p").innerText =
      "Selecione os 3 itens para fechar o pedido";
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
  ).innerHTML = `<h3>${mainCourseName}</h3> 
  <span>${mainCoursePrice.replace(".", ",")}</span>`;
  document.querySelector(
    ".confirm-order-content .drink"
  ).innerHTML = `<h3>${drinkName}</h3> 
  <span>${drinkPrice.replace(".", ",")}</span>`;
  document.querySelector(
    ".confirm-order-content .dessert"
  ).innerHTML = `<h3>${dessertName}</h3> 
  <span> ${dessertPrice.replace(".", ",")}</span>`;
  document.querySelector(".confirm-order-content .total-value span").innerText =
    formatPrice().format(totalPrice);
}

function confirmOrder() {
  const customerName = prompt(
    "Por gentileza, poderia me informar seu nome?",
    "Insira seu nome aqui"
  );
  if (isNullOrEmpty(customerName)) return;
  const customerAddress = prompt(
    "Agora, seu endereço, por favor!",
    "Insira seu endereço aqui"
  );
  if (isNullOrEmpty(customerAddress)) return;

  let message = `Olá, gostaria de fazer o pedido:\n`;
  message += `- Prato: ${mainCourseName}\n`;
  message += `- Bebida: ${drinkName}\n`;
  message += `- Sobremesa: ${dessertName}\n`;
  message += `Total: ${formatPrice().format(totalPrice)}\n\n`;
  message += `Nome: ${customerName}\n`;
  message += `Endereço: ${customerAddress}`;

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

function isNullOrEmpty(value) {
  return value === null || value === "";
}
