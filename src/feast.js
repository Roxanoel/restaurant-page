//#region State
const h2Text = 'Come feast with us!'

const pubHeading = 'Pub';
const eventsHeading = 'Special Events';

const pubDescr = '';
const eventsDescr = '';

const pubBtnText = "What's on tap?";
const eventsBtnText = "What's on?";
//#endregion

function generateFeastPageContents(parentElement) {
    parentElement.appendChild(_generateHeading());

    parentElement.appendChild(_generateCard('pub'));
    parentElement.appendChild(_generateCard('events'));
}

function _generateHeading() {
    const heading = document.createElement('h2');
    heading.innerText = h2Text;

    return heading;
}

function _generateCard(className) {
    const card = document.createElement('div');
    card.classList.add('card', className);

    // Add children for the card itself
    const elementsToAppend = _generateCardContents(className);
    elementsToAppend.forEach(element => card.appendChild(element));

    return card;
}

function _generateCardContents(className) {
    const cardHeading = document.createElement('h3');
    if (className === 'pub') { cardHeading.textContent = pubHeading; }
    else if (className === 'events') {cardHeading.textContent = eventsHeading; };

    const cardImg = document.createElement('div');
    cardImg.classList.add('card-img');

    const cardDescription = document.createElement('p');
    if (className === 'pub') { cardDescription.textContent = pubDescr; }
    else if (className === 'events') { cardDescription.textContent = eventsDescr; };

    const cardBtn = document.createElement('button');
    if (className === 'pub') { cardBtn.textContent = pubBtnText; } 
    else if (className === 'events') { cardBtn.textContent = eventsBtnText; };

    return [cardHeading, cardImg, cardDescription, cardBtn];
}

export {
    generateFeastPageContents
};