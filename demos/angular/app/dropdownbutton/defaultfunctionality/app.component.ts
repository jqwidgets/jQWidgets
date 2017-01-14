 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxTreeComponent } from '../../../../../jqwidgets-ts/angular_jqxtree';
import { jqxCheckBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcheckbox';

@Component({
    selector: 'my-app',
    templateUrl: `../app/dropdownbutton/defaultfunctionality/app.component.htm`
})

export class AppComponent implements AfterViewInit
{ 
    @ViewChild('dropDownButtonReference') myDropDownButton: jqxDropDownButtonComponent;
    @ViewChild('treeReference') myTree: jqxTreeComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.myDropDownButton.setContent('<div style="position: relative; margin-left: 3px; margin-top: 5px;">Home</div>');
        });  
    }   

    treeOnSelect(event: any)
    {
        let item = this.myTree.getItem(event.args.element);
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + item.label + '</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }

    checkBoxOnChange(event: any)
    {
        let isChecked = event.args.checked;
        this.myDropDownButton.autoOpen(isChecked);
    }
}
