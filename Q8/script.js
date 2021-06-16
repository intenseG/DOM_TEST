function clickButton() {
    var box = document.getElementById('box');
    box.setAttribute('class', 'active');
}

var button = document.getElementById('changeBtn');
button.addEventListener('click', clickButton);