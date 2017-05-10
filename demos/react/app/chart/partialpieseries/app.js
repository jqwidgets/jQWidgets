import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';

class App extends React.Component {
    render() {
        let dataStatCounter =
            [
                { Browser: 'Chrome', Share: 45.6 },
                { Browser: 'IE', Share: 24.6 },
                { Browser: 'Firefox', Share: 20.4 },
                { Browser: 'Safari', Share: 5.1 },
                { Browser: 'Opera', Share: 1.3 },
                { Browser: 'Other', Share: 3.0 }
            ];
        let dataW3CCounter =
            [
                { Browser: 'Chrome', Share: 34.1 },
                { Browser: 'IE', Share: 20.3 },
                { Browser: 'Firefox', Share: 18.3 },
                { Browser: 'Safari', Share: 17.8 },
                { Browser: 'Opera', Share: 2.7 },
                { Browser: 'Other', Share: 6.8 }
            ];
        let dataWikimedia =
            [
                { Browser: 'Chrome', Share: 42.7 },
                { Browser: 'IE', Share: 18.0 },
                { Browser: 'Firefox', Share: 15.3 },
                { Browser: 'Safari', Share: 6.1 },
                { Browser: 'Opera', Share: 2.4 },
                { Browser: 'Other', Share: 15.6 }
            ];
        let dataNetApplications =
            [
                { Browser: 'Chrome', Share: 16.4 },
                { Browser: 'IE', Share: 55.2 },
                { Browser: 'Firefox', Share: 18.0 },
                { Browser: 'Safari', Share: 5.8 },
                { Browser: 'Opera', Share: 1.3 },
                { Browser: 'Other', Share: 3.4 }
            ];
        let charts = [
            { title: 'Stat counter', label: 'Stat', dataSource: dataStatCounter },
            { title: 'W3C counter', label: 'W3C', dataSource: dataW3CCounter },
            { title: 'Wikimedia', label: 'Wikimedia', dataSource: dataWikimedia },
            { title: 'Net Applications', label: 'NetApp', dataSource: dataNetApplications }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let seriesGroups =
            [
                {
                    type: 'pie',
                    showLegend: true,
                    enableSeriesToggle: true,
                    series:
                    [
                        {
                            dataField: 'Share',
                            displayText: 'Browser',
                            showLabels: true,
                            labelRadius: 160,
                            labelLinesEnabled: true,
                            labelLinesAngles: true,
                            labelsAutoRotate: false,
                            initialAngle: 0,
                            radius: 125,
                            minAngle: 0,
                            maxAngle: 180,
                            centerOffset: 0,
                            offsetY: 170,
                            formatFunction: (value, itemIdx, serieIndex, groupIndex) => {
                                if (isNaN(value))
                                    return value;
                                return value + '%';
                            }
                        }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart style={{ width: 400, height: 250, float: 'left' }}
                    title={''} description={charts[0].title} source={charts[0].dataSource}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} showBorderLine={true}
                    colorScheme={'scheme03'} seriesGroups={seriesGroups}
                />

                <JqxChart style={{ width: 400, height: 250, float: 'left' }}
                    title={''} description={charts[1].title} source={charts[1].dataSource}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} showBorderLine={true}
                    colorScheme={'scheme03'} seriesGroups={seriesGroups}
                />

                <JqxChart style={{ width: 400, height: 250, float: 'left' }}
                    title={''} description={charts[2].title} source={charts[2].dataSource}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} showBorderLine={true}
                    colorScheme={'scheme03'} seriesGroups={seriesGroups}
                />

                <JqxChart style={{ width: 400, height: 250, float: 'left' }}
                    title={''} description={charts[3].title} source={charts[3].dataSource}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} showBorderLine={true}
                    colorScheme={'scheme03'} seriesGroups={seriesGroups}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
