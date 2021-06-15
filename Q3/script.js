var fruits = ['リンゴ', 'モモ', 'ミカン'];

var ul = document.getElementById('fruits');

for (let i = 0; i < fruits.length; i++) {
    let li = document.createElement('li');
    let fruit = document.createTextNode(fruits[i]);

    li.appendChild(fruit);
    ul.appendChild(li);
}