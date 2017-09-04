import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxButtonGroupComponent } from '../../../jqwidgets-ts/angular_jqxbuttongroup';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myButtonGroup') myButtonGroup: jqxButtonGroupComponent;
    @ViewChild('myLog') myLog: ElementRef;

    myDefaultModeButtonChecked(): void {
        this.myButtonGroup.mode('default');
    };

    myRadioModeButtonChecked(): void {
        this.myButtonGroup.mode('radio');
    };

    myCheckBoxModeButtonChecked(): void {
        this.myButtonGroup.mode('checkbox');
    };

    groupOnBtnClick(event: any): void {
        let clickedButton = event.args.button;
        this.myLog.nativeElement.innerHTML = `Clicked: ${clickedButton[0].id}`;
    }
}
