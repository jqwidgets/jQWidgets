 
import { Component } from '@angular/core';

import { jqxRatingComponent } from '../../../../../jqwidgets-ts/angular_jqxrating';

@Component({
    selector: 'my-app',
    template: `<div style="margin-top: 10px;">
                   <jqxRating (onChange)="onChange($event)"
                    [width]='350' [height]='35'>
                    </jqxRating>
               </div>
               <div style="float: left;">Rating:</div>
               <div id="rate"></div>`
})

export class AppComponent
{
    onChange(event: any): void
    {
        (<HTMLElement>document.getElementById('rate')).innerHTML = '<span>' + event.value + '</span';
    }
}
