import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

export interface IState extends IGridProps {
    dropDownSource: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    private myGrid = React.createRef<JqxGrid>();
    private myDropDownList = React.createRef<JqxDropDownList>();
    private myInput = React.createRef<JqxInput>();
    private myWindow = React.createRef<JqxWindow>();

    constructor(props: {}) {
        super(props);
        this.findBtnOnClick = this.findBtnOnClick.bind(this);
        this.clearBtnOnClick = this.clearBtnOnClick.bind(this);

        const rendertoolbar = (toolbar: any): void => {
            const style: React.CSSProperties = { float: 'left', marginLeft: '5px' };

            const buttonsContainer = (
                <div style={{ overflow: 'hidden', position: 'relative', margin: '5px' }}>
                    <div id={'addButton'} style={style} />
                    <div id={'deleteButton'} style={style} />
                    <div id={'reloadButton'} style={style} />
                    <div id={'searchButton'} style={style} />
                </div>
            );

            ReactDOM.render(buttonsContainer, toolbar[0]);
        };

        this.state = {
            columns: [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
                { text: 'Product', datafield: 'productname', width: 170 },
                { text: 'In Stock', datafield: 'available', columntype: 'checkbox', width: 125 },
                { text: 'Quantity', datafield: 'quantity', width: 85, cellsalign: 'right', cellsformat: 'n2' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            dropDownSource: ['First Name', 'Last Name', 'Product', 'Quantity', 'Price'],
            rendertoolbar,
            source: this.getAdapter()
        }
    }

    public componentDidMount() {
        setTimeout(() => {
            this.createButtons();
        });      
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'} ref={this.myGrid}
                    // @ts-ignore
                    width={'100%'} source={this.state.source} showtoolbar={true}
                    rendertoolbar={this.state.rendertoolbar} columns={this.state.columns} />

                <JqxWindow theme={'material-purple'} ref={this.myWindow} width={210} height={180} autoOpen={false} resizable={false}>
                    <div>Find Record</div>
                    <div style={{ overflow: 'hidden' }}>
                        <div>Find what:</div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxInput theme={'material-purple'} ref={this.myInput} width={194} height={23} />
                        </div>
                        <div style={{ marginTop: '7px', clear: 'both' }}>Look in:</div>
                        <div style={{ marginTop: '5px' }}>
                            <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList}
                                width={200} height={23} selectedIndex={0}
                                source={this.state.dropDownSource} autoDropDownHeight={true} />
                        </div>
                        <div>
                            <JqxButton theme={'material-purple'} style={{ marginTop: '15px', marginLeft: '50px', float: 'left' }}
                                onClick={this.findBtnOnClick} width={70}>
                                Find
                            </JqxButton>

                            <JqxButton theme={'material-purple'} style={{ marginLeft: '5px', marginTop: '15px', float: 'left' }}
                                onClick={this.clearBtnOnClick} width={70}>
                                Clear
                            </JqxButton>
                        </div>
                    </div>
                </JqxWindow>
            </div>
        );
    }

    private getAdapter = (): any => {
        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'available', type: 'bool' }
            ],
            datatype: 'array',
            localdata: generatedata(15),
            updaterow: (rowid: number, rowdata: any, commit: any): void => {
                // synchronize with the server - send update command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failed.
                commit(true);
            }
        };

        const dataAdapter: any = new jqx.dataAdapter(source);

        return dataAdapter;
    };

    private createButtons(): void {
        const addButtonClick = (event?: any) => {
            const datarow = generatedata(1);
            this.myGrid.current!.addrow(null, datarow[0]);
        };

        const deleteButtonClick = (event?: any) => {
            const selectedrowindex = this.myGrid.current!.getselectedrowindex();
            const id = this.myGrid.current!.getrowid(selectedrowindex);
            this.myGrid.current!.deleterow(id);
        };

        const reloadButtonClick = (event?: any) => {
            this.myGrid.current!.setOptions({ source: this.getAdapter() });
        };

        const searchButtonClick = (event?: any) => {
            this.myWindow.current!.open();
            this.myWindow.current!.move(60, 60);
        };

        ReactDOM.render(
            <JqxButton theme={'material-purple'} onClick={addButtonClick}
                width={80} height={25} value={'Add'} imgSrc={'https://www.jqwidgets.com/react/images/add.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('addButton')
        );

        ReactDOM.render(
            <JqxButton theme={'material-purple'} onClick={deleteButtonClick}
                width={80} height={25} value={'Delete'} imgSrc={'https://www.jqwidgets.com/react/images/close.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('deleteButton')
        );

        ReactDOM.render(
            <JqxButton theme={'material-purple'} onClick={reloadButtonClick}
                width={80} height={25} value={'Reload'} imgSrc={'https://www.jqwidgets.com/react/images/refresh.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('reloadButton')
        );

        ReactDOM.render(
            <JqxButton theme={'material-purple'} onClick={searchButtonClick}
                width={80} height={25} value={'Find'} imgSrc={'https://www.jqwidgets.com/react/images/search.png'}
                imgPosition={'center'} textPosition={'center'} textImageRelation={'imageBeforeText'} />,
            document.getElementById('searchButton')
        );
    }

    private findBtnOnClick(): void {
        this.myGrid.current!.clearfilters();
        const searchColumnIndex = this.myDropDownList.current!.getSelectedIndex();
        let datafield = '';
        switch (searchColumnIndex) {
            case 0:
                datafield = 'firstname';
                break;
            case 1:
                datafield = 'lastname';
                break;
            case 2:
                datafield = 'productname';
                break;
            case 3:
                datafield = 'quantity';
                break;
            case 4:
                datafield = 'price';
                break;
        }
        const searchText = this.myInput.current!.getOptions('value');
        const filtergroup = new jqx.filter();
        const filterOrOperator = 1;
        const filtervalue = searchText;
        const filtercondition = 'contains';
        const filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        filtergroup.addfilter(filterOrOperator, filter);
        this.myGrid.current!.addfilter(datafield, filtergroup);
        // apply the filters.
        this.myGrid.current!.applyfilters();
    }

    private clearBtnOnClick(): void {
        this.myGrid.current!.clearfilters();
    }
}

export default App;