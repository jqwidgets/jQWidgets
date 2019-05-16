import * as React from 'react';
 


import { generatedata } from './generatedata';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';

class App extends React.PureComponent<{}, IGridProps> {

    private log = React.createRef<HTMLDivElement>();

    private observableArray: any = new jqx.observableArray(generatedata(2, false), (changed: any): void => {
        this.updateLog(this.observableArray);
    });

    constructor(props: {}) {
        super(props);
        this.updateLog = this.updateLog.bind(this);
        this.addItemBtnOnClick = this.addItemBtnOnClick.bind(this);
        this.deleteItemBtnOnClick = this.deleteItemBtnOnClick.bind(this);
        this.updateItemBtnOnClick = this.updateItemBtnOnClick.bind(this);
        this.updatePathBtnOnClick = this.updatePathBtnOnClick.bind(this);

        const source: any =
        {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'obserableArray',
            localdata: this.observableArray
        };

        this.state = {
            columns: [
                { text: 'Name', datafield: 'firstname', width: 120 },
                { text: 'Last Name', datafield: 'lastname', width: 120 },
                { text: 'Product', datafield: 'productname', width: 180 },
                { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2' }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public componentDidMount() {
        this.updateLog(this.observableArray);
    }

    public render() {
        return (
            <div>
                <JqxGrid theme={'material-purple'}
                    // @ts-ignore
                    width={'100%'} height={150} source={this.state.source}
                    columns={this.state.columns} columnsresize={true} />

                <br /> <br />
                <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={this.addItemBtnOnClick}> Add Item</JqxButton>
                <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={this.deleteItemBtnOnClick}> Delete Item</JqxButton>
                <JqxButton theme={'material-purple'} style={{ float: 'left', marginRight: '5px' }} onClick={this.updateItemBtnOnClick}> Update Item</JqxButton>
                <JqxButton theme={'material-purple'} style={{ float: 'left' }} onClick={this.updatePathBtnOnClick}> Update Path</JqxButton>
                <br />
                <div ref={this.log} style={{ clear: 'both' }} />
            </div>
        );
    }

    private updateLog(observableArray: any): void {
        let rows = '';
        for (const item of observableArray) {
            rows += observableArray.toJSON(['firstname', 'lastname', 'productname', 'quantity', 'price', 'total'], item);
            rows += '<br/>';
        }
        this.log.current!.innerHTML = rows;
    }

    private addItemBtnOnClick() {
        const row = generatedata(1, false)[0];
        const temp = this.observableArray;
        temp.push(row);
        this.observableArray = temp
    };

    private deleteItemBtnOnClick() {
        if (this.observableArray.length > 0) {
            const temp = this.observableArray;
            temp.splice(0, 1);
            this.observableArray = temp
        }
    };

    private updateItemBtnOnClick() {
        if (this.observableArray.length > 0) {
            const row = generatedata(1, false)[0];
            const temp = this.observableArray;
            temp.set(0, row);
            this.observableArray = temp
        }
    };

    private updatePathBtnOnClick() {
        if (this.observableArray.length > 0) {
            const row = generatedata(1, false)[0];
            const temp = this.observableArray;
            temp.set('0.firstname', row.firstname);
            temp.set('0.lastname', row.lastname);
            this.observableArray = temp
        }
    };
}

export default App;