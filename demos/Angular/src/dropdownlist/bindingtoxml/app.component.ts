import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('log', { static: false }) log: ElementRef;

    source: any = {
        datatype: 'xml',
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:CustomerID',
        url: './../../../sampledata/customers.xml'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    listOnSelect(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${item.value}`;

                let labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${item.label}`;

                let selectionLog = this.log.nativeElement;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };
}
