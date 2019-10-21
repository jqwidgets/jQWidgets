import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('timerNotification', { static: false }) timerNotification: jqxNotificationComponent;
    @ViewChild('correctNotification', { static: false }) correctNotification: jqxNotificationComponent;
    @ViewChild('wrongNotification', { static: false }) wrongNotification: jqxNotificationComponent;
    @ViewChild('errorTimeOutNotification', { static: false }) errorTimeOutNotification: jqxNotificationComponent;
    @ViewChild('answerInput', { static: false }) answerInput: jqxInputComponent;
    @ViewChild('timerNotificationContent', { static: false }) timerNotificationContent: ElementRef;

    notificationWidth: number = 300;
    position: string = 'top-right';
    
    interval: any = null;
    seconds = 30;
    intervalStart() {
       let interval = setInterval(() => {
            if (this.seconds > 1) {
                this.seconds--;
                let innerSpan = this.timerNotificationContent.nativeElement.getElementsByTagName('SPAN')[0];
                innerSpan.innerText = this.seconds;



                // TODO: Try to create better solution



                this.timerNotification.closeLast();
                this.timerNotification.open();
            } else {
                clearInterval(interval);
                this.timerNotification.closeLast();
            }
        }, 1000);

       return interval;
    }

    ngAfterViewInit() {
        this.interval = this.intervalStart();
    }

    submitAnswerClick(): void {
        if (this.seconds > 1) {
            if (this.answerInput.val() == 8) {
                this.correctNotification.open()
                clearInterval(this.interval);
                this.timerNotification.closeLast();
            } else {
                this.wrongNotification.open();
            }
        } else {
            this.errorTimeOutNotification.open();
        }
    };
}