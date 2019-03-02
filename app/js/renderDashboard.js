(function() {

  const { history } = JSON.parse(SERVER_RESPONSE)

  const dashboard = document.querySelector(".dashboard__info")

  console.log(history, dashboard)

  const renderRows = row => {
    const { id, prize, computer, created_at } = row

    const date = new Date(created_at)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const dashboardRow = document.createElement("div")
    dashboardRow.classList.add("dashboard__row")
    dashboardRow.innerHTML = `
      <span class="dashboard__spinData">${id}</span>
      <span class="dashboard__spinData">${hours}:${minutes}</span>
      <span class="dashboard__spinData">${prize}</span>
      <span class="dashboard__spinData">${computer}</span>
    `
    return dashboardRow
  }

  const dashboardRows = history.map(renderRows)
  dashboard.append(...dashboardRows)
  

})()