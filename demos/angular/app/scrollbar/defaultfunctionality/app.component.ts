 
import { Component } from '@angular/core';

import { jqxScrollBarComponent } from '../../../../../jqwidgets-ts/angular_jqxscrollbar';

@Component({
    selector: 'my-app',
    template: 
        `<div style="margin-bottom: 10px;" id='VerticalDiv'>Vertical</div>

        <jqxScrollBar (onValueChanged)="onValueChangedVertical($event)"
            [width]='18' [height]='280' 
            [min]='0' [max]='1000' [vertical]='true'>
        </jqxScrollBar>

        <div style="margin: 10px 0;" id='HorizontalDiv'>Horizontal</div>

        <jqxScrollBar (onValueChanged)="onValueChangedHorizontal($event)"
            [width]='280' [height]='18' 
            [min]='0' [max]='1000'>
        </jqxScrollBar>`

})

export class AppComponent
{
    onValueChangedVertical(event: any): void
    {
        (<HTMLElement>document.getElementById('VerticalDiv')).innerHTML = 'Vertical (' + parseInt(event.currentValue) + ')';
    }
    onValueChangedHorizontal(event: any): void
    {
        (<HTMLElement>document.getElementById('HorizontalDiv')).innerHTML = 'Horizontal (' + parseInt(event.currentValue) + ')';
    }
}
