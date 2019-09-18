window.onload = function () {
    let dropDownButton = document.getElementById('dropDownButtonDemo');

    document.getElementById("open").onclick = function () {
        dropDownButton.open();
    }
    document.getElementById("close").onclick = function () {
        dropDownButton.close();
    }

    document.getElementById("clear").onclick = function () {
        dropDownButton.removeAll();
    }

    document.getElementById("appendChild").onclick = function () {
        let button = document.createElement('smart-button');

        button.id = 'simpleButton';
        button.innerHTML = 'Button';

        dropDownButton.appendChild(button);
    }

    document.getElementById("removeChild").onclick = function () {
        let button = document.getElementById('simpleButton');

        if (button) {
            dropDownButton.removeChild(button);
        }
    }

    document.getElementById("disabled").onclick = function () {
        dropDownButton.disabled = !dropDownButton.disabled;
    }
}