
getSearchResults()
function getSearchResults(e) {

  fetch(`http://localhost:3000/search`)
    .then(res => res.json())
    .then(assignLinks)
}

async function assignLinks(link) {
  let searchALink;
  fetch(`http://localhost:3000/info`)
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
