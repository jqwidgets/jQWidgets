import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    data: any[];

    ngOnInit(): void {
        this.data = this.generateData();
    }

    padding: any = { left: 10, top: 5, right: 10, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
	
    xAxis: any =
    {
        type: 'basic',
        dataField: 'year',
        displayText: 'Year',
        labels: { angle: 0 }
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    valueAxis: any =
    {
        title: { text: 'Population<br>' },
        unitInterval: 1000000,
        labels:
        {
            formatFunction: (value: any): string => {
                return value / 1000000 + ' M';
            }
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'waterfall',
            series:
            [
                {
                    dataField: 'population',
                    summary: 'summary',
                    displayText: 'Population change',
                    colorFunction: (value: any, itemIndex: any, serie: any, group: any): string => {
                        if (itemIndex === (this.data.length - 1)) {
                            return '#3F3A3B'; // total
                        }
                        return (value < 0) ? '#D30E2F' /* red */ : '#24A037' /*green*/;
                    }
                }
            ]
        }
    ];

    generateData(): any[] {
        let data: any[] = [
            { year: 2003, population: 490815046 },
            { year: 2004, population: 492709300 },
            { year: 2005, population: 494774599 },
            { year: 2006, population: 496633373 },
            { year: 2007, population: 498408547 },
            { year: 2008, population: 500418320 },
            { year: 2009, population: 502186144 },
            { year: 2010, population: 503379305 },
            { year: 2011, population: 504961522 },
            { year: 2012, population: 504582506 },
            { year: 2013, population: 505674965 },
            { year: 2014, population: 507416607 },
            { year: 'Total', summary: true }
        ];

        for (var i = data.length - 2; i > 0; i--) {
            data[i].population -= data[i - 1].population;
        }

        return data;
    }
}