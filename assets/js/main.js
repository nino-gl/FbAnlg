let main = document.createElement('main');
main.classList.add('main');
logIn.appendChild(main);



let mainCont = document.createElement('div');
mainCont.classList.add('main__content');
main.appendChild(mainCont);

    let mc_infoSec = document.createElement('section');
    mc_infoSec.classList.add('main__content__infoSect');
    mainCont.appendChild(mc_infoSec);

        let recentLogin = document.createElement('div');
        recentLogin.classList.add('main__content__infoSect__header');
        mc_infoSec.appendChild(recentLogin);
            let recentLoginText = document.createTextNode('Recent Logins');
            recentLogin.appendChild(recentLoginText);

        let recentLoginSubtitle = document.createElement('div');
        recentLoginSubtitle.classList.add('main__content__infoSect__subtitle');
        mc_infoSec.appendChild(recentLoginSubtitle);
            let recentLoginSubtitletext = document.createTextNode('Click your picture or add an account.');
            recentLoginSubtitle.appendChild(recentLoginSubtitletext);

        
        let recentLoginAccounts = document.createElement('div');
        recentLoginAccounts.classList.add('main__content__infoSect__accounts');
        mc_infoSec.appendChild(recentLoginAccounts);

            let loginAccountsBox1 = document.createElement('div');
            loginAccountsBox1.classList.add('main__content__infoSect__accounts__box');
            recentLoginAccounts.appendChild(loginAccountsBox1);
                let accountPic = document.createElement('div');
                accountPic.classList.add('main__content__infoSect__accounts__box__pic');
                loginAccountsBox1.appendChild(accountPic);
                    

                let accountTitle = document.createElement('div');
                accountTitle.classList.add('main__content__infoSect__accounts__box__title');
                loginAccountsBox1.appendChild(accountTitle);
                loginAccountsBox1.id = 'nino';
                // loginAccountsBox1.onclick = document.getElementById('email').value='saxeli';
                
                // function showMe(fillSaxeli) {
                //     document.getElementById('email').value=fillSaxeli;
                // }
                // loginAccountsBox1.onclick=showMe('saxeli');


                    let accountTitleCont1 = document.createTextNode('Nino');
                    accountTitle.appendChild(accountTitleCont1);


            let loginAccountsBox2 = document.createElement('div');
            loginAccountsBox2.classList.add('main__content__infoSect__accounts__box');
            recentLoginAccounts.appendChild(loginAccountsBox2);
                let accountPic2 = document.createElement('div');
                accountPic2.classList.add('main__content__infoSect__accounts__box__pic');
                loginAccountsBox2.appendChild(accountPic2);
                    // let accountPic2Text = document.createTextNode('+');
                    // accountPic2.appendChild(accountPic2Text);

                let accountTitle2 = document.createElement('div');
                accountTitle2.classList.add('main__content__infoSect__accounts__box__title');
                loginAccountsBox2.appendChild(accountTitle2);
                loginAccountsBox2.id = 'khatia';
                // loginAccountsBox1.onclick = document.getElementById('email').value='saxeli';
                    let accountTitleCont2 = document.createTextNode('Khatia');
                    accountTitle2.appendChild(accountTitleCont2)


        

    let mc_regSec = document.createElement('section');
    mc_regSec.classList.add('main__content__regSect');
    mainCont.appendChild(mc_regSec);

        
        let signUpHead = document.createElement('h2');
        signUpHead.classList.add('main__content__regSect__title__header');
        mc_regSec.appendChild(signUpHead);
            let signUpHeadText = document.createTextNode('Create a New Account');
            signUpHead.appendChild(signUpHeadText);

        let signUpSubTitle = document.createElement('div');
        signUpSubTitle.classList.add('main__content__regSect__title__subTitle');
        mc_regSec.appendChild(signUpSubTitle);
            let signUpSubTitleText = document.createTextNode('Its free and always will be.');
            signUpSubTitle.appendChild(signUpSubTitleText);


        let inputs = document.createElement('div');
        inputs.classList.add('main__content__regSect__fill');
        mc_regSec.appendChild(inputs);
            let inputBox = document.createElement('div');
            inputBox.classList.add('main__content__regSect__fill__inputbox');
            inputs.appendChild(inputBox);
                let regSectInputs = document.createElement('div');
                regSectInputs.classList.add('main__content__regSect__fill__inputbox__items');
                inputBox.appendChild(regSectInputs);
                    let regSectForm = document.createElement('form');
                    // regSectForm.setAttribute = ('class', 'main__content__regSect__fill__inputbox__items__form');
                    regSectForm.classList.add('main__content__regSect__fill__inputbox__items__form');
                    regSectForm.setAttribute = ('method', 'post');
                    regSectForm.setAttribute = ('id', 'registrForm');
                    regSectForm.setAttribute = ('name', 'registrForm');
                    regSectForm.setAttribute = ('action', 'https://m.facebook.com/reg/');
                    regSectForm.setAttribute = ('onsubmit', 'return false');
                    regSectInputs.appendChild(regSectForm);
                        let regFormBox = document.createElement('div');
                        // regFormBox.setAttribute = ('class', 'main__content__regSect__fill__inputbox__items__form__box');
                        regFormBox.classList.add('main__content__regSect__fill__inputbox__items__form__box');
                        regSectForm.appendChild(regFormBox);
                            let fullname = document.createElement('div');
                            fullname.classList.add('main__content__regSect__fill__inputbox__items__form__box__fullName');
                            regFormBox.appendChild(fullname);

                                let fnamebox = document.createElement('div');
                                fnamebox.classList.add('main__content__regSect__fill__inputbox__items__form__box__fullName__fName');
                                fullname.appendChild(fnamebox);
                                    let fnameBoxItem = document.createElement('div');
                                    fnameBoxItem.classList.add ('main__content__regSect__fill__inputbox__items__form__box__fullName__fName__box');
                                    fnamebox.appendChild(fnameBoxItem);
                                        let fnameInput = document.createElement('input');
                                        fnameInput.type = ('text');
                                        fnameInput.classList.add('main__content__regSect__fill__inputbox__items__form__box__fullName__fName__box__input');
                                        fnameInput.id = ('firstname');
                                        fnameInput.name = ('firstname');
                                        fnameInput.required = ('true');
                                        fnameInput.placeholder = ('First name');
                                        fnameBoxItem.appendChild(fnameInput);

                                
                                let lnamebox = document.createElement('div');
                                lnamebox.classList.add('main__content__regSect__fill__inputbox__items__form__box__fullName__lName');
                                fullname.appendChild(lnamebox);
                                    let lnameBoxItem = document.createElement('div');
                                    lnameBoxItem.classList.add ('main__content__regSect__fill__inputbox__items__form__box__fullName__lName__box');
                                    lnamebox.appendChild(lnameBoxItem);
                                        let lnameInput = document.createElement('input');
                                        lnameInput.type = ('text');
                                        lnameInput.classList.add('main__content__regSect__fill__inputbox__items__form__box__fullName__lName__box__input');
                                        lnameInput.id = ('lastname');
                                        lnameInput.name = ('lastname');
                                        lnameInput.required = ('true');
                                        lnameInput.placeholder = ('Last name');
                                        lnameBoxItem.appendChild(lnameInput);

                            let regMobEmail = document.createElement('div');
                            regMobEmail.classList.add('main__content__regSect__fill__inputbox__items__form__box__mob');
                            regFormBox.appendChild(regMobEmail);
                                let mobEmailItem = document.createElement('div');
                                mobEmailItem.classList.add ('main__content__regSect__fill__inputbox__items__form__box__mob__item');
                                regMobEmail.appendChild(mobEmailItem);
                                    let mobEmailInput = document.createElement('input');
                                    mobEmailInput.type = ('text');
                                    mobEmailInput.classList.add('main__content__regSect__fill__inputbox__items__form__box__mob__item__input');
                                    mobEmailInput.id = ('mobemail');
                                    mobEmailInput.name = ('mobemail');
                                    mobEmailInput.required = ('true');
                                    mobEmailInput.placeholder = ('Mobile number or email');
                                    mobEmailItem.appendChild(mobEmailInput);




                            let newPass = document.createElement('div');
                            newPass.classList.add('main__content__regSect__fill__inputbox__items__form__box__newPsw');
                            regFormBox.appendChild(newPass);
                                let pswItem = document.createElement('div');
                                pswItem.classList.add ('main__content__regSect__fill__inputbox__items__form__box__newPsw__item');
                                newPass.appendChild(pswItem);
                                    let pswInput = document.createElement('input');
                                    pswInput.type = ('password');
                                    pswInput.classList.add('main__content__regSect__fill__inputbox__items__form__box__newPsw__item__input');
                                    pswInput.id = ('newpsw');
                                    pswInput.name = ('newpsw');
                                    pswInput.required = ('true');
                                    pswInput.placeholder = ('New password');
                                    pswItem.appendChild(pswInput);



                            let birthday = document.createElement('div');
                            birthday.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday');
                            regFormBox.appendChild(birthday);
                                
                                let birthdayTitle = document.createElement('div');
                                birthdayTitle.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday__title');
                                birthday.appendChild(birthdayTitle);
                                    let birthdayTitleText = document.createTextNode('Birthday');
                                    birthdayTitle.appendChild(birthdayTitleText);


                                let birthCheck = document.createElement('div');
                                birthCheck.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday__check');
                                birthday.appendChild(birthCheck);
                                    let datechoose = document.createElement('span');
                                    datechoose.classList.add ('main__content__regSect__fill__inputbox__items__form__box__birthday__check__date');
                                    birthCheck.appendChild(datechoose);
                                        let datespan = document.createElement('span');
                                        datechoose.appendChild(datespan);
                                            let months = document.createElement('select');
                                            months.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday__check__date__months');
                                            months.name = ('birth-month');
                                            months.id = ('months');
                                            months.title = ('Month');
                                            datespan.appendChild(months);
                                                let month0 = document.createElement('option');
                                                month0.value = ('0');
                                                month0.title = ('Month');
                                                months.appendChild(month0);
                                                let m0 = document.createTextNode('Month');
                                                month0.appendChild(m0);

                                                let month1 = document.createElement('option');
                                                month1.value = ('1');
                                                month1.selected = ('1');
                                                month0.title = ('Jan');
                                                months.appendChild(month1);
                                                let j1 = document.createTextNode('Jan');
                                                month1.appendChild(j1);

                                                let month2 = document.createElement('option');
                                                months.appendChild(month2);
                                                let f2 = document.createTextNode('Feb');
                                                month2.appendChild(f2);

                                                let month3 = document.createElement('option');
                                                months.appendChild(month3);
                                                let m3 = document.createTextNode('Mar');
                                                month3.appendChild(m3);

                                                let month4 = document.createElement('option');
                                                months.appendChild(month4);
                                                let a4 = document.createTextNode('Apr');
                                                month4.appendChild(a4);

                                                let month5 = document.createElement('option');
                                                months.appendChild(month5);
                                                let m5 = document.createTextNode('May');
                                                month5.appendChild(m5);

                                                let month6 = document.createElement('option');
                                                months.appendChild(month6);
                                                let j6 = document.createTextNode('Jun');
                                                month6.appendChild(j6);

                                                let month7 = document.createElement('option');
                                                months.appendChild(month7);
                                                let j7 = document.createTextNode('Jul');
                                                month7.appendChild(j7);

                                                let month8 = document.createElement('option');
                                                months.appendChild(month8);
                                                let a8 = document.createTextNode('Aug');
                                                month8.appendChild(a8);

                                                let month9 = document.createElement('option');
                                                months.appendChild(month9);
                                                let s9 = document.createTextNode('Sep');
                                                month9.appendChild(s9);

                                                let month10 = document.createElement('option');
                                                months.appendChild(month10);
                                                let o10 = document.createTextNode('Oct');
                                                month10.appendChild(o10);

                                                let month11 = document.createElement('option');
                                                months.appendChild(month11);
                                                let n11 = document.createTextNode('Nov');
                                                month11.appendChild(n11);

                                                let month12 = document.createElement('option');
                                                months.appendChild(month12);
                                                let d12 = document.createTextNode('Dec');
                                                month12.appendChild(d12);



                                            let days = document.createElement('select');
                                            days.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday__check__date__days');
                                            days.name = ('birth-days');
                                            days.id = ('days');
                                            days.title = ('Day');
                                            datespan.appendChild(days);

                                            let dayChooseTitle = document.createElement('option');
                                            days.appendChild(dayChooseTitle);
                                            let dayTitle = document.createTextNode('Day');
                                            dayChooseTitle.appendChild(dayTitle);

                                            let dayChoose = document.createElement('option');
                                            days.appendChild(dayChoose);
                                            let day22 = document.createTextNode('22');
                                            dayChoose.appendChild(day22);


                                            let years = document.createElement('select');
                                            years.classList.add('main__content__regSect__fill__inputbox__items__form__box__birthday__check__date__years');
                                            years.name = ('birth-years');
                                            years.id = ('years');
                                            years.title = ('Year');
                                            datespan.appendChild(years);
                                            let year1994 = document.createTextNode('1994');
                                            years.appendChild(year1994);

                                            let yearChooseTitle = document.createElement('option');
                                            years.appendChild(yearChooseTitle);
                                            let yearTitle = document.createTextNode('Year');
                                            yearChooseTitle.appendChild(yearTitle);
                                    





                                    let birthdayLink = document.createElement('A');
                                    birthdayLink.classList.add ('main__content__regSect__fill__inputbox__items__form__box__birthday__check__link');
                                    birthdayLink.setAttribute ('href', '#')
                                        // birthdayLink.onmouseover = ('Providing your birthday helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our Data Policy.')
                                    let birthdayLinkText = document.createTextNode('Why do I need to provide my birthday?');
                                    birthdayLink.appendChild(birthdayLinkText);
                                    birthCheck.appendChild(birthdayLink);




                            let gender = document.createElement('div');
                            gender.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender');
                            regFormBox.appendChild(gender);
                                let genderBox = document.createElement('span');
                                genderBox.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender__box');
                                gender.appendChild(genderBox);
                                    let genderFem = document.createElement('span');
                                    genderFem.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender__box__female');
                                    genderBox.appendChild(genderFem);
                                        let femRadio = document.createElement('input');
                                        femRadio.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender__box__female__radio');
                                        femRadio.type = ('radio');
                                        femRadio.name = ('sex');
                                        femRadio.value = ('1');
                                        femRadio.id = ('sexRadio');
                                        genderFem.appendChild(femRadio);


                                        let femLabel = document.createElement('label');
                                        femLabel.classList.add ('main__content__regSect__fill__inputbox__items__form__box__gender__box__female__label');
                                        let femLabelText = document.createTextNode('Female');
                                        femLabel.appendChild(femLabelText);
                                        genderFem.appendChild(femLabel);


                                    let genderMale = document.createElement('span');
                                    genderMale.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender__box__male');
                                    genderBox.appendChild(genderMale);
                                        let maleRadio = document.createElement('input');
                                        maleRadio.classList.add('main__content__regSect__fill__inputbox__items__form__box__gender__box__male__radio');
                                        maleRadio.type = ('radio');
                                        maleRadio.name = ('sex');
                                        maleRadio.value = ('1');
                                        maleRadio.id = ('sexRadio');
                                        genderMale.appendChild(maleRadio);


                                        let maleLabel = document.createElement('label');
                                        maleLabel.classList.add ('main__content__regSect__fill__inputbox__items__form__box__gender__box__male__label');
                                        let maleLabelText = document.createTextNode('Male');
                                        maleLabel.appendChild(maleLabelText);
                                        genderMale.appendChild(maleLabel);






                            let formAgree = document.createElement('div');
                            formAgree.classList.add('main__content__regSect__fill__inputbox__items__form__box__agree');
                            regFormBox.appendChild(formAgree);
                                let agreeP = document.createElement('p');
                                agreeP.classList.add ('main__content__regSect__fill__inputbox__items__form__box__agree__text');
                                formAgree.appendChild(agreeP);
                                    let agreePItem1 = document.createTextNode ('By clicking Sign Up, you agree to our ');
                                    agreeP.appendChild(agreePItem1);

                                    let agreePLink1 = document.createElement('a');
                                    agreePLink1.setAttribute('href', 'https://www.facebook.com/legal/terms/update');
                                    let agreePLink1text = document.createTextNode('Terms, ');
                                    agreePLink1.appendChild(agreePLink1text);
                                    agreeP.appendChild(agreePLink1);

                                    let agreePLink2 = document.createElement('a');
                                    agreePLink2.setAttribute('href', 'https://www.facebook.com/about/privacy/update');
                                    let agreePLink2text = document.createTextNode('Data policy');
                                    agreePLink2.appendChild(agreePLink2text);
                                    agreeP.appendChild(agreePLink2);

                                    let agreePItem2 = document.createTextNode (' and ');
                                    agreeP.appendChild(agreePItem2);

                                    let agreePLink3 = document.createElement('a');
                                    agreePLink3.setAttribute('href', 'https://www.facebook.com/policies/cookies/');
                                    let agreePLink3text = document.createTextNode('Cookies policy.');
                                    agreePLink3.appendChild(agreePLink3text);
                                    agreeP.appendChild(agreePLink3);

                                    let agreePItem3 = document.createTextNode (' You may receive SMS Notifications from us and can opt out any time.');
                                    agreeP.appendChild(agreePItem3);


                            let regButton = document.createElement('div');
                            regButton.classList.add('main__content__regSect__fill__inputbox__items__form__box__btn');
                            regFormBox.appendChild(regButton);
                                let signUpBtn = document.createElement('button');
                                signUpBtn.classList.add('main__content__regSect__fill__inputbox__items__form__box__btn__signUpBtn');
                                signUpBtn.type = ('submit');
                                signUpBtn.name = ('websubmit');
                                regButton.appendChild(signUpBtn);
                                    let signUpBtnText = document.createTextNode('Sign Up');
                                    signUpBtn.appendChild(signUpBtnText);


                let regSectMessage = document.createElement('div');
                regSectMessage.classList.add('main__content__regSect__fill__inputbox__message');
                inputBox.appendChild(regSectMessage);


                    let regSectLink = document.createElement('A');
                    regSectLink.classList.add('main__content__regSect__fill__inputbox__message__link');
                    let regSectLinkText = document.createTextNode('Create a Page ');
                    regSectLink.setAttribute('href', 'https://www.facebook.com/pages/creation/?ref_type=registration_form');
                    regSectLink.appendChild(regSectLinkText);
                    regSectMessage.appendChild(regSectLink);

                    let regSectRegMsg = document.createTextNode('for a celebrity, band or business.')
                    regSectMessage.appendChild(regSectRegMsg);