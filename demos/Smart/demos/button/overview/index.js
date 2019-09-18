window.onload = function () {
	var hoverArea = document.getElementById('hover-area'),
		floatingHoverButton = document.getElementById('floating-hover-action'),
		floatingClickButton = document.getElementById('floating-click-action'),
		toggleButtons = document.getElementsByClassName('exclusive-selection'),
		progressBar = document.getElementById('progressBar'),
		circularProgressBar = document.getElementById('progressBarCircular');

	for (var i = 0; i < toggleButtons.length; i++) {
		toggleButtons[i].addEventListener('change', function (event) {
			if (event.detail.value) {
				for (var k = 0; k < toggleButtons.length; k++) {
					if (toggleButtons[k] !== this) {
						toggleButtons[k].checked = false;
					}
				}
			}
		});
	}

	hoverArea.addEventListener('mouseover', function () {
		floatingHoverButton.$.removeClass('smart-visibility-hidden');
	});

	hoverArea.addEventListener('mouseout', function (event) {
		if (event.relatedTarget && event.relatedTarget.closest('smart-button')) {
			return;
		}

		floatingHoverButton.$.addClass('smart-visibility-hidden');
	});

	floatingClickButton.addEventListener('click', function () {
		var subMenuButtons = document.getElementsByClassName('floating-click-sub-action'),
			changeIcon = false;

		for (var i = 0; i < subMenuButtons.length; i++) {
			if (subMenuButtons[i].$.hasClass('smart-visibility-hidden')) {
				subMenuButtons[i].$.removeClass('smart-visibility-hidden');
				changeIcon = true;
			}
			else {
				subMenuButtons[i].$.addClass('smart-visibility-hidden');
			}
		}

		this.getElementsByClassName('material-icons')[0].innerHTML = changeIcon ? 'close' : 'share';
	});	
}