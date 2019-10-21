import { Component, ViewChild } from '@angular/core';

import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    onOpen(event: any): void {
        this.myPanel.append('<strong>' + event.type + '</strong><br />');
    };

    onClose(event: any): void {
        this.myPanel.append('<strong>' + event.type + '</strong><br />');
    };

    onChange(event: any): void {
        let args = event.args;
        let newValue = args.value;
        let oldValue = args.oldValue;
        let radix = args.radix;
        this.myPanel.append('<strong>' + event.type + '</strong><br />' +
            'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />');
    };

    onRadixChange(event: any): void {
        let args = event.args;
        let newRadix = args.radix;
        let oldRadix = args.oldRadix;
        let newValue = args.value;
        let oldValue = args.oldValue;
        this.myPanel.append('<strong>' + event.type + '</strong><br />' +
            'radix: ' + newRadix + ', old radix: ' + oldRadix +
            '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />');
    };
}