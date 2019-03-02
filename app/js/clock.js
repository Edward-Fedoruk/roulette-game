(function () {
  const timer = document.querySelector(".dashboard__time")

  const clock = () => {
    const handleSingleDigit = digit => digit < 10 ? `0${digit}` : digit
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    timer.innerHTML = `${handleSingleDigit(hours)}:${handleSingleDigit(minutes)}:${handleSingleDigit(seconds)}`    
  }
  
  setInterval(clock, 1000)
})()