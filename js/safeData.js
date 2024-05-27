function safeData(categorie) {
    let getNames = categorie['name'];
    let getId = categorie['id'];
    let getImage = categorie["sprites"]['other']['official-artwork']['front_default'];
    let characteristicFirst = categorie['types'][0]['type']['name'];
    let getWeight = categorie['weight'];
    let getHeight = categorie['height'];
    let getExperience = categorie['base_experience'];
    let getAbilities = categorie['abilities'][0]['ability']['name'];
    let getHp = categorie['stats'][0]['base_stat'];
    let getAttack = categorie['stats'][1]['base_stat'];
    let getDefense = categorie['stats'][2]['base_stat'];
    let getSpecialAttack = categorie['stats'][3]['base_stat'];
    let getVersion1 = categorie['sprites']['versions']['generation-i']['red-blue']['back_transparent'];
    let getVersion2 = categorie['sprites']['versions']['generation-ii']['crystal']['back_transparent'];
    let getVersion3 = categorie['sprites']['versions']['generation-iii']['firered-leafgreen']['back_default'];
    let getAudio = categorie['cries']['latest'];
    let characteristicSecond = categorie['types'][1]?.['type']?.['name'] || '';

   
    pushJsonInArray(getNames, getId, getImage,
        characteristicFirst, getWeight, getHeight, getExperience, getAbilities
        , getHp, getAttack,getDefense, getSpecialAttack,getVersion1,getVersion2,
        getVersion3, getAudio, characteristicSecond);
   
}