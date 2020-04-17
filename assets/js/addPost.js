var postsBody = document.getElementById('allPosts');
var btnPost = document.getElementById('postBtn');

var postHead = document.getElementById('postHead');

// if(localStorage.getItem('postInformation')) {
//     postHead.innerHTML = localStorage.getItem('postInformation')
// }

// function addPost() {
//     var post = document.getElementById('postInput');
//     var informationToSave = post;
//     localStorage.setItem('postInformation', informationToSave);
//     postHead.innerHTML = localStorage.getItem('postInformation');

    
//     let addFeedPosts = document.createElement('div');
//     addFeedPosts.classList.add('Main-content__content-container__left__feed__posts');
//     contLeftFeed.appendChild(addFeedPosts);
//         let addFeedPostsContent = document.createElement('div');
//         addFeedPostsContent.classList.add('Main-content__content-container__left__feed__posts__content');
//         addFeedPosts.appendChild(addFeedPostsContent);
        
//             let postUser2 = document.createElement('div');
//             postUser2.classList.add('Main-content__content-container__left__feed__posts__content__user');
//             addFeedPostsContent.appendChild(postUser2);
//                 let userPicture2 = document.createElement('div');
//                 userPicture2.classList.add('Main-content__content-container__left__feed__posts__content__user__pic');
//                 postUser2.appendChild(userPicture2);
    
//                 let user2TextInfo = document.createElement('div');
//                 user2TextInfo.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo');
//                 postUser2.appendChild(user2TextInfo);
    
//                         let userName2 = document.createElement('p');
//                         userName2.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__name');
//                         user2TextInfo.appendChild(userName2);
//                             let userName2text = document.createTextNode('TecHub');
//                             userName2.appendChild(userName2text);
    
//                         let userDate2 = document.createElement('span');
//                         userDate2.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__date');
//                         user2TextInfo.appendChild(userDate2);
//                             let userDateText2 = document.createTextNode('January 20 at 08:15 AM      .');
//                             userDate2.appendChild(userDateText2);
    
//                         let userGlobe2 = document.createElement('i');
//                         userGlobe2.setAttribute('class', 'fas fa-globe-europe');
//                         userDate2.appendChild(userGlobe2);
    
//             let postText2 = document.createElement('p');
//             postText2.classList.add('Main-content__content-container__left__feed__posts__content__text');
//             postText2.setAttribute('id', 'postHead');
//             addFeedPostsContent.appendChild(postText2);
    
//                 // let postText2Cont = document.createTextNode('Photo description photo description  photo description photo description photo description photo description photo description')
//                 // postText2.appendChild(postText2Cont); 
    
    
//             let postReactions2 = document.createElement('div');
//             postReactions2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions');
//             addFeedPostsContent.appendChild(postReactions2);
//                 let reactionsList2 = document.createElement('ul');
//                 reactionsList2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list');
//                 postReactions2.appendChild(reactionsList2);
//                     let reactItem1L = document.createElement('li');
//                     reactItem1L.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
//                     reactionsList2.appendChild(reactItem1L);
//                         let reactLike1L = document.createElement('i');
//                         reactLike1L.setAttribute('class', 'far fa-thumbs-up');
//                         reactItem1L.appendChild(reactLike1L);
    
//                         let reactLiketext1L = document.createElement('span');
//                         reactLiketext1L.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
//                         reactItem1L.appendChild(reactLiketext1L);
//                             let reactLiketextCont1L = document.createTextNode(' Like');
//                             reactLiketext1L.appendChild(reactLiketextCont1L);
    
//                     let reactItem2C = document.createElement('li');
//                     reactItem2C.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
//                     reactionsList2.appendChild(reactItem2C);
//                         let reactLike2C = document.createElement('i');
//                         reactLike2C.setAttribute('class', 'far fa-comment');
//                         reactItem2C.appendChild(reactLike2C);
    
//                         let reactLiketext2C = document.createElement('span');
//                         reactLiketext2C.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
//                         reactItem2C.appendChild(reactLiketext2C);
//                             let reactLiketextCont2C = document.createTextNode(' Comment');
//                             reactLiketext2C.appendChild(reactLiketextCont2C);
    
                    
//                     let reactItem3S = document.createElement('li');
//                     reactItem3S.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
//                     reactionsList2.appendChild(reactItem3S);
//                         let reactLike3S = document.createElement('i');
//                         reactLike3S.setAttribute('class', 'far fa-trash-alt');
//                         reactItem3S.appendChild(reactLike3S);
    
