 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxWindowComponent } from '../../../../../jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';
import { jqxTabsComponent } from '../../../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'my-app',
    templateUrl: '../app/window/defaultfunctionality/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('windowReference') window: jqxWindowComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.window.focus();
        });
    }

    onResizeCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.resizable(true);
        }
        else 
        {
            this.window.resizable(false);
        }
    }

    onDragCheckBox(event: any): void
    {
        if (event.args.checked) 
        {
            this.window.draggable(true);
        }
        else 
        {
            this.window.draggable(false);
        }
    }

    onShowButton(): void
    {
        this.window.open();
    }

    onHideButton(): void
    {
        this.window.close();
    }
}
