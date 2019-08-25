let darkModeButton = document.getElementById('activate-button');
let darkModeStatus = false;

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