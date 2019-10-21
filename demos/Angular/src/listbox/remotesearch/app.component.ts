import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('searchField', { static: false }) searchField: ElementRef;

    url: string = "http://api.geonames.org/searchJSON";
    // prepare the data
    source: any = {
        datatype: "jsonp",
        datafields: [
            { name: 'countryName' },
            { name: 'name' },
            { name: 'population', type: 'float' },
            { name: 'continentCode' },
            { name: 'adminName1' }
        ],
        url: this.url,
        data: {
            featureClass: "P",
            style: "full",
            maxRows: 50,
            username: "jqwidgets"
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, {
            formatData: (data: any): any => {
                data.name_startsWith = this.searchField.nativeElement.value;
                return data;
            }
        }
    );

    renderer: any = (index, label, value) => {
        let item = this.dataAdapter.records[index];
        if (item != null) {
            let label = item.name + "(" + item.countryName + ", " + item.adminName1 + ")";
            return label;
        }

        return "";
    };

    me: any = { timer: null };

    keyup(event: any): void {
        if (this.me.timer) {
            clearTimeout(this.me.timer);
        }

        this.me.timer = setTimeout(_ => {
            this.dataAdapter.dataBind();
        }, 300);        
    };
}