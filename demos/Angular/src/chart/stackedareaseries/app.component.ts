import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'tab',
        datafields: [
            { name: 'Date' },
            { name: 'Referral' },
            { name: 'SearchPaid' },
            { name: 'SearchNonPaid' }
        ],
        url: './../../../sampledata/website_analytics.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'day',
        valuesOnTicks: true,
        labels:
        {
            formatFunction: (value: any): string => {
                return value.getDate();
            }
        },
        toolTipFormatFunction: (value: any): string => {
            let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
        }
    };

    valueAxis: any =
    {
        unitInterval: 500,
        minValue: 0,
        maxValue: 4500,
        title: { text: 'Daily visitors by source<br>' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedarea',
            series: [
                { dataField: 'SearchNonPaid', displayText: 'Desktop Search' },
                { dataField: 'SearchPaid', displayText: 'Mobile Search' },
                { dataField: 'Referral', displayText: 'Social media' }
            ]
        }
    ];
}