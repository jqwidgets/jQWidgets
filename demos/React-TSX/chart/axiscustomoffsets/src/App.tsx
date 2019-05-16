import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxChart, { IChartProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxchart';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IChartProps {
    dropDownListSource: IDropDownListProps["source"];
    xAxisDropDownSelected: IDropDownListProps["selectedIndex"];
    valueAxisDropDownSelected: IDropDownListProps["selectedIndex"];
}

class App extends React.PureComponent<{}, IState> {
    private myChart = React.createRef<JqxChart>();
    private myCustomXAxisInput = React.createRef<JqxInput>();
    private myCustomValueAxisInput = React.createRef<JqxInput>();
    private myXAxisListBox = React.createRef<JqxListBox>();
    private myValueAxisListBox = React.createRef<JqxListBox>();

    constructor(props: {}) {
        super(props);
        this.dropDownLabelsVisibility_xAxisOnChange = this.dropDownLabelsVisibility_xAxisOnChange.bind(this);
        this.dropDownLabelsVisibility_valueAxisOnChange = this.dropDownLabelsVisibility_valueAxisOnChange.bind(this);
        this.btnAddCustomPosition_xAxisOnClick = this.btnAddCustomPosition_xAxisOnClick.bind(this);
        this.btnAddCustomPosition_valueAxisOnClick = this.btnAddCustomPosition_valueAxisOnClick.bind(this);
        this.btnRemoveCustomPosition_xAxisOnClick = this.btnRemoveCustomPosition_xAxisOnClick.bind(this);
        this.btnRemoveCustomPosition_valueAxisOnClick = this.btnRemoveCustomPosition_valueAxisOnClick.bind(this);

        const sampleData = [
            { a: 0.1535, b: 0.5 },
            { a: 0.48, b: 20.5 },
            { a: 10, b: 60 },
            { a: 100, b: 80 },
            { a: 200, b: 90 },
            { a: 245.11, b: 100.13 },
            { a: 300.13, b: 150.13 },
            { a: 340, b: 200 }
        ];

        this.state = {
            dropDownListSource: [true, false, 'custom'],
            padding: { left: 5, top: 5, right: 15, bottom: 5 },
            seriesGroups: [
                {
                    series: [
                        { dataField: 'a', displayText: 'A', symbolType: 'diamond', symbolSize: 10 },
                        { dataField: 'b', displayText: 'B', symbolType: 'triangle_up', symbolSize: 10 }
                    ],
                    type: 'scatter'
                }
            ],
            source: sampleData,
            title: 'Custom labels, grid lines and tick marks offsets',
            titlePadding: { left: 0, top: 0, right: 0, bottom: 10 },
            valueAxis: {
                flip: false,
                gridLines: {
                    custom: [{ value: 10 }, { value: 20 }]
                },
                labels: {
                    custom: [{ value: 10 }, { value: 20 }],
                    horizontalAlignment: 'right'                   
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,               
                tickMarks: {
                    custom: [{ value: 10 }, { value: 20 }]
                }
            },
            valueAxisDropDownSelected: 0,
            xAxis: {
                dataField: 'a',
                flip: false,
                gridLines:
                {
                    custom: [{ value: 10 }, { value: 20 }],
                    visible: true
                },
                labels: {
                    custom: [{ value: 10 }, { value: 20 }],
                    visible: true
                },
                logarithmicScale: true,
                logarithmicScaleBase: 2,              
                tickMarks:
                {
                    custom: [{ value: 10 }, { value: 20 }],
                    visible: true
                }
            },
            xAxisDropDownSelected: 0
        };
    }

    public render() {
        return (
            <div>
                <JqxChart ref={this.myChart} style={{ width: '850px', height: '500px' }}
                    title={this.state.title} enableAnimations={false} padding={this.state.padding}
                    titlePadding={this.state.titlePadding} source={this.state.source} xAxis={this.state.xAxis}
                    valueAxis={this.state.valueAxis} seriesGroups={this.state.seriesGroups} />
                <table>
                    <tbody>
                        <tr>
                            <td style={{ width: '300px' }}><strong>xAxis settings</strong></td>
                            <td style={{ width: '300px' }}><strong>valueAxis settings</strong></td>
                        </tr>
                        <tr>
                            <td>
                                <p>Label, tick marks & grid lines visibility:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownLabelsVisibility_xAxisOnChange}
                                    width={235} height={25} dropDownHeight={80} selectedIndex={this.state.xAxisDropDownSelected}
                                    source={this.state.dropDownListSource} />
                            </td>
                            <td>
                                <p>Label, tick marks & grid lines visibility:</p>
                                <JqxDropDownList theme={'material-purple'} onChange={this.dropDownLabelsVisibility_valueAxisOnChange}
                                    width={235} height={25} dropDownHeight={80} selectedIndex={this.state.valueAxisDropDownSelected}
                                    source={this.state.dropDownListSource} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>Custom positions:</p>
                                <JqxInput theme={'material-purple'} ref={this.myCustomXAxisInput} width={50} height={22} />
                                <JqxButton theme={'material-purple'} onClick={this.btnAddCustomPosition_xAxisOnClick}>Add</JqxButton>
                                <JqxButton theme={'material-purple'} onClick={this.btnRemoveCustomPosition_xAxisOnClick}>Remove</JqxButton>
                                <JqxListBox theme={'material-purple'} ref={this.myXAxisListBox} style={{ marginTop: '10px' }}
                                    width={235} height={80} source={[10, 20]} />
                            </td >
                            <td>
                                <p>Custom positions:</p>
                                <JqxInput theme={'material-purple'} ref={this.myCustomValueAxisInput} width={50} height={22} />
                                <JqxButton theme={'material-purple'} onClick={this.btnAddCustomPosition_valueAxisOnClick}>Add</JqxButton>
                                <JqxButton theme={'material-purple'} onClick={this.btnRemoveCustomPosition_valueAxisOnClick}>Remove</JqxButton>
                                <JqxListBox theme={'material-purple'} ref={this.myValueAxisListBox} style={{ marginTop: '10px' }}
                                    width={235} height={80} source={[10, 20]} />
                            </td >
                        </tr >
                    </tbody >
                </table >
            </div >
        );
    }

