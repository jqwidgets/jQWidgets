import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.sliderStartAngle.on('change', (event) => {
            let value = event.args.value;
            this.refs.myChart.seriesGroups()[0].startAngle = value;
            this.refs.myChart.seriesGroups()[0].endAngle = value + 360;
            this.refs.myChart.update();
        });
        this.refs.sliderRadius.on('change', (event) => {
            let value = event.args.value;
            this.refs.myChart.seriesGroups()[0].radius = value;
            this.refs.myChart.update();
        });
        this.refs.dropDownListColor.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.colorScheme(value);
        });
        this.refs.dropDownListSeries.on('select', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.seriesGroups()[0].type = value;
            this.refs.myChart.update();
        });

        this.refs.checkBoxTicksBetween.on('change', (event) => {
            this.refs.myChart.xAxis().valuesOnTicks = !event.args.checked;
            this.refs.myChart.update();
        })

        this.refs.checkBoxAutoRotateLabels.on('change', (event) => {
            this.refs.myChart.xAxis().labels.autoRotate = event.args.checked;
            this.refs.myChart.valueAxis().labels.autoRotate = event.args.checked;
            this.refs.myChart.update();
        })
    }
    render() {
        let data = [
            {
                type: 'Organic Search',
                month1: 1725090,
                month2: 3136190
            },
            {
                type: 'Paid Search',
                month1: 925090,
                month2: 2136190
            },
            {
                type: 'Direct',
                month1: 425090,
                month2: 936190
            },
            {
                type: 'Referral',
                month1: 1250900,
                month2: 2536190
            },
            {
                type: 'Twitter',
                month1: 350900,
                month2: 681900
            },
            {
                type: 'Facebook',
                month1: 381900,
                month2: 831500
            }
        ];

        let padding = { left: 5, top: 5, right: 5, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 5 };

        let xAxis =
            {
                dataField: 'type',
                displayText: 'Traffic source',
                valuesOnTicks: true,
                labels: { autoRotate: false }
            };

        let valueAxis =
            {
                unitInterval: 1000000,
                labels: {
                    formatSettings: { decimalPlaces: 0 },
                    formatFunction: (value, itemIndex, serieIndex, groupIndex) => {
                        return Math.round(value / 1000) + ' K';
                    }
                }
            };

        let seriesGroups =
            [
                {
                    spider: true,
                    startAngle: 0,
                    endAngle: 360,
                    radius: 120,
                    type: 'spline',
                    series: [
                        { dataField: 'month1', displayText: 'January 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                        { dataField: 'month2', displayText: 'February 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                    ]
                }
            ];

        let colorsSchemesList = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];

        let seriesList = ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];

        let chartCSS = { width: 850, height: 500, marginBottom: 1 };

        let pCSS = { fontFamily: 'Verdana', fontSize: 12 };
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Website audience acquision by source'}
                    description={'Month over month comparison'} valueAxis={valueAxis}
                    showLegend={true} enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={data} xAxis={xAxis}
                    colorScheme={'scheme05'} seriesGroups={seriesGroups}
                />
                <table style={{ width: 850 }}>
                    <tbody>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p style={pCSS}>Move the slider to rotate:</p>
                                <JqxSlider ref='sliderStartAngle'
                                    width={240} min={0} max={360} step={1}
                                    ticksFrequency={20} mode={'fixed'}
                                />
                            </td>
                            <td>
                                <p style={pCSS}>Select the series type:</p>
                                <JqxDropDownList ref='dropDownListSeries'
                                    width={200} height={25} source={seriesList}
                                    selectedIndex={2} dropDownHeight={100}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <p style={pCSS}>Move the slider to change the radius:</p>
                                <JqxSlider ref='sliderRadius'
                                    width={240} min={80} max={140} step={1}
                                    ticksFrequency={20} mode={'fixed'} value={120}
                                />
                            </td>
                            <td>
                                <p style={pCSS}>Select color scheme:</p>
                                <JqxDropDownList ref='dropDownListColor'
                                    width={200} height={25} source={colorsSchemesList} 
                                    selectedIndex={0} dropDownHeight={100}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: 50 }}>
                                <JqxCheckBox ref="checkBoxAutoRotateLabels" style={{ paddingTop: 15 }} value='Auto-rotate labels'
                                    width={220} height={25} hasThreeStates={false} checked={false}
                                />
                            </td>
                            <td>
                                <JqxCheckBox ref="checkBoxTicksBetween" style={{ paddingTop: 15 }} value='Ticks between values'
                                    width={220} height={25} hasThreeStates={false} checked={false}
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
