import { Component } from '@angular/core';  @Component({     selector: 'app-root',     templateUrl: './app.component.html'
 })  export class AppComponent {
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

	     source: any =     {         dataType: 'jsonp',
        dataFields: [
            { name: 'countryName', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'population', type: 'float' },
            { name: 'continentCode', type: 'string' }
        ],
        url: 'http://api.geonames.org/searchJSON'     };      dataAdapter: any = new jqx.dataAdapter(this.source,
        {
            formatData: function (data: any): any {
                data.featureClass = 'P';
                data.style = 'full';
                data.username = 'jqwidgets';
                data.maxRows = 50;

                return data;
            }
        }
    );      columns: any[] =     [         { text: 'Country Name', dataField: 'countryName', width: 200 },
        { text: 'City', dataField: 'name', width: 250 },
        { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
        { text: 'Continent Code', dataField: 'continentCode' }     ];
 }