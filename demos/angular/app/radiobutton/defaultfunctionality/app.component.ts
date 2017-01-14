 
import { Component } from '@angular/core';

import { jqxRadioButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxradiobutton';

@Component({
    selector: 'my-app',
    templateUrl: '../app/radiobutton/defaultfunctionality/app.component.htm'
})

export class AppComponent
{
    onChangeFirst(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
        }
    }

    onChangeSecond(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
        }
    }

    onChangeThird(event: any): void
    {
        this.clearLog();
        let log = document.getElementById('events');
        let checked = event.args.checked;
        if (checked)
        {
            log.innerHTML += '<div><span>Checked: 3 Months Contract</span></div>';
        } else
        {
            log.innerHTML += '<div><span>Unchecked: 3 Months Contract</span></div>';
        }
    }

    clearLog(): void
    {
        let log = document.getElementById('events').getElementsByTagName('span');
        if (log.length >= 2)
        {
            document.getElementById('events').innerHTML = '';
        }
    }
}
