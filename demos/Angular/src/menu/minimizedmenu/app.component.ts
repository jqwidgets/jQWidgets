import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu', { static: false }) jqxMenu: jqxMenuComponent;
    @ViewChild('minimizeCheckbox', { static: false }) myCheckBox: jqxCheckBoxComponent;

    ngAfterViewInit() {
        this.jqxMenu.minimize();
    }

    change(event: any): void {
        if (this.myCheckBox.val()) {
            this.jqxMenu.minimize();
        }
        else {
            this.jqxMenu.restore();
        }
    };
}