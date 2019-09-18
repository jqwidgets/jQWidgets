window.onload = function () {
    const multiSplitButton = document.getElementById('multiSplitButton');

    multiSplitButton.buttonsDataSource = ['Button 1', 'Button 2', 'Button 3'];
    multiSplitButton.dropDownButtonPosition = "none";
	multiSplitButton.addEventListener('buttonClick', function(event) {
		document.querySelector('#log').innerHTML = "Clicked Button " + event.detail.index;
	});
}