//#region State
const h2Text = 'Come feast with us!'
//#endregion

function generateFeastPageContents(parentElement) {
    parentElement.appendChild(generateHeading());
}

function generateHeading() {
    const heading = document.createElement('h2');
    heading.innerText = h2Text;

    return heading;
}

export {
    generateFeastPageContents
};