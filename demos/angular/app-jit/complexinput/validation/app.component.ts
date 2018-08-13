import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from '../../../jqwidgets-ts/angular_jqxcomplexinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput') myComplexInput: jqxComplexInputComponent;

    btnOnClick(): void {
        this.myComplexInput.value('11- 2ii');
    }
}
