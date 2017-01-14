 
import { Component } from '@angular/core';

import { jqxButtonGroupComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttongroup';
import { jqxRadioButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    templateUrl: `../app/buttongroup/defaultfunctionality/app.component.htm`
})

export class AppComponent
{
    mode: string = 'default';

    defaltModeSelected(): void
    {
        this.mode = 'default';
    }
    checkBoxModeSelected(): void
    {
        this.mode = 'checkbox';
    }
    radioModeSelected(): void
    {
        this.mode = 'radio';
    }
    buttonGroupOnClick(event: any): void
    {
        let clickedButton = event.args.button;
        (<HTMLElement>document.getElementById("log")).innerHTML = "Clicked: " + clickedButton[0].id;
    }
}
