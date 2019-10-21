import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 50, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        dataField: 'Date',
        type: 'date',
        baseUnit: 'day',
        valuesOnTicks: false,
        labels:
        {
            formatFunction: (value: any): string => {
                return value.getDate();
            }
        },
        toolTipFormatFunction: (value: any): string => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        }
    };

    valueAxis: any =
    {
        unitInterval: 500,
        minValue: 0,
        maxValue: 4500,
        labels: { horizontalAlignment: 'right' },
        title: { text: 'Daily Visits<br>' }
    };

    seriesGroups: any =
    [
        {
            type: 'stackedline',
            series: [
                { dataField: 'Referral', displayText: 'Referral Traffic' },
                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
            ]
        }
    ];
}