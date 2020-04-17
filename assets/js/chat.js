let chatSection = document.createElement('div');
auth.appendChild(chatSection);
chatSection.classList.add('chat-section');


//-------------------------------------------------
function openChat(){
    let chat = document.createElement('div');
    chatSection.appendChild(chat);
    chat.classList.add('chat');
    chat.id = "chatId"

    ////////
    let chatTop = document.createElement('div');
    chat.appendChild(chatTop);
    chatTop.classList.add('chat__top')

    let chatTopPhoto = document.createElement('div');
    chatTop.appendChild(chatTopPhoto);
    chatTopPhoto.classList.add('chat__top__photo');

    let chatTopName = document.createElement('span');
    chatTop.appendChild(chatTopName);

    // let chatTopNameText;

    window.addEventListener('click',function(e){
        
        var chatTopNameText = document.createTextNode(e.target.innerText);
        chatTopName.appendChild(chatTopNameText);
    }, {once : true})

    // chatTopNameText = document.createTextNode(EventTarget.innerHTML);
    
    chatTopName.classList.add('chat__top__name');

    
    let chatTopIcons = document.createElement('div');
    chatTop.appendChild(chatTopIcons);
    chatTopIcons.classList.add('chat__top__icons');


    let chatTopIconsArr = ['fas fa-video chatIcon', 'fas fa-phone chatIcon','fas fa-cog chatIcon'];

    for(let j=0; j<3; j++){
        let chatIcons = document.createElement('i');
        chatTopIcons.appendChild(chatIcons);
        chatIcons.setAttribute('class', chatTopIconsArr[j]);
    }


    let chatIcon = document.createElement('i');
    chatTopIcons.appendChild(chatIcon);
    chatIcon.setAttribute('class', "fas fa-times chatCloseIcon");
    chatIcon.id = "chatIconId";


    //
    
    let chatcl = document.getElementById('chatIconId');

    function closeChats(){
        document.getElementById('chatId').style.display = 'none';
    }
    
    chatcl.addEventListener('click', closeChats);

    //





    /////////
    let chatSms = document.createElement('div');
    chat.appendChild(chatSms);
    chatSms.classList.add('chat__sms');

    let chatSmsSpan = document.createElement('span');
    chatSms.appendChild(chatSmsSpan);
    chatSmsSpan.classList.add("chat__sms__span");
    chatSmsSpan.id = 'smsId';

    ////////
    let chatInput = document.createElement('div');
    chat.appendChild(chatInput);
    chatInput.classList.add('chat__input');

    let chatInputArea = document.createElement('div');
    chatInput.appendChild(chatInputArea);
    chatInputArea.classList.add('chat__input__area');

    let chatInputText = document.createElement('input');
    chatInputArea.appendChild(chatInputText);
    chatInputText.setAttribute('type','text');
    chatInputText.setAttribute('placeholder','Type a message...');
    chatInputText.setAttribute('class','chat__input__area__text');
    chatInputText.id = 'inputId';

    let chatSendIcon = document.createElement('i');
    chatInputArea.appendChild(chatSendIcon);
    chatSendIcon.setAttribute('class','fas fa-paper-plane');
    chatSendIcon.id = 'sendId';

    let sendId = document.getElementById('sendId');
    let inputId = document.getElementById('inputId');
    let smsId = document.getElementById('smsId');
    function sendText(){
        smsId.innerHTML = inputId.value;
        smsId.style.display = "block";
    }

    sendId.addEventListener('click',sendText);



    ///////
    let chatIconArea = document.createElement('div');
    chatInput.appendChild(chatIconArea);
    chatIconArea.classList.add('chat__input__icons');

    let chatIconArray = ["far fa-image bIcon","fas fa-stop bIcon","fas fa-gift bIcon","fas fa-smile bIcon","fas fa-gamepad bIcon","fab fa-angellist bIcon","fas fa-camera-retro bIcon"];
    for(let j=0; j<chatIconArray.length; j++){
        let icons = document.createElement('i');
        chatIconArea.appendChild(icons);
        icons.setAttribute('class',chatIconArray[j]);
    }
}
//-----------------------------------------------------



///////////////////chat display function
var classname = document.getElementsByClassName("right-side__list__item");

// function func(){
//     var chatId = document.getElementById('chatId');
//     chatId.style.display = 'block';
// }

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', openChat, false);
}

// window.addEventListener('click',function(e){
//     console.log(e.target.firstChild);
// })
