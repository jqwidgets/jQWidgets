import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput: jqxDateTimeInputComponent;

    count: number = 0;

    leftBtn(): void {
        this.myDateTimeInput.dropDownHorizontalAlignment('left');
    }

    // unnecessary overwrite in beggining
    rightBtn(): void {
        if (this.count !== 0)
            this.myDateTimeInput.dropDownHorizontalAlignment('right');
        this.count = 1;
    }
}