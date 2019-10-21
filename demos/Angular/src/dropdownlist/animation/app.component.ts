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
        async: false
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    noneAnimationBtnOnChacked() {
        this.myDropDownList.animationType('none');
    };

    slideAnimationBtnOnChacked() {
        this.myDropDownList.animationType('slide');
    };

    // prevents initial overwrite
    fadeAnimationBtnOnChacked() {
        if(this.flag)
            this.myDropDownList.animationType('fade');
        this.flag = true;
    };
}
