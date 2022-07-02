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
}

function selectHomepage() {

}

//#endregion