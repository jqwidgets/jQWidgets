import * as React from 'react';
import './App.css';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const latencyThreshold = 260;

    const data1 = [
        { text: 'Used', value: 55 },
        { text: 'Available', value: 9 }
    ];
    const data2 = [
        { text: 'Used', value: 37 },
        { text: 'Available', value: 63 }
    ];
    const data3 = [
        { text: 'Used', value: 89.3 },
        { text: 'Available', value: 166.7 }
    ];
    const data4 = [
        { text: 'Used', value: 47 },
        { text: 'Available', value: 53 }
    ];
    const data5 = [
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
        { hour: 23, latency: 239, requests: 3550 }
    ];

    const counterRef = React.useRef(0);
    const chartsData = [data1, data2, data3, data4];

    const drawBefore = React.useCallback((renderer: any, rect: any) => {
        let value;
        if (counterRef.current === 0) {
            value = data1[0].value;
        } else if (counterRef.current === 1) {
            value = data2[0].value;
        } else if (counterRef.current === 2) {
            value = data3[0].value;
        } else if (counterRef.current === 3) {
            value = data4[0].value;
        }
        const sz = renderer.measureText(value, 0, { 'class': 'chart-inner-text' });
        renderer.text(
            value,
            rect.x + (rect.width - sz.width) / 2,
            rect.y + rect.height / 2,
            0,
            0,
            0,
            { 'class': 'chart-inner-text' }
        );
        counterRef.current = (counterRef.current + 1) % 4;
    }, []);

    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 5, top: 5, right: 5, bottom: 5 };
    const seriesGroups = [
        {
            series: [
                {
                    centerOffset: 0,
                    dataField: "value",
                    displayText: "text",
                    enableSelection: true,
                    initialAngle: 90,
                    innerRadius: 50,
                    labelRadius: 120,
                    radius: 60,
                    useGradientColors: false
                }
            ],
            showLabels: false,
            type: 'donut'
        }
    ];
    const seriesGroups2 = [
        {
            series: [
                {
                    colorFunction: (value: any) => (value > latencyThreshold ? '#CC1133' : '#55CC55'),
                    dataField: 'latency',
                    displayText: 'Request latency',
                    toolTipFormatSettings: { sufix: ' ms' }
                }
            ],
            type: 'column',
            valueAxis: {
                bands: [
                    {
                        fillColor: 'red',
                        lineWidth: 1,
                        maxValue: latencyThreshold,
                        minValue: latencyThreshold
                    }
                ],
                position: 'left',
                title: { text: 'Request Latency [ms]<br>' }
            }
        },
        {
            series: [
                {
                    dataField: 'requests',
                    displayText: 'Get requests',
                    lineColor: '#343F9B',
                    lineWidth: 2,
                    toolTipFormatSettings: { sufix: ' req/s' }
                }
            ],
            type: 'spline',
            valueAxis: {
                position: 'right',
                title: { text: 'Get Requests per second' }
            }
        }
    ];

    return (
        <table cellPadding={0} cellSpacing={0}>
            <tbody>
                <tr>
                    <td>
                        <JqxChart
                            style={{ width: '360px', height: '180px' }}
                            title={'Cluster capacity'} description={''}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={data1} showToolTips={true}
                            seriesGroups={seriesGroups} colorScheme={'scheme05'}
                            backgroundColor={'#FAFAFA'} drawBefore={drawBefore} />
                    </td>
                    <td>
                        <JqxChart
                            style={{ width: '360px', height: '180px' }}
                            title={'Avg. CPU %'} description={''}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={data2} showToolTips={true}
                            seriesGroups={seriesGroups} colorScheme={'scheme05'}
                            backgroundColor={'#FAFAFA'} drawBefore={drawBefore} />
                    </td>
                </tr>
                <tr>
                    <td>
                        <JqxChart
                            style={{ width: '360px', height: '180px' }}
                            title={'Storage capacity [TB]'} description={''}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={data3} showToolTips={true}
                            seriesGroups={seriesGroups} colorScheme={'scheme05'}
                            backgroundColor={'#FAFAFA'} drawBefore={drawBefore} />
                    </td>
                    <td>
                        <JqxChart
                            style={{ width: '360px', height: '180px' }}
                            title={'Network utilization %'} description={''}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={data4} showToolTips={true}
                            seriesGroups={seriesGroups} colorScheme={'scheme05'}
                            backgroundColor={'#FAFAFA'} drawBefore={drawBefore} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <JqxChart
                            style={{ width: '850px', height: '300px' }}
                            title={'Get request per second & response latencies'} description={''}
                            showLegend={false} enableAnimations={true} padding={padding}
                            titlePadding={titlePadding} source={data5} showToolTips={true}
                            seriesGroups={seriesGroups2} colorScheme={'scheme05'}
                            backgroundColor={'#FAFAFA'} drawBefore={drawBefore} />
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default App;