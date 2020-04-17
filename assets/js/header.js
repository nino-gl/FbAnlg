let header = document.createElement("header");
logIn.appendChild(header);
header.classList.add("header");

let headerContent = document.createElement("div");
header.appendChild(headerContent);
headerContent.classList.add("header__content");

let logo = document.createElement("h1");
headerContent.appendChild(logo);
logo.classList.add('header__content__logo');

let logoLink = document.createElement('a');
logo.appendChild(logoLink);
logoLink.setAttribute('class', 'header__content__logo__link');
let logoText = document.createTextNode('facebook');
logoLink.appendChild(logoText);

let headerTable = document.createElement('table');
headerContent.appendChild(headerTable);
headerTable.classList.add('header-table');

let T = document.createElement('tr');
headerTable.appendChild(T);

let headerTableItem = document.createElement('td');
T.appendChild(headerTableItem);
headerTableItem.classList.add('header-table__item');
let headerTableItemText = document.createTextNode('Email or Phone');
headerTableItem.appendChild(headerTableItemText);

let headerTableItem2 = document.createElement('td');
T.appendChild(headerTableItem2);
headerTableItem2.classList.add('header-table__item');
let headerTableItemText2 = document.createTextNode('Password');
headerTableItem2.appendChild(headerTableItemText2);

let tr = document.createElement('tr');
headerTable.appendChild(tr);

let headerTableItem3 = document.createElement('td');
tr.appendChild(headerTableItem3);

let input1 = document.createElement('input');
headerTableItem3.appendChild(input1);
input1.setAttribute('type', 'text');
input1.setAttribute('name', 'text');
input1.setAttribute('class', 'header-table__item2');
input1.setAttribute('id', 'email');
input1.id = "inputName";

let headerTableItem4 = document.createElement('td');
tr.appendChild(headerTableItem4);

let input2 = document.createElement('input');
headerTableItem4.appendChild(input2);
input2.setAttribute('type', 'password');
input2.setAttribute('name', 'password');
input2.setAttribute('class', 'header-table__item2');
input2.id = "inputPassword"

let td2 = document.createElement('td');
tr.appendChild(td2);

let tableButton = document.createElement('button');
td2.appendChild(tableButton);
tableButton.classList.add('header-table__button');
let tableButtonText = document.createTextNode('Log in');
tableButton.appendChild(tableButtonText);
tableButton.id = "loginBtn";

let ltr = document.createElement('tr');
headerTable.appendChild(ltr);

let ftd = document.createElement('td');
ltr.appendChild(ftd);

let ltd = document.createElement('td');
ltr.appendChild(ltd);

let tableLink = document.createElement('a');
ltd.appendChild(tableLink)
tableLink.setAttribute('class', 'header-table__F-account');
let tableLinkText = document.createTextNode('Forgot account?');
tableLink.appendChild(tableLinkText);