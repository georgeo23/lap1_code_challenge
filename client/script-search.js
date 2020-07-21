
getSearchResults()
function getSearchResults(e) {

  fetch(`http://localhost:3000/search`)
    .then(res => res.json())
    .then(assignLinks)
}

async function assignLinks(link) {
  let searchALink;
  console.log(link[7])
  for (i = 0; i < 10; i++) {
    searchALink = document.getElementById(`result${i}`)
    searchALink.setAttribute('href', `${link[i].toString()}`)
  }
}
