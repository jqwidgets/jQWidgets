import * as React from 'react';
 

import * as ReactDOM from "react-dom";

import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';
import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private dropdownlist = React.createRef<JqxDropDownList>();
    private slider = React.createRef<JqxSlider>();

    constructor(props: {}) {
        super(props);

        const data: any[] = [
            {
                'budget': '1230000',
                'children':
                    [
                        {
                            'budget': '423000',
                            'children':
                                [
                                    {
                                        'budget': '113000',
                                        'id': '3',
                                        'location': 'San Antonio',
                                        'name': 'Accounting Department'
                                    },
                                    {
                                        'budget': '310000',
                                        'children': [
                                            { 'budget': '240000', 'id': '5', 'location': 'San Antonio', 'name': 'Banking Office' },
                                            { 'budget': '70000', 'id': '6', 'location': 'San Antonio', 'name': 'Bonds Office' }
                                        ],
                                        'id': '4',
                                        'location': 'San Antonio',
                                        'name': 'Investment Department'
                                    }
                                ],
                            'id': '2',
                            'location': 'San Antonio',
                            'name': 'Finance Division'
                        },
                        {
                            'budget': '600000',
                            'children':
                                [
                                    { 'budget': '300000', 'id': '8', 'location': 'Miami', 'name': 'Manufacturing Department' },
                                    { 'budget': '200000', 'id': '9', 'location': 'Miami', 'name': 'Public Relations Department' },
                                    { 'budget': '100000', 'id': '10', 'location': 'Miami', 'name': 'Sales Department' }
                                ],
                            'id': '7',
                            'location': 'Miami',
                            'name': 'Operations Division'

                        },
                        { 'budget': '200000', 'id': '11', 'location': 'Boston', 'name': 'Research Division' }
                    ],
                'id': '1',
                'location': 'Las Vegas',
                'name': 'Corporate Headquarters'
            }
        ];

        const source: any = {
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'budget', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'children', type: 'array' },
                { name: 'location', type: 'string' }
            ],
            dataType: 'json',
            hierarchy:
            {
                root: 'children'
            },
            id: 'id',
            localData: data
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        this.state = {
            columns: [
                { editable: false, dataField: 'id', text: 'ID', width: 150 },
                {
                    columnType: 'template',
                    createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
                        // construct the editor. 
                        const sourceName: string[] = ['Corporate Headquarters', 'Finance Division', 'Accounting Department', 'Investment Department',
                            'Banking Office', 'Bonds Office', 'Operations Division', 'Manufacturing Department',
                            'Public Relations Department', 'Sales Department', 'Research Division'];
                        const wrapperDropdownlist = document.createElement('div');
                        wrapperDropdownlist.style.cssText = 'overflow: hidden; position: relative; height: 100%; width: 100%;';
                        editor[0].appendChild(wrapperDropdownlist);
                        const dropdownlist =
                            <JqxDropDownList theme={'material-purple'} ref={this.dropdownlist}
                                autoDropDownHeight={true}
                                height={'100%'}
                                source={sourceName}
                                width={'100%'}
                            />;

                        ReactDOM.render(dropdownlist, wrapperDropdownlist);
                    },
                    dataField: 'name',
                    getEditorValue: (row: any, cellvalue: any, editor: any) => {
                        // return the editor's value.
                        return this.dropdownlist.current!.val();
                    },
                    initEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
                        // set the editor's current value. The callback is called each time the editor is displayed.
                        this.dropdownlist.current!.selectItem(cellvalue);
                    },
                    text: 'Name',
                    width: 250
                },
                {
                    align: "right",
                    cellsAlign: "right",
                    cellsFormat: "c2",
                    columnType: 'template',
                    createEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
                        const wrapperSlider = document.createElement('div');
                        editor[0].appendChild(wrapperSlider);
                        const tooltipFormatFunction = (value: any) => {
                            return jqx.formatNumber(value, 'c2');
                        };
                        const slider =
                            <JqxSlider theme={'material-purple'} ref={this.slider}
                                height={height}
                                max={1250000}
                                min={0}
                                showTicks={false}
                                tooltip={true}
                                tooltipFormatFunction={tooltipFormatFunction}
                                width={width}
                            />;

                        ReactDOM.render(slider, wrapperSlider);
                    },
                    dataField: 'budget',
                    getEditorValue: (row: any, cellvalue: any, editor: any) => {
                        // return the editor's value.
                        return this.slider.current!.getValue();
                    },
                    initEditor: (row: any, cellvalue: any, editor: any, cellText: any, width: any, height: any) => {
                        // set the editor's current value. The callback is called each time the editor is displayed.
                        let value = parseInt(cellvalue, 10);
                        if (isNaN(value)) {
                            value = 0;
                        }

                        this.slider.current!.setValue(value);
                    },
                    text: 'Budget',
                    width: 150
                },
                { dataField: 'location', text: 'Location' }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandRow(1);
                    this.myTreeGrid.current!.expandRow(2);
                    this.myTreeGrid.current!.expandRow(7);
                });
            },
            source: dataAdapter
        }
    }


    public render() {
        return (
           <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
            // @ts-ignore
				    width={'100%'}
				    source={this.state.source}
				    altRows={true}
				    autoRowHeight={true}
				    editable={true}
				    columns={this.state.columns}
				    ready={this.state.ready}
			    />
        );
    }
}

export default App;
