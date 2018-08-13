import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownButtonComponent } from '../../../jqwidgets-ts/angular_jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDropDownButton') myDropDownButton: jqxDropDownButtonComponent;

    ngAfterViewInit(): void {
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">DropDownButton</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }
}
