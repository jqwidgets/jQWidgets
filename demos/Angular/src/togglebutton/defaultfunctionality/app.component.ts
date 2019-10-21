import { Component, ViewChild } from '@angular/core';

import { jqxToggleButtonComponent } from 'jqwidgets-ng/jqxtogglebutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myToggleButton', { static: false }) myToggleButton: jqxToggleButtonComponent;

    myToggleButtonClick(): void {
        setTimeout(_ => {
            let toggled = this.myToggleButton.toggled();

            if (toggled) {
                this.myToggleButton.val('Toggled On');
            }
            else {
                this.myToggleButton.val('Toggled Off');
            }
        });
    };
}
