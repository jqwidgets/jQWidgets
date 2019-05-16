import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxDropDownButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownbutton';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private myDropDownButton = React.createRef<JqxDropDownButton>();
    private myGrid = React.createRef<JqxGrid>();

    constructor(props: {}) {
        super(props);
        this.myGridOnRowSelect = this.myGridOnRowSelect.bind(this);

        const source: any = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' }
            ],
            datatype: 'array',
            localdata: generatedata(100, false)
        };

        this.state = {
            columns: [
                { text: 'First Name', columntype: 'textbox', datafield: 'firstname' },
                { text: 'Last Name', datafield: 'lastname', columntype: 'textbox' },
                { text: 'Product', columntype: 'dropdownlist', datafield: 'productname' },
                { text: 'Quantity', datafield: 'quantity', width: 70, cellsalign: 'right' },
                { text: 'Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
            ],
            ready: (): void => {
                setTimeout(() => {
                    this.myGrid.current!.selectrow(0);
                });               
            },
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxDropDownButton theme={'material-purple'} ref={this.myDropDownButton} width={150} height={25}>
                <JqxGrid theme={'material-purple'} ref={this.myGrid} onRowselect={this.myGridOnRowSelect}
                    width={500} source={this.state.source} columns={this.state.columns}
                    ready={this.state.ready} pageable={true} columnsresize={true} autoheight={true} />
            </JqxDropDownButton>
        );
    }

    private myGridOnRowSelect(event: any): void {
        const args = event.args;
        const row = this.myGrid.current!.getrowdata(args.rowindex);
        const dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">' + row.firstname + ' ' + row.lastname + '</div>';
        this.myDropDownButton.current!.setContent(dropDownContent);
    }
}

export default App;