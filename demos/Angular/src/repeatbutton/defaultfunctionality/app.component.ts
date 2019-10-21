import { Component, ViewChild } from '@angular/core';

import { jqxRepeatButtonComponent } from 'jqwidgets-ng/jqxrepeatbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myProgressBar', { static: false }) myProgressBar: jqxRepeatButtonComponent
  
    repeatOnClick(): void {
        let currentValue = this.myProgressBar.value();
        currentValue += 1;
        this.myProgressBar.setOptions({ animationDuration: 0, value: currentValue });
    }
}
