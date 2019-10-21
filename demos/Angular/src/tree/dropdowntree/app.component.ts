import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
    @ViewChild('myDropDownButton', { static: false }) myDropDownButton: jqxDropDownButtonComponent;

    ngAfterViewInit(): void {
        this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
    }

    myTreeOnSelect(event: any): void {
        if (this.myTree && this.myDropDownButton) {
            const item = this.myTree.getItem(event.args.element);
            const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
            this.myDropDownButton.setContent(dropDownContent);
        }
    }
}