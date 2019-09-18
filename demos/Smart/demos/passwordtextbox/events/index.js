window.onload = function () {
    const passwordTextBox = document.querySelector('smart-password-text-box'),
        testEvent = document.getElementById('testEvent');

    passwordTextBox.addEventListener('change', function (event) {
        document.getElementById('eventLog').innerHTML = passwordTextBox.value;
    });
}