    private dropDownLabelsVisibility_xAxisOnChange(event: any) {
        const value = event.args.item.value;
        const index = event.args.index;
        const newXAxis = this.state.xAxis;
        newXAxis!.labels!.visible = value === 'false' ? false : value;
        newXAxis!.gridLines!.visible = value === 'false' ? false : value;
        newXAxis!.tickMarks!.visible = value === 'false' ? false : value;
        this.setState({
            xAxis: newXAxis,
            xAxisDropDownSelected: index
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private dropDownLabelsVisibility_valueAxisOnChange(event: any) {
        const value = event.args.item.value;
        const index = event.args.index;
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.labels!.visible = value === 'false' ? false : value;
        newValueAxis!.gridLines!.visible = value === 'false' ? false : value;
        newValueAxis!.tickMarks!.visible = value === 'false' ? false : value;
        this.setState({
            valueAxis: newValueAxis,
            valueAxisDropDownSelected: index
        }, () => {
            this.myChart.current!.refresh();
        });
    } 

    private btnAddCustomPosition_xAxisOnClick() {
        const value = this.myCustomXAxisInput.current!.getOptions('value');
        if (!isNaN(parseFloat(value))) {
            this.myXAxisListBox.current!.addItem(parseFloat(value));
            const items = this.myXAxisListBox.current!.getItems();
            const customOffsets = [];
            for (const item of items) {
                customOffsets.push({ value: parseFloat(item.value) });
            }
            const newXAxis = this.state.xAxis;
            newXAxis!.labels!.custom = customOffsets;
            newXAxis!.gridLines!.custom = customOffsets;
            newXAxis!.tickMarks!.custom = customOffsets;
            this.setState({
                xAxis: newXAxis
            }, () => {
                this.myChart.current!.refresh();
            });
        }
    }

    private btnRemoveCustomPosition_xAxisOnClick() {
        const idx = this.myXAxisListBox.current!.getOptions('selectedIndex');
        if (idx === -1) {
            return;
        }
        this.myXAxisListBox.current!.removeAt(idx);
        const items = this.myXAxisListBox.current!.getItems();
        const customOffsets = [];
        for (const item of items) {
            customOffsets.push({ value: parseFloat(item.value) });
        }
        const newXAxis = this.state.xAxis;
        newXAxis!.labels!.custom = customOffsets;
        newXAxis!.gridLines!.custom = customOffsets;
        newXAxis!.tickMarks!.custom = customOffsets;
        this.setState({
            xAxis: newXAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }

    private btnAddCustomPosition_valueAxisOnClick() {
        const value = this.myCustomValueAxisInput.current!.getOptions('value');
        if (!isNaN(parseFloat(value))) {
            this.myValueAxisListBox.current!.addItem(parseFloat(value));
            const items = this.myValueAxisListBox.current!.getItems();
            const customOffsets = [];
            for (const item of items) {
                customOffsets.push({ value: parseFloat(item.value) });
            }
            const newValueAxis = this.state.valueAxis;
            newValueAxis!.labels!.custom = customOffsets;
            newValueAxis!.gridLines!.custom = customOffsets;
            newValueAxis!.tickMarks!.custom = customOffsets;
            this.setState({
                valueAxis: newValueAxis
            }, () => {
                this.myChart.current!.refresh();
            });
        }
    }

    private btnRemoveCustomPosition_valueAxisOnClick() {
        const idx = this.myValueAxisListBox.current!.getOptions('selectedIndex');
        if (idx === -1) {
            return;
        }
        this.myValueAxisListBox.current!.removeAt(idx);
        const items = this.myValueAxisListBox.current!.getItems();
        const customOffsets = [];
        for (const item of items) {
            customOffsets.push({ value: parseFloat(item.value) });
        }
        const newValueAxis = this.state.valueAxis;
        newValueAxis!.labels!.custom = customOffsets;
        newValueAxis!.gridLines!.custom = customOffsets;
        newValueAxis!.tickMarks!.custom = customOffsets;
        this.setState({
            valueAxis: newValueAxis
        }, () => {
            this.myChart.current!.refresh();
        });
    }
}

export default App; 