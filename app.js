const ratingCards = document.querySelectorAll(".ratings span")
const submitBtn = document.querySelector(".submit-btn")
const ratePoint = document.getElementById("rate")
const ratingSection = document.querySelector(".rating-section")
const thankSection = document.querySelector(".thank-section")

let rate = null

ratingCards.forEach((ratingCards) => {
  ratingCards.addEventListener('click', (ev) => {
    const active = document.querySelector('.checked')
    if (active) {
      active.classList.remove('checked')
    }
    const card = ev.target;
    card.classList.add('checked');
    rate = ev.target.innerText;
  })
})

submitBtn.addEventListener("click", () => {
  if (rate) {
    ratePoint.innerText = rate
    ratingSection.classList.add("hidden")
    thankSection.classList.remove("hidden")
  }
})
