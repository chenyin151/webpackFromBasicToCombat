function counter() {
    var div = document.createElement('div');
    var val = 1;
    div.innerHTML = val;
    div.onclick = function() {
        div.innerHTML = Number.parseInt(div.innerHTML, 10) + 1;
    }
    document.body.appendChild(div);
}
export default counter