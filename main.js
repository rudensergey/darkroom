let darkModeButton = document.getElementById('activate-button');
let darkModeStatus = false;

darkModeButton.onclick = () => {

    if (darkModeStatus) {

        // list of color properties
        document.documentElement.style.setProperty('--body-changes', '#FFFFFF');
        document.documentElement.style.setProperty('--border-grey', '#E6E6E6');
        document.documentElement.style.setProperty('--bottom-grey', '#ECECEC');
        document.documentElement.style.setProperty('--comment-grey', '#3B424B');
        document.documentElement.style.setProperty('--dark-mode-yellow', '#1B1B1B');
        document.documentElement.style.setProperty('--darkmode-bottom-black', '#222222');
        document.documentElement.style.setProperty('--darkmode-text-white', '#FEFF9B');
        document.documentElement.style.setProperty('--header-backcolor-white', '#FFFFFF');
        document.documentElement.style.setProperty('--link-footer-grey', '#CCCCCC');
        document.documentElement.style.setProperty('--link-hover-green', '#77CFB2');
        document.documentElement.style.setProperty('--list-grey', '#676767');
        document.documentElement.style.setProperty('--middle-green', '#A8CFC2');
        document.documentElement.style.setProperty('--middle-green-link', '#515151');
        document.documentElement.style.setProperty('--middle-grey', '#888888');
        document.documentElement.style.setProperty('--opacity-color', '#333333');
        document.documentElement.style.setProperty('--pastel-green', '#9EC4B7');
        document.documentElement.style.setProperty('--podcast-green', '#9EC4B7');
        document.documentElement.style.setProperty('--quote-text-before', 'rgba(0,0,0,0.27)');
        document.documentElement.style.setProperty('--screen-gradient', 'linear-gradient(to top right, rgb(77, 85, 92), rgb(211, 211, 211))');
        document.documentElement.style.setProperty('--square-template-grey', '#F1F1F1');
        document.documentElement.style.setProperty('--title-text-grey', '#444444');
        document.documentElement.style.setProperty('--topic-title-grey', '#515151');
        document.documentElement.style.setProperty('--underline-green', '#A8CFC2');
        document.documentElement.style.setProperty('--viewallpost-green', '#79CAB5');

        // list of picture properties

        document.documentElement.style.setProperty('--author-face-pic', 'url(../Media/10/author-na.png)');
        document.documentElement.style.setProperty('--dark-mode-pic', 'url(../Media/moon.png);');
        document.documentElement.style.setProperty('--dashboard-template-first-pic', 'url(../Media/2/1.png)');
        document.documentElement.style.setProperty('--dashboard-template-second-pic', 'url(../Media/2/1.png)');
        document.documentElement.style.setProperty('--easypeasy-template-first-pic', 'url(../Media/3/1.png)');
        document.documentElement.style.setProperty('--easypeasy-template-second-pic', 'url(../Media/3/2.jpg)');
        document.documentElement.style.setProperty('--footer-back-image', 'url(../Media/11/footer-back.png)');
        document.documentElement.style.setProperty('--free-template-pic', 'url(../Media/9/basic-stack-01.png)');
        document.documentElement.style.setProperty('--plus-template-pic', 'url(../Media/9/pro-stack-01.png)');
        document.documentElement.style.setProperty('--profits-template-first-pic', 'url(../Media/4/1.png)');
        document.documentElement.style.setProperty('--profits-template-second-pic', 'url(../Media/4/2.jpg)');
        document.documentElement.style.setProperty('--workblock-template-first-pic', 'url(../Media/1/1.png)');
        document.documentElement.style.setProperty('--workblock-template-second-pic', 'url(../Media/1/2.png)');
        document.documentElement.style.setProperty('--done-pic', 'url(../Media/2/done.png)');

        // list of effects

        document.documentElement.style.setProperty('--opacity-increase', '0.8');
        document.documentElement.style.setProperty('--opacity-descrease', '1');

        darkModeStatus = false;
    } else {

        // list of color properties
        document.documentElement.style.setProperty('--body-changes', '#060A0F');
        document.documentElement.style.setProperty('--border-grey', '#35393F');
        document.documentElement.style.setProperty('--bottom-grey', '#35393F');
        document.documentElement.style.setProperty('--comment-grey', '#35393F');
        document.documentElement.style.setProperty('--dark-mode-yellow', '#FFFFFF');
        document.documentElement.style.setProperty('--darkmode-bottom-black', '#FFFFFF');
        document.documentElement.style.setProperty('--darkmode-text-white', '#242424');
        document.documentElement.style.setProperty('--header-backcolor-white', '#24272B');
        document.documentElement.style.setProperty('--link-footer-grey', '#FFFFFF');
        document.documentElement.style.setProperty('--link-hover-green', '#79CAB5');
        document.documentElement.style.setProperty('--list-grey', '#FFFFFF');
        document.documentElement.style.setProperty('--middle-green', '#79CAB5');
        document.documentElement.style.setProperty('--middle-green-link', '#79CAB5');
        document.documentElement.style.setProperty('--middle-grey', '#FFFFFF');
        document.documentElement.style.setProperty('--opacity-color', '#24272B');
        document.documentElement.style.setProperty('--pastel-green', '#79CAB5');
        document.documentElement.style.setProperty('--podcast-green', '#52AA91');
        document.documentElement.style.setProperty('--quote-text-before', '#000000');
        document.documentElement.style.setProperty('--screen-gradient', 'linear-gradient(to top right, rgb(36, 39, 43), rgb(211, 211, 211))');
        document.documentElement.style.setProperty('--square-template-grey', '#35393F');
        document.documentElement.style.setProperty('--title-text-grey', '#FFFFFF');
        document.documentElement.style.setProperty('--topic-title-grey', '#FFFFFF');
        document.documentElement.style.setProperty('--underline-green', '#52AA91');
        document.documentElement.style.setProperty('--viewallpost-green', '#52AA91');

        // list of picture properties

        document.documentElement.style.setProperty('--author-face-pic', 'url(../Media/10/author-a.png)');
        document.documentElement.style.setProperty('--dark-mode-pic', 'url(../Media/Sun.png)');
        document.documentElement.style.setProperty('--dashboard-template-first-pic', 'url(../Media/2/1-dark.png)');
        document.documentElement.style.setProperty('--dashboard-template-second-pic', 'url(../Media/2/2-dark.png)');
        document.documentElement.style.setProperty('--easypeasy-template-first-pic', 'url(../Media/3/1-dark.png)');
        document.documentElement.style.setProperty('--easypeasy-template-second-pic', 'url(../Media/3/2-dark.png)');
        document.documentElement.style.setProperty('--footer-back-image', 'url(../Media/11/footer-back.png)');
        document.documentElement.style.setProperty('--free-template-pic', 'url(../Media/9/basic-stack-01-dark.png)');
        document.documentElement.style.setProperty('--plus-template-pic', 'url(../Media/9/pro-stack-01-dark.png)');
        document.documentElement.style.setProperty('--profits-template-first-pic', 'url(../Media/4/1-dark.png)');
        document.documentElement.style.setProperty('--profits-template-second-pic', 'url(../Media/4/2-dark.png)');
        document.documentElement.style.setProperty('--workblock-template-first-pic', 'url(../Media/1/1-dark.png)');
        document.documentElement.style.setProperty('--workblock-template-second-pic', 'url(../Media/1/2-dark.png)');
        document.documentElement.style.setProperty('--done-pic', 'url(../Media/2/done-dark.png)');

        // list of effects

        document.documentElement.style.setProperty('--opacity-increase', '1');
        document.documentElement.style.setProperty('--opacity-descrease', '0.8');

        darkModeStatus = true;
    }
}