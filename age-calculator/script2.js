let calculate = document.getElementById("calculateAge");
let resultY = document.getElementById("resultY");
let resultM = document.getElementById("resultM");
let resultD = document.getElementById("resultD");
const yearError = document.getElementById("yearError");
const monthError = document.getElementById("monthError");
const dayError = document.getElementById("dayError");

calculate.addEventListener("click", calculateAge);

function calculateAge() {
  let dayInput = document.getElementById("day").value;
  let monthInput = document.getElementById("month").value;
  let yearInput = document.getElementById("year").value;

  let birthDate = new Date(yearInput, monthInput - 1, dayInput);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  resultY.innerHTML = `<span>${y3}</span>`;
  resultM.innerHTML = `<span>${m3}</span>`;
  resultD.innerHTML = `<span>${d3}</span>`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
