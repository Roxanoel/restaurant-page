//#region State
const headingText = 'Where to find us'
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
    
    const mapInfoGrid = document.createElement('div');
    mapInfoGrid.classList.add('map-info-grid');

    mapContainer.appendChild(heading);
    mapContainer.appendChild(mapInfoGrid);

    return mapContainer;
}
//#endregion

export {
 generateContactPageContents
};