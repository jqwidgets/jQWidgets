import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
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

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any  = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        position: 'top',
        dataField: 'Country',
        gridLines: { visible: true }
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            valueAxis:
            {
                title: { text: 'GDP & Debt per Capita($)' }
            },
            series: [
                {
                    dataField: 'GDP',
                    displayText: 'GDP per Capita',
                    labels: {
                        visible: true,
                        verticalAlignment: 'top',
                        offset: { x: 0, y: -20 }
                    },
                    formatFunction: (value: any) => {
                        return Math.round(value / 1000) + 'K';
                    }
                },
                {
                    dataField: 'Debt',
                    displayText: 'Debt per Capita',
                    labels: {
                        visible: true,
                        verticalAlignment: 'top',
                        offset: { x: 0, y: -20 }
                    },
                    formatFunction: (value: any) => {
                        return Math.round(value / 1000) + 'K';
                    }
                }
            ]
        }
    ];
}