//                         let reactLiketext3S = document.createElement('span');
//                         reactLiketext3S.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
//                         reactItem3S.appendChild(reactLiketext3S);
//                             let reactLiketextCont3S = document.createTextNode(' Delete');
//                             reactLiketext3S.appendChild(reactLiketextCont3S);

// }


// btnPost.addEventListener('click', addPost);

 





function addPosts() {
        let posts = []; 
        if(localStorage.getItem('status')) {
            posts = JSON.parse(localStorage.getItem('status'));
        }

        else {
            let posts = []; 
                localStorage.setItem('status', JSON.stringify(posts));
            }
        
            posts.push(textFieldInput.value);
            localStorage.setItem('status', JSON.stringify(posts));
            
        
            textFieldInput.value = ''
        

        for (let i = 0; i < posts.length; i++) {
                        
            
            let addFeedPosts = contLeftFeed.appendChild(document.createElement('div'));
            addFeedPosts.classList.add('Main-content__content-container__left__feed__posts');
            contLeftFeed.insertBefore(addFeedPosts, contLeftFeed[1]);
            
            let addFeedPostsContent = document.createElement('div');
            addFeedPostsContent.classList.add('Main-content__content-container__left__feed__posts__content');
            addFeedPosts.appendChild(addFeedPostsContent);
            
            let postUser2 = document.createElement('div');
            postUser2.classList.add('Main-content__content-container__left__feed__posts__content__user');
            addFeedPostsContent.appendChild(postUser2);
            let userPicture2 = document.createElement('div');
            userPicture2.classList.add('Main-content__content-container__left__feed__posts__content__user__pic');
            postUser2.appendChild(userPicture2);
            
            let user2TextInfo = document.createElement('div');
            user2TextInfo.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo');
            postUser2.appendChild(user2TextInfo);
            
            let userName2 = document.createElement('p');
            userName2.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__name');
            user2TextInfo.appendChild(userName2);
            let userName2text = document.createTextNode('TecHub');
            userName2.appendChild(userName2text);
            
            let userDate2 = document.createElement('span');
            userDate2.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__date');
            user2TextInfo.appendChild(userDate2);
            let userDateText2 = document.createTextNode('January 20 at 08:15 AM      .');
            userDate2.appendChild(userDateText2);
            
            let userGlobe2 = document.createElement('i');
            userGlobe2.setAttribute('class', 'fas fa-globe-europe');
            userDate2.appendChild(userGlobe2);
            
            let postText2 = document.createElement('p');
            postText2.classList.add('Main-content__content-container__left__feed__posts__content__text');
            postText2.setAttribute('id', 'postHead');
            addFeedPostsContent.appendChild(postText2);
            
            // let postText2Cont = document.createTextNode('Photo description photo description  photo description photo description photo description photo description photo description')
            // postText2.appendChild(postText2Cont); 
            
            
            let postReactions2 = document.createElement('div');
            postReactions2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions');
            addFeedPostsContent.appendChild(postReactions2);
            let reactionsList2 = document.createElement('ul');
            reactionsList2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list');
            postReactions2.appendChild(reactionsList2);
            let reactItem1L = document.createElement('li');
            reactItem1L.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList2.appendChild(reactItem1L);
            let reactLike1L = document.createElement('i');
            reactLike1L.setAttribute('class', 'far fa-thumbs-up');
            reactItem1L.appendChild(reactLike1L);
            
            let reactLiketext1L = document.createElement('span');
            reactLiketext1L.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem1L.appendChild(reactLiketext1L);
            let reactLiketextCont1L = document.createTextNode(' Like');
            reactLiketext1L.appendChild(reactLiketextCont1L);
            
            let reactItem2C = document.createElement('li');
            reactItem2C.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList2.appendChild(reactItem2C);
            let reactLike2C = document.createElement('i');
            reactLike2C.setAttribute('class', 'far fa-comment');
            reactItem2C.appendChild(reactLike2C);
            
            let reactLiketext2C = document.createElement('span');
            reactLiketext2C.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem2C.appendChild(reactLiketext2C);
            let reactLiketextCont2C = document.createTextNode(' Comment');
            reactLiketext2C.appendChild(reactLiketextCont2C);
            
            
            let reactItem3S = document.createElement('li');
            reactItem3S.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList2.appendChild(reactItem3S);
            let reactLike3S = document.createElement('i');
            reactLike3S.setAttribute('class', 'far fa-trash-alt');
            reactItem3S.appendChild(reactLike3S);
            
            let reactLiketext3S = document.createElement('span');
            reactLiketext3S.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem3S.appendChild(reactLiketext3S);
            let reactLiketextCont3S2 = document.createTextNode(' Delete');
            reactLiketext3S.appendChild(reactLiketextCont3S2);
            
            
            contLeftFeed.innerHTML = posts[i];
            posts.setAttribute('style', 'display: flex; flelx-direction: column-reverse');
        }
    
}

