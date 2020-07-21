const luckyDipButton = document.getElementById('luckydip')
luckyDipButton.addEventListener('click', getRandomLink)
console.log(luckyDipButton)

async function getRandomLink(e) {
  e.preventDefault()
  console.log(e)

  fetch(`http://localhost:3000/lucky`)
    .then(res => res.JSON())
    .then(performLuckyDip)

}

function performLuckyDip(link) {
  luckyDipButton.location.href = link
}
