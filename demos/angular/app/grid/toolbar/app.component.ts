import { Component, ViewChild } from '@angular/core';

import { jqxGridComponent } from '../../../jqwidgets-ts/angular_jqxgrid'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    myInput: any;
    oldVal: string = '';
    timer: any = setTimeout(_ => { });

    source: any =
    {
        datatype: 'jsonp',
        datafields: [
            { name: 'countryName' },
            { name: 'name' },
            { name: 'population', type: 'float' },
            { name: 'continentCode' },
            { name: 'adminName1' }
        ],
        async: false,
        url: 'http://api.geonames.org/searchJSON',
        data: {
            featureClass: 'P',
            style: 'full',
            maxRows: 20,
            username: 'jqwidgets'
        }
    };

    dataAdapter: any = new jqx.dataAdapter(this.source,
        {
            formatData: (data: any): any => {
                if (this.myInput) {
                    data.name_startsWith = this.myInput.val();
                    return data;
                }

            }
        }
    );

    columns: any[] =
    [
        { text: 'City', datafield: 'name', width: 170 },
        { text: 'Country Name', datafield: 'countryName', width: 200 },
        { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
        { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
    ];

    rendertoolbar = (toolbar: any): void => {
        let container = document.createElement('div');
        container.style.margin = '5px';

        let span = document.createElement('span');
        span.style.cssText = 'float: left; margin-top: 5px; margin-right: 4px;';
        span.innerHTML = 'Search City: ';

        let inputContainer = document.createElement('input');
        inputContainer.id = 'myInput';
        inputContainer.style.cssText = 'float: left';
        
        container.appendChild(span);
        container.appendChild(inputContainer);
        toolbar[0].appendChild(container);

        this.myInput = jqwidgets.createInstance('#myInput', 'jqxInput', { width: 220, height: 23 });

        this.myInput.addEventHandler('keydown', (): void => {
            if (this.myInput.val().length >= 2) {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
                if (this.oldVal !== this.myInput.val()) {
                    this.timer = setTimeout(() => {
                        this.myGrid.updatebounddata();
                    }, 1000);
                    this.oldVal = this.myInput.val();
                }
            }
            else {
                this.myGrid.updatebounddata();
            }
        });
    };
}