import * as React from 'react';
 


import JqxChart, { IChartProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxRangeSelector, { IRangeSelectorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

export interface IState extends IChartProps {
    labelsFormatFunction: IRangeSelectorProps['labelsFormatFunction'];
    markersFormatFunction: IRangeSelectorProps['markersFormatFunction'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);

        let recordsArray: any[] = [];

        const source: any = {
            datafields: [
                { name: 'month' },
                { name: 'min' },
                { name: 'max' },
            ],
            datatype: 'json',
            url: 'weather_geneva.txt'
        };

        this.state = {
            labelsFormatFunction: (data: any): string => {
                if (recordsArray[data]) {
                    return "1 " + recordsArray[data].month;
                }
                else {
                    return "31 " + recordsArray[data - 1].month;
                }
            },
            markersFormatFunction: (data: any): string => {
                if (recordsArray[data]) {
                    return "1 " + recordsArray[data].month;
                }
                else {
                    return "31 " + recordsArray[data - 1].month;
                }
            },
            padding: { left: 5, top: 0, right: 0, bottom: 0 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'max', lineColor: 'green', displayText: 'Max Temperature' },
                        { dataField: 'min', lineColor: 'red', displayText: 'Min Temperature' }
                    ],
                    showLabels: false,
                    type: 'line',
                    valueAxis: {
                        visible: false
                    }
                }
            ],
            source: new jqx.dataAdapter(source,
                {
                    async: false, autoBind: true,
                    loadComplete: (data: any, status: any, xhr: any, records: any[]): void => {
                        recordsArray = records;
                    },
                    loadError: (xhr: any, status: any, error: any) => {
                        alert('Error loading "' + source.url + '" : ' + error);
                    }
                }
            ),
            titlePadding: { left: 0, top: 0, right: 0, bottom: 0 },
            xAxis: {
                visible: false
            }
        }
    }

    public render() {
        return (
            <div>
                <label style={{ marginLeft: '250px', fontSize: '18px', fontWeight: 'bold' }}>Weather in Geneva, Switzerland</label>
                <br />
                <label style={{ marginLeft: '250px', fontSize: '14px', fontWeight: 'bold' }}>Climatological Information about Geneva</label>

                <JqxRangeSelector theme={'material-purple'}
                    // @ts-ignore
                    width={'100%'} height={200} min={0} max={12}
                    range={{ from: 3, to: 9 }} majorTicksInterval={1} minorTicksInterval={1}
                    labelsOnTicks={false} labelsFormatFunction={this.state.labelsFormatFunction}
                    markersFormatFunction={this.state.markersFormatFunction}>

                    <JqxChart theme={'material-purple'} style={{ width: '750px', height: '200px' }}
                        title={''} description={''} showBorderLine={false}
                        showLegend={false} enableAnimations={true} padding={this.state.padding}
                        titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                        colorScheme={'scheme05'} seriesGroups={this.state.seriesGroups} />
                </JqxRangeSelector>
            </div>
        );
    }
}

export default App;
