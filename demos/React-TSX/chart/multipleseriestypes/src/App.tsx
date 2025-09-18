import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
  const sampleData = [
    { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
    { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
    { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
    { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
    { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
    { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
    { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
  ];

  const chartProps: IChartProps = {
    title: 'Fitness & exercise weekly scorecard',
    description: 'Time spent in vigorous exercise by activity',
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    titlePadding: { left: 90, top: 0, right: 0, bottom: 10 },
    source: sampleData,
    xAxis: {
      axisSize: 'auto',
      dataField: 'Day',
      gridLines: {
        color: '#888888',
        interval: 1,
        visible: false
      },
      tickMarks: {
        color: '#888888',
        interval: 1,
        visible: true
      },
      unitInterval: 1
    },
    valueAxis: {
      axisSize: 'auto',
      gridLines: { color: '#888888' },
      maxValue: 100,
      minValue: 0,
      tickMarks: { color: '#888888' },
      title: { text: 'Time in minutes' },
      unitInterval: 10,
      visible: true
    },
    seriesGroups: [
      {
        series: [
          { dataField: 'Goal', displayText: 'Personal Goal', opacity: 0.7 }
        ],
        type: 'splinearea'
      },
      {
        columnsGapPercent: 50,
        series: [
          { dataField: 'Running', displayText: 'Running' },
          { dataField: 'Swimming', displayText: 'Swimming' },
          { dataField: 'Cycling', displayText: 'Cycling' }
        ],
        seriesGapPercent: 5,
        type: 'stackedcolumn'
      }
    ]
  };

  return (
    <JqxChart
      style={{ width: '850px', height: '500px' }}
      title={chartProps.title}
      description={chartProps.description}
      showLegend={true}
      enableAnimations={true}
      padding={chartProps.padding}
      titlePadding={chartProps.titlePadding}
      source={chartProps.source}
      xAxis={chartProps.xAxis}
      borderLineColor={'#888888'}
      valueAxis={chartProps.valueAxis}
      seriesGroups={chartProps.seriesGroups}
      colorScheme={'scheme05'}
    />
  );
};

export default App;