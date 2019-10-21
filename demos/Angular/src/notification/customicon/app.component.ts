import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxNotification', { static: false }) jqxNotification: jqxNotificationComponent;
    @ViewChild('name', { static: false }) name: jqxInputComponent;
    @ViewChild('email', { static: false }) email: jqxInputComponent;
    @ViewChild('comment', { static: false }) comment: jqxTextAreaComponent;

    click(): void {
        this.name.val('');
        this.email.val('');
        this.comment.val('');
        this.jqxNotification.open();
    };
}