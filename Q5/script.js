function clickButton() {
    var inputField = document.getElementById('inputField');
    document.getElementById('result').innerHTML = inputField.value;
}

var button = document.getElementById('displayBtn');
button.addEventListener('click', clickButton);