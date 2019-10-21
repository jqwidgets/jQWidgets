import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from 'jqwidgets-ng/jqxcomplexinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput', { static: false }) myComplexInput: jqxComplexInputComponent;

    btnOnClick(): void {
        this.myComplexInput.value('11- 2ii');
    }
}
