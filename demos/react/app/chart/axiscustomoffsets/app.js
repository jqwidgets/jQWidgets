import React from 'react';
import ReactDOM from 'react-dom';

import JqxChart from '../../../jqwidgets-react/react_jqxchart.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {

        this.refs.dropDownLabelsVisibility_xAxis.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.xAxis().labels.visible = value == 'false' ? false : value;
            this.refs.myChart.xAxis().gridLines.visible = value == 'false' ? false : value;
            this.refs.myChart.xAxis().tickMarks.visible = value == 'false' ? false : value;
            this.refs.myChart.refresh();
        });

        this.refs.dropDownLabelsVisibility_valueAxis.on('change', (event) => {
            let value = event.args.item.value;
            this.refs.myChart.valueAxis().labels.visible = value == 'false' ? false : value;
            this.refs.myChart.valueAxis().gridLines.visible = value == 'false' ? false : value;
            this.refs.myChart.valueAxis().tickMarks.visible = value == 'false' ? false : value;
            this.refs.myChart.refresh();
        });

       
        this.refs.btnAddCustomPosition_xAxis.on('click', () => {
            let value = this.refs.inputCustomPosition_xAxis.val();
            if (!isNaN(parseFloat(value))) {
                this.refs.listboxCustomPositions_xAxis.addItem(parseFloat(value));
                let items = this.refs.listboxCustomPositions_xAxis.getItems();
                let customOffsets = [];
                for (let i = 0; i < items.length; i++)
                    customOffsets.push({ value: parseFloat(items[i].value) });
                this.refs.myChart.xAxis().labels.custom = customOffsets;
                this.refs.myChart.xAxis().gridLines.custom = customOffsets;
                this.refs.myChart.xAxis().tickMarks.custom = customOffsets;
                this.refs.myChart.refresh();
            }
        });

        this.refs.btnAddCustomPosition_valueAxis.on('click', () => {
            let value = this.refs.inputCustomPosition_valueAxis.val();
            if (!isNaN(parseFloat(value))) {
                this.refs.listboxCustomPositions_valueAxis.addItem(parseFloat(value));
                let items = this.refs.listboxCustomPositions_valueAxis.getItems();
                let customOffsets = [];
                for (let i = 0; i < items.length; i++)
                    customOffsets.push({ value: parseFloat(items[i].value) });
                this.refs.myChart.valueAxis().labels.custom = customOffsets;
                this.refs.myChart.valueAxis().gridLines.custom = customOffsets;
                this.refs.myChart.valueAxis().tickMarks.custom = customOffsets;
                this.refs.myChart.refresh();
            }
        });

        this.refs.btnRemoveCustomPosition_xAxis.on('click', () => {
            let idx = this.refs.listboxCustomPositions_xAxis.selectedIndex();
            if (idx == -1)
                return;
            this.refs.listboxCustomPositions_xAxis.removeAt(idx);
            let items = this.refs.listboxCustomPositions_xAxis.getItems();
            let customOffsets = [];
            for (let i = 0; i < items.length; i++)
                customOffsets.push({ value: parseFloat(items[i].value) });
            this.refs.myChart.xAxis().labels.custom = customOffsets;
            this.refs.myChart.xAxis().gridLines.custom = customOffsets;
            this.refs.myChart.xAxis().tickMarks.custom = customOffsets;
            this.refs.myChart.refresh();
        });

        this.refs.btnRemoveCustomPosition_valueAxis.on('click', () => {
            let idx = this.refs.listboxCustomPositions_valueAxis.selectedIndex();
            if (idx == -1)
                return;
            this.refs.listboxCustomPositions_valueAxis.removeAt(idx);
            let items = this.refs.listboxCustomPositions_valueAxis.getItems();
            let customOffsets = [];
            for (let i = 0; i < items.length; i++)
                customOffsets.push({ value: parseFloat(items[i].value) });
            this.refs.myChart.valueAxis().labels.custom = customOffsets;
            this.refs.myChart.valueAxis().gridLines.custom = customOffsets;
            this.refs.myChart.valueAxis().tickMarks.custom = customOffsets;
            this.refs.myChart.refresh();
        });
    }
    render() {
        let sampleData = [
            { a: 0.1535, b: 0.5 },
            { a: 0.48, b: 20.5 },
            { a: 10, b: 60 },
            { a: 100, b: 80 },
            { a: 200, b: 90 },
            { a: 245.11, b: 100.13 },
            { a: 300.13, b: 150.13 },
            { a: 340, b: 200 }
        ];

        let padding = { left: 5, top: 5, right: 15, bottom: 5 };

        let titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };

        let xAxis =
            {
                dataField: 'a',
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                labels: {
                    visible: true,
                    custom: [{ value: 10 }, { value: 20 }]
                },
                gridLines:
                {
                    visible: true,
                    custom: [{ value: 10 }, { value: 20 }]
                },
                tickMarks:
                {
                    visible: true,
                    custom: [{ value: 10 }, { value: 20 }]
                },
                flip: false
            };

        let valueAxis =
            {
                logarithmicScale: true,
                logarithmicScaleBase: 2,
                title: { text: '' },
                labels: {
                    horizontalAlignment: 'right',
                    custom: [{ value: 10 }, { value: 20 }]
                },
                gridLines: {
                    custom: [{ value: 10 }, { value: 20 }]
                },
                tickMarks: {
                    custom: [{ value: 10 }, { value: 20 }]
                },
                flip: false
            };

        let seriesGroups =
            [
                {
                    type: 'scatter',
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                        { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                    ]
                }
            ];

        let visibilityOptions = [true, false, 'custom'];

        return (
            <div>
                <JqxChart ref='myChart' style={{ width: 850, height: 500 }}
                    title={'Custom labels, grid lines and tick marks offsets'} description={''}
                    enableAnimations={false} padding={padding}
                    titlePadding={titlePadding} source={sampleData} xAxis={xAxis}
                    valueAxis={valueAxis} seriesGroups={seriesGroups}
                />
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: 300 }}><b>xAxis settings</b></td>
                            <td style={{ width: 300 }}><b>valueAxis settings</b></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Label, tick marks & grid lines visibility:</p>
                                <JqxDropDownList ref='dropDownLabelsVisibility_xAxis'
                                    width={235} height={25} selectedIndex={0}
                                    dropDownHeight={80} source={visibilityOptions}
                                />
                            </td>
                            <td>
                                <p>Label, tick marks & grid lines visibility:</p>
                                <JqxDropDownList ref='dropDownLabelsVisibility_valueAxis'
                                    width={235} height={25} selectedIndex={0}
                                    dropDownHeight={80} source={visibilityOptions}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Custom positions:</p>
                                <JqxInput ref='inputCustomPosition_xAxis' width={50} height={22}/>
                                <JqxButton value='Add' ref='btnAddCustomPosition_xAxis' />
                                <JqxButton value='Remove' ref='btnRemoveCustomPosition_xAxis' />
                                <JqxListBox style={{ marginTop: 10 }} ref='listboxCustomPositions_xAxis'
                                    width={235} height={80} source={[10, 20]}
                                />
                            </td>
                            <td>
                                <p>Custom positions:</p>
                                <JqxInput ref='inputCustomPosition_valueAxis' width={50} height={22} />
                                <JqxButton value='Add' ref='btnAddCustomPosition_valueAxis' />
                                <JqxButton value='Remove' ref='btnRemoveCustomPosition_valueAxis' />
                                <JqxListBox style={{ marginTop: 10 }} ref='listboxCustomPositions_valueAxis'
                                    width={235} height={80} source={[10, 20]}
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
