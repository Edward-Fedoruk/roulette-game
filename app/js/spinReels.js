(function() {
  
  let { 
    club_info: { repeats_interval, count_repeats, computers },
    prizes 
  } = JSON.parse(SERVER_RESPONSE)
 
  const spinResults = {
    id: 0,
    time: "00:00",
    userPrize: 500,
    computerPrize: 20
  }

  const computeWinningIndex = (randomDegree, trianglesLength, accuracy = 0) => {
    const passedDegree = randomDegree % 360 // diff between 360* and the end position 
    const triangleDegreeStep = 360 / trianglesLength
    const quarterOfTriangles = Math.floor(trianglesLength / 4)
    const winningIndex = Math.floor(passedDegree / triangleDegreeStep) + quarterOfTriangles + accuracy

    if(winningIndex >= computers.length) winningIndex = winningIndex % computers.length

    return winningIndex
  }


  const spinReel = () => {
    const reel = document.querySelector(".reel__desk-leftReal")
    const randomDegree = Math.floor(Math.random() * 360) + 360
    
    const winningIndex = computeWinningIndex(randomDegree, prizes.length)

    const winningTriangle = [...reel.children].reverse()[winningIndex] 

    console.log(winningTriangle, winningIndex)

    reel.style.transform = `rotate(${randomDegree}deg)`
  }

  const spinArrow = () => {
    const arrow = document.querySelector(".reel__arrow-rightReel")
    const randomDegree = Math.floor(Math.random() * 360) + 360
    const triangles = document.querySelector(".reel__desk-rightReal").children

    const winningIndex = computeWinningIndex(randomDegree, computers.length, 2)

    console.log([...triangles][winningIndex], winningIndex)

    arrow.style.transform = `rotate(${randomDegree}deg)`
  }

  spinReel()
  spinArrow()
  
  // setInterval(spinReel, repeats_interval)

})()