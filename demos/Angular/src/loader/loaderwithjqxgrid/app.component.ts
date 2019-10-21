import { Component, ViewChild } from '@angular/core';

import { jqxLoaderComponent } from 'jqwidgets-ng/jqxloader';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader', { static: false }) jqxLoader: jqxLoaderComponent;

    source =
    {
        datatype: "jsonp",
        datafields: [
            { name: 'countryName', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'population', type: 'float' },
            { name: 'continentCode', type: 'string' }
        ],
        url: "http://api.geonames.org/searchJSON"
    };

    dataAdapter = new jqx.dataAdapter(this.source, {
        downloadComplete: function (data, status, xhr) { },
        loadComplete: (): void => {
            this.jqxLoader.close();
        },
        loadError: (xhr, status, error): void => { console.log(xhr, status, error); },
        formatData: (data): any => {
            Object.assign(data, {
                featureClass: "P",
                style: "full",
                maxRows: 50,
                username: "jqwidgets"
            });

            return data;
        }
    });

    columns: any[] = [
        { text: 'Country Name', datafield: 'countryName', width: 200 },
        { text: 'City', datafield: 'name', width: 170 },
        { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
        { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
    ];
}