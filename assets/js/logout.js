let logInnn = document.getElementById("logIn");
let authhn = document.getElementById('auth');

let logOutBtn = document.createElement('button');
authHeaderProfile.appendChild(logOutBtn);
let logOutTxt = document.createTextNode('Log out');
logOutBtn.appendChild(logOutTxt);
logOutBtn.classList.add('logOutBtn');
logOutBtn.id = 'logOutBtn';



function firstPage(){
    localStorage.clear();     
    sessionStorage.clear();

    auth.classList.remove('show');
    auth.classList.add('hide');
    logIn.classList.remove('hide');
    logIn.classList.add('show');

}

logOutBtn.addEventListener('click', firstPage);