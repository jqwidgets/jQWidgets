import { Component, ViewChild } from '@angular/core';

import { jqxRepeatButtonComponent } from '../../../jqwidgets-ts/angular_jqxrepeatbutton';

@Component({
    selector: 'app-root',
    templateUrl: `./app.component.html`
})

export class AppComponent {
    @ViewChild('myProgressBar') myProgressBar: jqxRepeatButtonComponent
  
    repeatOnClick(): void {
        let currentValue = this.myProgressBar.value();
        currentValue += 1;
        this.myProgressBar.setOptions({ animationDuration: 0, value: currentValue });
    }
}
