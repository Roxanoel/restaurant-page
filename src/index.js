import './style.css';
import { generateHomepageContent } from './homepage';

//#region Global State
const content = document.getElementById('content');
const restaurantName = "The Goblin's Den";
const linksText = ['The Den', 'Feast!', 'Contact'];
//#endregion

//#region Execution
renderSharedContent();
//generateHomepageContent(); DISABLED FOR TESTING
//#endregion

//#region Methods

// Generates the contents that are repeated for each page. 
function renderSharedContent() {
    content.appendChild(generateHeader());
    content.appendChild(generateMain());
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
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container');
    main.appendChild(mainContainer);
    return main;
}

//#endregion