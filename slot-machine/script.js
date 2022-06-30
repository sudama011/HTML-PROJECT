console.log("hello world!");

let a = ['😂', '🤗', '🤩', '🤐', '🤑', '🥶', '😡', '🤮', '🤢', '😇'];


let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
setInterval(function () {
    one.innerText = a[Math.floor(Math.random() * 10)];
    two.innerText = a[Math.floor(Math.random() * 10)];
    three.innerText = a[Math.floor(Math.random() * 10)];
}, 100);
