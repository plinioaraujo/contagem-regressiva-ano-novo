const nextYearContainer = document.querySelector("#year")
const secondsContainer = document.querySelector("#seconds")
const minutesContainer = document.querySelector("#minutes")
const hoursContainer = document.querySelector("#hours")
const daysContainer = document.querySelector("#days")
const spinnerLoading = document.querySelector("#loading")
const countdownContainer = document.querySelector("#countdown")

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {

  secondsContainer.textContent = getTimeUnit(seconds)
  minutesContainer.textContent = getTimeUnit(minutes)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}

const updateCountDown = () => {
  const currentTime = new Date()
  const difference = newYearTime - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60

  insertCountDownValues({ days: days, hours: hours, minutes: minutes, seconds: seconds })

}

const handleCountDownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = "flex"
}

setTimeout(handleCountDownDisplay, 1000);

setInterval(updateCountDown, 1000)

