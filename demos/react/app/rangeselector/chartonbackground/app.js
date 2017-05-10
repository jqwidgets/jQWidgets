import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';
import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        // prepare the data
        let source =
            {
                datatype: "json",
                datafields: [
                    { name: 'month' },
                    { name: 'min' },
                    { name: 'max' },
                ],
                url: '../sampledata/weather_geneva.txt'
            };
        let recordsArray;
        let dataAdapter = new $.jqx.dataAdapter(source, {
            async: false, autoBind: true,
            loadComplete: (data, status, xhr, records) => {
                recordsArray = records;
            },
            loadError: (xhr, status, error) => { alert('Error loading "' + source.url + '" : ' + error); }
        });

        // prepare jqxChart settings
        let padding = { left: 5, top: 0, right: 0, bottom: 0 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 0 };

        let xAxis =
            {
                text: 'Category Axis',
                textRotationAngle: 0,
                dataField: 'month',
                showTickMarks: false,
                showLabels: false,
                tickMarksInterval: 1,
                tickMarksColor: '#888888',
                valuesOnTicks: true,
                unitInterval: 1,
                visible: false,
                showGridLines: false,
                gridLinesInterval: 3,
                gridLinesColor: '#888888',
                axisSize: 'auto'
            };

        let seriesGroups =
            [
                {
                    type: 'line',
                    showLabels: false,
                    valueAxis:
                    {
                        unitInterval: 5,
                        visible: false,
                        description: 'Temperature [C]',
                        axisSize: 'auto',
                        tickMarksColor: '#888888'
                    },
                    series: [
                        { dataField: 'max', lineColor: 'green', displayText: 'Max Temperature' },
                        { dataField: 'min', lineColor: 'red', displayText: 'Min Temperature' }
                    ]
                }
            ];

        return (
            <div>
                <label style={{ marginLeft: 250, fontSize: 18, fontWeight: 'bold' }}>Weather in Geneva, Switzerland</label>
            <br /> <label style={{ marginLeft: 250, fontSize: 14, fontWeight: 'bold' }}>Climatological Information about Geneva</label>

                    <JqxRangeSelector ref='myRangeSelector'
                        width={750}
                        height={200}
                        min={0}
                        max={12}
                        range={{ from: 3, to: 9 }}
                        majorTicksInterval={1}
                        minorTicksInterval={1}
                        labelsOnTicks={false}
                        labelsFormatFunction={
                            (data) => {
                                if (recordsArray[data]) {
                                    return '1 ' + recordsArray[data].month;
                                }
                                else return '31 ' + recordsArray[data - 1].month;
                            }
                        }
                        markersFormatFunction={
                            (data) => {
                                if (recordsArray[data]) {
                                    return '1 ' + recordsArray[data].month;
                                }
                                else return '31 ' + recordsArray[data - 1].month;
                            }
                        }
                    >
                        <JqxChart style={{ width: 750, height: 200 }}
                            title={''} description={''} showBorderLine={false}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={dataAdapter} xAxis={xAxis}
                            colorScheme={'scheme05'} seriesGroups={seriesGroups}
                        />
                    </JqxRangeSelector>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
