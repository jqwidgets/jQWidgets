import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
import JqxTooltip from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtooltip';

class App extends React.PureComponent<{}, IGridProps> {

    private counter: number = 1;

    constructor(props: {}) {
        super(props);

        const source: any = {
            datafields: [
                { name: 'ShippedDate', map: 'm\\:properties>d\\:ShippedDate', type: 'date' },
                { name: 'Freight', map: 'm\\:properties>d\\:Freight', type: 'float' },
                { name: 'ShipName', map: 'm\\:properties>d\\:ShipName', type: 'string' },
                { name: 'ShipAddress', map: 'm\\:properties>d\\:ShipAddress', type: 'string' },
                { name: 'ShipCity', map: 'm\\:properties>d\\:ShipCity', type: 'string' },
                { name: 'ShipCountry', map: 'm\\:properties>d\\:ShipCountry', type: 'string' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:OrderID',
            record: 'content',
            root: 'entry',
            sortcolumn: 'ShipName',
            sortdirection: 'asc',
            url: 'orders.xml'
        };

        const tooltiprenderer = (element: any): void => {
            const id = `toolTipContainer${this.counter}`;
            element[0].id = id;
            const content = element[0].innerText;

            setTimeout(() => {
                ReactDOM.render(<JqxTooltip position={'mouse'} content={content}>{content}</JqxTooltip>, document.getElementById(id));
            });

            this.counter++;
        };

        this.state = {
            columns: [
                { text: 'Ship Name', datafield: 'ShipName', width: 250, rendered: tooltiprenderer },
                { text: 'Shipped Date', datafield: 'ShippedDate', width: 100, cellsformat: 'yyyy-MM-dd', rendered: tooltiprenderer },
                { text: 'Freight', datafield: 'Freight', width: 80, cellsformat: 'f2', cellsalign: 'right', rendered: tooltiprenderer },
                { text: 'Ship Address', datafield: 'ShipAddress', width: 350, rendered: tooltiprenderer },
                { text: 'Ship City', datafield: 'ShipCity', width: 100, rendered: tooltiprenderer },
                { text: 'Ship Country', datafield: 'ShipCountry', width: 101, rendered: tooltiprenderer }
            ],
            source: new jqx.dataAdapter(source)
        }
    }

    public render() {
        return (
            <JqxGrid theme={'material-purple'}
                // @ts-ignore
                width={'100%'} height={450} source={this.state.source}
                columns={this.state.columns} altrows={true} sortable={true} />
        );
    }
}

export default App;