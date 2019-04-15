import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

class App extends React.PureComponent<{}, IPivotGridProps> {

    private eventsLog = React.createRef<JqxTextArea>();
    private textArea: HTMLTextAreaElement;

    constructor(props: {}) {
        super(props);
        this.eventHandler1 = this.eventHandler1.bind(this);
        this.eventHandler2 = this.eventHandler2.bind(this);
        this.eventHandler3 = this.eventHandler3.bind(this);
        this.onClearLog = this.onClearLog.bind(this);        

        const pivotDataSource = this.createPivotDataSource();

        this.state = {
            source: pivotDataSource
        }
    }

    public componentDidMount() {
        this.textArea = document.getElementsByTagName('textarea')[0];
    }

    public render() {
        return (
            <div>
                <JqxPivotGrid theme={'material-purple'} style={{ width: 800, height: 400 }}
                    onPivotitemexpanding={this.eventHandler1} onPivotitemcollapsing={this.eventHandler1}
                    onPivotitemexpanded={this.eventHandler1} onPivotitemcollapsed={this.eventHandler1}
                    onPivotitemselectionchanged={this.eventHandler1} onSortchanging={this.eventHandler1}
                    onSortchanged={this.eventHandler1} onSortremoving={this.eventHandler1} onSortremoved={this.eventHandler1}

                    onPivotitemmouseup={this.eventHandler2} onPivotitemmousedown={this.eventHandler2}
                    onPivotitemclick={this.eventHandler2} onPivotitemdblclick={this.eventHandler2}

                    onPivotcellmouseup={this.eventHandler3} onPivotcellmousedown={this.eventHandler3}
                    onPivotcellclick={this.eventHandler3} onPivotcelldblclick={this.eventHandler3}

                    source={this.state.source} treeStyleRows={true} autoResize={false}
                    multipleSelectionEnabled={true} />
                <br />
                <JqxTextArea theme={'material-purple'} ref={this.eventsLog} width={800} height={100} />
                <br />
                <JqxButton theme={'material-purple'} onClick={this.onClearLog} width={90}> Clear Log</JqxButton>
            </div>
        );
    }

    private createPivotDataSource(): any {
        // prepare sample data
        const data = [];

        const firstNames = [
            "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
        ];

        const lastNames = [
            "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
        ];

        const productNames = [
            "Black Tea", "Green Tea", "Caffe Espresso"
        ];

        const priceValues = [
            "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
        ];

        for (let i = 0; i < 500; i++) {
            const row: any = {};
            const productindex = Math.floor(Math.random() * productNames.length);
            const price = parseFloat(priceValues[productindex]);
            const quantity = 1 + Math.round(Math.random() * 10);

            row.firstname = firstNames[Math.floor(Math.random() * firstNames.length)];
            row.lastname = lastNames[Math.floor(Math.random() * lastNames.length)];
            row.productname = productNames[productindex];
            row.price = price;
            row.quantity = quantity;
            row.total = price * quantity;

            data[i] = row;
        }

        // create a data source and data adapter
        const source = {
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
            datatype: 'array',
            localdata: data
        };

        const dataAdapter = new jqx.dataAdapter(source);
        dataAdapter.dataBind();

        // create a pivot data source from the dataAdapter
        const pivotDataSource = new jqx.pivot(
            dataAdapter,
            {
                columns: [{ dataField: 'productname' }],
                pivotValuesOnRows: false,
                rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
                totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
                values: [
                    { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
                    { dataField: 'price', 'function': 'count', text: 'count' },
                    { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
                ]
            }
        );

        return pivotDataSource;
    }

    private eventHandler1(event: any): void {
        const args = event.args;
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + args.pivotItem.text;
        if (event.type === 'itemselectionchanged') {
            eventData += ', Selected: ' + args.selected;
        }

        eventData += "\r\n";
        this.eventsLog.current!.val(eventData + this.textArea.value);
    }

    private eventHandler2(event: any): void {
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;

        eventData += "\r\n";
        this.eventsLog.current!.val(eventData + this.textArea.value);
    }

    private eventHandler3(event: any): void {
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;

        eventData += "\r\n";

        this.eventsLog.current!.val(eventData + this.textArea.value);        
    }

    private onClearLog(): void {
        this.eventsLog.current!.val('');
    }
}

export default App;