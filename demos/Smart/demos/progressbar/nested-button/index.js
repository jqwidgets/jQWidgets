window.onload = function () {
    const button = document.querySelector('smart-toggle-button'),
    progressBar = document.querySelector('smart-circular-progress-bar');
    button.addEventListener("change", function () {
        if (button.checked) {
            progressBar.indeterminate = false;
        }
        else {
            progressBar.indeterminate = true;
        }
    });
}