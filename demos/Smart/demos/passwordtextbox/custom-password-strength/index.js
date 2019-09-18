window.onload = function () {
    const passwordTextBox = document.querySelector('smart-password-text-box');

    passwordTextBox.passwordStrength = function (password, allowedSymbols) {
        const passwordLength = password.length;

        if (passwordLength < 3) {
            return 'short';
        } else if (passwordLength < 10) {
            return 'weak';
        } else {
            return 'strong';
        }
    };
}