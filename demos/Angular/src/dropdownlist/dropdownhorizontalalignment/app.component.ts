import { Component, ViewChild } from '@angular/core';

import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;

    flag: boolean = false;

    source: any = {
        datatype: 'json',
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        id: 'id',
        url: './../../../sampledata/customers.txt',
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);
    
    leftAlignBtnOnChecked(): void {
        this.myDropDownList.dropDownHorizontalAlignment('left');
    };

    // stops initial overwrite
    rightAlignBtnOnChecked(): void {
        if(this.flag)
            this.myDropDownList.dropDownHorizontalAlignment('right');
        this.flag = true;
    };
}

