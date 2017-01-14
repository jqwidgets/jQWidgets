 
import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxSortableComponent } from '../../../../../jqwidgets-ts/angular_jqxsortable';

@Component({
    selector: 'my-app',
    template: '<jqxSortable></jqxSortable>',
    styles: [`
        .jqx-sortable {
            margin: 2px;
            padding: 5px;
            float: left;
            width: 200px;
            border: lightblue solid 1px;
        }
        .jqx-sortable div {
            border-radius: 5px;
            padding: 5px;
            cursor: pointer;
            background-color: white;
            color: black;
            border: 1px solid transparent;
        }
        .jqx-sortable div:hover {
            border: 1px solid #356AA0;
        }        
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit
{
    ngAfterViewInit(): void 
    {
        setTimeout(() =>
        {
           this.loadInfo();
        });
    }

    loadInfo(): void
    {
        let firstNames = ["Nancy", "Andrew", "Janet", "Margaret", "Steven"];
        let lastNames = ["Davolio", "Fuller", "Leverling", "Peacock", "Buchanan"];
        let titles = ["Sales Representative", "Vice President, Sales", "Sales Representative", "Sales Representative", "Sales Manager"];
        for (let i = 0; i < firstNames.length; i++)
        {
            let element = document.createElement('div');
            let imgurl = '../../images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="40" src="' + imgurl + '"/>';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + " " + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            (<HTMLElement>document.getElementsByTagName('angularSortable')[0]).children[0].appendChild(element);
        }
    }
}
