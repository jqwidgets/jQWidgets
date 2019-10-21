import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('selectionlog', { static: false }) selectionlog: ElementRef;

    url: string = "./../../../sampledata/customers.xml";
    // prepare the data
    source: any = {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: this.url
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false });

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