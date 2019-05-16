import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDataTable, { IDataTableProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatatable';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxListBox, { IListBoxProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

export interface IState extends IDataTableProps {
    dropDownListSource: IDropDownListProps['source'];
    listBoxSource: IListBoxProps['source'];
    displayMember: IListBoxProps['displayMember'];
}

class App extends React.PureComponent<{}, IState> {

    private myDataTable = React.createRef<JqxDataTable>();
    private myDropDownList = React.createRef<JqxDropDownList>();
    private myListBox = React.createRef<JqxListBox>();
    private handleCheckChange: boolean = true;
    private source: any;

    constructor(props: {}) {
        super(props);
        this.updateMyListBox = this.updateMyListBox.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
        this.listBoxOnCheckChange = this.listBoxOnCheckChange.bind(this);
        this.dropDownListOnSelect = this.dropDownListOnSelect.bind(this);
        this.applyFilterBtnOnClick = this.applyFilterBtnOnClick.bind(this);
        this.clearfilterBtnOnClick = this.clearfilterBtnOnClick.bind(this);

        this.source = {
            dataFields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' }
            ],
            dataType: 'array',
            localData: generatedata(200, false),
        };

        this.state = {
            columns: [
                { text: 'First Name', dataField: 'firstname', width: 190 },
                { text: 'Last Name', dataField: 'lastname', width: 190 },
                { text: 'Product', dataField: 'productname', width: 170 },
                { text: 'Quantity', dataField: 'quantity', cellsAlign: 'right' }
            ],
            displayMember: undefined,
            dropDownListSource: [
                { label: 'First Name', value: 'firstname' },
                { label: 'Last Name', value: 'lastname' },
                { label: 'Product', value: 'productname' },
                { label: 'Quantity', value: 'quantity' }
            ],
            listBoxSource: [],
            source: new jqx.dataAdapter(this.source)
        };
    }

    public componentDidMount() {
        this.myDropDownList.current!.setOptions({ selectedIndex: 0});
        this.updateMyListBox('firstname');
    }

    public render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <div>Filter By:</div>

                    <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList} onSelect={this.dropDownListOnSelect}
                        width={160} height={25} source={this.state.dropDownListSource}
                         autoDropDownHeight={true} />

                    <JqxListBox theme={'material-purple'} ref={this.myListBox} style={{ marginTop: '10px' }}
                        onCheckChange={this.listBoxOnCheckChange} source={this.state.listBoxSource}
                        width={160} height={250} checkboxes={true} displayMember={this.state.displayMember} />

                    <div style={{ marginTop: '10px', marginRight: '5px' }}>
                        <JqxButton theme={'material-purple'} onClick={this.applyFilterBtnOnClick}>
                            Apply Filter
                        </JqxButton>

                        <JqxButton theme={'material-purple'} onClick={this.clearfilterBtnOnClick}>
                            Clear Filter
                        </JqxButton>
                    </div>
                </div>

                <JqxDataTable theme={'material-purple'} ref={this.myDataTable} style={{ marginTop: '10px', marginLeft: '20px' }}
                    // @ts-ignore 
                    width={'100%'} source={this.state.source} columns={this.state.columns}
                    pageable={true} altRows={true} pagerButtonsCount={4} />
            </div>
        );
    }

    private updateMyListBox(dataField: string): void {
        this.myDataTable.current!.clearFilters();
        const myListBoxAdapter = new jqx.dataAdapter(this.source,
            {
                autoBind: true,
                uniqueDataFields: [dataField],
            });
        const uniqueRecords = myListBoxAdapter.records;
        uniqueRecords.splice(0, 0, '(Select All)');
        this.setState({
            displayMember: dataField,
            listBoxSource: uniqueRecords
        }, () => {
            this.myListBox.current!.checkAll();
        });
    }

    private applyFilter(dataField: string): void {
        this.myDataTable.current!.clearFilters();
        let filtertype = 'stringfilter';
        if (dataField === 'date') {
            filtertype = 'datefilter';
        }
        if (dataField === 'price' || dataField === 'quantity') {
            filtertype = 'numericfilter';
        }
        // create a new group of filters.
        const filtergroup = new jqx.filter();
        // get listbox's checked items.
        const checkedItems = this.myListBox.current!.getCheckedItems();
        if (checkedItems.length === 0) {
            const filterOrOperator = 1;
            const filtervalue = 'Empty';
            const filtercondition = 'equal';
            const filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
            filtergroup.addfilter(filterOrOperator, filter);
        }
        else {
            for (const item of checkedItems) {
                const filterOrOperator = 1;
                // set filter's value.
                const filtervalue = item.label;
                // set filter's condition.
                const filtercondition = 'equal';
                // create new filter.
                const filter = filtergroup.createfilter(filtertype, filtervalue, filtercondition);
                // add the filter to the filter group.
                filtergroup.addfilter(filterOrOperator, filter);
            }
        }
        // add the filters.
        this.myDataTable.current!.addFilter(dataField, filtergroup);
        // apply the filters.
        this.myDataTable.current!.applyFilters();
    }

    private listBoxOnCheckChange(event: any): void {
        if (!this.handleCheckChange) {
            return;
        }

        if (event.args.label !== '(Select All)') {
            // update the state of the 'Select All' listbox item.
            this.handleCheckChange = false;
            this.myListBox.current!.checkIndex(0);
            const checkedItems = this.myListBox.current!.getCheckedItems();
            const items = this.myListBox.current!.getItems();
            if (checkedItems.length === 1) {
                this.myListBox.current!.uncheckIndex(0);
            }
            else if (items.length !== checkedItems.length) {
                this.myListBox.current!.indeterminateIndex(0);
            }
            this.handleCheckChange = true;
        }
        else {
            // check/uncheck all items if 'Select All' is clicked.
            this.handleCheckChange = false;
            if (event.args.checked) {
                this.myListBox.current!.checkAll();
            }
            else {
                this.myListBox.current!.uncheckAll();
            }
            this.handleCheckChange = true;
        }
    };

    // handle columns selection.
    private dropDownListOnSelect(event: any): void {
        this.myDropDownList.current!.setOptions({ selectedIndex: event.args.index });
        this.updateMyListBox(event.args.item.value);      
    };

    // applies the filter.
    private applyFilterBtnOnClick(): void {
        const dataField = this.myDropDownList.current!.getSelectedItem().value;
        this.applyFilter(dataField);
    };

    // clears the filter.
    private clearfilterBtnOnClick(): void {
        this.myDataTable.current!.clearFilters();
    };
}

export default App;