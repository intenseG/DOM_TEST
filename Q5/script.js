function clickButton() {
    var inputField = document.getElementById('inputField');
    document.getElementById('result').innerHTML = inputField.value;
}

var button = document.getElementById('displayBtn');
button.onclick = clickButton;