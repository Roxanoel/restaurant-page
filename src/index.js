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


generateHomepageContent(getPageContainer()); 
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
}

function selectHomepage(event) {
    console.log('home');
}

function selectFeastPage(event) {
    console.log('feast');
}

function selectContactPage(event) {
    console.log('contact');
}

function addTabListeners() {
    homeTab.addEventListener('click', selectHomepage);
    feastTab.addEventListener('click', selectFeastPage);
    contactTab.addEventListener('click', selectContactPage);
}

//#endregion