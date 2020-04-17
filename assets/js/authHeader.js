let authHeader = document.createElement('header');
auth.appendChild(authHeader);
authHeader.classList.add('authHeader');

let authHeaderContent = document.createElement('div');
authHeader.appendChild(authHeaderContent);
authHeaderContent.classList.add('authHeader__content');

let authHeaderContentItem = document.createElement('div');
authHeaderContent.appendChild(authHeaderContentItem);
authHeaderContentItem.classList.add('authHeader__content__item');

let authHeaderLogo = document.createElement('div');
authHeaderContentItem.appendChild(authHeaderLogo);
authHeaderLogo.classList.add('authHeader__content__item__logo');

let authHeaderLogoLink = document.createElement('a');
authHeaderLogo.appendChild(authHeaderLogoLink);
authHeaderLogoLink.setAttribute('href','#');

let authHeaderLogoFa = document.createElement('i');
authHeaderLogoLink.appendChild(authHeaderLogoFa);
authHeaderLogoFa.setAttribute('class', 'fab fa-facebook-f');

let authHeaderContentSearch = document.createElement('div');
authHeaderContentItem.appendChild(authHeaderContentSearch);
authHeaderContentSearch.classList.add('authHeader__content__search')

let searchField = document.createElement('input');
authHeaderContentSearch.appendChild(searchField);
searchField.setAttribute('class', 'authHeader__content__search__field');
searchField.setAttribute('type', 'search');
searchField.setAttribute('placeholder', 'search');


let searchButton = document.createElement('button');
authHeaderContentSearch.appendChild(searchButton);
searchButton.classList.add('authHeader__content__search__button')

let searchButtonLink = document.createElement('a')
searchButton.appendChild(searchButtonLink);
searchButtonLink.setAttribute('href', '#');

let searchButtonLinkFa = document.createElement('i')
searchButtonLink.appendChild(searchButtonLinkFa);
searchButtonLinkFa.setAttribute('class', 'fa fa-search search--icon');
searchButtonLink.setAttribute('aria-hidden', 'true');


let authHeaderProfile = document.createElement('div');
authHeaderContentItem.appendChild(authHeaderProfile);
authHeaderProfile.classList.add('authHeader__content__item__profile')

let authHeaderProfileInfo = document.createElement('div');
authHeaderProfile.appendChild(authHeaderProfileInfo);
authHeaderProfileInfo.classList.add('authHeader__content__item__profile__info')
authHeaderProfileInfo.classList.add('name');

let authHeaderPersonalInfo = document.createElement('div');
authHeaderProfileInfo.appendChild(authHeaderPersonalInfo);
authHeaderPersonalInfo.classList.add('authHeader__content__item__profile__info__personal')
authHeaderPersonalInfo.classList.add('name');

let authHeaderImg = document.createElement('div');
authHeaderPersonalInfo.appendChild(authHeaderImg);
authHeaderImg.classList.add('authHeader__img');

let authHeaderName = document.createElement('span');
authHeaderPersonalInfo.appendChild(authHeaderName);
authHeaderName.classList.add('authHeader__customer__name');
let authHeaderNameText = document.createTextNode('Name');
authHeaderName.appendChild(authHeaderNameText);


let headerClassArr = ['Home', 'Create'];

for(let k=0; k<2; k++){
    
    authHeaderContentItem.appendChild(authHeaderProfile);
    authHeaderProfile.classList.add('authHeader__content__item__profile')

    let authHeaderProfileInfo = document.createElement('div');
    authHeaderProfile.appendChild(authHeaderProfileInfo);
    authHeaderProfileInfo.classList.add('authHeader__content__item__profile__info');
    authHeaderProfileInfo.classList.add(headerClassArr[k]);

    let authHeaderPersonalInfo = document.createElement('div');
    authHeaderProfileInfo.appendChild(authHeaderPersonalInfo);
    authHeaderPersonalInfo.classList.add('authHeader__content__item__profile__info__personal')

    let authHeaderName = document.createElement('span');
    authHeaderPersonalInfo.appendChild(authHeaderName);
    authHeaderName.classList.add('authHeader__customer__name');
    let authHeaderNameText = document.createTextNode(headerClassArr[k]);
    authHeaderName.appendChild(authHeaderNameText);
}


let authHeaderIcons = document.createElement('div');
authHeaderProfile.appendChild(authHeaderIcons);
authHeaderIcons.classList.add('authHeader__content__item__profile__info');
authHeaderIcons.classList.add('icons');

let authHeaderIconsC = document.createElement('div');
authHeaderIcons.appendChild(authHeaderIconsC);
authHeaderIconsC.classList.add('authHeader__content__item__profile__info__personal');


let authHeaderIconsArr = ['fas fa-user-friends', 'fab fa-facebook-messenger', 'fas fa-bell'];

for(let h=0; h<3; h++){
    let hederIcons = document.createElement('i');
    authHeaderIconsC.appendChild(hederIcons);
    hederIcons.setAttribute('class', authHeaderIconsArr[h]);
}


let authHeadericons2 = document.createElement('div');
authHeaderProfile.appendChild(authHeadericons2);
authHeadericons2.classList.add('icons');
authHeadericons2.classList.add('authHeader-icons');

let HederIconsArr = ['fas fa-question-circle', 'fas fa-caret-down'];

for(let t=0; t<2; t++){
    let headericons = document.createElement('i');
    authHeadericons2.appendChild(headericons);
    headericons.setAttribute('class', HederIconsArr[t]);
}
