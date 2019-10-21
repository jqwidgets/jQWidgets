import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
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

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    xAxis: any =
    {
        type: 'date',
        baseUnit: 'day',
        dataField: 'Date',
        valuesOnTicks: true,
        labels: {
            formatFunction: (value: any) => {
                return value.getDate();
            }
        },
        gridLines: { visible: false },
        toolTipFormatFunction: (value: any) => {
            return value.getDate() + '-' + this.months[value.getMonth()] + '-' + value.getFullYear();
        }
    };

    valueAxis: any =
    {
        title: { text: 'Daily visitors' },
        labels: { horizontalAlignment: 'right' }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedarea100',
            series: [
                { dataField: 'SearchNonPaid', displayText: 'Organic Search Traffic' },
                { dataField: 'SearchPaid', displayText: 'Paid Search Traffic' },
                { dataField: 'Referral', displayText: 'Referral Traffic' }
            ]
        }
    ];
}
