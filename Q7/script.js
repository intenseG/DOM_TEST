function clickButton() {
    var inputField = document.getElementById('inputField');
    document.getElementById('result').innerHTML = inputField.value;
}

function checkCharacterLength() {
    var inputField = document.getElementById('inputField');

    if (inputField.value.length >= 10) {
        document.getElementById('displayBtn').disabled = true;
    } else {
        document.getElementById('displayBtn').disabled = false;
    }
}