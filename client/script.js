const luckyDipButton = document.getElementById('luckydip')
luckyDipButton.addEventListener('click', getRandomLink)
const searchButton = document.getElementById('search-button')
searchButton.addEventListener('click', getTextBoxContent)
let textBoxContent;

function getTextBoxContent(e) {
  textBoxContent = document.getElementById('search').value
  console.log(textBoxContent)
  searchPageTextBox = document.getElementById('searched-text')
  console.log(searchPageTextBox)
  }

async function getRandomLink(e) {
  e.preventDefault()

  fetch(`http://localhost:3000/lucky`)
    .then(res => res.json())
    .then(performLuckyDip)
}

function performLuckyDip(link) {
  window.open(link, "_self")
}
