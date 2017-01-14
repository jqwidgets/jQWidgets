 
import { Component } from '@angular/core';

import { jqxSwitchButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxswitchbutton';


@Component({
    selector: 'my-app',
    templateUrl: '../app/switchbutton/defaultfunctionality/app.component.htm',
    styleUrls: ['../app/switchbutton/defaultfunctionality/app.component.css']
})

export class AppComponent
{
    onChecked(event: any): void
    {
        (<HTMLElement>document.getElementById('events')).innerHTML = this.label[event.target.parentElement.id] + ': Unchecked';
    }

    onUnchecked(event: any): void 
    {
        (<HTMLElement>document.getElementById('events')).innerHTML = this.label[event.target.parentElement.id] + ': Checked';
    }

    label: any =
    {
        'button1': 'New Mail',
        'button2': 'Sent Mail',
        'button3': 'Calendar Alerts',
        'button4': 'Lock Sounds',
        'button5': 'Keyboard clicks'
    }
}
