import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
  const source: any = React.useMemo(() => ({
    datafields: [
      { name: 'Country' },
      { name: 'GDP' },
      { name: 'DebtPercent' },
      { name: 'Debt' }
    ],
    datatype: 'csv',
    url: 'gdp_dept_2010.txt'
  }), []);

  const chartProps: IChartProps = React.useMemo(() => ({
    description: 'GDP and Debt in 2010',
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    seriesGroups: [
      {
        columnsGapPercent: 50,
        series: [
          {
            dataField: 'GDP',
            displayText: 'GDP per Capita',
            formatFunction: (value: any) => Math.round(value / 1000) + 'K',
            labels: {
              offset: { x: 0, y: -20 },
              verticalAlignment: 'top',
              visible: true
            }
          },
          {
            dataField: 'Debt',
            displayText: 'Debt per Capita',
            formatFunction: (value: any) => Math.round(value / 1000) + 'K',
            labels: {
              offset: { x: 0, y: -20 },
              verticalAlignment: 'top',
              visible: true
            }
          }
        ],
        type: 'column',
        valueAxis: {
          title: { text: 'GDP & Debt per Capita($)' }
        }
      }
    ],
    source: new jqx.dataAdapter(source, {
      async: false,
      autoBind: true,
      loadError: (xhr: any, status: any, error: any) => {
        alert('Error loading "' + source.url + '" : ' + error);
      }
    }),
    title: 'Economic comparison',
    titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
    xAxis: {
      dataField: 'Country',
      gridLines: { visible: true },
      position: 'top'
    }
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
      seriesGroups={chartProps.seriesGroups}
      colorScheme={'scheme02'}
    />
  );
};

export default App;