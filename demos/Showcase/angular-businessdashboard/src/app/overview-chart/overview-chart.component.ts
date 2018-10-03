import { Component, OnChanges, ViewChild, Input } from '@angular/core';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';

@Component({
  selector: 'app-overview-chart',
  templateUrl: './overview-chart.component.html',
  styleUrls: ['./overview-chart.component.css']
})
export class OverviewChartComponent implements OnChanges {

  @ViewChild('overviewChart') overviewChart: jqxChartComponent;
  @Input() overview: string = 'chartdataclicks';

  constructor() { }

  ngOnChanges(changes) {
    if (!changes.overview.firstChange) {
      this.source.url = `../../assets/sample-data/${this.overview}.json`;
      this.dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });
      this.overviewChart.refresh();
    }
  }

  padding: jqwidgets.ChartPadding =
    {
      left: 10,
      top: 10,
      right: 15,
      bottom: 10
    };

  titlePadding: any =
    {
      left: 90,
      top: 0,
      right: 0,
      bottom: 10
    };

  toolTipCustomFormatFn = function (value, itemIndex, serie, group, categoryValue) {

    return '<div style="text-align:left"><b><i>' + categoryValue + ' : ' + value + '</i></b></div>';

  };

  xAxis: jqwidgets.ChartXAxis =
    {
      dataField: 'day',
      unitInterval: 1,
      tickMarks: { visible: true, interval: 1 },
      gridLines: { visible: true, interval: 1 },
      valuesOnTicks: false,
      padding: { left: 0, right: 0, top: 0, bottom: 10 },
      
    };

  valueAxis: jqwidgets.ChartValueAxis =
    {
      unitInterval: 10,
      minValue: 0,
      maxValue: 50,
      title: { text: '' },
      labels: { horizontalAlignment: 'right' }
    };

  source: any = {
    datafields: [
      { name: 'day' },
      { name: 'spline1' },
      { name: 'spline2' }
    ],
    url: `../../assets/sample-data/${this.overview}.json`,
    datatype: 'json'
  };

  dataAdapter = new jqx.dataAdapter(this.source, { async: true, autoBind: true, loadError: (xhr: any, status: any, error: any) => { alert('Error loading "' + this.source.url + '" : ' + error); } });


  seriesGroups: any =
    [
      {
        type: 'spline',
        series:
          [
            {
              dataField: 'spline1',
              symbolType: 'square',
              labels:
                {
                  visible: true,
                  backgroundColor: '#FEFEFE',
                  backgroundOpacity: 0.2,
                  borderColor: '#7FC4EF',
                  borderOpacity: 0.7,
                  padding: { left: 5, right: 5, top: 0, bottom: 0 }
                }
            },
            {
              dataField: 'spline2',
              symbolType: 'square',
              labels:
                {
                  visible: true,
                  backgroundColor: '#FEFEFE',
                  backgroundOpacity: 0.2,
                  borderColor: '#7FC4EF',
                  borderOpacity: 0.7,
                  padding: { left: 5, right: 5, top: 0, bottom: 0 }
                }
            },

          ],
        toolTipFormatFunction: this.toolTipCustomFormatFn
      }
    ];
}
