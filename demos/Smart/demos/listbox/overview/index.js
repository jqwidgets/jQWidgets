window.onload = function () {
		    function configureListBoxes() {
                function configureGestureListBox() {
                    let gestureListbox = document.getElementById('gestureListBox');

                    gestureListbox.itemTemplate = 'multiLineTemplate';

                    let actionButtons = gestureListbox.getElementsByClassName('secondLine'), button;

                    for (let i = 0; i < actionButtons.length; i++) {
                        button = document.createElement('smart-button');
                        button.id = 'actionButton';
                        button.classList.add('material', 'flat');
                        button.innerHTML = '<i class="material-icons">&#xE8B8;</i>';
                        actionButtons[i].appendChild(button);
                    }

                    function handleSwipe(event) {
                        let target = event.originalEvent.target.closest('smart-list-item'),
                            actionButton = document.getElementById('actionButton'), isSameItem, reset, oldSwipeType,
                            type = event.type === 'swipeleft' ? 'left' : 'right';

                        if (!target) {
                            return;
                        }

                        target.$.removeClass('swipe-right-left');

                        let swipedLeftItems = this.getElementsByClassName('swipe-left'),
                            swipedRightItems = this.getElementsByClassName('swipe-right');

                        if (swipedLeftItems.length === 1) {
                            oldSwipeType = 'left';
                            isSameItem = swipedLeftItems[0] === target ? true : false;
                            reset = isSameItem && type === 'left' ? true : false;
                            swipedLeftItems[0].$.removeClass('swipe-left');
                        }
                        else if (swipedRightItems.length === 1) {
                            oldSwipeType = 'right';
                            isSameItem = swipedRightItems[0] === target ? true : false;
                            reset = isSameItem && type === 'right' ? true : false;
                            swipedRightItems[0].$.removeClass('swipe-right');
                        }

                        if (isSameItem && oldSwipeType !== 'left') {
                            target.$.addClass('swipe-right-left');
                        }

                        if (reset) {
                            return;
                        }

                        if (type === 'right') {
                            target.querySelector('smart-button').innerHTML = '<i class="material-icons">&#xE307;</i>';
                        }
                        else {

                            target.querySelector('smart-button').innerHTML = '<i class="material-icons">&#xE2C4;</i>';
                        }

                        target.$.addClass('swipe-' + type);

                    }

                    gestureListbox.addEventListener('swipeleft', handleSwipe);
                    gestureListbox.addEventListener('swiperight', handleSwipe);
                }

                function configureDemoListBoxes() {
                    let switchWifi = document.createElement('smart-switch-button'),
                        switchBluetooth = document.createElement('smart-switch-button'),
                        settingsMenu = document.getElementById('settingsMenu'),
                        phoneBook = document.getElementById('phoneBook'),
                        twoLineList = document.getElementById('twoLineList'),
                        twoLineCheckList = document.getElementById('twoLineCheckList'),
                        deleteButton = document.getElementById('deleteButton'),

                        people = phoneBook.items, button,
                        iconLabels = [
                            'network_wifi',
                            'bluetooth',
                            'data_usage',
                            'usb',
                            '',
                            'settings',
                            'settings_phone',
                            'notifications',
                            'stay_primary_portrait',
                            'storage',
                            'battery_std',
                            'apps',
                            'people',
                            'gps_fixed',
                            'security',
                            'account_box',
                            'home',
                            'keyboard',
                            'settings_backup_restore',
                            'access_time',
                            'accessibility',
                            'print',
                            'phone_android',
                            'help'
                        ];

                    switchWifi.classList.add('material');
                    switchBluetooth.classList.add('material');

                    switchWifi.checked = true;

                    settingsMenu.itemTemplate = 'itemTemplate';

                    const icons = document.getElementsByClassName('primaryAction');

                    settingsMenu.getElementsByClassName('secondaryAction')[0].appendChild(switchWifi);
                    settingsMenu.getElementsByClassName('secondaryAction')[1].appendChild(switchBluetooth);

                    for (let i = 0; i < icons.length; i++) {
                        icons[i].children[0].textContent = iconLabels[i];
                    }

                    phoneBook.itemTemplate = 'itemTemplate';

                    for (let i = 0; i < people.length; i++) {
                        button = document.createElement('smart-button');
                        button.classList.add('material', 'flat');
                        button.innerHTML = '<i class="material-icons">&#xE0C9;</i>';
                        people[i].getElementsByClassName('secondaryAction')[0].appendChild(button);
                    }

                    twoLineList.itemTemplate = 'multiLineTemplate';

                    let twoLineListItems = twoLineList.items,
                        secondLineContent = [
                            'General Manager',
                            'Developer',
                            'Musician',
                            'Architect',
                            'Janitor',
                            'Waitress',
                            'Developer',
                            'CEO',
                            'Team leader',
                            'Technical advisor',
                            'Human resources(HR)',
                            'Financial advisor',
                            'Consultant',
                            'Human resources(HR)',
                            'Tester',
                            'Quality Assurance(QA)',
                            'Software Developer',
                        ];

                    for (let i = 0; i < twoLineListItems.length; i++) {
                        twoLineListItems[i].getElementsByClassName('secondLine')[0].textContent = secondLineContent[i];
                    }

                    twoLineCheckList.itemTemplate = 'multiLineTemplate';

                    let twoLineCheckListItems = twoLineCheckList.items;
                        secondLineContent = [
                            '650KB',
                            '105MB',
                            '497MB',
                            '1.2MB',
                            '345KB',
                            '1.2GB',
                            '12MB',
                            '2.4MB',
                            '7.5GB',
                            '1.72GB',
                            '450MB',
                            '480KB',
                            '120KB',
                            '12.7MB',
                            '784MB',
                            '920KB',
                            '1.7MB'
                        ];

                    for (let i = 0; i < twoLineCheckListItems.length; i++) {
                        twoLineCheckListItems[i].getElementsByClassName('secondLine')[0].textContent = secondLineContent[i];
                    }

                    twoLineCheckList.addEventListener('change', function () {
                        if (this.selectedIndexes.length > 0) {
                            deleteButton.$.removeClass('smart-visibility-hidden');
                        }
                        else {
                            deleteButton.$.addClass('smart-visibility-hidden');
                        }
                    });

                    deleteButton.addEventListener('click', function () {
                        for (let index = twoLineCheckList.selectedIndexes.length - 1; index > -1; index--) {
                            twoLineCheckList.remove(twoLineCheckList.selectedIndexes[index])
                        }
                    });
                }

                function configureThemedListBoxes() {
                    let switchVibration = document.createElement('smart-switch-button'),
                        switchRingtone = document.createElement('smart-switch-button'),
                        switchNotificationLight = document.createElement('smart-switch-button'),
                        switchNotificationLightDark = document.createElement('smart-switch-button'),
                        switchNotificationsLockScreen = document.createElement('smart-switch-button'),
                        ringSlider = document.createElement('smart-slider'),
                        mediaSlider = document.createElement('smart-slider'),
                        alarmSlider = document.createElement('smart-slider'),
                        listBoxLight = document.getElementById('listBoxLight');
                     
                    let listBoxLightSecondaryAction = listBoxLight.getElementsByClassName('secondLine');
                  
                    function sliderControl() {
                        switch (this) {
                            case mediaSlider:
                                this.previousElementSibling.textContent = this.value === this.min ? 'volume_off' : 'volume_up';
                                break;
                            case alarmSlider:
                                this.previousElementSibling.textContent = this.value === this.min ? 'alarm_off' : 'alarm';
                                break;
                            case ringSlider:
                                this.previousElementSibling.textContent = this.value === this.min ? 'notifications_off' : 'notifications';
                                break;
                        }
                    }

                    [switchVibration, switchRingtone,
                        switchNotificationLight, switchNotificationLightDark,
                        switchNotificationsLockScreen,
                        ringSlider, mediaSlider, alarmSlider
                    ].map(function(element){
						element.classList.add('material');
					});

                    [ringSlider, mediaSlider, alarmSlider].map(function(element)
						{
							element.scalePosition = 'none';
						}
					);

                    mediaSlider.value  = mediaSlider.max / 2;
                    ringSlider.value  = ringSlider.max / 1.5;
                    alarmSlider.value = alarmSlider.max;

                    switchVibration.checked = switchNotificationLight.checked = switchNotificationLightDark.checked = true;

                    listBoxLight.itemTemplate  = 'multiLineTemplate';

                    // Light themed list box
                    listBoxLightSecondaryAction[2].innerHTML = '<i class="material-icons">&#xE050;</i>';
                    listBoxLightSecondaryAction[2].appendChild(mediaSlider);
                    listBoxLightSecondaryAction[3].innerHTML = '<i class="material-icons">&#xE855;</i>';
                    listBoxLightSecondaryAction[3].appendChild(alarmSlider);
                    listBoxLightSecondaryAction[4].innerHTML = '<i class="material-icons">&#xE7F4;</i>';
                    listBoxLightSecondaryAction[4].appendChild(ringSlider);
                    listBoxLightSecondaryAction[5].parentElement.classList.add('single-line');
                    listBoxLightSecondaryAction[5].appendChild(switchVibration);
                    listBoxLightSecondaryAction[8].parentElement.classList.add('single-line');
                    listBoxLightSecondaryAction[8].appendChild(switchRingtone);
                    listBoxLightSecondaryAction[11].parentElement.classList.add('single-line');
                    listBoxLightSecondaryAction[11].appendChild(switchNotificationLight);
                    listBoxLightSecondaryAction[14].parentElement.classList.add('single-line');
                    listBoxLightSecondaryAction[14].appendChild(switchNotificationsLockScreen);

                  
                    //Additional text
                    listBoxLightSecondaryAction[7].textContent = 'Breeze';
                    listBoxLightSecondaryAction[9].textContent = 'Notification';
                    listBoxLightSecondaryAction[15].textContent  = 'No apps can read notifications';


                    mediaSlider.addEventListener('change', sliderControl);
                    alarmSlider.addEventListener('change', sliderControl);
                    ringSlider.addEventListener('change', sliderControl);
                  

            }
			    configureDemoListBoxes();
                configureThemedListBoxes();
                configureGestureListBox();
            }
            configureListBoxes();
	}