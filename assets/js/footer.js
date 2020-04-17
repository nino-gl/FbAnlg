let footer = document.createElement('footer');
logIn.appendChild(footer);
footer.classList.add('footer');

let footerContent = document.createElement('div');
footer.appendChild(footerContent);
footerContent.classList.add('footer__content');


let arr = ['English (US)','ქართული','Русский','Türkçe','Deutsch','Azərbaycan dili','العربية','Français (France)','Ελληνικά','Español','Português (Brasil)'];

for(let i=0; i<11; i++){
    let t = document.createElement('a');
    footerContent.appendChild(t);
    t.setAttribute('class','footer__links');
    tText = document.createTextNode(arr[i]);
    t.appendChild(tText);
}


let h = document.createElement('hr');
footerContent.appendChild(h);


let Arr = ['English (US)','ქართული','Русский','Türkçe','Deutsch','Azərbaycan dili','العربية','Français (France)','Ελληνικά','Español','Português (Brasil)','English (US)','ქართული','Русский','Türkçe','Deutsch','Azərbaycan dili','العربية','Français (France)','Ελληνικά','Español','Português (Brasil)','English (US)','ქართული','Русский','Türkçe','Deutsch','Azərbaycan dili','العربية','Français (France)','Ελληνικά','Español','Português (Brasil)'];


for(let j=0; j<33; j++){
    let a = document.createElement('a');
    footerContent.appendChild(a);
    a.setAttribute('class','footer__links');
    a.setAttribute('href','#');
    aText = document.createTextNode(Arr[j]);
    a.appendChild(aText);
    if(j == 11 || j == 23){
        let b = document.createElement('br');
        footerContent.appendChild(b);
    }
}