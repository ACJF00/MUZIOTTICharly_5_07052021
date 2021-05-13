const content = document.getElementById('content')

function remplirListeProduits(nounours) {
    // loop here to display nounourses names
    for (let elem of nounours) {
        content.innerHTML +=
        "<h1>${elem.name}</h1>";
    }
  }
  
  async function fillProducts() {
    await fetch('http://localhost:3000/api/teddies') // will return info, but in wrong format
      .then((response) => response.json()) // will return info, in json format
      .then((nounours) => remplirListeProduits(nounours)) // main code here, using json info
  }

  fillProducts()
