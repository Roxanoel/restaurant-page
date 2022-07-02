import './style.css';
import { generateHomepageContent } from './homepage';
import { generateFeastPageContents } from './feast';
import { generateContactPageContents } from './contact';
import { generateSharedContent, getMainContainer } from './shared';

const content = document.getElementById('content');

//#region Execution
generateSharedContent(content);
generateHomepageContent(getMainContainer()); 
//generateFeastPageContents(getMainContainer());
//generateContactPageContents(getMainContainer());
//#endregion

//#region Methods


//#endregion