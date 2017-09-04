import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxMenuComponent } from '../../../jqwidgets-ts/angular_jqxmenu';
import { jqxCheckBoxComponent } from '../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu') jqxMenu: jqxMenuComponent;
    @ViewChild('minimizeCheckbox') myCheckBox: jqxCheckBoxComponent;

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