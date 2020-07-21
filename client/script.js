const luckyDipButton = document.getElementById('luckydip')
luckyDipButton.addEventListener('submit', getRandomLink)

async function getRandomLink(e) {
  e.preventDefault()

  fetch(`http://localhost:3000/lucky`)
    .then(res => res.json())
    .then(performLuckyDip)
}

function performLuckyDip(link) {
  window.open(link, "_self")
}
