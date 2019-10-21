import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent {
    @ViewChild('myChart', { static: false }) myChart: jqxChartComponent;
    @ViewChild('eventsText', { static: false }) eventsText: ElementRef;

    months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            datatype: 'tsv',
            datafields: [
                { name: 'Date' },
                { name: 'SPOpen' },
                { name: 'SPHigh' },
                { name: 'SPLow' },
                { name: 'SPClose' },
                { name: 'SPVolume' },
                { name: 'SPAdjClose' }
            ],
            url: './../../../sampledata/nasdaq_vs_sp500_detailed.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source, { async: false, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });

    padding: any = { left: 20, top: 5, right: 20, bottom: 5 };

    xAxis: any =
        {
            dataField: 'Date',
            type: 'date',
            valuesOnTicks: true,
            minValue: new Date(2014, 1, 1),
            maxValue: new Date(2014, 10, 1),
            labels:
            {
                formatFunction: (value: any) => {
                    return value.getDate() + '-' + this.months[value.getMonth()] + '<br>' + value.getFullYear().toString();
                }
            },
            gridLines: { visible: false },
            rangeSelector: {
                size: 100,
                padding: { top: 10, bottom: 0 },
                backgroundColor: 'white',
                dataField: 'SPClose',
                baseUnit: 'month',
                showGridLines: false,
                formatFunction: (value: any) => {
                    return this.months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
                }
            }
        };

    toolTipCustomFormatFn = (value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any) => {
        let dataItem = this.dataAdapter.records[itemIndex];
        let volume = dataItem.SPVolume;
        return '<DIV style="text-align:left"><b>Date: ' +
            categoryValue.getDate() + '-' + this.months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
            '</b><br />Index value: ' + value +
            '</b><br />Daily volume: ' + volume +
            '</DIV>';
    };

    seriesGroups: any[] =
        [
            {
                type: 'line',
                linesUnselectMode: 'click',
                toolTipFormatFunction: this.toolTipCustomFormatFn,
                valueAxis:
                {
                    title: { text: 'S&P 500<br>' },
                    gridLines: { visible: false },
                },
                series: [
                    {
                        dataField: 'SPClose',
                        displayText: 'S&P Index Value',
                        lineWidth: 1
                    }
                ]
            },
            {
                type: 'area',
                toolTipFormatFunction: this.toolTipCustomFormatFn,
                linesUnselectMode: 'click',
                valueAxis:
                {
                    position: 'right',
                    title: { text: '<br>Daily Volume' },
                    gridLines: { visible: false },
                    labels:
                    {
                        formatFunction: (value) => {
                            return value / 1000000 + 'M';
                        }
                    }
                },
                series: [
                    {
                        dataField: 'SPVolume',
                        displayText: 'S&P Index Volume',
                        lineWidth: 1,
                        opacity: 0.2
                    }
                ]
            }
        ];

    dumpEventInfo(event: any) {
        if (event.args && this.myChart) {
            let args = event.args;
            if (event.type.indexOf('refresh') != -1) {
                if (this.myChart.getInstance() != args.instance)
                    return;
            }
            let date = new Date();
            let line = 'Time: ' + (date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()) + ', event: ' + event.type;
            if (args.elementIndex)
                line += ', element index: ' + args.elementIndex;
            if (args.elementValue) {
                line += ', value: ' + args.elementValue;
            }
            if (event.type == 'toggle') {
                line += ', series group index: ' + this.myChart.seriesGroups().indexOf(args.seriesGroup);
                line += ', visible: ' + args.state;
            }
            if (event.type.indexOf('rangeSelection') != -1) {
                line += ', minValue: ' + args.minValue.getFullYear() + '-' + (args.minValue.getMonth() + 1) + '-' + args.minValue.getDate();
                line += ', maxValue: ' + args.maxValue.getFullYear() + '-' + (args.maxValue.getMonth() + 1) + '-' + args.maxValue.getDate();
            }
            let textArea = this.eventsText.nativeElement;

            textArea.innerHTML = line + '<br />' + textArea.innerHTML;
        }
    }
}
