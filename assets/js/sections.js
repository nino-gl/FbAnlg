//right side

let rightSide = document.createElement('aside');
auth.appendChild(rightSide);
rightSide.classList.add('right-side');

//Section

let mainSection = document.createElement('section');
auth.appendChild(mainSection);
mainSection.classList.add('main-section');

let mainSectionInfo = document.createElement('section');
mainSection.appendChild(mainSectionInfo);
mainSectionInfo.classList.add('main-section__info')

//left side

let leftSide = document.createElement('aside');
mainSectionInfo.appendChild(leftSide);
leftSide.classList.add('left-side');


//main

let mainContent = document.createElement('main');
mainSectionInfo.appendChild(mainContent);
mainContent.classList.add('Main-content');


// import {headerArea} from '../bar.mjs'; 
// import {contentArea} from '../bar.mjs'; 
