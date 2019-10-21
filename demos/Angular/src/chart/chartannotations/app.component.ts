import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
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

    dataAdapter = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Country',
        flip: false,
        gridLines: { visible: false }
    };

    fnLabelsClass: any = (value: any, itemIndex: any, serie: any, group: any) => {
        if (value > 100)
            return 'redLabel';
        return 'greenLabel';
    };

    fnLabelsBorderColor: any = (value: any, itemIndex: any, serie: any, group: any) => {
        if (value > 100)
            return '#FF0000';
        return '#89A54E';
    };

    fnFormatLabel: any = (value: any, itemIndex: any, serie: any, group: any) => {
        return value;
    };

    seriesGroups: any[] =
    [
        {
            type: 'column',
            columnsGapPercent: 50,
            toolTipFormatSettings: { sufix: ' USD', thousandsSeparator: ',' },
            valueAxis:
            {
                title: {
                    text: 'GDP & Debt per Capita (USD)<br>'
                },
                gridLines: { visible: false }
            },
            series:
            [
                { dataField: 'GDP', displayText: 'GDP per Capita' },
                { dataField: 'Debt', displayText: 'Debt per Capita' }
            ]
        },
        {
            type: 'line',
            valueAxis:
            {
                unitInterval: 10,
                visible: true,
                position: 'right',
                title: { text: 'Debt (% of GDP)' },
                gridLines: { visible: false },
                labels: {
                    horizontalAlignment: 'left',
                    formatSettings: { sufix: '%' }
                }
            },
            series:
            [
                {
                    linesUnselectMode: 'click',
                    dataField: 'DebtPercent',
                    displayText: 'Debt (% of GDP)',
                    labels:
                    {
                        visible: true,
                        'class': this.fnLabelsClass,
                        backgroundColor: 'white',
                        padding: { left: 5, right: 5, top: 1, bottom: 1 },
                        borderColor: this.fnLabelsBorderColor,
                        backgroundOpacity: 0.7,
                        borderOpacity: 0.7
                    }
                }
            ],
            bands: [
                {
                    minValue: 90, maxValue: 90, fillColor: 'red', lineWidth: 2, dashStyle: '2,2'
                }
            ],
            annotations: [
                {
                    type: 'rect',
                    yValue: 90,
                    xValue: 6,
                    offset: { x: -45, y: -25 },
                    width: 90,
                    height: 20,
                    fillColor: '#EFEFEF',
                    lineColor: 'red',
                    text: {
                        value: 'Debt threshold',
                        offset: {
                            x: 2,
                            y: 2
                        },
                        'class': 'redLabel',
                        angle: 0
                    }
                }
            ],
        }
    ];
}
