//#region State
const headingText = 'Where to find us';
const addressText = 'Main Square, Queensport';
const openingTimesText = 'Open every day from 5pm until the break of dawn!'
//#endregion

//#region functions
function generateContactPageContents(parentElement) {
    parentElement.appendChild(_generateMapContainer());
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
    address.textContent = addressText;

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
//#endregion

export {
 generateContactPageContents
};