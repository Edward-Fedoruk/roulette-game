(function() {
  const response = JSON.parse(SERVER_RESPONSE)
  const { club_info: { computers }, prizes } = response

  const prizeReel = document.querySelector(".reel__desk-leftReal")
  const computerReel = document.querySelector(".reel__desk-rightReal")
  const computerDegree = 360 / computers.length   
  const prizesDegree = 360 / prizes.length   

  // fix for X position change when items are less then 30 
  const leftOffset = computers.length < 36 ? (47 - (30 - computers.length) * 0.5) : 47  

  const renderTriangles = triangleRotateDegree => (number, i) => {
    const triangle = document.createElement("div")
    triangle.classList.add("reel__line")
    triangle.innerHTML = `<span class="reel__number">${number}</span>`

    triangle.style.transform = `rotate(${triangleRotateDegree * i}deg)`
    triangle.style.borderRightWidth = `${triangleRotateDegree / 10}vw`
    triangle.style.borderLeftWidth = `${triangleRotateDegree / 10}vw`
    triangle.style.left = `${leftOffset}%`

    return triangle
  }

  const prizeTriangles = prizes.map(renderTriangles(prizesDegree))
  const computerTriangles = computers.map(renderTriangles(computerDegree))
  prizeReel.append(...prizeTriangles) 
  computerReel.append(...computerTriangles) 
  
})()