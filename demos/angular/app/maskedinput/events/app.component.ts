import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxMaskedInputComponent } from '../../../jqwidgets-ts/angular_jqxmaskedinput';
import { jqxPanelComponent } from '../../../jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('numericInput') numericInput: jqxMaskedInputComponent;
    @ViewChild('Events') Events: jqxPanelComponent;

    change(event: any): void {
        let value = this.numericInput.val();
        this.Events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    };
}