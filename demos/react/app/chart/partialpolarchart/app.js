import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.sliderStartAngle.on('change', (event) => {
            let value = event.args.value;
            this.refs.myChart.seriesGroups()[0].startAngle = value;
            this.refs.myChart.update();
        });

        this.refs.sliderEndAngle.on('change', (event) => {
            let value = 360 - event.args.value;
            this.refs.myChart.seriesGroups()[0].endAngle = value;
            this.refs.myChart.update();
        });

        this.refs.sliderRotate.on('change', (event) => {
            let value = event.args.value;
            let endAngle = this.refs.myChart.seriesGroups()[0].endAngle;
            if (isNaN(endAngle))
                endAngle = 360;
            let startAngle = this.refs.myChart.seriesGroups()[0].startAngle
            if (isNaN(startAngle))
                startAngle = 0;
            let diff = endAngle - startAngle;
            this.refs.myChart.seriesGroups()[0].startAngle = value;
            this.refs.myChart.seriesGroups()[0].endAngle = value + diff;
            this.refs.myChart.update();
        });

        this.refs.sliderRadius.on('change', (event) => {
            let value = event.args.value;
            this.refs.myChart.seriesGroups()[0].radius = value;
            this.refs.myChart.update();
        });

        this.refs.checkBoxTicksBetween.on('change', (event) => {
            this.refs.myChart.xAxis().valuesOnTicks = !event.args.checked;        
            this.refs.myChart.update();
        })

        this.refs.checkBoxAutoRotate.on('change', (event) => {
            this.refs.myChart.xAxis().labels.autoRotate = event.args.checked;
            this.refs.myChart.valueAxis().labels.autoRotate = event.args.checked;
            this.refs.myChart.update();
        })
    }
    render() {
        let dataset = [
            { City: 'London', SalesCountJan: 210, SalesRevenueJan: 123 },
            { City: 'Madrid', SalesCountJan: 190, SalesRevenueJan: 114 },
            { City: 'Munich', SalesCountJan: 201, SalesRevenueJan: 112 },
            { City: 'Amsterdam', SalesCountJan: 110, SalesRevenueJan: 98 },
            { City: 'Paris', SalesCountJan: 105, SalesRevenueJan: 93 },
            { City: 'Prague', SalesCountJan: 54, SalesRevenueJan: 100 }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };

        let xAxis =
            {
                dataField: 'City',
                valuesOnTicks: true,
                labels: { autoRotate: true }
            };

        let valueAxis =
            {
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    autoRotate: true
                }
            };

        let seriesGroups =
            [
                {
                    polar: true,
                    endAngle: 270,
                    radius: 120,
                    type: 'line',
                    series: [
                        { dataField: 'SalesCountJan', displayText: 'Sales count', opacity: 0.7, lineWidth: 1, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'SalesRevenueJan', displayText: 'Revenue', opacity: 0.7, lineWidth: 1, radius: 2, lineWidth: 2, symbolType: 'square' }
                    ]
                }
            ];

        let pCSS = { fontFamily: 'Verdana', fontSize: 12 };
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Sales volume and revenue by city'}
                    description={'(revenue in thousands)'} valueAxis={valueAxis}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={dataset} xAxis={xAxis}
                    colorScheme={'scheme01'} seriesGroups={seriesGroups}
                />
                <table style={{ width: 850 }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p style={pCSS}>Move the slider to change start angle:</p>
                                <JqxSlider ref='sliderStartAngle'
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'}
                                />
                            </td>
                            <td>
                                <p style={pCSS}>Move the slider to change end angle:</p>
                                <JqxSlider ref='sliderEndAngle'
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={90}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p style={pCSS}>Move the slider to rotate:</p>
                                <JqxSlider ref='sliderRotate'
                                    width={240} min={80} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'}
                                />
                            </td>
                            <td>
                                <p style={pCSS}>Move the slider to change the radius:</p>
                                <JqxSlider ref='sliderRadius'
                                    width={240} min={80} max={140} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={120}
                                />
                            </td>
                        </tr>
                        <tr style={{ height: 15 }}></tr>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <JqxCheckBox ref='checkBoxTicksBetween' value='Tick marks between values'
                                    width={220} height={25} checked={false}
                                    hasThreeStates={false}
                                />
                            </td>
                            <td>
                                <JqxCheckBox ref='checkBoxAutoRotate' value='Auto rotate axis text'
                                    width={220} height={25} checked={true}
                                    hasThreeStates={false}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
