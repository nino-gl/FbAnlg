let rightSideList = document.createElement('ul');
rightSide.appendChild(rightSideList);
rightSideList.classList.add('right-side__list');

for(let i=0; i<Friends.List.length; i++){
    let rightSideListItem = document.createElement('li');
    rightSideList.appendChild(rightSideListItem);
    rightSideListItem.classList.add('right-side__list__item');

    let listItemContent = document.createElement('div');
    rightSideListItem.appendChild(listItemContent);
    listItemContent.classList.add('right-side__list__item__content');

    let listItemPicture = document.createElement('div');
    listItemContent.appendChild(listItemPicture);
    listItemPicture.classList.add('right-side__list__item__picture');

    let ListItemName = document.createElement('div');
    listItemContent.appendChild(ListItemName);
    ListItemName.classList.add('right-side__list__item__name')
    let ListItemNameText = document.createTextNode(Friends.List[i].name);
    ListItemName.appendChild(ListItemNameText);


    if(Friends.List[i].isOnline == true){
        let listItemCircle = document.createElement('div');
        listItemContent.appendChild(listItemCircle);
        listItemCircle.classList.add('right-side__list__item__circle')
    }
}

let rightSideSerchBar = document.createElement('li');
rightSideList.appendChild(rightSideSerchBar);
rightSideSerchBar.classList.add('right-side__search');
rightSideSerchBar.classList.add('right-side__list__item');

let searchBarIcons = document.createElement('div');
rightSideSerchBar.appendChild(searchBarIcons);
searchBarIcons.classList.add('right-side__search__icons');

let searchBarIcon = document.createElement('i');
searchBarIcons.appendChild(searchBarIcon);
searchBarIcon.setAttribute('class','fa fa-search');

let searchBarInput = document.createElement('input');
rightSideSerchBar.appendChild(searchBarInput);
searchBarInput.setAttribute('type','search');
searchBarInput.setAttribute('placeholder','search');

let searchBarIconRight = document.createElement('div');
rightSideSerchBar.appendChild(searchBarIconRight);
searchBarIconRight.classList.add('right-side__search__icons2');


let searchBarIconClassArr = ['fa fa-users right','fas fa-pencil-alt right','fas fa-cog right'];

for(let j=0; j<3; j++){
    let icons = document.createElement('i');
    searchBarIconRight.appendChild(icons);
    icons.setAttribute('class',searchBarIconClassArr[j]);
}