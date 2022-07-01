//#region state
const _feastText = 'Feast until you burst!';
const _drinkText = 'Drink until you drop!';
const _playText = 'Play until the sun rises!';
const _taglineText = 'They may be ugly, but they really know how to party!';
//#endregion

//#region Methods
function generateHomepageContent(mainContainer) {
    const goblins = _assembleGoblinImages();

    const tagline = _createDivWithClass('tagline');
    tagline.textContent = _taglineText;

    mainContainer.appendChild(tagline);
    mainContainer.appendChild(goblins);
}

function _createDivWithClass(className) {
    const div = document.createElement('div');
    div.classList.add(className);
    return div;
}

function _assembleGoblinImages() {
    const goblinsContainer = _createDivWithClass('goblins');
    const goblins = [_createGoblin('feast'), _createGoblin('drink'), _createGoblin('play')];

    goblins.forEach(element => goblinsContainer.appendChild(element));

    return goblinsContainer;
}

function _createGoblin(className) {
    const goblinContainer = _createDivWithClass('goblin');

    const goblinImg = _createDivWithClass('goblin-img');
    goblinImg.classList.add(className);

    const goblinText = _createDivWithClass('goblin-text');
    goblinText.classList.add(className);
    goblinText.textContent = getTextContent(className);

    goblinContainer.appendChild(goblinImg);
    goblinContainer.appendChild(goblinText);

    return goblinContainer;
}

function getTextContent(className) {
    switch (className) {
        case 'feast':
            return _feastText;
        case 'drink': 
            return _drinkText;
        case 'play': 
            return _playText;
        default:
            return '';
    }
}
//#endregion
//#region Exports
export {
    generateHomepageContent
};
//#endregion