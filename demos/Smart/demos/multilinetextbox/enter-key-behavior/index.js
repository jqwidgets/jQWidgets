window.onload = function () {
    const messageContainer = document.getElementById('messageContainer'),
        messages = [],
        messageWindowJ = document.getElementById('messageWindowJ'),
        messageWindowS = document.getElementById('messageWindowS'),
        startChat = document.getElementById('startChat'),
        messageBoxJ = document.getElementById('messageBoxJ'),
        messageBoxS = document.getElementById('messageBoxS'),
        enterKeyOptions = document.querySelectorAll('smart-radio-button');

    startChat.addEventListener('click', function (event) {
        messageWindowJ.open();
        messageWindowS.open();
    });

    messageBoxJ.addEventListener('change', function (event) {
        updateMessageContainer(event, 'J');
    });
    messageBoxS.addEventListener('change', function (event) {
        updateMessageContainer(event, 'S');
    });

    enterKeyOptions[0].addEventListener('change', function (event) {
        enterKeyBehaviorTo('clearOnSubmit');
    });
    enterKeyOptions[1].addEventListener('change', function (event) {
        enterKeyBehaviorTo('submit');
    });
    enterKeyOptions[2].addEventListener('change', function (event) {
        enterKeyBehaviorTo('newLine');
    });

    function updateMessageContainer(event, user) {
        if (!event.detail || event.detail.type !== 'submit') {
            return;
        }

        const value = event.detail.value,
            messageChip = document.createElement('smart-chip');

        messages.push(value);

        messageChip.value = value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
        messageChip.avatar = user;

        messageContainer.appendChild(messageChip);
    }

    function enterKeyBehaviorTo(option) {
        messageBoxJ.enterKeyBehavior = option;
        messageBoxS.enterKeyBehavior = option;
    }
}