import * as React from 'react';
 


import JqxTreeGrid, { ITreeGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtreegrid';

declare const jqwidgets: any;

class App extends React.PureComponent<{}, ITreeGridProps> {
    private myTreeGrid = React.createRef<JqxTreeGrid>();
    private rowKey: number = -1;

    constructor(props: {}) {
        super(props);

        this.rowClick = this.rowClick.bind(this);

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
                { dataField: 'name', text: 'Name', width: 250 },
                { align: "right", cellsAlign: "right", cellsFormat: "c2", dataField: 'budget', text: 'Budget', width: 150 },
                { align: "center", cellsAlign: "center", dataField: 'location', text: 'Location', width: 130 },
                {
                    align: 'center',
                    cellsAlign: 'center',
                    cellsRenderer: (row: number, column: any, value: any): string => {
                        return `<div data-row='` + row + `' class='editButton' style='margin-left: 4em; float: left'></div>
                        <div data-row='` + row + `' class='cancelButton' style='display: none; float: left; margin-left: 1em'></div>`;
                    },
                    columnType: 'none',
                    dataField: 'buttons',
                    editable: false,
                    sortable: false
                }
            ],
            editSettings: {
                cancelOnEsc: true,
                editOnDoubleClick: false,
                editOnF2: false,
                saveOnBlur: true,
                saveOnPageChange: true,
                saveOnSelectionChange: false,
            },
            ready: (): void => {
                setTimeout(() => {
                    this.myTreeGrid.current!.expandAll();
                });
            },
            rendered: () => {
                const uglyEditButtons = jqwidgets.createInstance('.editButton', 'jqxButton', { width: 60, height: 24, value: 'Edit' });
                const flattenEditButtons = flatten(uglyEditButtons);
                const uglyCancelButtons = jqwidgets.createInstance('.cancelButton', 'jqxButton', { width: 60, height: 24, value: 'Cancel' });
                const flattenCancelButtons = flatten(uglyCancelButtons);
                function flatten(arr: any[]): any {
                    if (arr.length) {
                        return arr.reduce((flat: any[], toFlatten: any[]): any[] => {
                            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
                        }, []);
                    }
                }
                if (flattenEditButtons) {
                    for (const editButton of flattenEditButtons) {
                        editButton.addEventHandler('click', (event: any): void => {
                            this.editClick(event);
                        });
                    }
                }
                if (flattenCancelButtons) {
                    for (const cancelButton of flattenCancelButtons) {
                        cancelButton.addEventHandler('click', (event: any): void => {
                            this.myTreeGrid.current!.endRowEdit(this.rowKey.toString(), true);
                        });
                    }
                }
            },
            source: dataAdapter
        }
    }


    public render() {
        return (
            <JqxTreeGrid theme={'material-purple'} ref={this.myTreeGrid}
                onRowClick={this.rowClick}
                // @ts-ignore
                width={'100%' }
                source={this.state.source}
                altRows={true}
                autoRowHeight={true}
                editSettings={this.state.editSettings}
                columns={this.state.columns}
                ready={this.state.ready}
                rendered={this.state.rendered}
                />
        );
    }

    // Event handling
    private editClick(event: any): void {
        const value = event.target.innerText;
        const parent = event.currentTarget.parentElement;
        const edit: any = parent.children[1];
        const cancel: any = parent.children[3];

        if (value === "Edit") {
            // Begin edit.
            this.myTreeGrid.current!.beginRowEdit(this.rowKey.toString());
            edit.innerText = "Save";
            edit.style.marginLeft = "1.5em";
            cancel.style.display = "inline-block";
        } else {
            // End edit and save changes.
            edit.innerText = "Edit";
            edit.style.marginLeft = "4em";
            cancel.style.display = "none";
            this.myTreeGrid.current!.endRowEdit(this.rowKey.toString());
        }
    }

    private rowClick(event: any): void {
        this.rowKey = event.args.key;
    }
}

export default App;
