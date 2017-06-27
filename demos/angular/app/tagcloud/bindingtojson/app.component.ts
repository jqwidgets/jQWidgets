import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent  {    
    url: string = '../sampledata/beverages.txt';
    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'calories' },
            { name: 'name' }
        ],
        url: this.url
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
}