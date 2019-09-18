window.onload = function () {
    const floatingPointNumericTextBox = document.getElementById('floatingPointNumericTextBox'),
        complexNumericTextBox = document.getElementById('complexNumericTextBox');

    document.querySelector('#toggleScientificNotation').addEventListener('change', function (event) {
        const enabled = event.detail.value;
        floatingPointNumericTextBox.scientificNotation = enabled;
        complexNumericTextBox.scientificNotation = enabled;
    });
};