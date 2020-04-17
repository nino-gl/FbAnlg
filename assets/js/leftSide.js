let leftSideImg = document.createElement('div');
leftSide.appendChild(leftSideImg);
leftSideImg.classList.add('left-side__img');


let leftSideName = document.createElement('div');
leftSide.appendChild(leftSideName);
leftSideName.classList.add('left-side__name');

let leftSideNameSpan = document.createElement('span');
leftSideName.appendChild(leftSideNameSpan);
leftSideNameSpan.classList.add('left-side__name__span')

let leftSideNameSpanLink = document.createElement('a');
leftSideNameSpan.appendChild(leftSideNameSpanLink)
leftSideNameSpanLink.setAttribute('class','left-side__name__span__link')
leftSideNameSpanLink.setAttribute('href','#')

let leftSideNameText = document.createTextNode('Israeli Techub • ისრაელის ტექჰაბი');
leftSideNameSpanLink.appendChild(leftSideNameText);


let leftSideNameUnder = document.createElement('div');
leftSide.appendChild(leftSideNameUnder);
let leftSideNameLink = document.createElement('a');
leftSideNameLink.setAttribute('class','left-side__name__link')
leftSideNameUnder.appendChild(leftSideNameLink);
let leftSideNameLinkText = document.createTextNode('@Techubisraeli');
leftSideNameLink.appendChild(leftSideNameLinkText);


let leftSideNav = document.createElement('nav');
leftSide.appendChild(leftSideNav);
leftSideNav.classList.add('left-side__nav');


let leftSideListArr = ['Home', 'Posts', 'Reviews', 'Videos', 'Photos', 'About', 'Community', 'Info and Ads', 'YouTube', 'Events'];

let leftSideList = document.createElement('ul');
leftSideNav.appendChild(leftSideList);
leftSideList.classList.add('left-side__nav__list')

for(let t=0; t<10; t++){
    let leftSideListItem = document.createElement('li');
    leftSideList.appendChild(leftSideListItem);
    leftSideListItem.classList.add('left-side__nav__list__items');

    let listItemLink = document.createElement('a');
    listItemLink.setAttribute('class', 'left-side__nav__list__items__link');
    listItemLink.setAttribute('href','#');
    leftSideListItem.appendChild(listItemLink);

    let listItemLinkText = document.createTextNode(leftSideListArr[t]);
    listItemLink.appendChild(listItemLinkText);
}
