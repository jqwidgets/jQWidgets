/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" /> 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxWindowComponent } from '../../../../../jqwidgets-ts/angular_jqxwindow';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';
import { jqxTabsComponent } from '../../../../../jqwidgets-ts/angular_jqxtabs';

@Component({
    selector: 'my-app',
    templateUrl: '../app/window/createComponent/app.component.htm'
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('windowReference') window: jqxWindowComponent;
    @ViewChild('showWindowButton') showWindowButton: jqxButtonComponent;
    @ViewChild('hideWindowButton') hideWindowButton: jqxButtonComponent;
    @ViewChild('resizeCheckBox') resizeCheckBox: jqxCheckBoxComponent;
    @ViewChild('dragCheckBox') dragCheckBox: jqxCheckBoxComponent;
    @ViewChild('tabsReference') tab: jqxTabsComponent;

    ngAfterViewInit(): void
    {
        this.showWindowButton.createComponent({ width: '70px' });
        this.hideWindowButton.createComponent({ width: '70px' });
        this.resizeCheckBox.createComponent({ width: '185px', checked: true });
        this.dragCheckBox.createComponent({ width: '185px', checked: true });
        this.window.createComponent(this.windowSettings);
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

    windowSettings: jqwidgets.WindowOptions =
    {
        height: 300,
        width: 500,
        maxHeight: 400,
        maxWidth: 700,
        minHeight: 200,
        minWidth: 200,
        position: { x: 300, y: 100 },
        showCollapseButton: true,
        initContent: (): void =>
        {
            this.tab.createComponent({ width: '100%', height: '100%' });
            this.window.focus();
        }
    }
}
