import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxNotificationComponent } from '../../../jqwidgets-ts/angular_jqxnotification';
import { jqxInputComponent } from '../../../jqwidgets-ts/angular_jqxinput';
import { jqxTextAreaComponent } from '../../../jqwidgets-ts/angular_jqxtextarea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxNotification') jqxNotification: jqxNotificationComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('email') email: jqxInputComponent;
    @ViewChild('comment') comment: jqxTextAreaComponent;

    click(): void {
        this.name.val('');
        this.email.val('');
        this.comment.val('');
        this.jqxNotification.open();
    };
}