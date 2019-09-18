window.onload = function () {
    const passwordTextBox = document.querySelector('smart-password-text-box');

    passwordTextBox.messages = {
        'en': {
            'passwordStrength': 'Password strength',
            'short': 'Short',
            'weak': 'Weak',
            'far': 'Far',
            'good': 'Good',
            'strong': 'Strong',
            'showPassword': 'Show password'
        },
        'de': {
            'passwordStrength': 'Passwortstärke',
            'short': 'kurz',
            'weak': 'schwach',
            'far': 'weit',
            'good': 'gut',
            'strong': 'stark',
            'showPassword': 'Passwort anzeigen'
        }
    };
    passwordTextBox.locale = 'de';
}