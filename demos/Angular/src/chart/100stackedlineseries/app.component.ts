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

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    padding: any = { left: 5, top: 5, right: 15, bottom: 5 };

    titlePadding: any = { left: 10, top: 0, right: 0, bottom: 10 };

    xAxis: any =
    {
        type: 'date',
        baseUnit: 'day',
        textRotationAngle: 0,
        dataField: 'Date',
        labels:
        {
            formatFunction: (value: any) => {
                return value.getDate();
            }
        },
        toolTipFormatFunction: (value: any) => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        },
        valuesOnTicks: false,
        gridLines: { interval: 31 }
    };

    valueAxis: any =
    {
        title: { text: 'Daily Visits<br>' },
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedline100',
            series: [
                { dataField: 'Referral', displayText: 'Referral Traffic' },
                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' }
            ]
        }
    ];
}
