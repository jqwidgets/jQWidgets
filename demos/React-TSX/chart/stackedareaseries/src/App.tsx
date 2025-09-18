import * as React from 'react';
import { useMemo } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
  const sourceConfig = useMemo(() => ({
    datafields: [
      { name: 'Date' },
      { name: 'Referral' },
      { name: 'SearchPaid' },
      { name: 'SearchNonPaid' }
    ],
    datatype: 'tab',
    url: 'website_analytics.txt'
  }), []);

  const source = useMemo(() =>
    new jqx.dataAdapter(sourceConfig, {
      async: false,
      autoBind: true,
      loadError: (xhr: any, status: any, error: any) => {
        alert('Error loading "' + sourceConfig.url + '" : ' + error);
      }
    }), [sourceConfig]
  );

  const chartProps: IChartProps = useMemo(() => ({
    title: 'Website traffic analysis',
    description: 'Unique daily visitors (stacked)',
    padding: { left: 10, top: 5, right: 10, bottom: 5 },
    titlePadding: { left: 10, top: 0, right: 0, bottom: 10 },
    source,
    xAxis: {
      baseUnit: 'day',
      dataField: 'Date',
      labels: {
        formatFunction: (value: any): string => {
          return value.getDate();
        }
      },
      toolTipFormatFunction: (value: any): string => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return value.getDate() + '-' + months[value.getMonth()] + '-' + value.getFullYear();
      },
      type: 'date',
      valuesOnTicks: true
    },
    valueAxis: {
      maxValue: 4500,
      minValue: 0,
      title: { text: 'Daily visitors by source<br>' },
      unitInterval: 500
    },
    seriesGroups: [
      {
        series: [
          { dataField: 'SearchNonPaid', displayText: 'Desktop Search' },
          { dataField: 'SearchPaid', displayText: 'Mobile Search' },
          { dataField: 'Referral', displayText: 'Social media' }
        ],
        type: 'stackedarea'
      }
    ]
  }), [source]);

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
      valueAxis={chartProps.valueAxis}
      seriesGroups={chartProps.seriesGroups}
      colorScheme={'scheme03'}
    />
  );
};

export default App;