// addPosts();
  

function drawOnLoad() {
        let posts = []; 
        if(localStorage.getItem('status')) {
            posts = JSON.parse(localStorage.getItem('status'));
        }

        for (let i = 0; i < posts.length; i++) {
        
    
            let addFeedPosts2 = contLeftFeed.appendChild(document.createElement('div'));
            addFeedPosts2.classList.add('Main-content__content-container__left__feed__posts');
            contLeftFeed.insertBefore(addFeedPosts2, contLeftFeed[1]);
            
            let addFeedPostsContent2 = document.createElement('div');
            addFeedPostsContent2.classList.add('Main-content__content-container__left__feed__posts__content');
            addFeedPosts2.appendChild(addFeedPostsContent2);
            
            let postUser22 = document.createElement('div');
            postUser22.classList.add('Main-content__content-container__left__feed__posts__content__user');
            addFeedPostsContent2.appendChild(postUser22);
            let userPicture22 = document.createElement('div');
            userPicture22.classList.add('Main-content__content-container__left__feed__posts__content__user__pic');
            postUser22.appendChild(userPicture22);
            
            let user2TextInfo2 = document.createElement('div');
            user2TextInfo2.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo');
            postUser22.appendChild(user2TextInfo2);
            
            let userName22 = document.createElement('p');
            userName22.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__name');
            user2TextInfo2.appendChild(userName22);
            let userName2text2 = document.createTextNode('TecHub');
            userName22.appendChild(userName2text2);
            
            let userDate22 = document.createElement('span');
            userDate22.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__date');
            user2TextInfo2.appendChild(userDate22);
            let userDateText22 = document.createTextNode('January 20 at 08:15 AM      .');
            userDate22.appendChild(userDateText22);
            
            let userGlobe22 = document.createElement('i');
            userGlobe22.setAttribute('class', 'fas fa-globe-europe');
            userDate22.appendChild(userGlobe22);
            
            let postText22 = document.createElement('p');
            postText22.classList.add('Main-content__content-container__left__feed__posts__content__text');
            postText22.setAttribute('id', 'postHead');
            addFeedPostsContent2.appendChild(postText22);
            
            // let postText2Cont = document.createTextNode('Photo description photo description  photo description photo description photo description photo description photo description')
            // postText2.appendChild(postText2Cont); 
            
            
            let postReactions22 = document.createElement('div');
            postReactions22.classList.add('Main-content__content-container__left__feed__posts__content__postReactions');
            addFeedPostsContent2.appendChild(postReactions22);
            let reactionsList22 = document.createElement('ul');
            reactionsList22.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list');
            postReactions22.appendChild(reactionsList22);
            let reactItem1L2 = document.createElement('li');
            reactItem1L2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList22.appendChild(reactItem1L2);
            let reactLike1L2 = document.createElement('i');
            reactLike1L2.setAttribute('class', 'far fa-thumbs-up');
            reactItem1L2.appendChild(reactLike1L2);
            
            let reactLiketext1L2 = document.createElement('span');
            reactLiketext1L2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem1L2.appendChild(reactLiketext1L2);
            let reactLiketextCont1L2 = document.createTextNode(' Like');
            reactLiketext1L2.appendChild(reactLiketextCont1L2);
            
            let reactItem2C2 = document.createElement('li');
            reactItem2C2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList22.appendChild(reactItem2C2);
            let reactLike2C2 = document.createElement('i');
            reactLike2C2.setAttribute('class', 'far fa-comment');
            reactItem2C2.appendChild(reactLike2C2);
            
            let reactLiketext2C2 = document.createElement('span');
            reactLiketext2C2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem2C2.appendChild(reactLiketext2C2);
            let reactLiketextCont2C2 = document.createTextNode(' Comment');
            reactLiketext2C2.appendChild(reactLiketextCont2C2);
            
            
            let reactItem3S2 = document.createElement('li');
            reactItem3S2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
            reactionsList22.appendChild(reactItem3S2);
            let reactLike3S2 = document.createElement('i');
            reactLike3S2.setAttribute('class', 'far fa-trash-alt');
            reactItem3S2.appendChild(reactLike3S2);
            
            let reactLiketext3S2 = document.createElement('span');
            reactLiketext3S2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
            reactItem3S2.appendChild(reactLiketext3S2);
            let reactLiketextCont3S2 = document.createTextNode(' Delete');
            reactLiketext3S2.appendChild(reactLiketextCont3S2);
            
            
            contLeftFeed.innerHTML = posts[i];
            
        }
    
}



