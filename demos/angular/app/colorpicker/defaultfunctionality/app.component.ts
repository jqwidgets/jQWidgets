 
import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxDropDownButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownbutton';
import { jqxScrollViewComponent }     from '../../../../../jqwidgets-ts/angular_jqxscrollview';
import { jqxColorPickerComponent }    from '../../../../../jqwidgets-ts/angular_jqxcolorpicker';

@Component({
    selector: 'my-app',
    templateUrl: `../app/colorpicker/defaultfunctionality/app.component.htm`,
    styleUrls: ['../app/colorpicker/defaultfunctionality/app.component.css']
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('dropDownButton') myDropDown: jqxDropDownButtonComponent;

    ngAfterViewInit(): void
    {
        setTimeout(() =>
        {
            this.myDropDown.setContent(this.getTextElementByColor({ hex: "FFAABB" }));

            (<HTMLElement>document.getElementsByClassName('jqx-scrollview')[0]).style.border = '15px solid #ffaabb';
            (<HTMLElement>document.getElementsByClassName('jqx-scrollview')[0]).style.borderRadius = '10px';
        });   
    }   

    getTextElementByColor(color: any): any
    {
        if (color == 'transparent' || color.hex == "")
        {
            return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
        }
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        let element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
        return element;
    }

    colorPickerEvent(event: any): void
    { 
        this.myDropDown.setContent(this.getTextElementByColor(event.args.color));
        (<HTMLElement>document.getElementsByClassName('jqx-scrollview')[0]).style.borderColor = '#' + event.args.color.hex;
    }
}
