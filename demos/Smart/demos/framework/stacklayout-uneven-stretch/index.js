window.onload = function() {
	const stackPanel = document.querySelector('.smart-stack-layout');
			
	const app = new Smart.App(
	{
		data: {
			stretch: true,
			verticalStretch: false,
			orientation: 'horizontal'
		}
	});	
	
	app.notify(function(changes) {
		if (changes.propertyName === 'stretch') {
			if (changes.newValue ) {
				stackPanel.classList.add('stretch');
			}
			else {
				stackPanel.classList.remove('stretch');
			}
		}
	
		if (changes.propertyName === 'verticalStretch') {
			if (changes.newValue ) {
				stackPanel.classList.add('vertical-stretch');
			}
			else {
				stackPanel.classList.remove('vertical-stretch');
			}
		}
		
		if (changes.propertyName === 'orientation') {
			stackPanel.classList.remove('vertical');
		}	
	
		stackPanel.classList.add(changes.newValue);		
	});
}