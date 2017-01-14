 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTabsComponent } from '../../../../../jqwidgets-ts/angular_jqxtabs';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';


@Component({
    selector: 'my-app',
    templateUrl: '../app/tabs/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('tabsReference') myTabs: jqxTabsComponent;

    ngAfterViewInit(): void 
    {
        (<HTMLElement>document.getElementById('animation').firstElementChild).style.marginTop = '10px';
        (<HTMLElement>document.getElementById('contentAnimation').firstElementChild).style.marginTop = '10px';
    }

    onChangeAnimation(event: any): void
    {
        let checked = event.args.checked;
        this.myTabs.selectionTracker(checked);
    }

    onChangeContentAnimation(event: any): void
    {
        let checked = event.args.checked;
        if (checked)
        {
            this.myTabs.animationType('fade');
        }
        else 
        {
            this.myTabs.animationType('none');
        }
    }
}
