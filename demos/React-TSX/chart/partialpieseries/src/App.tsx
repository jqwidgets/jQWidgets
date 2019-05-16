import * as React from 'react';
 


import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';

export interface IState extends IChartProps {
    description2: IChartProps['description'];
    description3: IChartProps['description'];
    description4: IChartProps['description'];
    source2: IChartProps['source'];
    source3: IChartProps['source'];
    source4: IChartProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);

        const dataStatCounter: any = [
            { Browser: 'Chrome', Share: 45.6 },
            { Browser: 'IE', Share: 24.6 },
            { Browser: 'Firefox', Share: 20.4 },
            { Browser: 'Safari', Share: 5.1 },
            { Browser: 'Opera', Share: 1.3 },
            { Browser: 'Other', Share: 3.0 }
        ];
        const dataW3CCounter: any = [
            { Browser: 'Chrome', Share: 34.1 },
            { Browser: 'IE', Share: 20.3 },
            { Browser: 'Firefox', Share: 18.3 },
            { Browser: 'Safari', Share: 17.8 },
            { Browser: 'Opera', Share: 2.7 },
            { Browser: 'Other', Share: 6.8 }
        ];
        const dataWikimedia: any = [
            { Browser: 'Chrome', Share: 42.7 },
            { Browser: 'IE', Share: 18.0 },
            { Browser: 'Firefox', Share: 15.3 },
            { Browser: 'Safari', Share: 6.1 },
            { Browser: 'Opera', Share: 2.4 },
            { Browser: 'Other', Share: 15.6 }
        ];
        const dataNetApplications: any = [
            { Browser: 'Chrome', Share: 16.4 },
            { Browser: 'IE', Share: 55.2 },
            { Browser: 'Firefox', Share: 18.0 },
            { Browser: 'Safari', Share: 5.8 },
            { Browser: 'Opera', Share: 1.3 },
            { Browser: 'Other', Share: 3.4 }
        ];

        this.state = {
            description: 'Stat counter',
            description2: 'W3C counter',
            description3: 'Wikimedia',
            description4: 'Net Applications',
            padding: { left: 5, top: 5, right: 5, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        {
                            centerOffset: 0,
                            dataField: 'Share',
                            displayText: 'Browser',
                            enableSeriesToggle: true,
                            endAngle: 180,
                            formatFunction: (value: any, itemIdx: any, serieIndex: any, groupIndex: any) => {
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
            ],
            source: dataStatCounter,
            source2: dataW3CCounter,
            source3: dataWikimedia,
            source4: dataNetApplications,
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 }
        };
    }

    public render() {
        return (
            <div>
                <JqxChart style={{ float: 'left', width: '400px', height: '250px' }}
                    title={''} description={this.state.description} showLegend={true}
                    enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source} showBorderLine={true} seriesGroups={this.state.seriesGroups}
                    colorScheme={'scheme03'} />

                <JqxChart style={{ float: 'left', width: '400px', height: '250px' }}
                    title={''} description={this.state.description2} showLegend={true}
                    enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source2} showBorderLine={true} seriesGroups={this.state.seriesGroups}
                    colorScheme={'scheme03'} />

                <JqxChart style={{ float: 'left', width: '400px', height: '250px' }}
                    title={''} description={this.state.description3} showLegend={true}
                    enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source3} showBorderLine={true} seriesGroups={this.state.seriesGroups}
                    colorScheme={'scheme03'} />

                <JqxChart style={{ float: 'left', width: '400px', height: '250px' }}
                    title={''} description={this.state.description4} showLegend={true}
                    enableAnimations={false} padding={this.state.padding} titlePadding={this.state.titlePadding}
                    source={this.state.source4} showBorderLine={true} seriesGroups={this.state.seriesGroups}
                    colorScheme={'scheme03'} />
            </div>
        );
    }
}

export default App;