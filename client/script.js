const luckyDipButton = document.getElementById('luckydip')
luckyDipButton.addEventListener('click', getRandomLink)
const searchButton = document.getElementById('search-button')
searchButton.addEventListener('click', getTextBoxContent)
let textBoxContent;
let searchHTML;
let homeHTML;
hideSearch()

function hideSearch() {
  searchHTML = document.querySelector('.search')
  searchHTML.setAttribute('style', 'visibility: hidden;')
  console.log(searchHTML)
  homeHTML = document.querySelector('.home')
  console.log(homeHTML)
}
function getTextBoxContent(e) {
  showSearch()
  textBoxContent = document.getElementById('search').value
  console.log(textBoxContent)
  searchPageTextBox = document.getElementById('searched-text')
  console.log(searchPageTextBox)
  }


function showSearch() {
  homeHTML.setAttribute('style', 'visibility: hidden;')
  searchHTML.setAttribute('style', 'visibility: visible')
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
//////////////////////////////////////////////

getSearchResults()
function getSearchResults(e) {

  fetch(`http://localhost:3000/dogsearch`)
    .then(res => res.json())
    .then(assignLinks)
}

async function assignLinks(link) {
  let searchALink;
  fetch(`http://localhost:3000/doginfo`)
    .then(res => res.json())
    .then(writeAContent)
  for (i = 0; i < 10; i++) {
    searchALink = document.getElementById(`result${i}`)
    searchALink.setAttribute('href', `${link[i]}`)
  }

}

function writeAContent(info) {
  for (i = 0; i < 10; i++) {
    searchALink = document.getElementById(`result${i}`)
    searchALink.textContent = info[i]
  }
}
