window.onload = function () {
    document.getElementsByClassName('smart-value-path')[0].setAttribute('filter', 'url(#blueGlow)');
    document.getElementsByClassName('smart-value')[0].setAttribute('filter', 'url(#mainGlow)');

    /* Needed for IE11 ! CSS Stroke has no support for IE11 */
    document.getElementsByClassName('smart-value-path')[0].setAttribute('stroke', 'url(#blueGrad)');
    document.getElementsByClassName('smart-value')[0].setAttribute('stroke', 'url(#outlineGrad)');
}