(function() {
  
  let { 
    club_info: { repeats_interval, computers },
    prizes,
    history,
  } = JSON.parse(SERVER_RESPONSE)
 
  const spinResults = {
    id: history[history.length - 1].id,
    time: "00:00",
    userPrize: "500",
    computerPrize: "20"
  }

  const computeWinningIndex = (randomDegree, trianglesLength, accuracy = 0) => {
    const passedDegree = randomDegree % 360 // diff between 360* and the end position 
    const triangleDegreeStep = 360 / trianglesLength
    const quarterOfTriangles = Math.floor(trianglesLength / 4)
    let winningIndex = Math.floor(passedDegree / triangleDegreeStep) + quarterOfTriangles + accuracy

    while(winningIndex >= trianglesLength ) {
      winningIndex = winningIndex % trianglesLength
      if(winningIndex === trianglesLength) break
    }

    return winningIndex
  }

  const setRandomDegree = () => Math.floor(Math.random() * 360) + 360

  const setSpinResults = prize => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    spinResults.id++
    spinResults.time = `${hours}:${minutes}`
    spinResults.userPrize = `${prize}`
  }

  const appendRow = () => {
    const { id, time, userPrize, computerPrize } = spinResults
    const dashboardRow = document.createElement("div")
    dashboardRow.classList.add("dashboard__row")
    dashboardRow.innerHTML = `
      <span class="dashboard__spinData">${id}</span>
      <span class="dashboard__spinData">${time}</span>
      <span class="dashboard__spinData">${userPrize}</span>
      <span class="dashboard__spinData">${computerPrize}</span>
    `
    document.querySelector(".dashboard__info").append(dashboardRow)
  }

  const spinReel = () => {
    const reel = document.querySelector(".reel__desk-leftReal")
    const randomDegree = setRandomDegree()
    const winningIndex = computeWinningIndex(randomDegree, prizes.length)
    const winningTriangle = [...reel.children].reverse()[winningIndex]
    
    setSpinResults(winningTriangle.children[0].textContent)

    reel.style.transform = `rotate(${randomDegree}deg)`
  }

  const spinArrow = () => {
    const arrow = document.querySelector(".reel__arrow-rightReel")
    const randomDegree = setRandomDegree()  
    const triangles = document.querySelector(".reel__desk-rightReal").children
    const winningIndex = computeWinningIndex(randomDegree, computers.length, 2)
    const winningTriangle = [...triangles][winningIndex]

    spinResults.computerPrize = winningTriangle.children[0].textContent
    arrow.style.transform = `rotate(${randomDegree}deg)`
  }

    
  setInterval(spinReel, repeats_interval)
  setInterval(spinArrow, repeats_interval + 3000)
  setInterval(appendRow, repeats_interval + 3000)
})()