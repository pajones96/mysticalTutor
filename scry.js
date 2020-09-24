const main = document.querySelector('main');
const aside = document.querySelector('aside');

window.addEventListener('load', function(){
    updateRandom();
    navigator.serviceWorker.register('sw.js')
      .then(registration => console.log('Service Worker registered'))
      .catch(err => 'SW registration failed');
});

//gets a random card, yoinks the JSON, then displays it by calling displayCardImg and displayCardInfo
async function updateRandom(){
    const randomCard = await fetch(`https://api.scryfall.com/cards/random`);
    const cardJson = await randomCard.json();

    main.innerHTML = displayCardImg(cardJson);
    aside.innerHTML = displayCardInfo(cardJson);
}

/*
Deprecated. Use displayCardImg and displayCardInfo instead
*/
function displayCard(cardJson) {
    var statsLine;
    if (cardJson.power == undefined && cardJson.toughness == undefined) {
        statsLine = "";
    } else {
        statsLine = cardJson.power + " / " + cardJson.toughness;
    }
    return `
      <div>
          <img src="${cardJson.image_uris.normal}"  alt="${cardJson.name}">
          <h2>${cardJson.name} -- ${cardJson.mana_cost}</h2>
          <p>${cardJson.oracle_text}</p>
          <p>${statsLine}</p>
          <p>Art by ${cardJson.artist}</p>
      </div>
    `;
}

function displayCardImg(cardJson) {
    return `
        <div>
        <img src="${cardJson.image_uris.normal}" style="max-width:100%;height:auto;" alt="${cardJson.name}">
        </div>
    `;
}

function displayCardInfo(cardJson) {
    return `
        <div class="panel panel-default">
        <div class="panel-heading">${cardJson.name}  ${cardJson.mana_cost}</div>
        <div class="panel-body">
            <p>${cardJson.type_line}</p>
            <p>${cardJson.oracle_text}</p>
            <p id="stats">${cardJson.power} / ${cardJson.toughness}</p>
        </div>
        <div class="panel-footer">Art by ${cardJson.artist}</div>
        </div>
    `;
}

/* The search function. It should essentially be the same as the version on Scryfall's website.
The parsing algorithm needed to implement this is on my to-do list. 
*/
async function searchFor(searchTerms){
    const searchResults = await fetch(`https://api.scryfall.com/cards/search?` + searchTerms);
}