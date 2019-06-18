import { Component, ViewChild } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree', {static: false}) myTree: jqxTreeComponent;
    @ViewChild('myDropDownButton', {static: false}) myDropDownButton: jqxDropDownButtonComponent;

    myTreeOnInitialized(): void {
        this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 4px;">Home</div>');
    }

    myTreeOnSelect(event: any): void {
        let item = this.myTree.getItem(event.args.element);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 4px;">' + item.label + '</div>';
        this.myDropDownButton.setContent(dropDownContent);
    };
}