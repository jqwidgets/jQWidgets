import * as React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const colorsSchemesList: IDropDownListProps['source'] = [
  'scheme01',
  'scheme02',
  'scheme03',
  'scheme04',
  'scheme05',
  'scheme06',
  'scheme07',
  'scheme08'
];

const seriesList: IDropDownListProps['source'] = [
  'line',
  'area',
  'stepline',
  'steparea',
  'splinearea',
  'spline',
  'column',
  'scatter',
  'stackedcolumn',
  'stackedsplinearea',
  'stackedspline'
];

const generateInitialChartData = (): any[] => {
  const max = 800;
  const data: any[] = [];
  const timestamp = new Date();
  for (let i = 0; i < 60; i++) {
    timestamp.setMilliseconds(0);
    timestamp.setSeconds(timestamp.getSeconds() - 1);
    data.push({
      timestamp: new Date(timestamp.valueOf()),
      value: Math.max(100, (Math.random() * 1000) % max)
    });
  }
  return data.reverse();
};

const initialSeriesGroups: IChartProps['seriesGroups'] = [
  {
    alignEndPointsWithIntervals: true,
    columnsGapPercent: 50,
    series: [
      {
        dataField: 'value',
        displayText: 'value',
        opacity: 1,
        lineWidth: 2,
        symbolType: 'circle',
        fillColorSymbolSelected: 'white',
        symbolSize: 4
      }
    ],
    type: 'line',
    valueAxis: {
      maxValue: 1000,
      minValue: 0,
      title: { text: 'Index Value' }
    }
  }
];

const initialXAxis: IChartProps['xAxis'] = {
  baseUnit: 'second',
  dataField: 'timestamp',
  formatFunction: (value: any) => {
    return jqx.dataFormat.formatdate(value, 'hh:mm:ss', 'en-us');
  },
  gridLines: { step: 2 },
  labels: { angle: -45, offset: { x: -17, y: 0 } },
  type: 'date',
  unitInterval: 5,
  valuesOnTicks: true
};

const initialValueAxis: IChartProps['valueAxis'] = {
  labels: { horizontalAlignment: 'right' },
  maxValue: 1000,
  minValue: 0,
  title: { text: 'Index Value' }
};

const App = () => {
  const myChart = useRef<JqxChart>(null);

  const [source, setSource] = useState<any[]>(generateInitialChartData());
  const [colorScheme, setColorScheme] = useState<string>('scheme03');
  const [schemeSelectedIndex, setSchemeSelectedIndex] = useState<number>(2);
  const [seriesTypeSelectedIndex, setSeriesTypeSelectedIndex] = useState<number>(0);
  const [seriesGroups, setSeriesGroups] = useState<IChartProps['seriesGroups']>(initialSeriesGroups);

  const colorsOnChange = useCallback((event: any): void => {
    const value = event.args.item.value;
    const index = event.args.index;
    setColorScheme(value);
    setSchemeSelectedIndex(index);
    setTimeout(() => {
      myChart.current && myChart.current.update();
    });
  }, []);

  const seriesOnChange = useCallback((event: any): void => {
    const args = event.args;
    if (args) {
      const index = args.index;
      const value = args.item.value;
      setSeriesGroups(prev => {
        if (!prev) return prev;
        const newGroups = [...prev];
        if (newGroups[0]) {
          (newGroups[0] as any).type = value;
        }
        return newGroups;
      });
      setSeriesTypeSelectedIndex(index);
      setTimeout(() => {
        myChart.current && myChart.current.update();
      });
    }
  }, []);

  useEffect(() => {
    const max = 800;
    const interval = setInterval(() => {
      setSource(prevSource => {
        const newSource = [...prevSource];
        if (newSource.length >= 60) {
          newSource.splice(0, 1);
          const timestamp = new Date();
          timestamp.setSeconds(timestamp.getSeconds());
          timestamp.setMilliseconds(0);
          newSource.push({
            timestamp,
            value: Math.max(100, (Math.random() * 1000) % max)
          });
        }
        return newSource;
      });
      setTimeout(() => {
        myChart.current && myChart.current.update();
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <JqxChart
        ref={myChart}
        style={{ width: '850px', height: '500px' }}
        title="Live updates demo"
        description=""
        enableAxisTextAnimation={true}
        showLegend={true}
        enableAnimations={false}
        animationDuration={1000}
        padding={{ left: 5, top: 5, right: 5, bottom: 5 }}
        titlePadding={{ left: 0, top: 0, right: 0, bottom: 10 }}
        source={source}
        xAxis={initialXAxis}
        valueAxis={initialValueAxis}
        seriesGroups={seriesGroups}
        colorScheme={colorScheme}
      />
      <table style={{ width: '680px' }}>
        <tbody>
          <tr>
            <td style={{ paddingLeft: '50px' }}>
              <p>Select the series type:</p>
              <JqxDropDownList
                theme="material-purple"
                onChange={seriesOnChange}
                width={200}
                height={25}
                selectedIndex={seriesTypeSelectedIndex}
                dropDownHeight={100}
                source={seriesList}
              />
            </td>
            <td>
              <p>Select color scheme:</p>
              <JqxDropDownList
                theme="material-purple"
                onChange={colorsOnChange}
                width={200}
                height={25}
                selectedIndex={schemeSelectedIndex}
                dropDownHeight={100}
                source={colorsSchemesList}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;