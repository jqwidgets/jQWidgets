/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNotification(selector, secondSelector, thirdSelector, fourthSelector, spanSelector) {
    // initialization options - validated in typescript
    // jqwidgets.NotificationOptions has generated TS definition
    let messageNotificationOptions: jqwidgets.NotificationOptions = {
        width: 250,
        position: "top-right",
        opacity: 0.9,
        autoOpen: false,
        animationOpenDelay: 800,
        autoClose: true,
        autoCloseDelay: 3000,
        template: "info"
    };

    // creates an instance
    let myMessageNotification: jqwidgets.jqxNotification = jqwidgets.createInstance(selector, 'jqxNotification', messageNotificationOptions);

    let timeNotificationOptions: jqwidgets.NotificationOptions = {
        width: 250,
        position: "top-right",
        opacity: 0.9,
        autoOpen: false,
        animationOpenDelay: 800,
        autoClose: true,
        autoCloseDelay: 3000,
        template: "time"
    };
    let myTimeNotification: jqwidgets.jqxNotification = jqwidgets.createInstance(secondSelector, 'jqxNotification', timeNotificationOptions);

    let buttonsOptions: jqwidgets.ButtonOptions = { width: 230, height: 30 };
    let openMessageNotificationButton: jqwidgets.jqxButton = jqwidgets.createInstance(thirdSelector, 'jqxButton', buttonsOptions);
    let openTimeNotificationButton: jqwidgets.jqxButton = jqwidgets.createInstance(fourthSelector, 'jqxButton', buttonsOptions);

    openMessageNotificationButton.addEventHandler('click', function () {
        myMessageNotification.open();
    });

    openTimeNotificationButton.addEventHandler('click', function () {
        let date = new Date();
        let minutes = date.getMinutes();
        let minutesString: String = '';
        if (minutes < 10) {
            minutesString = "0" + minutes;
        } else {
            minutesString = "" + minutes;
        }

        let seconds = date.getSeconds();
        let secondsString: String = '';
        if (seconds < 10) {
            secondsString = "0" + seconds;
        } else {
            secondsString = "" + seconds;
        }

        let hourString = date.getHours();
        let timeSpan = document.getElementById(spanSelector);
        timeSpan.innerText = hourString + ":" + minutesString + ":" + secondsString;
        myTimeNotification.open();
    });
}