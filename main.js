let darkModeButton = document.getElementById('activate-button');
let darkModeLink = document.getElementById('pageBright');

darkModeButton.onclick = () => {
    console.log('This button works well');

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
    document.documentElement.style.setProperty('--screen-gradient', 'linear-gradient(to top right, rgb(36, 39, 43), rgb(211, 211, 211));');
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
}