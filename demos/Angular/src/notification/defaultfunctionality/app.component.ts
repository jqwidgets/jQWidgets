import { Component, ViewChild } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('msgNotification', { static: false }) msgNotification: jqxNotificationComponent;
    @ViewChild('timeNotification', { static: false }) timeNotification: jqxNotificationComponent;
    
    onClickOpenMessageNotification(): void {
        this.msgNotification.open();
    }

    onClickOpenTimeNotification(): void {
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

        let timeSpan = document.getElementById('currentTime');
        timeSpan.innerText = date.getHours() + ":" + minutesString + ":" + secondsString;
        this.timeNotification.open();
    }
}