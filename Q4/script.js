var fruits = ['リンゴ', 'モモ', 'ミカン'];

function generateLi(list) {
    var ul = document.getElementById('fruits');

    for (let i = 0; i < list.length; i++) {
        let li = document.createElement('li');
        let fruit = document.createTextNode(list[i]);

        li.appendChild(fruit);
        ul.appendChild(li);
    }
}

generateLi(fruits);