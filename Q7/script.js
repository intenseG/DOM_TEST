var inputField = document.getElementById('inputField');

function clickButton() {
    document.getElementById('result').innerHTML = inputField.value;
}

var button = document.getElementById('displayBtn');
button.addEventListener('click', clickButton);

function checkCharacterLength() {
    if (inputField.value.length >= 10) {
        document.getElementById('displayBtn').disabled = true;
    } else {
        document.getElementById('displayBtn').disabled = false;
    }
}

inputField.addEventListener('keyup', checkCharacterLength);