(function() {
  
  let { 
    club_info: { repeats_interval, count_repeats } 
  } = JSON.parse(SERVER_RESPONSE)
 
  const spinReel = () => {
    const reel = document.querySelector(".reel__desk-leftReal")
    const randomDegree = Math.round(Math.random() * 360) + 360

    reel.style.transform = `rotate(${randomDegree}deg)`


  }
  spinReel()
  
  // setInterval(spinReel, repeats_interval)

})()