import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxRatingComponent } from '../../../jqwidgets-ts/angular_jqxrating';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rate') rate: ElementRef;

    change(event: any): void {
        let rate = this.rate.nativeElement;

        rate.innerHTML = '<span> ' + event.value + '</span>';
    }
}