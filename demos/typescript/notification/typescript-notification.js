/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createNotification(selector, secondSelector, thirdSelector, fourthSelector, spanSelector) {
    // initialization options - validated in typescript
    // jqwidgets.NotificationOptions has generated TS definition
    var messageNotificationOptions = {
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
    var myMessageNotification = jqwidgets.createInstance(selector, 'jqxNotification', messageNotificationOptions);
    var timeNotificationOptions = {
        width: 250,
        position: "top-right",
        opacity: 0.9,
        autoOpen: false,
        animationOpenDelay: 800,
        autoClose: true,
        autoCloseDelay: 3000,
        template: "time"
    };
    var myTimeNotification = jqwidgets.createInstance(secondSelector, 'jqxNotification', timeNotificationOptions);
    var buttonsOptions = { width: 230, height: 30 };
    var openMessageNotificationButton = jqwidgets.createInstance(thirdSelector, 'jqxButton', buttonsOptions);
    var openTimeNotificationButton = jqwidgets.createInstance(fourthSelector, 'jqxButton', buttonsOptions);
    openMessageNotificationButton.addEventHandler('click', function () {
        myMessageNotification.open();
    });
    openTimeNotificationButton.addEventHandler('click', function () {
        var date = new Date();
        var minutes = date.getMinutes();
        var minutesString = '';
        if (minutes < 10) {
            minutesString = "0" + minutes;
        }
        else {
            minutesString = "" + minutes;
        }
        var seconds = date.getSeconds();
        var secondsString = '';
        if (seconds < 10) {
            secondsString = "0" + seconds;
        }
        else {
            secondsString = "" + seconds;
        }
        var hourString = date.getHours();
        var timeSpan = document.getElementById(spanSelector);
        timeSpan.innerText = hourString + ":" + minutesString + ":" + secondsString;
        myTimeNotification.open();
    });
}
//# sourceMappingURL=typescript-notification.js.map