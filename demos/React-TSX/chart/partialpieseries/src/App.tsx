import * as React from 'react';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

const App = () => {
    const dataStatCounter = [
        { Browser: 'Chrome', Share: 45.6 },
        { Browser: 'IE', Share: 24.6 },
        { Browser: 'Firefox', Share: 20.4 },
        { Browser: 'Safari', Share: 5.1 },
        { Browser: 'Opera', Share: 1.3 },
        { Browser: 'Other', Share: 3.0 }
    ];
    const dataW3CCounter = [
        { Browser: 'Chrome', Share: 34.1 },
        { Browser: 'IE', Share: 20.3 },
        { Browser: 'Firefox', Share: 18.3 },
        { Browser: 'Safari', Share: 17.8 },
        { Browser: 'Opera', Share: 2.7 },
        { Browser: 'Other', Share: 6.8 }
    ];
    const dataWikimedia = [
        { Browser: 'Chrome', Share: 42.7 },
        { Browser: 'IE', Share: 18.0 },
        { Browser: 'Firefox', Share: 15.3 },
        { Browser: 'Safari', Share: 6.1 },
        { Browser: 'Opera', Share: 2.4 },
        { Browser: 'Other', Share: 15.6 }
    ];
    const dataNetApplications = [
        { Browser: 'Chrome', Share: 16.4 },
        { Browser: 'IE', Share: 55.2 },
        { Browser: 'Firefox', Share: 18.0 },
        { Browser: 'Safari', Share: 5.8 },
        { Browser: 'Opera', Share: 1.3 },
        { Browser: 'Other', Share: 3.4 }
    ];

    const description = 'Stat counter';
    const description2 = 'W3C counter';
    const description3 = 'Wikimedia';
    const description4 = 'Net Applications';

    const padding = { left: 5, top: 5, right: 5, bottom: 5 };
    const titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
    const seriesGroups: IChartProps['seriesGroups'] = [
        {
            series: [
                {
                    centerOffset: 0,
                    dataField: 'Share',
                    displayText: 'Browser',
                    enableSeriesToggle: true,
                    endAngle: 180,
                    formatFunction: (value: any) => {
                        if (isNaN(value)) {
                            return value;
                        }
                        return value + '%';
                    },
                    initialAngle: 0,
                    labelRadius: 160,
                    labels: {
                        autoRotate: false,
                        linesAngles: true,
                        linesEnabled: true,
                        visible: true
                    },
                    offsetY: 170,
                    radius: 125,
                    startAngle: 0
                }
            ],
            type: 'pie'
        }
    ];

    return (
        <div>
            <JqxChart
                style={{ float: 'left', width: '400px', height: '250px' }}
                title=""
                description={description}
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={dataStatCounter}
                showBorderLine={true}
                seriesGroups={seriesGroups}
                colorScheme="scheme03"
            />
            <JqxChart
                style={{ float: 'left', width: '400px', height: '250px' }}
                title=""
                description={description2}
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={dataW3CCounter}
                showBorderLine={true}
                seriesGroups={seriesGroups}
                colorScheme="scheme03"
            />
            <JqxChart
                style={{ float: 'left', width: '400px', height: '250px' }}
                title=""
                description={description3}
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={dataWikimedia}
                showBorderLine={true}
                seriesGroups={seriesGroups}
                colorScheme="scheme03"
            />
            <JqxChart
                style={{ float: 'left', width: '400px', height: '250px' }}
                title=""
                description={description4}
                showLegend={true}
                enableAnimations={false}
                padding={padding}
                titlePadding={titlePadding}
                source={dataNetApplications}
                showBorderLine={true}
                seriesGroups={seriesGroups}
                colorScheme="scheme03"
            />
        </div>
    );
};

export default App;