drawOnLoad()


textFieldInput.onkeydown = function(y) {
    
if (y.keyCode == 13) {
    
    
    let addFeedPosts3 = contLeftFeed.appendChild(document.createElement('div'));
    addFeedPosts3.classList.add('Main-content__content-container__left__feed__posts');
    contLeftFeed.insertBefore(addFeedPosts3, contLeftFeed[1]);
    
    let addFeedPostsContent3 = document.createElement('div');
    addFeedPostsContent3.classList.add('Main-content__content-container__left__feed__posts__content');
    addFeedPosts3.appendChild(addFeedPostsContent3);
    
    let postUser23 = document.createElement('div');
    postUser23.classList.add('Main-content__content-container__left__feed__posts__content__user');
    addFeedPostsContent3.appendChild(postUser23);
    let userPicture23 = document.createElement('div');
    userPicture23.classList.add('Main-content__content-container__left__feed__posts__content__user__pic');
    postUser23.appendChild(userPicture23);
    
    let user2TextInfo3 = document.createElement('div');
    user2TextInfo3.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo');
    postUser23.appendChild(user2TextInfo3);
    
    let userName23 = document.createElement('p');
    userName23.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__name');
    user2TextInfo3.appendChild(userName23);
    let userName2text3 = document.createTextNode('TecHub');
    userName23.appendChild(userName2text3);
    
    let userDate23 = document.createElement('span');
    userDate23.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__date');
    user2TextInfo3.appendChild(userDate23);
    let userDateText23 = document.createTextNode('January 20 at 08:15 AM      .');
    userDate23.appendChild(userDateText23);
    
    let userGlobe23 = document.createElement('i');
    userGlobe23.setAttribute('class', 'fas fa-globe-europe');
    userDate23.appendChild(userGlobe23);
    
    let postText23 = document.createElement('p');
    postText23.classList.add('Main-content__content-container__left__feed__posts__content__text');
    postText23.setAttribute('id', 'postHead');
    addFeedPostsContent3.appendChild(postText23);

    postText23.innerHTML = textFieldInput.value;

    
    // let postText2Cont = document.createTextNode('Photo description photo description  photo description photo description photo description photo description photo description')
    // postText2.appendChild(postText2Cont); 
    
    
    let postReactions23 = document.createElement('div');
    postReactions23.classList.add('Main-content__content-container__left__feed__posts__content__postReactions');
    addFeedPostsContent3.appendChild(postReactions23);
    let reactionsList23 = document.createElement('ul');
    reactionsList23.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list');
    postReactions23.appendChild(reactionsList23);
    let reactItem1L3 = document.createElement('li');
    reactItem1L3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
    reactionsList23.appendChild(reactItem1L3);
    let reactLike1L3 = document.createElement('i');
    reactLike1L3.setAttribute('class', 'far fa-thumbs-up');
    reactItem1L3.appendChild(reactLike1L3);
    
    let reactLiketext1L3 = document.createElement('span');
    reactLiketext1L3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
    reactItem1L3.appendChild(reactLiketext1L3);
    let reactLiketextCont1L3 = document.createTextNode(' Like');
    reactLiketext1L3.appendChild(reactLiketextCont1L3);
    
    let reactItem2C3 = document.createElement('li');
    reactItem2C3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
    reactionsList23.appendChild(reactItem2C3);
    let reactLike2C3 = document.createElement('i');
    reactLike2C3.setAttribute('class', 'far fa-comment');
    reactItem2C3.appendChild(reactLike2C3);
    
    let reactLiketext2C3 = document.createElement('span');
    reactLiketext2C3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
    reactItem2C3.appendChild(reactLiketext2C3);
    let reactLiketextCont2C3 = document.createTextNode(' Comment');
    reactLiketext2C3.appendChild(reactLiketextCont2C3);
    
    
    let reactItem3S3 = document.createElement('li');
    reactItem3S3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
    reactionsList23.appendChild(reactItem3S3);
    let reactLike3S3 = document.createElement('i');
    reactLike3S3.setAttribute('class', 'far fa-trash-alt');
    reactItem3S3.appendChild(reactLike3S3);
    
    let reactLiketext3S3 = document.createElement('span');
    reactLiketext3S3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
    reactItem3S3.appendChild(reactLiketext3S3);
    let reactLiketextCont3S3 = document.createTextNode(' Delete');
    reactLiketext3S3.appendChild(reactLiketextCont3S3);
    
    
addPosts();
    
}
}
