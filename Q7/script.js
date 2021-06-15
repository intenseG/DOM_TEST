var inputField = document.getElementById('inputField');

function clickButton() {
    document.getElementById('result').innerHTML = inputField.value;
}

var button = document.getElementById('displayBtn');
button.onclick = clickButton;

function checkCharacterLength() {
    if (inputField.value.length >= 10) {
        document.getElementById('displayBtn').disabled = true;
    } else {
        document.getElementById('displayBtn').disabled = false;
    }
}

inputField.onkeyup = checkCharacterLength;