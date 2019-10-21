import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
	@ViewChild('selectionlog', { static: false }) selectionlog: ElementRef;
	
    source: any =
    {
        datatype: "jsonp",
        datafields: [
            { name: 'countryName' },
            { name: 'name' },
            { name: 'population', type: 'float' },
            { name: 'continentCode' }
        ],
        url: "http://api.geonames.org/searchJSON",
        data: {
            featureClass: "P",
            style: "full",
            maxRows: 50,
            username: "jqwidgets"
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    myComboBoxOnSelect(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                let labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                let selectionLog = this.selectionlog.nativeElement;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };

}
