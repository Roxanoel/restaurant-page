import './style.css';
import { generateHomepageContent } from './homepage';
import { generateFeastPageContents } from './feast';
import { generateContactPageContents } from './contact';
import { generateSharedContent, getPageContainer } from './shared';

const content = document.getElementById('content');
let homeTab;
let feastTab;
let contactTab;

//#region Execution

init();


 
//generateFeastPageContents(getPageContainer());
//generateContactPageContents(getPageContainer());
//#endregion

//#region Methods

function init() {
    generateSharedContent(content);
    homeTab = document.getElementById('home');
    feastTab = document.getElementById('feast');
    contactTab = document.getElementById('contact');

    addTabListeners();

    // Ensures first page to load is home + its tab is selected by default.
    generateHomepageContent(getPageContainer());
    homeTab.classList.add('selected');

}

function selectHomepage(event) {
    // Regenerates shared elem.
    regenSharedContents();

    // Update appearance of selected tab
    homeTab.classList.add('selected');

    // Generares the right page content
    generateHomepageContent(getPageContainer());
}

function selectFeastPage(event) {
    // Regenerates shared elem.
    regenSharedContents();

    // Update appearance of selected tab
    feastTab.classList.add('selected');

    // Generares the right page content
    generateFeastPageContents(getPageContainer());
}

function selectContactPage(event) {
    // Regenerates shared elem.
    regenSharedContents();

    // Update appearance of selected tab
    contactTab.classList.add('selected');

    // Generares the right page content
    generateContactPageContents(getPageContainer());
}

function regenSharedContents() {
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }

    generateSharedContent(content);
    homeTab = document.getElementById('home');
    feastTab = document.getElementById('feast');
    contactTab = document.getElementById('contact');
    addTabListeners();
}


function addTabListeners() {
    homeTab.addEventListener('click', selectHomepage);
    feastTab.addEventListener('click', selectFeastPage);
    contactTab.addEventListener('click', selectContactPage);
}

//#endregion