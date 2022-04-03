// Global variables

function selectMainCourse(element) {
  let selectedMainCourse = document.querySelector(".main-courses .selected");
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
  let selectedDrink = document.querySelector(".drinks .selected");
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
  let selectedDessert = document.querySelector(".desserts .selected");
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
  let selectedMainCourse = document.querySelector(".main-courses .selected");
  let selectedDrink = document.querySelector(".drinks .selected");
  let selectedDessert = document.querySelector(".desserts .selected");
  if (
    selectedMainCourse !== null &&
    selectedDrink !== null &&
    selectedDessert !== null
  ) {
    document.querySelector(".ending").classList.remove("hidden");
    document.querySelector(".on-hold").classList.add("hidden");
  } else {
    document.querySelector(".ending").classList.add("hidden");
    document.querySelector(".on-hold").classList.remove("hidden");
  }
}
