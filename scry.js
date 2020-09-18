const main = document.querySelector('main');

window.addEventListener('load', function(){
    updateRandom();
    navigator.serviceWorker.register('sw.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed');
});

//gets a random card, yoinks the JSON, then displays it by calling displayCard
async function updateRandom(){
    const randomCard = await fetch(`https://api.scryfall.com/cards/random`);
    const cardJson = await randomCard.json();

    main.innerHTML = displayCard(cardJson);
}

function displayCard(cardJson) {
    return `
      <div>
          <img src="${cardJson.image_uris.normal}" style="max-width:100%;height:auto;" alt="${cardJson.name}">
          <h2>${cardJson.name} -- ${cardJson.mana_cost}</h2>
          <p>${cardJson.oracle_text}</p>
          <p>${cardJson.power} / ${cardJson.toughness}</p>
          <p>Art by ${cardJson.artist}</p>
      </div>
    `;
}

/* The search function. It should essentially be the same as the version on Scryfall's website.
The parsing algorithm needed to implement this is on my to-do list. 
*/
async function searchFor(searchTerms){
    const searchResults = await fetch(`https://api.scryfall.com/cards/search?` + searchTerms);
}