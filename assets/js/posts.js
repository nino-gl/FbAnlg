//Main-content

let headerArea = document.createElement('div');
headerArea.classList.add('Main-content__header');
mainContent.appendChild(headerArea);
    let headerAreaBox = document.createElement('div');
    headerArea.appendChild(headerAreaBox);
        let headerCover = document.createElement('div');
        headerCover.classList.add('Main-content__header__cover');
        headerAreaBox.appendChild(headerCover);
            let headerImg = document.createElement('img');
            headerImg.setAttribute('src', 'assets/pics/nature_cover.jpg')
            headerImg.classList.add('Main-content__header__cover__img');
            headerCover.appendChild(headerImg);

    
    let headerAreaButtons = document.createElement('div');
    headerArea.appendChild(headerAreaButtons);
        let headerButtonsBox = document.createElement('div');
        headerButtonsBox.classList.add('Main-content__header__buttonBox');
        headerAreaBox.appendChild(headerButtonsBox);
            let headerbtns = document.createElement('div');
            headerbtns.classList.add('Main-content__header__buttonBox__btns');
            headerButtonsBox.appendChild(headerbtns);
                let leftBtns = document.createElement('div');
                leftBtns.classList.add('Main-content__header__buttonBox__btns__left');
                headerbtns.appendChild(leftBtns);
                    let leftBtnsItems = document.createElement('div');
                    leftBtns.appendChild(leftBtnsItems);
                        let leftBtnsBox = document.createElement('div');
                        leftBtnsBox.classList.add('Main-content__header__buttonBox__btns__left__items');
                        leftBtnsItems.appendChild(leftBtnsBox);

                            let leftBtnItemsLike = document.createElement('div');
                            leftBtnsBox.appendChild(leftBtnItemsLike);
                                let leftBtnLike = document.createElement('button');
                                leftBtnLike.classList.add('Main-content__header__buttonBox__btns__left__items__like');
                                leftBtnItemsLike.appendChild(leftBtnLike);
                                        let likeIcon = document.createElement('i');
                                        likeIcon.setAttribute('class', 'fas fa-thumbs-up');
                                        likeIcon.setAttribute('style', 'color: gray')
                                        leftBtnLike.appendChild(likeIcon);
                                        
                                        let likeText = document.createTextNode(' Like');
                                        leftBtnLike.appendChild(likeText);



                            let leftBtnItemsFlw = document.createElement('div');
                            leftBtnsBox.appendChild(leftBtnItemsFlw);
                                let leftBtnFollow = document.createElement('button');
                                leftBtnFollow.classList.add('Main-content__header__buttonBox__btns__left__items__follow');
                                leftBtnItemsFlw.appendChild(leftBtnFollow);

                                    let followIcon = document.createElement('i');
                                    followIcon.setAttribute('class', 'fas fa-wifi');
                                    followIcon.setAttribute('style', 'color: gray')
                                    leftBtnFollow.appendChild(followIcon);
                                        
                                    let followText = document.createTextNode(' Follow');
                                    leftBtnFollow.appendChild(followText);

                            let leftBtnItemsShare = document.createElement('div');
                            leftBtnsBox.appendChild(leftBtnItemsShare);
                                let leftBtnShare = document.createElement('button');
                                leftBtnShare.classList.add('Main-content__header__buttonBox__btns__left__items__share');
                                leftBtnItemsShare.appendChild(leftBtnShare);

                                    let shareIcon = document.createElement('i');
                                    shareIcon.setAttribute('class', 'fas fa-share');
                                    shareIcon.setAttribute('style', 'color: gray')
                                    leftBtnShare.appendChild(shareIcon);
                                    
                                    let shareText = document.createTextNode(' Share');
                                    leftBtnShare.appendChild(shareText);

                            let leftBtnItemsMore = document.createElement('div');
                            leftBtnsBox.appendChild(leftBtnItemsMore);
                                let leftBtnMore = document.createElement('button');
                                leftBtnMore.classList.add('Main-content__header__buttonBox__btns__left__items__more');
                                leftBtnItemsMore.appendChild(leftBtnMore);
                                                                        
                                    let moreText = document.createTextNode('...');
                                    leftBtnMore.appendChild(moreText);

                
                let rightBtn = document.createElement('div');
                rightBtn.classList.add('Main-content__header__buttonBox__btns__right');
                headerbtns.appendChild(rightBtn);
                    let rightBtnsItems = document.createElement('div');
                    rightBtn.appendChild(rightBtnsItems);
                        let rightBtnBox = document.createElement('div');
                        rightBtnBox.classList.add('Main-content__header__buttonBox__btns__right__items');
                        rightBtn.appendChild(rightBtnBox);

                            let rightBtnItem = document.createElement('div');
                            rightBtnBox.appendChild(rightBtnItem);
                                let rightBtnMore = document.createElement('span');
                                rightBtnMore.classList.add('Main-content__header__buttonBox__btns__right__items__learn-more');
                                rightBtnItem.appendChild(rightBtnMore);
                                    let buttonMore = document.createElement('button');
                                    buttonMore.classList.add('Main-content__header__buttonBox__btns__right__items__learn-more__button');
                                    rightBtnMore.appendChild(buttonMore);
                                        let lMoretext = document.createTextNode('Learn More ');
                                        buttonMore.appendChild(lMoretext);
                                        
                                        let penIcon = document.createElement('i');
                                        penIcon.setAttribute('class', 'fas fa-pencil-alt');
                                        penIcon.setAttribute('style', 'color: white')
                                        buttonMore.appendChild(penIcon);
                








