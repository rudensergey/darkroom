let darkModeButton = document.getElementById('activate-button');
let darkModeLink = document.getElementById('pageBright');

darkModeButton.onclick = () => {
    if (darkModeLink.id === 'pageBright') {
        console.log('checking function');
        darkModeLink.href = './style/index2.css';
        darkModeLink.id = 'pageDark';
    } else {
        console.log('reverse function works');
        darkModeLink.href = './style/index.css';
        darkModeLink.id = 'pageBright'
    }
}