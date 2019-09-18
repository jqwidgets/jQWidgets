window.onload = function () {
    const maskedTextBox = document.getElementById('maskedTextBox'),
        checkBox = document.getElementById('checkBox');

    checkBox.addEventListener('change', function () {
        maskedTextBox.isOverwriteMode = checkBox.checked;
    });
}