let contentArea = document.createElement('div');
contentArea.classList.add('Main-content__content-container');
mainContent.appendChild(contentArea);
    let contRight = document.createElement('div');
    contRight.classList.add('Main-content__content-container__right');
    contentArea.appendChild(contRight);
        let contRightBox = document.createElement('div');
        contRightBox.classList.add('Main-content__content-container__right__box');
        contRight.appendChild(contRightBox);
            let contRightBoxCol = document.createElement('div');
            contRightBoxCol.classList.add('Main-content__content-container__right__box__col');
            contRightBox.appendChild(contRightBoxCol);  
                let rating = document.createElement('div');
                rating.classList.add('Main-content__content-container__right__box__col__rating');
                contRightBoxCol.appendChild(rating);
                    let ratingCont = document.createElement('div');
                    ratingCont.classList.add('Main-content__content-container__right__box__col__rating__cont');
                    rating.appendChild(ratingCont);
                        let ratingContIcon = document.createElement('div');
                        ratingContIcon.classList.add('Main-content__content-container__right__box__col__rating__cont__icon');
                        rating.appendChild(ratingContIcon);
                            // let ratingIcon = document.createElement('i');
                            // ratingIcon.setAttribute('class', 'fas fa-comment-alt');
                            // ratingContIcon.appendChild(ratingIcon);

                        let ratingContText = document.createElement('div');
                        ratingContText.classList.add('Main-content__content-container__right__box__col__rating__cont__text');
                        rating.appendChild(ratingContText);
                            let ratingtext = document.createTextNode('No Rating Yet');
                            ratingContText.appendChild(ratingtext);
                        

                let story = document.createElement('div');
                story.classList.add('Main-content__content-container__right__box__col__story');
                contRightBoxCol.appendChild(story);
                    let storyBox = document.createElement('div');
                    storyBox.classList.add('Main-content__content-container__right__box__col__story__box');
                    story.appendChild(storyBox);
                        let storyBoxPic = document.createElement('div');
                        storyBoxPic.classList.add('Main-content__content-container__right__box__col__story__box__pic');
                        storyBox.appendChild(storyBoxPic);

                        let storyBoxHead = document.createElement('div');
                        storyBoxHead.classList.add('Main-content__content-container__right__box__col__story__box__head');
                        storyBox.appendChild(storyBoxHead);
                            let storyBoxTitle1 = document.createElement('div');
                            storyBoxTitle1.classList.add('Main-content__content-container__right__box__col__story__box__head__title');
                            storyBoxHead.appendChild(storyBoxTitle1);
                                let storyText1 = document.createTextNode('Our Story');
                                storyBoxTitle1.appendChild(storyText1);

                            let storyBoxTitle2 = document.createElement('div');
                            storyBoxTitle2.classList.add('Main-content__content-container__right__box__col__story__box__head__subtitle');
                            storyBoxHead.appendChild(storyBoxTitle2);
                                let storyText2 = document.createTextNode('+Tell people about your business');
                                storyBoxTitle2.appendChild(storyText2)

                        

                let community = document.createElement('div');
                community.classList.add('Main-content__content-container__right__box__col__community');
                contRightBoxCol.appendChild(community);
                    let communityHead = document.createElement('div');
                    communityHead.classList.add('Main-content__content-container__right__box__col__community__header');
                    community.appendChild(communityHead);
                        let communityHeadBold = document.createElement('span');
                        communityHeadBold.classList.add('Main-content__content-container__right__box__col__community__header__titleBold');
                        communityHead.appendChild(communityHeadBold);
                            let comBoldText = document.createTextNode('Community');
                            communityHeadBold.appendChild(comBoldText);

                        let communityHeadReg = document.createElement('span');
                        communityHeadReg.classList.add('Main-content__content-container__right__box__col__community__header__tilteReg');
                        communityHead.appendChild(communityHeadReg);
                            let comRegText = document.createTextNode('See All');
                            communityHeadReg.appendChild(comRegText);

                    let communityLike = document.createElement('div');
                    communityLike.classList.add('Main-content__content-container__right__box__col__community__likes');
                    community.appendChild(communityLike);
                        let communityLikeBox = document.createElement('div');
                        communityLikeBox.classList.add('Main-content__content-container__right__box__col__community__likes__box');
                        communityLike.appendChild(communityLikeBox);
                            let likeBoxIcon = document.createElement('div');
                            likeBoxIcon.classList.add('Main-content__content-container__right__box__col__community__likes__box__icon');
                            communityLike.appendChild(likeBoxIcon); 
                                let comLikeIcon = document.createElement('i');
                                comLikeIcon.setAttribute('class', 'fas fa-thumbs-up');
                                comLikeIcon.setAttribute('style', 'color: gray')
                                likeBoxIcon.appendChild(comLikeIcon); 


                            let likeBoxText = document.createElement('div');
                            likeBoxText.classList.add('Main-content__content-container__right__box__col__community__likes__box__text');
                            communityLike.appendChild(likeBoxText);  
                                let comLikeText = document.createElement('span');
                                comLikeText.classList.add('Main-content__content-container__right__box__col__community__likes__box__text__cont');
                                likeBoxText.appendChild(comLikeText); 
                                    let comLikeTextCont = document.createTextNode('150 people like this');
                                    comLikeText.appendChild(comLikeTextCont);


                    let communityFollow = document.createElement('div');
                    communityFollow.classList.add('Main-content__content-container__right__box__col__community__follows');
                    community.appendChild(communityFollow);

                        let communityFollowBox = document.createElement('div');
                        communityFollowBox.classList.add('Main-content__content-container__right__box__col__community__follows__box');
                        communityFollow.appendChild(communityFollowBox);
                            let followBoxIcon = document.createElement('div');
                            followBoxIcon.classList.add('Main-content__content-container__right__box__col__community__follows__box__icon');
                            communityFollow.appendChild(followBoxIcon); 
                                let comFollowIcon = document.createElement('i');
                                comFollowIcon.setAttribute('class', 'fas fa-wifi');
                                comFollowIcon.setAttribute('style', 'color: gray')
                                followBoxIcon.appendChild(comFollowIcon); 


                            let followBoxText = document.createElement('div');
                            followBoxText.classList.add('Main-content__content-container__right__box__col__community__follows__box__text');
                            communityFollow.appendChild(followBoxText);  
                                let comFollowtext = document.createElement('span');
                                comFollowtext.classList.add('Main-content__content-container__right__box__col__community__follows__box__text__cont');
                                followBoxText.appendChild(comFollowtext); 
                                    let comFollowTextCont = document.createTextNode('150 people follow this');
                                    comFollowtext.appendChild(comFollowTextCont);




    let contLeft = document.createElement('div');
    contLeft.setAttribute('id', 'allPosts')
    contLeft.classList.add('Main-content__content-container__left');
    contentArea.appendChild(contLeft);
        let contLeftFeed = document.createElement('div');
        contLeftFeed.classList.add('Main-content__content-container__left__feed');
        contLeft.appendChild(contLeftFeed);
            let feedPostin = document.createElement('div');
            feedPostin.classList.add('Main-content__content-container__left__feed__postin');
            contLeftFeed.appendChild(feedPostin);

            let postinSec = document.createElement('section');
            postinSec.classList.add('Main-content__content-container__left__feed__postin__sect');
            feedPostin.appendChild(postinSec);
                let postinHead = document.createElement('ul');
                postinHead.classList.add('Main-content__content-container__left__feed__postin__sect__list');
                postinSec.appendChild(postinHead);
                    let postinLi1 = document.createElement('li');
                    postinLi1.classList.add('Main-content__content-container__left__feed__postin__sect__list__item');
                    postinHead.appendChild(postinLi1);
                        let li1Icon = document.createElement('i');
                        li1Icon.setAttribute('class', 'fas fa-pen');
                        postinLi1.appendChild(li1Icon);

                        let li1Text = document.createElement('a');
                        li1Text.setAttribute('href', '#')
                        li1Text.setAttribute('class', 'Main-content__content-container__left__feed__postin__sect__list__item__text');
                        postinLi1.appendChild(li1Text);
                            let li1TextItem = document.createTextNode('Create Post');
                            li1Text.appendChild(li1TextItem);

                        // let li2Icon = document.createElement('i');
                        // li2Icon.setAttribute('style', 'float: right');
                        // li2Icon.setAttribute('class', 'fas fa-user-circle');
                        // postinLi1.appendChild(li2Icon);
                        
                        
                
                let postinInp = document.createElement('div');
                postinInp.classList.add('Main-content__content-container__left__feed__postin__sect__inpSec');
                postinSec.appendChild(postinInp);
                    let postinInpPic = document.createElement('div');
                    postinInpPic.classList.add('Main-content__content-container__left__feed__postin__sect__inpSec__pic');
                    postinInp.appendChild(postinInpPic);

                    let inpTextField = document.createElement('div');
                    inpTextField.classList.add('Main-content__content-container__left__feed__postin__sect__inpSec__textArea');
                    postinInp.appendChild(inpTextField);
                        let textFieldInput = document.createElement('input');
                        textFieldInput.setAttribute('id', 'postInput');
                        textFieldInput.setAttribute('type', 'text');
                        textFieldInput.setAttribute('placeholder', 'Write a post...');
                        textFieldInput.classList.add('Main-content__content-container__left__feed__postin__sect__inpSec__textArea__input');
                        inpTextField.appendChild(textFieldInput);





                
                let postinBtns = document.createElement('div');
                postinBtns.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec');
                postinSec.appendChild(postinBtns);
                    let postinBtnsBox = document.createElement('div');
                    postinBtnsBox.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox');
                    postinBtns.appendChild(postinBtnsBox);
                        let btnsBoxItem1 = document.createElement('div');
                        btnsBoxItem1.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn');
                        postinBtnsBox.appendChild(btnsBoxItem1);
                            let btnsBoxItemIcon1 = document.createElement('div');
                            btnsBoxItemIcon1.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__icon');
                            btnsBoxItem1.appendChild(btnsBoxItemIcon1);

                            let btnsBoxItemText1 = document.createElement('span');
                            btnsBoxItemText1.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__text');
                            btnsBoxItem1.appendChild(btnsBoxItemText1);
                                let btnsBoxItemTextCont1 = document.createTextNode('Photo/Video');
                                btnsBoxItemText1.appendChild(btnsBoxItemTextCont1);


                        let btnsBoxItem2 = document.createElement('div');
                        btnsBoxItem2.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn');
                        postinBtnsBox.appendChild(btnsBoxItem2);
                            let btnsBoxItemIcon2 = document.createElement('div');
                            btnsBoxItemIcon2.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__icon');
                            btnsBoxItem2.appendChild(btnsBoxItemIcon2);

                            let btnsBoxItemText2 = document.createElement('span');
                            btnsBoxItemText2.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__text');
                            btnsBoxItem2.appendChild(btnsBoxItemText2);
                                let btnsBoxItemTextCont2 = document.createTextNode('Tag Friends');
                                btnsBoxItemText2.appendChild(btnsBoxItemTextCont2);

                        
                        let btnsBoxItem3 = document.createElement('div');
                        btnsBoxItem3.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn');
                        postinBtnsBox.appendChild(btnsBoxItem3);
                            let btnsBoxItemIcon3 = document.createElement('div');
                            btnsBoxItemIcon3.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__icon');
                            btnsBoxItem3.appendChild(btnsBoxItemIcon3);

                            let btnsBoxItemText3 = document.createElement('span');
                            btnsBoxItemText3.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__text');
                            btnsBoxItem3.appendChild(btnsBoxItemText3);
                                let btnsBoxItemTextCont3 = document.createTextNode('Check in');
                                btnsBoxItemText3.appendChild(btnsBoxItemTextCont3);

                        
                        let btnsBoxItem4 = document.createElement('button');
                        btnsBoxItem4.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn');
                        // btnsBoxItem4.addEventListener("click", addPosts());
                        btnsBoxItem4.setAttribute('id', 'postBtn');
                        postinBtnsBox.appendChild(btnsBoxItem4);
                            let btnsBoxItemIcon4 = document.createElement('div');
                            btnsBoxItemIcon4.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__icon');
                            btnsBoxItem4.appendChild(btnsBoxItemIcon4);

                            let btnsBoxItemText4 = document.createElement('span');
                            btnsBoxItemText4.classList.add('Main-content__content-container__left__feed__postin__sect__btnSec__listBox__Btn__text');
                            btnsBoxItem4.appendChild(btnsBoxItemText4);
                                let btnsBoxItemTextCont4 = document.createTextNode('post');
                                btnsBoxItemText4.appendChild(btnsBoxItemTextCont4);

                        




            
            let feedPosts = document.createElement('div');
            feedPosts.classList.add('Main-content__content-container__left__feed__posts');
            contLeftFeed.appendChild(feedPosts);
                let feedPostsContent = document.createElement('div');
                feedPostsContent.classList.add('Main-content__content-container__left__feed__posts__content');
                feedPosts.appendChild(feedPostsContent);
                
                    let postUser = document.createElement('div');
                    postUser.classList.add('Main-content__content-container__left__feed__posts__content__user');
                    feedPostsContent.appendChild(postUser);
                        let userPicture = document.createElement('div');
                        userPicture.classList.add('Main-content__content-container__left__feed__posts__content__user__pic');
                        postUser.appendChild(userPicture);

                        let userTextInfo = document.createElement('div');
                        userTextInfo.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo');
                        postUser.appendChild(userTextInfo);

                                let userName = document.createElement('p');
                                userName.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__name');
                                userTextInfo.appendChild(userName);
                                    let userNametext = document.createTextNode('TecHub');
                                    userName.appendChild(userNametext);

                                let userDate = document.createElement('span');
                                userDate.classList.add('Main-content__content-container__left__feed__posts__content__user__postInfo__date');
                                userTextInfo.appendChild(userDate);
                                    let userDateText = document.createTextNode('January 20 at 08:15 AM      .');
                                    userDate.appendChild(userDateText);

                                let userGlobe = document.createElement('i');
                                userGlobe.setAttribute('class', 'fas fa-globe-europe');
                                userDate.appendChild(userGlobe);

                    let postText = document.createElement('p');
                    postText.classList.add('Main-content__content-container__left__feed__posts__content__text');
                    feedPostsContent.appendChild(postText);
                        let postTextCont = document.createTextNode('Photo description photo description  photo description photo description photo description photo description photo description')
                        postText.appendChild(postTextCont); 

                    let postPhoto = document.createElement('div');
                    postPhoto.classList.add('Main-content__content-container__left__feed__posts__content__postPhoto');
                    feedPostsContent.appendChild(postPhoto);

                    let postReactions = document.createElement('div');
                    postReactions.classList.add('Main-content__content-container__left__feed__posts__content__postReactions');
                    feedPostsContent.appendChild(postReactions);
                        let reactionsList = document.createElement('ul');
                        reactionsList.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list');
                        postReactions.appendChild(reactionsList);
                            let reactItem1 = document.createElement('li');
                            reactItem1.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
                            reactionsList.appendChild(reactItem1);
                                let reactLike1 = document.createElement('i');
                                reactLike1.setAttribute('class', 'far fa-thumbs-up');
                                reactItem1.appendChild(reactLike1);

                                let reactLiketext1 = document.createElement('span');
                                reactLiketext1.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
                                reactItem1.appendChild(reactLiketext1);
                                    let reactLiketextCont1 = document.createTextNode(' Like');
                                    reactLiketext1.appendChild(reactLiketextCont1);

                            let reactItem2 = document.createElement('li');
                            reactItem2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
                            reactionsList.appendChild(reactItem2);
                                let reactLike2 = document.createElement('i');
                                reactLike2.setAttribute('class', 'far fa-comment');
                                reactItem2.appendChild(reactLike2);

                                let reactLiketext2 = document.createElement('span');
                                reactLiketext2.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
                                reactItem2.appendChild(reactLiketext2);
                                    let reactLiketextCont2 = document.createTextNode(' Comment');
                                    reactLiketext2.appendChild(reactLiketextCont2);

                            
                            let reactItem3 = document.createElement('li');
                            reactItem3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item');
                            reactionsList.appendChild(reactItem3);
                                let reactLike3 = document.createElement('i');
                                reactLike3.setAttribute('class', 'far fa-trash-alt');
                                reactItem3.appendChild(reactLike3);

                                let reactLiketext3 = document.createElement('span');
                                reactLiketext3.classList.add('Main-content__content-container__left__feed__posts__content__postReactions__list__item__reacttext');
                                reactItem3.appendChild(reactLiketext3);
                                    let reactLiketextCont3 = document.createTextNode(' Delete');
                                    reactLiketext3.appendChild(reactLiketextCont3);




    
