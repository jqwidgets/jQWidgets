 
import { Component } from '@angular/core';

import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: `../app/checkbox/defaultfunctionality/app.component.htm`
})

export class AppComponent
{ 
    checkBox10OnChange(event)
    {
        let checked = event.args.checked;
        if (checked)
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[9].childNodes[0].childNodes.item(2)).innerHTML = 'Checked';
        }
        else
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[9].childNodes[0].childNodes.item(2)).innerHTML = 'Unchecked';
        }
    }
    checkBox11OnChange(event)
    {
        let checked = event.args.checked;
        if (checked)
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[10].childNodes[0].childNodes.item(2)).innerHTML = 'Checked';
        }
        else
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[10].childNodes[0].childNodes.item(2)).innerHTML = 'Unchecked';
        }
    }
    checkBox12OnChange(event)
    {
        let checked = event.args.checked;
        if (checked)
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[11].childNodes[0].childNodes.item(2)).innerHTML = 'Checked';
        }
        else if (false == checked)
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[11].childNodes[0].childNodes.item(2)).innerHTML = 'Unchecked';
        }
        else
        {
            (<HTMLElement>document.getElementsByTagName('angularCheckBox')[11].childNodes[0].childNodes.item(2)).innerHTML = 'Indeterminate';
        }
    }

}
