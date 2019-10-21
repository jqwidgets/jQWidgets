import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myNotification', { static: false }) myNotification: jqxNotificationComponent;

    source: string[] = ["info", "warning", "success", "error", "mail", "time", "null"]

    openNotificationClick(): void {
        if (this.myNotification) {
            this.myNotification.open();
        }
    };

    closeLastNotificationClick(): void {
        if (this.myNotification) {
            this.myNotification.closeLast();
        }
    };

    closeNotificationsClick(): void {
        if (this.myNotification) {
            this.myNotification.closeAll();
        }
    };

    topLeftChecked(): void {
        if (this.myNotification) {
            this.myNotification.position('top-left');
        }
    };

    topRightChecked(): void {
        if (this.myNotification) {
            this.myNotification.position('top-right');
        }
    };

    bottomLeftChecked(): void {
        if (this.myNotification) {
            this.myNotification.position('bottom-left');
        }
    };

    bottomRightChecked(): void {
        if (this.myNotification) {
            this.myNotification.position('bottom-right');
        }
    };

    change(event: any): void {
        if (this.myNotification) {
            let choice = event.args.item.label;
            let newTemplate;
            if (choice != "null") {
                newTemplate = choice;
            } else {
                newTemplate = null;
            }
    
            this.myNotification.template(newTemplate);
        }
    };

    closeOnClickCheckboxChange(event: any): void {
        if (this.myNotification) {
            let checked = event.args.checked;
            this.myNotification.closeOnClick(checked);
        }
    };

    autoCloseCheckBoxChange(event: any): void {
        if (this.myNotification) {
            let checked = event.args.checked;
            this.myNotification.autoClose(checked); 
        }
    };

    blinkCheckboxChange(event: any): void {
        if (this.myNotification) {
            let checked = event.args.checked;
            this.myNotification.blink(checked);
        }
    };
}