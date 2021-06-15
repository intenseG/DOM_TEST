function clickButton() {
    var inputField = document.getElementById('inputField');

    if (inputField.value.length >= 11) {
        document.getElementById('result').innerHTML = "入力文字数が10文字を超えました";
    } else {
        document.getElementById('result').innerHTML = inputField.value;
    }
}

var button = document.getElementById('displayBtn');
button.onclick = clickButton;