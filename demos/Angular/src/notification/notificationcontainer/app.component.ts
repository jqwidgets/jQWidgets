import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxNotification', { static: false }) jqxNotification: jqxNotificationComponent;

    quotes: string[] =
    [
        'I\'m gonna make him an offer he can\'t refuse.', 'Toto, I\'ve got a feeling we\'re not in Kansas anymore.',
        'You talkin\' to me?', 'Bond. James Bond.', 'I\'ll be back.', 'Round up the usual suspects.',
        'I\'m the king of the world!', 'A martini. Shaken, not stirred.',
        'May the Force be with you.',
        'Well, nobody\'s perfect.'
    ];

    click(): void {
        this.jqxNotification.elementRef.nativeElement.querySelector('.jqx-notification-content').innerHTML = this.quotes[Math.round(Math.random() * this.quotes.length - 1)];
        this.jqxNotification.open();
    };
}