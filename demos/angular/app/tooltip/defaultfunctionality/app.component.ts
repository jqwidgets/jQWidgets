 
import { Component, AfterViewInit } from '@angular/core';

import { jqxTooltipComponent } from '../../../../../jqwidgets-ts/angular_jqxtooltip';

@Component({
    selector: 'my-app',
    templateUrl: '../app/tooltip/defaultfunctionality/app.component.htm',
    styles: [`
        #container{
            width: 400px;
        }
        img{
            margin: 8px;
        }
    `]
})

export class AppComponent implements AfterViewInit
{
    ngAfterViewInit(): void 
    {
        for (let i = 0; i < 9; i++)
        {
            (<HTMLElement>document.getElementsByTagName('angularTooltip')[i]).getElementsByTagName('div')[0].style.display = 'inline-block';
        }
    }

}
