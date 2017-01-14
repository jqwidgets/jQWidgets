 
import { Component } from '@angular/core';

import { jqxListMenuComponent } from '../../../../../jqwidgets-ts/angular_jqxlistmenu';

@Component({
    selector: 'my-app',
    styles: [
        `#list img
        {
            width: 50px;
            height: 55px;
        }`,
        `#list div
        {
            margin-top: -35px;
            margin-left: 80px;
        }`,
        `.jqx-listmenu-item
        {
            padding: 0px;
            min-height: 57px;
        }`
    ],
    templateUrl: '../app/listmenu/defaultfunctionality/app.component.htm'
})

export class AppComponent
{

}
