window.onload = function () {
	let mobileToast1 = document.getElementById('mobileToast1'),
		mobileToast2 = document.getElementById('mobileToast2'),
		desktopToast = document.getElementById('desktopToast'),
		notificationMessagingContainer = document.getElementById('notificationMessagingContainer'),
		mobileToastsAreOpened = false,
		notificationsCount = 0,
		toastContentOptions = ['Add a new label', 'This item alredy has the label "travel".'],
		notificationsText = ['Hi!', 'How are you?', 'Do you want to see a movie tohinght?'];

	setInterval(function () { toggleMobileToasts(); }, 2000);

	function toggleMobileToasts() {
		if (mobileToastsAreOpened) {
			mobileToast1.closeAll();
			mobileToast2.closeAll();
			desktopToast.closeAll();

			if (notificationsCount>2) {
				notificationMessaging.closeAll();
				notificationsCount = 0;
			}
		}
		else {
			mobileToast1.open();

			mobileToast2.value = toastContentOptions[Math.floor((Math.random() * 2))];
			mobileToast2.open();

			desktopToast.open();

			notificationMessaging.open();
			notificationMessaging.value = notificationsText[notificationsCount];
			notificationsCount++;
		}

		mobileToastsAreOpened = !mobileToastsAreOpened;
	}


	notificationMessagingContainer.addEventListener('click', function (event) {
		let clickedArrow = event.target.closest('.material-icons.arrow'),
			clickedItem = event.target.closest('.smart-toast-item');

		if (clickedArrow) {
			let footer = clickedItem.querySelector('.message-footer');

			footer.classList.toggle('smart-hidden');
			clickedArrow.innerHTML = footer.classList.contains('smart-hidden') ? '&#xE313;' : '&#xE316;';
		}
	});
}