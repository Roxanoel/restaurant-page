//#region State
const headingText = 'Where to find us';
const addressText = 'Cobblers Square, Queensport <br> Nightenvale <br> Realms of Magic';
const openingTimesText = 'Open every day from 5pm until the break of dawn!'
//#endregion

//#region functions
function generateContactPageContents(parentElement) {
    parentElement.appendChild(_generateMapContainer());
    parentElement.appendChild(_generateContactContainer());
}

function _generateMapContainer() {
    const mapContainer = document.createElement('div');
    mapContainer.setAttribute('id', 'map-container');

    const heading = document.createElement('h2');
    heading.textContent = headingText;
    
    const mapInfoGrid = _generateMapInfoGrid();
    
    // Appending children
    mapContainer.appendChild(heading);
    mapContainer.appendChild(mapInfoGrid);

    return mapContainer;
}

function _generateMapInfoGrid() {
    const mapInfoGrid = document.createElement('div');
    mapInfoGrid.classList.add('map-info-grid');

    const mapImg = document.createElement('div');
    mapImg.setAttribute('id', 'map-img');

    const address = _generateAddressDiv();

    const openingTimes = _generateOpeningTimesDiv();

    // Appending children
    mapInfoGrid.appendChild(mapImg);
    mapInfoGrid.appendChild(address);
    mapInfoGrid.appendChild(openingTimes);

    return mapInfoGrid;
}

function _generateAddressDiv() {
    const div = document.createElement('div')
    div.classList.add('address');

    const heading = document.createElement('h3');
    heading.textContent = 'Address:';

    const address = document.createElement('p');
    address.innerHTML = addressText;

    // Appending children
    div.appendChild(heading);
    div.appendChild(address);

    return div;
}

function _generateOpeningTimesDiv() {
    const div = document.createElement('div')
    div.classList.add('opening-times');

    const heading = document.createElement('h3');
    heading.textContent = 'Opening times:';

    const times = document.createElement('p');
    times.textContent = openingTimesText;

    // Appending children
    div.appendChild(heading);
    div.appendChild(times);

    return div;
}

function _generateContactContainer() {
    const card = document.createElement('div');
    card.classList.add('contact-card');

    //Elements to append
    const heading = document.createElement('h2');
    heading.textContent = 'Have a question?'
    const btn = document.createElement('button');
    btn.textContent = 'Send a Pigeon';

    // Appending children
    card.appendChild(heading);
    card.appendChild(btn);

    const container = document.createElement('div');
    container.classList.add('contact-container');
    container.appendChild(card);

    return container;
}
//#endregion

export {
 generateContactPageContents
};