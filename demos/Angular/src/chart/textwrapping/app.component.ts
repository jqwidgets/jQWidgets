import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'csv',
        datafields: [
            { name: 'Country' },
            { name: 'GDP' },
            { name: 'DebtPercent' },
            { name: 'Debt' }
        ],
        url: './../../../sampledata/gdp_dept_2010.txt'
    };
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    legendFormatFunction = (value: string): string => {
        if (value == 'Debt per Capita')
            return 'Debt per<br>Capita';
        if (value == 'GDP per Capita')
            return 'GDP per<br>Capita';
        if (value == 'Debt (% of GDP)')
            return 'Debt<br>(% of GDP)';
        return value;
    };

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any= { left: 90, top: 0, right: 0, bottom: 0 };

    xAxis: any =
    {
        dataField: 'Country',
        title: { verticalAlignment: 'center' },
        formatFunction: (value: any, dataIndex: any): string => {
            if (value == 'USA')
                return 'United<br>States';
            return value;
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            valueAxis:
            {
                unitInterval: 5000,
                title: { text: 'GDP & Debt per Capita($)' }
            },
            series: [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' }
            ],
            legendFormatFunction: this.legendFormatFunction,
            verticalTextAlignment: 'center'
        },
        {
            type: 'line',
            valueAxis:
            {
                unitInterval: 10,
                visible: false,
                title: { text: 'Debt (% of GDP)' }
            },
            legendFormatFunction: this.legendFormatFunction,
            verticalTextAlignment: 'center',
            series: [
                { dataField: 'DebtPercent', displayText: 'Debt (% of GDP)' }
            ]
        }
    ];
}