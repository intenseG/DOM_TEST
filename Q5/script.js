function clickButton() {
    var inputField = document.getElementById('inputField');
    document.getElementById('result').innerHTML = inputField.value;
}

// TODO: セキュリティを考慮するとjs側でonclickイベントを割り当てたほうがいいかも？
// var button = document.getElementById('displayBtn');
// button.onclick = clickButton;