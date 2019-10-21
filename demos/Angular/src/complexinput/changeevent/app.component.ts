import { Component, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    public complexInputOnChange(event: any): void {
        const args = event.args;

        if (args) {
            let oldValue = args.oldValue;

            if (oldValue === 'JQXLite{options.value}') {
                oldValue = '15 + 7i';
            }

            this.myPanel.append('<strong>' + event.type + '</strong><br />' +
                'value: ' + args.value + ', old value: ' + oldValue +
                ',<br /> real part: ' + args.realPart + ', imaginary part: ' +
                args.imaginaryPart + '<br />');
        }
    }

}
