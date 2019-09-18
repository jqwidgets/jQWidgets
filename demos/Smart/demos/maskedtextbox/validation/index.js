window.onload = function () {
    const maskedTextBox = document.getElementById('maskedTextBox'),
        validationStatus = document.getElementById('validationStatus');

    maskedTextBox.validation = function (value) {
        if (value.length === 5) {
            return true;
        }

        return false;
    };

    maskedTextBox.addEventListener('validation', function (event) {
        const details = event.detail;

        console.log('Validation success : ' + details.success);

        if (details.success) {
            validationStatus.innerHTML = 'Validation successful!';
        } else {
            validationStatus.innerHTML = 'Please, fill the mask...';
        }
    });
}