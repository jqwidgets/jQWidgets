import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxColorPickerComponent } from '../../../jqwidgets-ts/angular_jqxcolorpicker';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myColorPicker') myColorPicker: jqxColorPickerComponent;
	@ViewChild('colorLog') colorLog: ElementRef;

    colorChanged(event: any): void {
        this.colorLog.nativeElement.innerHTML = `<div>Color: #${event.args.color.hex}</div>`;
    }

    hueModeChanged(event: any): void {
        if (event.args.checked) {
            this.myColorPicker.colorMode('hue');
        }
        else {
            this.myColorPicker.colorMode('saturation');
        }
    }
}
