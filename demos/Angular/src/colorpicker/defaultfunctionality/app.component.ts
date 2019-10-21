import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('dropDownButton', { static: false }) myDropDown: jqxDropDownButtonComponent;

    ngAfterViewInit(): void {
        this.myDropDown.setContent(this.getTextElementByColor({ hex: "FFAABB" }));
    }

    getTextElementByColor(color: any): any {
        if (color == 'transparent' || color.hex == "") {
            return '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;">transparent</div>';
        }
        let nThreshold = 105;
        let bgDelta = (color.r * 0.299) + (color.g * 0.587) + (color.b * 0.114);
        let foreColor = (255 - bgDelta < nThreshold) ? 'Black' : 'White';
        let element = '<div style="text-shadow: none; position: relative; padding-bottom: 2px; margin-top: 2px;color:' + foreColor + '; background: #' + color.hex + '">#' + color.hex + '</div>';
        return element;
    }

    colorPickerEvent(event: any): void {
        this.myDropDown.setContent(this.getTextElementByColor(event.args.color));
        (<HTMLElement>document.getElementsByClassName('jqx-scrollview')[0]).style.borderColor = '#' + event.args.color.hex;
    }
}
