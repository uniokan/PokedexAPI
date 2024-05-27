const CHAR_URL_ALL = [];

let charInfo = [];
let counter = 0;
let startNumber = 1;
const LIMIT= 1025;

function init() {
    for (i = 0; i <= LIMIT; i++) {
        CHAR_URL_ALL.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    for (i = 1; i <= CHAR_URL_ALL.length; i++) {
        getData(CHAR_URL_ALL[i]);
    }
}

async function getData(character_URL) {
    let responsive = await fetch(character_URL);
    let responsiveToJson = await responsive.json();
    safeData(responsiveToJson);
}

function renderX20() {
    if (startNumber < 20) {
        render();
        startNumber++;
    }
}

function render() {
    let content = document.getElementById('content');

    content.innerHTML += renderHTML(counter);
    counter++;
}

function openCharacter(characteristicFirst, characteristicSecond, counterOnclick) {
    document.getElementById('body').classList.add('overflow-y-hidden');

    let content = document.getElementById('open-character');
    content.classList.remove('d-none');

    content.innerHTML = openCharacterHTML(characteristicFirst, characteristicSecond, counterOnclick);
}

function closeCharacter() {
    let content = document.getElementById('open-character');

    content.addEventListener('click', event => {
        if (event.target.classList.contains('card-zoom-container')) {
            content.classList.add('d-none');
            document.getElementById('body').classList.remove('overflow-y-hidden');
        }
    })
}

function closeCharacterWithBtn() {
    let content = document.getElementById('open-character');

    content.classList.add('d-none');
    document.getElementById('body').classList.remove('overflow-y-hidden');
}


function openStats(counterOnclick) {
    let content = document.getElementById('stats-of-char');
    content.innerHTML = openStatsHTML(counterOnclick);

}

function openMainStats(counterOnclick) {
    let content = document.getElementById('stats-of-char');
    content.innerHTML = openMainStatsHTML(counterOnclick);
}

function openEvoChain(counterOnclick) {
    let content = document.getElementById('stats-of-char');
    content.innerHTML = '';
    content.innerHTML = openEvoChainHTML(counterOnclick);
}

function loadMoreChar() {
    startNumber+=20;
    for (let i = 0; i <= 20; i++) {
        render();
    }
}

function playSound(counterOnclick) {
    let audio = new Audio(charInfo[counterOnclick]['audio']);
    audio.play();
}

function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let content = document.getElementById('content');
    let filteredHTML = '';
    checkLengthOfSearch(search, content, filteredHTML);
}

function checkLengthOfSearch(search, content, filteredHTML) {
    if (search.length > 1) {
        for (let i = 0; i < charInfo.length; i++) {
            if (charInfo[i]['name'].includes(search)) {
                filteredHTML += filterNamesHTML(i);
                content.innerHTML = filteredHTML;
            }
        }
    }
    else if (search.length == 1 && search != "") {
        content.innerHTML = '';
        counter = 0;
        for (let i = 1; i <= 20; i++) {
            render();
        }
    }
}

function showLastPokemon(counterOnclick) {
    let newIndex = (counterOnclick - 1)
    if (newIndex < 0) {
        newIndex = startNumber -1;
    }

    transferNewIndex(newIndex);
}

function showNextPokemon(counterOnclick) {
    let newIndex = (counterOnclick + 1)
    if (newIndex >= startNumber-1) {
        newIndex = 0;
    }
    
    transferNewIndex(newIndex);
}

function transferNewIndex(newIndex){
    let characteristicFirst = charInfo[newIndex]['characteristicFirst'];
    let characteristicSecond = charInfo[newIndex]['characteristicSecond'];
    openCharacter(characteristicFirst, characteristicSecond, newIndex);
}