import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitnessService {
  constructor() { }

  // prepare chart data as an array
  private sampleData = [
    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
    { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
  ];

  // prepare jqxChart settings
  private settings = {
    borderLineWidth: 0,
    title: "Fitness & exercise weekly scorecard",
    description: "Time spent in vigorous exercise by activity",
    enableAnimations: true,
    showLegend: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 30, top: 0, right: 0, bottom: 10 },
    source: this.sampleData,
    categoryAxis:
    {
      text: 'Category Axis',
      textRotationAngle: 0,
      dataField: 'Day',
      showTickMarks: true,
      tickMarksInterval: 1,
      tickMarksColor: '#888888',
      unitInterval: 1,
      showGridLines: false,
      gridLinesInterval: 1,
      gridLinesColor: '#888888',
      axisSize: 'auto'
    },
    colorScheme: 'scheme05',
    seriesGroups:
      [
        {
          type: 'splinearea',
          valueAxis:
          {
            unitInterval: 20,
            minValue: 0,
            maxValue: 100,
            displayValueAxis: false,
            description: 'Goal in minutes',
            axisSize: 'auto',
            tickMarksColor: '#888888'
          },
          series: [
            { dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
          ]
        },
        {
          type: 'stackedcolumn',
          columnsGapPercent: 100,
          seriesGapPercent: 5,
          valueAxis:
          {
            unitInterval: 20,
            minValue: 0,
            maxValue: 100,
            displayValueAxis: true,
            description: 'Time in minutes',
            axisSize: 'auto',
            tickMarksColor: '#888888',
            gridLinesColor: '#777777'
          },
          series: [
            { dataField: 'Running', displayText: 'Running' },
            { dataField: 'Swimming', displayText: 'Swimming' },
            { dataField: 'Cycling', displayText: 'Cycling' }
          ]
        }
      ]
  };

  /**
   * 
   * @param selectorID ID name of the jqxChart container
   */
  public createChart(selectorID: string) {
    let chart = jqwidgets.createInstance('#' + selectorID, 'jqxChart', this.settings);
  };
}
