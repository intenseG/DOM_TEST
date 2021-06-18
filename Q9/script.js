function selectOption() {
    var selectBox = document.getElementById('selectBox');

    document.getElementById('selected').textContent = selectBox.value;
}

var selectBox = document.getElementById('selectBox');
selectBox.addEventListener('change', selectOption);