import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let data1 =
            [
                { text: 'Used', value: 55 },
                { text: 'Available', value: 9 }
            ];
        let data2 =
            [
                { text: 'Used', value: 37 },
                { text: 'Available', value: 63 }
            ];
        let data3 =
            [
                { text: 'Used', value: 89.3 },
                { text: 'Available', value: 166.7 }
            ];
        let data4 =
            [
                { text: 'Used', value: 47 },
                { text: 'Available', value: 53 }
            ];

        let data5 =
            [
                { hour: 0, latency: 235, requests: 3500 },
                { hour: 1, latency: 231, requests: 3400 },
                { hour: 2, latency: 217, requests: 3350 },
                { hour: 3, latency: 215, requests: 3260 },
                { hour: 4, latency: 225, requests: 3320 },
                { hour: 5, latency: 235, requests: 3400 },
                { hour: 6, latency: 239, requests: 3550 },
                { hour: 7, latency: 255, requests: 4100 },
                { hour: 8, latency: 251, requests: 4200 },
                { hour: 9, latency: 259, requests: 4500 },
                { hour: 10, latency: 265, requests: 4560 },
                { hour: 11, latency: 257, requests: 4500 },
                { hour: 12, latency: 265, requests: 4490 },
                { hour: 13, latency: 261, requests: 4400 },
                { hour: 14, latency: 258, requests: 4350 },
                { hour: 15, latency: 257, requests: 4340 },
                { hour: 16, latency: 255, requests: 4200 },
                { hour: 17, latency: 245, requests: 4050 },
                { hour: 18, latency: 241, requests: 4020 },
                { hour: 19, latency: 239, requests: 3900 },
                { hour: 20, latency: 237, requests: 3810 },
                { hour: 21, latency: 236, requests: 3720 },
                { hour: 22, latency: 235, requests: 3610 },
                { hour: 23, latency: 239, requests: 3550 },
            ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 5, top: 5, right: 5, bottom: 5 };

        let seriesGroups =
            [
                {
                    type: 'donut',
                    useGradientColors: false,
                    series:
                    [
                        {
                            showLabels: false,
                            enableSelection: true,
                            displayText: 'text',
                            dataField: 'value',
                            labelRadius: 120,
                            initialAngle: 90,
                            radius: 60,
                            innerRadius: 50,
                            centerOffset: 0
                        }
                    ]
                }
            ];

        let counter = 0;
        let drawBefore = (renderer, rect) => {
            let value;

            if (counter === 0) {
                value = data1[0].value;
            } else if (counter === 1) {
                value = data2[0].value;
            } else if (counter === 2) {
                value = data3[0].value;
            } else if (counter === 3) {
                value = data4[0].value;
            }

            let sz = renderer.measureText(value, 0, { 'class': 'chart-inner-text' });
            renderer.text(
                value,
                rect.x + (rect.width - sz.width) / 2,
                rect.y + rect.height / 2,
                0,
                0,
                0,
                { 'class': 'chart-inner-text' }
            );

            counter++;
        };

        let xAxis =
            {
                dataField: 'hour',
                displayText: 'Hour',
            };

        let latencyThreshold = 260;

        let seriesGroups2 =
            [
                {
                    type: 'column',
                    valueAxis:
                    {
                        title: { text: 'Request Latency [ms]<br>' },
                        position: 'left'
                    },
                    toolTipFormatSettings: { sufix: ' ms' },
                    series:
                    [
                        {
                            dataField: 'latency',
                            displayText: 'Request latency',
                            colorFunction: (value, itemIndex, serie, group) => {
                                return (value > latencyThreshold) ? '#CC1133' : '#55CC55';
                            }
                        }
                    ],
                    bands:
                    [
                        {
                            minValue: latencyThreshold,
                            maxValue: latencyThreshold,
                            lineWidth: 1,
                            color: 'red'
                        }
                    ]
                },
                {
                    type: 'spline',
                    valueAxis:
                    {
                        title: { text: 'Get Requests per second' },
                        position: 'right'
                    },
                    toolTipFormatSettings: { sufix: ' req/s' },
                    series:
                    [
                        {
                            dataField: 'requests',
                            displayText: 'Get requests',
                            lineColor: '#343F9B',
                            lineWidth: 2
                        }
                    ]
                },
            ];

        return (
            <div>
                <JqxChart ref='myChart1' style={{ width: 400, height: 180, float: 'left' }}
                    title={'Cluster capacity'} description={''} colorScheme={'scheme05'}
                    showLegend={false} enableAnimations={true} padding={padding} showToolTips={true}
                    titlePadding={titlePadding} source={data1} backgroundColor={'#FAFAFA'}
                    seriesGroups={seriesGroups} drawBefore={drawBefore}
                />

                <JqxChart ref='myChart2' style={{ width: 400, height: 180, float: 'left' }}
                    title={'Avg. CPU %'} description={''} colorScheme={'scheme05'}
                    showLegend={false} enableAnimations={true} padding={padding} showToolTips={true}
                    titlePadding={titlePadding} source={data2} backgroundColor={'#FAFAFA'}
                    seriesGroups={seriesGroups} drawBefore={drawBefore}
                />

                <JqxChart ref='myChart3' style={{ width: 400, height: 180, float: 'left' }}
                    title={'Storage capacity [TB]'} description={''} colorScheme={'scheme05'}
                    showLegend={false} enableAnimations={true} padding={padding} showToolTips={true}
                    titlePadding={titlePadding} source={data3} backgroundColor={'#FAFAFA'}
                    seriesGroups={seriesGroups} drawBefore={drawBefore}
                />

                <JqxChart ref='myChart4' style={{ width: 400, height: 180, float: 'left' }}
                    title={'Network utilization %'} description={''} colorScheme={'scheme05'}
                    showLegend={false} enableAnimations={true} padding={padding} showToolTips={true}
                    titlePadding={titlePadding} source={data4} backgroundColor={'#FAFAFA'}
                    seriesGroups={seriesGroups} drawBefore={drawBefore}
                />

                <JqxChart style={{ width: 800, height: 300 }}
                    title={'Get request per second & response latencies'} description={'(Aggregated values for the last 24h)'}
                    showLegend={false} enableAnimations={true} padding={padding} backgroundColor={'#FAFAFA'}
                    titlePadding={titlePadding} source={data5} xAxis={xAxis} showBorderLine={true}
                    seriesGroups={seriesGroups2} colorScheme={'scheme05'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
