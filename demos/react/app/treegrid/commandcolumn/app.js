import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeGrid from '../../../jqwidgets-react/react_jqxtreegrid.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.refs.myTreeGrid.expandAll();
        });
    }
    editClick(event) {
        let editButtonsContainers = document.getElementsByClassName('editButton');
        let cancelButtonsContainers = document.getElementsByClassName('cancelButton');

        let value = event.target.innerText;
        let parentElement = event.target.parentElement.parentElement;
        let rowKey;

        if (parentElement.nodeName === 'DIV') {
            rowKey = parentElement.attributes[0].value;
        } else {
            rowKey = parentElement.children[0].attributes[0].value;
        }

        if (value === 'Edit') {
            this.refs.myTreeGrid.beginRowEdit(rowKey);

            for (let i = 0; i < editButtonsContainers.length; i++) {
                editButtonsContainers[i].children[1].style.marginLeft = '3.7em';
                cancelButtonsContainers[i].style.display = 'none';
            }

            editButtonsContainers[rowKey - 1].children[1].innerText = 'Save';
            editButtonsContainers[rowKey - 1].children[1].style.marginLeft = '1em';
            cancelButtonsContainers[rowKey - 1].style.display = 'inline-block';

        } else {
            editButtonsContainers[rowKey - 1].children[1].innerText = 'Edit';
            editButtonsContainers[rowKey - 1].children[1].style.marginLeft = '3.7em';
            cancelButtonsContainers[rowKey - 1].style.display = 'none';

            this.refs.myTreeGrid.endRowEdit(rowKey);
        }
    }
    render() {
        let data = [
            {
                'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
                'children':
                [
                    {
                        'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                        'children':
                        [
                            { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' },
                            {
                                'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                                children:
                                [
                                    { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                    { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                                ]
                            }
                        ]
                    },
                    {
                        'id': '7', 'name': 'Operations Division', 'budget': '600000', 'location': 'Miami',
                        'children':
                        [
                            { 'id': '8', 'name': 'Manufacturing Department', 'budget': '300000', 'location': 'Miami' },
                            { 'id': '9', 'name': 'Public Relations Department', 'budget': '200000', 'location': 'Miami' },
                            { 'id': '10', 'name': 'Sales Department', 'budget': '100000', 'location': 'Miami' }
                        ]
                    },
                    { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' }
                ]
            }
        ];

        let source =
            {
                dataType: 'json',
                dataFields: [
                    { name: 'name', type: 'string' },
                    { name: 'budget', type: 'number' },
                    { name: 'id', type: 'number' },
                    { name: 'children', type: 'array' },
                    { name: 'location', type: 'string' }
                ],
                hierarchy:
                {
                    root: 'children'
                },
                localData: data,
                id: 'id'
            };

        let dataAdapter = new $.jqx.dataAdapter(source);

        let editSettings =
            {
                saveOnPageChange: true, saveOnBlur: true,
                saveOnSelectionChange: false, cancelOnEsc: true,
                saveOnEnter: true, editOnDoubleClick: false, editOnF2: false
            };

        let rendered = () => {
            let editButtonsContainers = document.getElementsByClassName('editButton');
            let cancelButtonsContainers = document.getElementsByClassName('cancelButton');

            for (let i = 0; i < editButtonsContainers.length; i++) {
                let button = ReactDOM.render(
                    <JqxButton style={{ marginLeft: '3.7em', float: 'left' }}
                        value='Edit' width={60} height={24}
                    />, editButtonsContainers[i]);

                button.on('click', (e) => {
                    this.editClick(e);
                });
            }

            for (let i = 0; i < cancelButtonsContainers.length; i++) {
                let button = ReactDOM.render(
                    <JqxButton style={{ float: 'left' }}
                        value='Cancel' width={60} height={24}
                    />, cancelButtonsContainers[i]);

                button.on('click', (e) => {
                    let parentElement = e.target.parentElement.parentElement;
                    let rowKey;

                    if (parentElement.nodeName === 'DIV') {
                        rowKey = parentElement.attributes[0].value;
                    } else {
                        rowKey = parentElement.children[0].attributes[0].value;
                    }

                    this.refs.myTreeGrid.endRowEdit(rowKey, true);
                });
            }
        }

        let columns =
            [
                { text: 'ID', editable: false, dataField: 'id', width: 150 },
                { text: 'Name', dataField: 'name', width: 250 },
                { text: 'Budget', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', dataField: 'budget', width: 150 },
                { text: 'Location', dataField: 'location', width: 130 },
                {
                    text: 'Edit', cellsAlign: 'center', align: 'center', columnType: 'none', editable: false, sortable: false, dataField: null,
                    cellsRenderer: (row, column, value) => {
                        return `<div data-row='` + row + `' class='editButton'></div>
                                <div data-row='` + row + `' class='cancelButton' style='display: none'></div>`;
                    }
                }
            ];

        return (
            <JqxTreeGrid ref='myTreeGrid'
                width={850}
                source={dataAdapter}
                altRows={true}
                autoRowHeight={false}
                editSettings={editSettings}
                rendered={rendered}
                columns={columns}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
