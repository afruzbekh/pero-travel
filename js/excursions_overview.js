// -------------------------------------------------------------------------------------------------//
const heartContainers = document.querySelectorAll(".heart-container-2");

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

//For calendar

let nowDate = new Date(),
  nowDateNumber = nowDate.getDate(),
  nowMonth = nowDate.getMonth(),
  nowYear = nowDate.getFullYear(),
  container = document.getElementById("month-calendar"),
  monthContainer = container.getElementsByClassName("month-name")[0],
  yearContainer = container.getElementsByClassName("year-name")[0],
  daysContainer = container.getElementsByClassName("days")[0],
  prev = container.getElementsByClassName("prev")[0],
  next = container.getElementsByClassName("next")[0],
  monthName = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

let curDate = nowDate.setMonth(nowDate.getMonth() - 1);
console.log(nowDate.getFullYear());

function setMonthCalendar(year, month) {
  let monthDays = new Date(year, month + 1, 0).getDate(),
    monthPrefix = new Date(year, month, 0).getDay(),
    monthDaysText = "";

  monthContainer.textContent = monthName[month];
  yearContainer.textContent = year;
  daysContainer.innerHTML = "";

  if (monthPrefix > 0) {
    for (let i = 1; i <= monthPrefix; i++) {
      monthDaysText += "<li></li>";
    }
  }

  for (let i = 1; i <= monthDays; i++) {
    monthDaysText += "<li>" + i + "</li>";
  }

  daysContainer.innerHTML = monthDaysText;

  if (month == nowMonth && year == nowYear) {
    days = daysContainer.getElementsByTagName("li");
    days[monthPrefix + nowDateNumber - 1].classList.add("date-now");
  }
}

setMonthCalendar(nowYear, nowMonth);

prev.onclick = function () {
  let curDate = new Date(
    yearContainer.textContent,
    monthName.indexOf(monthContainer.textContent)
  );

  curDate.setMonth(curDate.getMonth() - 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};

next.onclick = function () {
  let curDate = new Date(
    yearContainer.textContent,
    monthName.indexOf(monthContainer.textContent)
  );

  curDate.setMonth(curDate.getMonth() + 1);

  let curYear = curDate.getFullYear(),
    curMonth = curDate.getMonth();

  setMonthCalendar(curYear, curMonth);
};

// -------------------------------------------------------------------------------------------------//
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// -------------------------------------------------------------------------------------------------- //
function reveal__left() {
  let reveals_up = document.querySelectorAll(".reveal__left");

  for (let i = 0; i < reveals_up.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals_up[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals_up[i].classList.add("active");
    } else {
      reveals_up[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal__left);

// -------------------------------------------------------------------------------------------------//
