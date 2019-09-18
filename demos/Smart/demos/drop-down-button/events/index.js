window.onload = function() {
    const radioButtons = document.getElementsByTagName('smart-radio-button'),
        dropDownButton = document.querySelector('smart-drop-down-button');

    radioButtons[0].addEventListener('change', function() {
        dropDownButton.dropDownOpenMode = 'default';
        dropDownButton.placeholder = 'Button';
    });

    radioButtons[1].addEventListener('change', function() {
        dropDownButton.dropDownOpenMode = 'dropDownButton';
        dropDownButton.placeholder = 'Action';
    });

    dropDownButton.addEventListener('actionButtonClick', function(event) {
        document.getElementById('log').innerHTML += event.type + '<br />';
    });

    dropDownButton.addEventListener('dropDownButtonClick', function(event) {
        document.getElementById('log').innerHTML += event.type + '<br />';
    });

    dropDownButton.addEventListener('opening', function(event) {
        document.getElementById('log').innerHTML += event.type + '<br />';
    });

    dropDownButton.addEventListener('closing', function(event) {
        document.getElementById('log').innerHTML += event.type + '<br />';
    });
}