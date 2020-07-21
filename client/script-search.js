
getSearchResults()
function getSearchResults(e) {

  fetch(`http://localhost:3000/search`)
    .then(res => res.json())
    .then(assignLinks)
}

async function assignLinks(link) {
  let searchALink;
  for (i = 0; i < 10; i++) {
    console.log(link.dogSearch[i])
    searchALink = document.getElementById(`result${i}`)
    console.log(searchALink)
    searchALink.setAttribute('href', `${link.dogSearch[i].toString()}`)
  }
}
