import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';

const App = () => {
  const data: any[] = [
    12, 3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 12,
    3, 16, 12, 24, 15, 17, 9, 31, 25, 15, 5, 8, 19, 23, 15, 31, 26, 11, 19, 5, 1, 8, 18, 5, 12, 11,
  ];

  const [title] = useState('Chart unit interval and steps example');
  const [description] = useState('');
  const [padding] = useState({ left: 10, top: 5, right: 10, bottom: 5 });
  const [titlePadding] = useState({ left: 90, top: 0, right: 0, bottom: 10 });
  const [seriesGroups] = useState([
    {
      series: [{ displayText: 'value', opacity: 0.7 }],
      type: 'line',
    },
  ]);
  const [source] = useState(data);

  const [xAxis, setXAxis] = useState({
    gridLines: { step: 1 },
    labels: { step: 2 },
    tickMarks: { step: 1 },
    unitInterval: 1,
  });

  const [valueAxis, setValueAxis] = useState({
    gridLines: { step: 1 },
    labels: { step: 1 },
    minValue: 0,
    tickMarks: { step: 1 },
    title: { text: 'Value<br>' },
    unitInterval: 5,
  });

  const myChart = useRef<JqxChart>(null);

  const refreshChart = useCallback(() => {
    if (myChart.current) {
      myChart.current.refresh();
    }
  }, []);

  const inputxAxisLabelsStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setXAxis(prev => {
        const updated = {
          ...prev,
          labels: {
            ...prev.labels,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputxAxisGridLinesStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setXAxis(prev => {
        const updated = {
          ...prev,
          gridLines: {
            ...prev.gridLines,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputxAxisTickMarksStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setXAxis(prev => {
        const updated = {
          ...prev,
          tickMarks: {
            ...prev.tickMarks,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputxAxisUnitIntervalOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setXAxis(prev => {
        const updated = {
          ...prev,
          unitInterval: value,
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputvalueAxisLabelsStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setValueAxis(prev => {
        const updated = {
          ...prev,
          labels: {
            ...prev.labels,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputvalueAxisGridLinesStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setValueAxis(prev => {
        const updated = {
          ...prev,
          gridLines: {
            ...prev.gridLines,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputvalueAxisTickMarksStepOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setValueAxis(prev => {
        const updated = {
          ...prev,
          tickMarks: {
            ...prev.tickMarks,
            step: value,
          },
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const inputvalueAxisUnitIntervalOnValueChange = useCallback(
    (event: any) => {
      const value = parseInt(event.args.value, 10);
      setValueAxis(prev => {
        const updated = {
          ...prev,
          unitInterval: value,
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const btnValuesBetweenTicksOnChange = useCallback(
    (event: any) => {
      setXAxis(prev => {
        const updated = {
          ...prev,
          valuesOnTicks: !event.args.checked,
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  const btnvalueAxisValuesBetweenTicksOnChange = useCallback(
    (event: any) => {
      setValueAxis(prev => {
        const updated = {
          ...prev,
          valuesOnTicks: !event.args.checked,
        };
        setTimeout(refreshChart, 0);
        return updated;
      });
    },
    [refreshChart]
  );

  return (
    <div>
      <JqxChart
        ref={myChart}
        style={{ width: '850px', height: '500px' }}
        title={title}
        description={description}
        showLegend={true}
        enableAnimations={false}
        padding={padding}
        titlePadding={titlePadding}
        source={source}
        xAxis={xAxis}
        enableCrosshairs={false}
        valueAxis={valueAxis}
        seriesGroups={seriesGroups}
        colorScheme={'scheme05'}
      />
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr style={{ height: '50px' }}>
                    <td colSpan={2}>
                      <b>xAxis Settings:</b>
                    </td>
                  </tr>
                  <tr>
                    <td>Labels step</td>
                    <td>
                      <JqxNumberInput
                        theme={'material-purple'}
                        onValueChanged={inputxAxisLabelsStepOnValueChange}
                        width={50}
                        height={25}
                        min={1}
                        max={10}
                        inputMode={'simple'}
                        decimalDigits={0}
                        digits={2}
                        spinButtons={true}
                        value={2}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Grid lines step</td>
                    <td>
                      <JqxNumberInput
                        theme={'material-purple'}
                        onValueChanged={inputxAxisGridLinesStepOnValueChange}
                        width={50}
                        height={25}
                        min={1}
                        max={10}
                        inputMode={'simple'}
                        decimalDigits={0}
                        digits={2}
                        spinButtons={true}
                        value={1}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Tick marks step</td>
                    <td>
                      <JqxNumberInput
                        theme={'material-purple'}
                        onValueChanged={inputxAxisTickMarksStepOnValueChange}
                        width={50}
                        height={25}
                        min={1}
                        max={10}
                        inputMode={'simple'}
                        decimalDigits={0}
                        digits={2}
                        spinButtons={true}
                        value={1}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>Unit interval</td>
                    <td>
                      <JqxNumberInput
                        theme={'material-purple'}
                        onValueChanged={inputxAxisUnitIntervalOnValueChange}
                        width={50}
                        height={25}
                        min={1}
                        max={10}
                        inputMode={'simple'}
                        decimalDigits={0}
                        digits