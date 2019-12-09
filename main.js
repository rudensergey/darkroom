let darkModeButton = document.getElementById('activate-button');
let darkModeStatus = false;
let switchToSafari = document.getElementById('pageBright');

console.log(switchToSafari);

isSafari();

function isSafari() {
    let browserName = "";

    if(navigator.vendor.match(/apple/i)) {
        browserName = 'safari/webkit';
        switchToSafari.href = './style/index-safari.css';
    } else {
        browserName = "not safari";
    }

    console.log(browserName)
}

darkModeButton.onclick = () => {
    if (darkModeStatus) {
        darkModeButton.innerHTML = 'Dark';
        darkModeStatus = false;
    } else {
        darkModeButton.innerHTML = 'Light'; 
        darkModeStatus = true;  
    }
    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')
}
