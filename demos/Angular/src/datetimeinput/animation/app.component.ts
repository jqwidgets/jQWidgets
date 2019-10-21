import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput', { static: false }) myDateTimeInput: jqxDateTimeInputComponent;

    count: number = 0;

    noneAnimationBtn() {
        this.myDateTimeInput.animationType('none');
    }

    slideAnimationBtn() {
        this.myDateTimeInput.animationType('slide');
    }

    // avoids unnecessary overwrite in the beggining
    fadeAnimationBtn() {
        if (this.count !== 0)
            this.myDateTimeInput.animationType('fade');
        this.count = 1;
    }
}