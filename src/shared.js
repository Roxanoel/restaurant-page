//#region Global State
const restaurantName = "The Goblin's Den";
const linksText = ['The Den', 'Feast!', 'Contact'];
//#endregion

//#region functions

// Generates the contents that are repeated for each page. 
function generateSharedContent(parentElement) {
    parentElement.appendChild(generateHeader());
    parentElement.appendChild(generateMain());
}

// Generates the header; to be called inside generateSharedContent, for readability.
function generateHeader() {
    const header = document.createElement('header');

    // heading 1
    const h1 = document.createElement('h1');
    h1.textContent = restaurantName;

    // link tabs
    const linkTabs = generateLinkTabs();

    //appending children
    header.appendChild(h1);
    header.appendChild(linkTabs);

    return header;
    
}

function generateLinkTabs() {
    // ul
    const linksContainer = document.createElement('ul');
    linksContainer.classList.add('links-container');
    // links
    const links = [];
    for (let i = 0; i < 3; i++) {
        const link = document.createElement('li');
        link.textContent = linksText[i];
        links.push(link);
    }
    // add links to ul 
    links.forEach(link => linksContainer.appendChild(link));

    return linksContainer;
}

function generateMain() {
    const main = document.createElement('main');
    const pageContainer = document.createElement('div');
    pageContainer.setAttribute('id', 'page-container');
    main.appendChild(pageContainer);
    return main;
}

function getPageContainer() {
    return document.getElementById('page-container');
}
//#endregion
//#region exports
export {
    generateSharedContent,
    getPageContainer
};
//#endregion