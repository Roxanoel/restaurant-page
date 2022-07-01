//#region State
const h2Text = 'Come feast with us!'

const pubHeading = 'Pub';
const eventsHeading = 'Special Events';

const pubDescr = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const eventsDescr = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ';

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