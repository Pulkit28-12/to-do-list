var text = document.getElementById('text');
var btn = document.querySelector('#btn');
var list = document.querySelector('ul');
var color1 = document.getElementById('c1');
var color2 = document.getElementById('c2');
var body = document.getElementsByTagName('body')[0];


btn.addEventListener("click", function () {
    if (text.value.length > 0) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text.value) )
        list.appendChild(li);
        text.value = "";
    }
}
)
text.addEventListener("keypress", function (event) {
    if (text.value.length > 0 && event.keyCode === 13 ) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(text.value) )
        list.appendChild(li);
        text.value = "";
    }
}
)
color1.addEventListener("input", function () {
    body.style.background = "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
})
color2.addEventListener("input", function () {
    body.style.background = "linear-gradient(to right ," + color1.value + "," + color2.value + ")";
}) 