import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('selectionlog', { static: false }) selectionlog: ElementRef;
    
    url: string = './../../../sampledata/customers.txt';

    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        url: this.url
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    select(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                this.selectionlog.nativeElement.innerHTML = '<div>Value: ' + item.value + '</div><div>Label: ' + item.label + '</div>';
            }
        }
    };
}