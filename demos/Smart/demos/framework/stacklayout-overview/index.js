window.onload = function() {
	const stackPanel = document.querySelector('.smart-stack-layout');
			
	const app = new Smart.App(
	{
		data: {
			horizontalAlignment: 'left',
			verticalAlignment: 'top',
			orientation: 'horizontal'
		}
	});	
	
	app.notify(function(changes) {
		if (changes.propertyName === 'horizontalAlignment') {
			stackPanel.classList.remove('left', 'right', 'center');
		}
	
		if (changes.propertyName === 'verticalAlignment') {
			stackPanel.classList.remove('top', 'bottom', 'middle');
		}	
		
		if (changes.propertyName === 'orientation') {
			stackPanel.classList.remove('vertical');
		}	
	
		stackPanel.classList.add(changes.newValue);		
	});
}