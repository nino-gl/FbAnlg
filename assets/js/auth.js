let logInn = document.getElementById("logIn");
let authh = document.getElementById('auth');

if(localStorage.getItem('authorization')){
    if(localStorage.getItem('authorization') == 'true'){
        localStorage.setItem("authorization", true);
        logInn.classList.remove('show');
        logInn.classList.add('hide');
        authh.classList.remove('hide');
        authh.classList.add('show');
    }
}

let login = {
    user: {
        name: 'saxeli',
        password: 'paroli'
    },

    name: '',
    password: '',

    loginBtn: document.getElementById('loginBtn'),

    newPage: function(){
        login.name = document.getElementById('inputName').value;
        login.password = document.getElementById('inputPassword').value;

        if(login.name == login.user.name && login.password == login.user.password){
            localStorage.setItem("authorization", true);
            logIn.classList.remove('show');
            logIn.classList.add('hide');
            auth.classList.remove('hide');
            auth.classList.add('show');
        }
        else{
            alert('wrong passwprd or name');
        }
    }

}

loginBtn.addEventListener('click', login.newPage);