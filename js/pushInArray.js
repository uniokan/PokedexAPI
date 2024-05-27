function pushJsonInArray(getNames, getId, getImage, characteristicFirst, getWeight,
    getHeight, getExperience, abilities, hp, attack, defense, specialAttack,v1,v2,v3, audio, characteristicSecond) {
        
    let info = {
        'name': getNames,
        'id': getId,
        'image': getImage,
        'characteristicFirst': characteristicFirst,
        'characteristicSecond' : characteristicSecond,
        'weight': getWeight,
        'height': getHeight,
        'experience': getExperience,
        'abilities' : abilities,
        'hp' : hp,
        'attack': attack,
        'defense': defense,
        'special-attack': specialAttack,
        'v1':v1,
        'v2': v2,
        'v3': v3,
        'audio': audio
    }

    charInfo.push(info);

    renderX20();
}