import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxRatingComponent } from 'jqwidgets-ng/jqxrating';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rate', { static: false }) rate: ElementRef;

    change(event: any): void {
        let rate = this.rate.nativeElement;

        rate.innerHTML = '<span> ' + event.value + '</span>';
    }
}