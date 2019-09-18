window.onload = function () {
  const smallMenu = document.getElementById('smallMenu'),
		smallMenuButtons = smallMenu.querySelectorAll('smart-toggle-button'),
		smallMenuLabels = ['Bold', 'Italic', 'Underline', 'Color'],
		commonSmallMenuTooltip = document.getElementById('commonSmallMenuTooltip'),
		largeMenu = document.getElementById('largeMenu'),
		largeMenuButtons = largeMenu.querySelectorAll('smart-toggle-button'),
		largeMenuLabels = ['Font Family', 'Font Size', 'Bold', 'Italic', 'Underline',/* 'Color',*/ 'Align Left', 'Align Center', 'Align Right', 'Align Justify'],
		commonLargeMenuTooltip = document.getElementById('commonLargeMenuTooltip');

	attachTooltipToGroup(commonSmallMenuTooltip, smallMenuButtons, smallMenuLabels);
	attachTooltipToGroup(commonLargeMenuTooltip, largeMenuButtons, largeMenuLabels);

	function attachTooltipToGroup(tooltip, elements, labels) {
		for (let i = 0; i < elements.length; i++) {
			const btn = elements[i],
				label = labels[i];

			btn.addEventListener('mouseenter', function () {
				tooltip.selector = btn;
				tooltip.value = label;
				tooltip.open();
			});
		}
	}	
}