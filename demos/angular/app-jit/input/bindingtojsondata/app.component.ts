import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxInputComponent } from '../../../jqwidgets-ts/angular_jqxinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myInput') myInput: jqxInputComponent;
    @ViewChild('selectionLog') selectionLog: ElementRef;

    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        url: '../sampledata/customers.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    myInputOnSelect(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;

                let labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;

                let selectionLog = this.selectionLog.nativeElement;
                selectionLog.innerHTML = '';

                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);

                setTimeout(_ => this.myInput.val(item.label));
            }
        }
    }
}