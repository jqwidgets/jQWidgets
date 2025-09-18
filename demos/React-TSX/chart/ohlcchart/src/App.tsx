import * as React from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const source: any = React.useMemo(() => ({
    datafields: [
      { name: 'Date' },
      { name: 'SPOpen' },
      { name: 'SPHigh' },
      { name: 'SPLow' },
      { name: 'SPClose' },
      { name: 'SPVolume' },
      { name: 'SPAdjClose' },
      { name: 'NQOpen' },
      { name: 'NQHigh' },
      { name: 'NQLow' },
      { name: 'NQClose' },
      { name: 'NQVolume' },
      { name: 'NQAdjClose' }
    ],
    datatype: 'tsv',
    url: 'nasdaq_vs_sp500_detailed.txt'
  }), []);

  const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source, {
    async: false,
    autoBind: true,
    loadError: (xhr: any, status: any, error: any) => {
      alert('Error loading "' + source.url + '" : ' + error);
    }
  }), [source]);

  const toolTipCustomFormatFn = React.useCallback((value: any, itemIndex: any, serie: any, group: any, categoryValue: any, categoryAxis: any): string => {
    const dataItem = dataAdapter.records[itemIndex];
    const volume = serie === 0 ? dataItem.SPVolume : dataItem.NQVolume;
    return '<DIV style="text-align:left"><b>Date: ' +
      categoryValue.getDate() + '-' + months[categoryValue.getMonth()] + '-' + categoryValue.getFullYear() +
      '</b><br />Open price: $' + value.open +
      '</b><br />Close price: $' + value.close +
      '</b><br />Low price: $' + value.low +
      '</b><br />High price: $' + value.high +
      '</b><br />Daily volume: ' + volume +
      '</DIV>';
  }, [dataAdapter, months]);

  const chartProps: IChartProps = React.useMemo(() => ({
    description: '(June 2010 - November 2019)',
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    seriesGroups: [
      {
        series: [
          {
            dataFieldClose: 'SPClose',
            dataFieldHigh: 'SPHigh',
            dataFieldLow: 'SPLow',
            dataFieldOpen: 'SPOpen',
            displayText: 'S&P 500',
            displayTextClose: 'S&P Close price',
            displayTextHigh: 'S&P High price',
            displayTextLow: 'S&P Low price',
            displayTextOpen: 'S&P Open price',
            lineWidth: 1
          }
        ],
        toolTipFormatFunction: toolTipCustomFormatFn,
        type: 'ohlc',
        valueAxis: {
          title: {
            text: 'S&P 500<br>'
          }
        }
      },
      {
        series: [
          {
            dataField: 'NQClose',
            dataFieldClose: 'NQClose',
            dataFieldHigh: 'NQHigh',
            dataFieldLow: 'NQLow',
            dataFieldOpen: 'NQOpen',
            displayText: 'NASDAQ',
            displayTextClose: 'Nasdaq Close price',
            displayTextHigh: 'Nasdaq High price',
            displayTextLow: 'Nasdaq Low price',
            displayTextOpen: 'Nasdaq Open price',
            lineWidth: 1
          }
        ],
        toolTipFormatFunction: toolTipCustomFormatFn,
        type: 'line',
        valueAxis: {
          gridLines: { visible: false },
          position: 'right',
          title: { text: '<br>NASDAQ' }
        }
      }
    ],
    source: dataAdapter,
    title: 'NASDAQ and S&P 500 - OHLC Example',
    xAxis: {
      dataField: 'Date',
      labels: {
        formatFunction: (value: any) => {
          return value.getDate() + '-' + months[value.getMonth()] + '<br>' + value.getFullYear().toString();
        }
      },
      maxValue: new Date(2014, 10, 1),
      minValue: new Date(2014, 8, 20),
      rangeSelector: {
        backgroundColor: 'white',
        baseUnit: 'month',
        dataField: 'SPClose',
        gridLines: { visible: false },
        labels: {
          formatFunction: (value: any) => {
            return months[value.getMonth()] + '\'' + value.getFullYear().toString().substring(2);
          }
        },
        padding: { left: 25, right: 10, top: 10, bottom: 10 },
        serieType: 'area'
      },
      type: 'date',
      valuesOnTicks: true
    }
  }), [toolTipCustomFormatFn, dataAdapter, months]);

  return (
    <JqxChart
      style={{ width: '850px', height: '500px' }}
      title={chartProps.title}
      description={chartProps.description}
      enableCrosshairs={true}
      enableAnimations={true}
      padding={chartProps.padding}
      source={chartProps.source}
      xAxis={chartProps.xAxis}
      animationDuration={1500}
      seriesGroups={chartProps.seriesGroups}
      colorScheme={'scheme01'}
    />
  );
};

export default App;