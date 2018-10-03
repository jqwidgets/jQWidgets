import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-chart-mini',
    templateUrl: './chart-mini.component.html',
    styleUrls: ['./chart-mini.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class ChartMiniComponent {

   knobProgressBarOne: any =
    {
        style: { fill: '#7FD13B' },
        background: { fill: '#eeeeee' },
        size: '2%',
        offset: '70%'
    };

    knobProgressBarTwo: any =
    {
        style: { fill: '#D02841' },
        background: { fill: '#eeeeee' },
        size: '2%',
        offset: '70%'
    };

   mainChartSource: any =
   {
       datatype: 'tab',
       datafields: [
           { name: 'Date' },
           { name: 'Referral' },
           { name: 'SearchPaid' },
           { name: 'SearchNonPaid' }
       ],
       url: './assets/website_analytics.txt'
   };

   mainChartDataAdapter = new jqx.dataAdapter(this.mainChartSource, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.mainChartSource.url + '" : ' + error); } });

   padding: jqwidgets.ChartPadding = { left: 0, top: 10, right: 0, bottom: 0 };

   mainChartxAxis: jqwidgets.ChartXAxis =
   {
       visible: false
   };

   mainChartSeriesGroups: any[] =
   [
       {
           type: 'column',
           valueAxis:
           {
               visible: false,
           },
           toolTipFormatFunction: (value: number): string => {
               return value.toString();
           },
           series: [
               { dataField: 'SearchNonPaid' }
           ]
       }
   ];   
}
