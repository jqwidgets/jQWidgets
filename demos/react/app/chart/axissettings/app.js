import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myChart.enableAnimations(false);

        this.refs.sliderValueAxisLeftPadding.on('change', (event) => {
            this.refs.myChart.valueAxis().padding.left = event.args.value;
            this.refs.myChart.refresh();
        });
        this.refs.sliderValueAxisRightPadding.on('change', (event) => {
            this.refs.myChart.valueAxis().padding.right = event.args.value;
            this.refs.myChart.refresh();
        })
        this.refs.sliderValueAxisAngle.on('change', (event) => {
            this.refs.myChart.valueAxis().labels.angle = event.args.value;
            this.refs.myChart.refresh();
        })
        this.refs.sliderXAxisTopPadding.on('change', (event) => {
            this.refs.myChart.xAxis().padding.top = event.args.value;
            this.refs.myChart.refresh();
        })
        this.refs.sliderXAxisBottomPadding.on('change', (event) => {
            this.refs.myChart.xAxis().padding.bottom = event.args.value;
            this.refs.myChart.refresh();
        })
        this.refs.sliderXAxisAngle.on('change', (event) => {
            this.refs.myChart.xAxis().labels.angle = event.args.value;
            this.refs.myChart.refresh();
        })
        this.refs.btnLeft.on('change', (event) => {
            if (event.args.checked) {
                this.refs.myChart.valueAxis().position = 'left';
                this.refs.myChart.refresh();
            }
        })
        this.refs.btnRight.on('change', (event) => {
            if (event.args.checked) {
                this.refs.myChart.valueAxis().position = 'right';
                this.refs.myChart.refresh();
            }
        })
        this.refs.btnTop.on('change', (event) => {
            if (event.args.checked) {
                this.refs.myChart.xAxis().position = 'top';
                this.refs.myChart.refresh();
            }
        })
        this.refs.btnBottom.on('change', (event) => {
            if (event.args.checked) {
                this.refs.myChart.xAxis().position = 'bottom';
                this.refs.myChart.refresh();
            }
        })
        this.refs.btnValueAxisFlip.on('change', (event) => {
            this.refs.myChart.valueAxis().flip = event.args.checked;
            this.refs.myChart.refresh();
        })
        this.refs.btnXAxisFlip.on('change', (event) => {
            this.refs.myChart.xAxis().flip = event.args.checked;
            this.refs.myChart.refresh();
        })
    }
    render() {
        let data = [
            { year: 2004, price: 0.1437 },
            { year: 2005, price: 0.1470 },
            { year: 2006, price: 0.1510 },
            { year: 2007, price: 0.1605 },
            { year: 2008, price: 0.1647 },
            { year: 2009, price: 0.1736 },
            { year: 2010, price: 0.1766 },
            { year: 2011, price: 0.1902 },
            { year: 2012, price: 0.1978 },
            { year: 2013, price: 0.2113 },
            { year: 2014, price: 0.2178 }
        ];

        let padding = { left: 5, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 90, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                padding: { top: 0, bottom: 0 },
                labels: { angle: 0 },
                dataField: 'year',
                displayText: 'Year',
                valuesOnTicks: false,
                gridLines: { color: '#CDCDCD' },
                tickMarks: { color: '#CDCDCD' }
            };

        let valueAxis =
            {
                position: 'right',
                padding: { left: 0, right: 0 },
                title: { text: '<br><br>Price EUR / kWh' },
                labels: {
                    visible: true,
                    angle: 0,
                    formatSettings: { decimalPlaces: 4, sufix: ' ˆ' }
                },
                tickMarks: {
                    visible: true,
                    color: '#CDCDCD',
                    size: 5
                },
                gridLines: {
                    visible: true,
                    color: '#CDCDCD',
                },
                alternatingBackgroundColor: '#EFEFEF',
                alternatingBackgroundColor2: '#CECECE',
                alternatingBackgroundOpacity: 0.2
            };

        let seriesGroups =
            [
                {
                    type: 'stepline',
                    series: [
                        { formatSettings: { decimalPlaces: 4 }, dataField: 'price', displayText: 'Price per kWh', showLabels: true, symbolType: 'circle' }
                    ]
                }
            ];
        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Electricity prices in Europe between 2004 and 2014'} description={'Source: Eurostat'}
                    showLegend={true} enableAnimations={true} padding={padding}
                    titlePadding={titlePadding} source={data} xAxis={xAxis}
                    valueAxis={valueAxis} colorScheme={'scheme04'} seriesGroups={seriesGroups}
                />
                <table style={{ paddingLeft: 30, paddingTop: 10 }}>
                    <tr style={{ height: 50 }}>
                        <td style={{ width: 300 }}><b>Value axis properties:</b></td>
                        <td><b>xAxis properties:</b></td>
                    </tr>
                    <tr>
                        <td>Left padding:
                            <JqxSlider ref="sliderValueAxisLeftPadding"
                                width={250} min={0} max={50} step={1}
                                value={0} ticksFrequency={5} mode={'fixed'}
                            />
                        </td>
                        <td>Top padding:
                            <JqxSlider ref="sliderXAxisTopPadding"
                                width={250} min={0} max={50} step={1}
                                value={0} ticksFrequency={5} mode={'fixed'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Right padding:
                            <JqxSlider ref="sliderValueAxisRightPadding"
                                width={250} min={0} max={50} step={1}
                                value={0} ticksFrequency={5} mode={'fixed'}
                            />
                        </td>
                        <td>Bottom padding:
                            <JqxSlider ref="sliderXAxisBottomPadding"
                                width={250} min={0} max={50} step={1}
                                value={0} ticksFrequency={5} mode={'fixed'}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Labels angle:
                            <JqxSlider ref="sliderValueAxisAngle"
                                width={250} min={0} max={360} step={1}
                                value={0} ticksFrequency={30} mode={'fixed'}
                            />
                        </td>
                        <td>Labels angle:
                            <JqxSlider ref="sliderXAxisAngle"
                                width={250} min={0} max={360} step={1}
                                value={0} ticksFrequency={30} mode={'fixed'}
                            />
                         </td>
                    </tr>
                    <tr>
                        <td>Position:
                            <table>
                                <tr>
                                    <td>
                                        <JqxRadioButton style={{ marginLeft: 10 }} ref="btnLeft"
                                            width={60} height={25} checked={false} groupName={'valueAxis'}>
                                            Left
                                        </JqxRadioButton>
                                    </td>
                                    <td>
                                        <JqxRadioButton style={{ marginLeft: 10 }} ref="btnRight"
                                            width={60} height={25} checked={true} groupName={'valueAxis'}>
                                            Right
                                        </JqxRadioButton>
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>Position:
                            <table>
                                <tr>
                                    <td>
                                        <JqxRadioButton style={{ marginLeft: 10 }} ref="btnTop"
                                            width={60} height={25} checked={false} groupName={'xAxis'}>
                                            Top
                                        </JqxRadioButton>
                                    </td>
                                    <td>
                                        <JqxRadioButton style={{ marginLeft: 10 }} ref="btnBottom"
                                            width={80} height={25} checked={false} groupName={'xAxis'}>
                                            Bottom
                                        </JqxRadioButton>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <JqxCheckBox ref="btnValueAxisFlip" value='Flip valueAxis positions'
                                height={25} hasThreeStates={false} checked={false}
                            />
                        </td>
                        <td>
                            <JqxCheckBox ref="btnXAxisFlip" value='Flip xAxis positions'
                                height={25} hasThreeStates={false} checked={false}
                            />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
