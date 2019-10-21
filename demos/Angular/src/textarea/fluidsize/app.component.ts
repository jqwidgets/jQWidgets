import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {    
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
}