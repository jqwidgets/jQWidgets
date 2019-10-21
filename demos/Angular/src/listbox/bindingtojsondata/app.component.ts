import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('selectionlog', { static: false }) selectionlog: ElementRef;

    url: string = "./../../../sampledata/customers.txt";
    // prepare the data
    source: any = {
        datatype: "json",
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        id: 'id',
        url: this.url
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    select(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                let labelElement = document.createElement('div');

                valueElement.innerHTML = 'Value: ' + item.value;
                labelElement.innerHTML = 'Label: ' + item.label;

                let selectionLog = this.selectionlog.nativeElement;

                selectionLog.innerHTML = '';

                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };
}