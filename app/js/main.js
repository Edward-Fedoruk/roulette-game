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
})();


(function() {
  const response = JSON.parse(serverResponse)

  const test = new Array(56).fill(0)

  const reels = document.querySelector(".reel__desk-leftReal")
  const reels2 = document.querySelector(".reel__desk-rightReal")
  const lineRotateDegree = 360 / test.length   

  // fix for X position change when items are less then 30 
  const leftOffset = test.length < 36 ? (47 - (30 - test.length) * 0.5) : 47  
  
  const tessst = (testCase, i) => {
    const testElem = document.createElement("div")
    testElem.classList.add("reel__line")
    testElem.style.transform = `rotate(${lineRotateDegree * i}deg)`
    testElem.style.borderRightWidth = `${lineRotateDegree / 10}vw`
    testElem.style.borderLeftWidth = `${lineRotateDegree / 10}vw`
    testElem.style.left = `${leftOffset}%`
    reels.appendChild(testElem)  
  }

  test.forEach(tessst)
  reels2.forEach(tessst)
  
})()