import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxButtonGroupComponent } from 'jqwidgets-ng/jqxbuttongroup';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myButtonGroup', { static: false }) myButtonGroup: jqxButtonGroupComponent;
    @ViewChild('myLog', { static: false }) myLog: ElementRef;

    public radioButtonChecked(mode: string): void {
        this.myButtonGroup.mode(mode);
    }

    public groupOnBtnClick(event: any): void {
        const clickedButton = event.args.button;
        this.myLog.nativeElement.innerHTML = `Clicked: ${clickedButton[0].id}`;
    }

}
