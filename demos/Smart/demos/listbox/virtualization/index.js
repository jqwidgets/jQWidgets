window.onload = function () {
    let array = [];
    for (let i = 0; i < 1000000; i++) {
        array.push("Item" + i);
    }

    document.getElementById('button').onclick = function () {
        document.getElementById('list').dataSource = array;
    }
}