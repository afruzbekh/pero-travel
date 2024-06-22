// -------------------------------------------------------------------------------------------------//

const texts = document.querySelectorAll(".text");
const blueLine = document.querySelector(".blue-line");

// Set initial position and width of blue line to match first text element
const firstText = texts[0];
// const firstTextWidth = firstText.offsetWidth + 25;
if (window.innerWidth < 768) {
  firstTextWidth = window.innerWidth - 293; // Subtract 20 pixels for padding and margin
} else {
  firstTextWidth = firstText.offsetWidth + 25;
}
const firstTextRect = firstText.getBoundingClientRect();
const firstTextContainerRect = firstText.parentNode.getBoundingClientRect();
const firstTextOffsetLeft = firstTextRect.left - firstTextContainerRect.left;
blueLine.style.width = `${firstTextWidth}px`;
blueLine.style.transform = `translateX(${firstTextOffsetLeft}px)`;
firstText.style.color = "#0499DD";

texts.forEach((text) => {
  text.addEventListener("click", () => {
    let width;
    if (window.innerWidth < 768) {
      width = text.offsetWidth - 0; // Subtract 20 pixels for padding and margin
    } else {
      width = text.offsetWidth + 32.5; // Increase the width by 10 pixels
    }
    const textRect = text.getBoundingClientRect();
    const containerRect = text.parentNode.getBoundingClientRect();
    const offsetLeft = textRect.left - containerRect.left;
    blueLine.style.width = `${width}px`;
    blueLine.style.transform = `translateX(${offsetLeft}px)`;
    texts.forEach((text) => {
      text.style.color = "#282828";
    });
    text.style.color = "#0499DD";
  });
});

// -------------------------------------------------------------------------------------------------//

let circle1 = document.getElementById("circle1");
let circle2 = document.getElementById("circle2");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let coloredLine = document.getElementById("colored-line");

circle1.style.left = "36px";
circle2.style.left = "100px";
number1.style.left = "0";
number2.style.left = "120px";
coloredLine.style.left = "36px";
coloredLine.style.width = "74px";

circle1.onmousedown = function (event) {
  let shiftX = event.clientX - circle1.getBoundingClientRect().left;

  document.onmousemove = function (event) {
    let newLeft =
      event.clientX -
      shiftX -
      circle1.parentElement.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = circle1.parentElement.offsetWidth - circle1.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    circle1.style.left = newLeft + "px";
    number1.value = Math.round((newLeft / 225) * 10000);

    updateColoredLine();
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};

circle2.onmousedown = function (event) {
  let shiftX = event.clientX - circle2.getBoundingClientRect().left;

  document.onmousemove = function (event) {
    let newLeft =
      event.clientX -
      shiftX -
      circle2.parentElement.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = circle2.parentElement.offsetWidth - circle2.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    circle2.style.left = newLeft + "px";
    number2.value = Math.round((newLeft / 225) * 10000);

    updateColoredLine();
  };

  document.onmouseup = function () {
    document.onmousemove = null;
    document.onmouseup = null;
  };
};

number1.oninput = function () {
  let value = parseInt(number1.value);
  if (value < 0) value = 0;
  if (value > 10000) value = 10000;

  number1.value = value;

  let leftPos = (value / 10000) * 225;

  circle1.style.left = leftPos + "px";

  updateColoredLine();
};

number2.oninput = function () {
  let value = parseInt(number2.value);
  if (value < 0) value = 0;
  if (value > 10000) value = 10000;

  number2.value = value;

  let leftPos = (value / 10000) * 225;

  circle2.style.left = leftPos + "px";

  updateColoredLine();
};

function updateColoredLine() {
  let leftCirclePos =
    parseInt(circle1.style.left.replace("px", "")) + circle1.offsetWidth / 2;

  let rightCirclePos =
    parseInt(circle2.style.left.replace("px", "")) + circle2.offsetWidth / 2;

  coloredLine.style.left = Math.min(leftCirclePos, rightCirclePos) + "px";
  coloredLine.style.width = Math.abs(rightCirclePos - leftCirclePos) + "px";
}
// -------------------------------------------------------------------------------------------------//

const accordionItems = document.querySelectorAll(".contentBx");

accordionItems.forEach((item) => {
  const label = item.querySelector(".label");

  label.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// -------------------------------------------------------------------------------------------------//

const divs = document.querySelectorAll(".number-of-people");

divs.forEach((div) => {
  div.addEventListener("click", () => {
    divs.forEach((d) => d.classList.remove("clicked"));
    div.classList.add("clicked");
  });
});

// -------------------------------------------------------------------------------------------------//

const checkboxes = document.querySelectorAll(".checkbox-field");
const labels = document.querySelectorAll(".checkbox-label");

function removeCheckboxes() {
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked && this !== checkbox) {
      checkbox.checked = false;
    }
  });
}

labels.forEach((label) => {
  label.addEventListener("click", removeCheckboxes);
});

// -------------------------------------------------------------------------------------------------//

const heartContainers = document.querySelectorAll(".heart-container");

heartContainers.forEach((heartContainer) => {
  const heartIcon = heartContainer.querySelector("i");

  heartContainer.addEventListener("click", () => {
    heartContainer.classList.toggle("clicked");

    if (heartContainer.classList.contains("clicked")) {
      heartIcon.classList.remove("fa-regular");
      heartIcon.classList.add("fa-solid");
    } else {
      heartIcon.classList.remove("fa-solid");
      heartIcon.classList.add("fa-regular");
    }
  });
});

// -------------------------------------------------------------------------------------------------//

const cards = document.querySelectorAll(".our-tours__pagination-card");
const cardsPerPage = 4;
const totalPages = 5;
let currentPage = 1;

function displayCards() {
  cards.forEach((card, index) => {
    if (
      index >= (currentPage - 1) * cardsPerPage &&
      index < currentPage * cardsPerPage
    ) {
      card.classList.add("page-transition"); // Add the page-transition class
      card.style.display = "inherit";
    } else {
      card.style.display = "none";
    }
  });
  setTimeout(() => {
    cards.forEach((card) => {
      card.classList.remove("page-transition"); // Remove the page-transition class after the animation is complete
    });
  }, 500); // Wait for 0.5 seconds (the duration of the animation) before removing the class
}

function updatePagination() {
  const paginationNumbers = document.querySelector(".pagination_numbers");
  paginationNumbers.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item", "current-page");
    if (i === currentPage) {
      pageItem.classList.add("active-page");
    }
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.classList.add("page-link");
    pageLink.textContent = i;
    pageItem.appendChild(pageLink);
    paginationNumbers.appendChild(pageItem);
  }
}

document.querySelector(".previous-page").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayCards();
    updatePagination();
  }
});

document.querySelector(".next-page").addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    displayCards();
    updatePagination();
  }
});

document
  .querySelector(".pagination_numbers")
  .addEventListener("click", (event) => {
    if (event.target.classList.contains("page-link")) {
      currentPage = parseInt(event.target.textContent);
      displayCards();
      updatePagination();
    }
  });

displayCards();
updatePagination();

// -------------------------------------------------------------------------------------------------//
