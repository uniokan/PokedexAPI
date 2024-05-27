function openCharacterHTML(characteristicFirst, characteristicSecond, counterOnclick) {
    return `
    <div class="card-zoom-container">
    <img onclick="showLastPokemon(${counterOnclick})" class="arrow arrow-left" src="./img/linkss.png">
        <div class="card card-zoom">
            <div class="character-describe">
                <span> #${charInfo[counterOnclick]['id']}</span>
                <span> ${charInfo[counterOnclick]['name']} </span>
            </div>
            <div id="image-bg${counterOnclick}" onclick="playSound(${counterOnclick})" class="card-img-container ${characteristicFirst} white-bg zoom-img-container">
                <img src="${charInfo[counterOnclick]['image']}">
            </div>
            <div class="characteristic characteristic-open"> 
                <span class="${characteristicFirst}"> ${characteristicFirst} </span>
                <span class="${characteristicSecond}"> ${characteristicSecond} </span>
            </div> 
            <div class="char-stats"> 
                <span class="${characteristicFirst}-color" onclick="openMainStats(${counterOnclick})"> main </span>
                <div class="line"> </div>
                <span class="${characteristicFirst}-color" onclick="openStats(${counterOnclick})"> stats </span>
                <div class="line"> </div>
                <span class="${characteristicFirst}-color" onclick="openEvoChain(${counterOnclick})"> evo chain </span>
            </div>
            <div class="stats-of-char" id="stats-of-char"> 
                <div class="flex"> 
                    <div class="w-150">
                        <span> Height: </span>
                    </div>
                    <span> ${charInfo[counterOnclick]['height']} m</span>
                </div>
                <div class="flex"> 
                    <div class="w-150"> 
                        <span> Weight: </span>
                    </div>
                    <span> ${charInfo[counterOnclick]['weight']} kg</span>
                </div>
                <div class="flex"> 
                    <div class="w-150"> 
                        <span> Base experience: </span>
                    </div>
                    <span> ${charInfo[counterOnclick]['experience']}</span>
                </div>
                <div class="flex"> 
                    <div class="w-150"> 
                        <span> Abilities: </span>
                    </div>
                    <span> ${charInfo[counterOnclick]['abilities']} </span>
                </div>
                <button onclick="closeCharacterWithBtn()" class="btn-zoom-char d-none-low"> Close </button>
            </div>
            
        </div>  
        <img onclick="showNextPokemon(${counterOnclick})" class="arrow arrow-right" src="./img/rechtss.png">    
    </div>
    
    `
}

function renderHTML(counter) {
    return `
    <div class="card">
        <div class="character-describe">
            <span> #${charInfo[counter]['id']} </span>
            <span> ${charInfo[counter]['name']} </span>
        </div>
        <div onclick="openCharacter('${charInfo[counter]['characteristicFirst']}', '${charInfo[counter]['characteristicSecond']}', '${counter}')" 
        class="card-img-container ${charInfo[counter]['characteristicFirst']} white-bg">
            <img src="${charInfo[counter]['image']}">
        </div>
        <div class="characteristic"> 
            <span class="${charInfo[counter]['characteristicFirst']}"> ${charInfo[counter]['characteristicFirst']} </span>
            <span class="${charInfo[counter]['characteristicSecond']}"> ${charInfo[counter]['characteristicSecond']} </span>
        </div> 
    </div>`

}

function openStatsHTML(counterOnclick) {
    return `
    <div class="flex"> 
        <div class="w-150">
            <span> HP: </span>
        </div>
        <div class=" ${charInfo[counterOnclick]['characteristicFirst']} stats-diagramm" style="width: ${charInfo[counterOnclick]['hp'] * 2}px"> 
            ${charInfo[counterOnclick]['hp']} 
        </div>
    </div>
    <div class="flex"> 
        <div class="w-150"> 
            <span> Attack: </span>
        </div>
        <div class="${charInfo[counterOnclick]['characteristicFirst']} stats-diagramm" style="width: ${charInfo[counterOnclick]['attack'] * 2}px"> 
            ${charInfo[counterOnclick]['attack']} 
        </div>
    </div>
    <div class="flex"> 
        <div class="w-150"> 
            <span> Defense </span>
        </div>
        <div class="${charInfo[counterOnclick]['characteristicFirst']} stats-diagramm" style="width: ${charInfo[counterOnclick]['defense'] * 2}px"> 
            ${charInfo[counterOnclick]['defense']} 
        </div>
    </div>
    <div class="flex"> 
        <div class="w-150"> 
            <span> Special-Attack: </span>
        </div>
        <div class="${charInfo[counterOnclick]['characteristicFirst']} stats-diagramm" style="width: ${charInfo[counterOnclick]['special-attack'] * 2}px"> 
            ${charInfo[counterOnclick]['special-attack']} 
        </div>
    </div>
    <button onclick="closeCharacterWithBtn()" class="btn-zoom-char d-none-low"> Close </button>`;
}

function openMainStatsHTML(counterOnclick) {
    return `
    <div class="flex">
        <div class="w-150">
            <span> Height: </span>
        </div>
        <span> ${charInfo[counterOnclick]['height']} m</span>
    </div>
    <div class="flex">
        <div class="w-150">
            <span> Weight: </span>
        </div>
        <span> ${charInfo[counterOnclick]['weight']} kg</span>
    </div>
    <div class="flex">
        <div class="w-150">
            <span> Base experience: </span>
        </div>
        <span> ${charInfo[counterOnclick]['experience']}</span>
    </div>
    <div class="flex">
        <div class="w-150">
            <span> Abilities: </span>
        </div>
        <span> ${charInfo[counterOnclick]['abilities']} </span>
    </div>
    <button onclick="closeCharacterWithBtn()" class="btn-zoom-char d-none-low"> Close </button>
    `;
}

function openEvoChainHTML(counterOnclick) {
    return `
    <div class="evo-chain">
        <div class="evo-chain-img">
            <img src="${charInfo[counterOnclick]['v1']}" alt="">
            <span> v1 </span>
        </div>
        <span> -> </span>
        <div class="evo-chain-img">
            <img src="${charInfo[counterOnclick]['v2']}" alt="">
            <span> v2 </span>
        </div>
        <span> -> </span>
        <div class="evo-chain-img">
            <img src="${charInfo[counterOnclick]['v3']}" alt="">
            <span> v3 </span>
        </div>
        <button onclick="closeCharacterWithBtn()" class="btn-zoom-char d-none-low"> Close </button> 
    </div>`
}

function filterNamesHTML(i) {
    return `
    <div class="card">
        <div class="character-describe">
            <span> #${charInfo[i]['id']} </span>
            <span> ${charInfo[i]['name']} </span>
        </div>
        <div onclick="openCharacter('${charInfo[i]['characteristicFirst']}', '${charInfo[i]['characteristicFirst']}', '${i}')" 
        class="card-img-container ${charInfo[i]['characteristicFirst']} white-bg">
            <img src="${charInfo[i]['image']}">
        </div>
        <div class="characteristic"> 
            <span class="${charInfo[i]['characteristicFirst']} white-bg"> ${charInfo[i]['characteristicFirst']} </span>
            <span class="${charInfo[i]['characteristicSecond']} white-bg"> ${charInfo[i]['characteristicSecond']} </span>
        </div> 
    </div>`
}