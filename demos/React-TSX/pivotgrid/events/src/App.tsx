import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPivotGrid, { IPivotGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpivotgrid';
import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

function createPivotDataSource(): any {
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

const App = () => {
    const [pivotSource] = useState(() => createPivotDataSource());
    const eventsLog = useRef<JqxTextArea>(null);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        textAreaRef.current = document.getElementsByTagName('textarea')[0];
    }, []);

    const eventHandler1 = React.useCallback((event: any) => {
        const args = event.args;
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + args.pivotItem.text;
        if (event.type === 'itemselectionchanged') {
            eventData += ', Selected: ' + args.selected;
        }
        eventData += "\r\n";
        if (eventsLog.current && textAreaRef.current) {
            eventsLog.current.val(eventData + textAreaRef.current.value);
        }
    }, []);

    const eventHandler2 = React.useCallback((event: any) => {
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;
        eventData += "\r\n";
        if (eventsLog.current && textAreaRef.current) {
            eventsLog.current.val(eventData + textAreaRef.current.value);
        }
    }, []);

    const eventHandler3 = React.useCallback((event: any) => {
        const t = new Date();
        const timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();
        let eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;
        eventData += "\r\n";
        if (eventsLog.current && textAreaRef.current) {
            eventsLog.current.val(eventData + textAreaRef.current.value);
        }
    }, []);

    const onClearLog = React.useCallback(() => {
        if (eventsLog.current) {
            eventsLog.current.val('');
        }
    }, []);

    return (
        <div>
            <JqxPivotGrid
                theme={'material-purple'}
                style={{ width: 800, height: 400 }}
                onPivotitemexpanding={eventHandler1}
                onPivotitemcollapsing={eventHandler1}
                onPivotitemexpanded={eventHandler1}
                onPivotitemcollapsed={eventHandler1}
                onPivotitemselectionchanged={eventHandler1}
                onSortchanging={eventHandler1}
                onSortchanged={eventHandler1}
                onSortremoving={eventHandler1}
                onSortremoved={eventHandler1}
                onPivotitemmouseup={eventHandler2}
                onPivotitemmousedown={eventHandler2}
                onPivotitemclick={eventHandler2}
                onPivotitemdblclick={eventHandler2}
                onPivotcellmouseup={eventHandler3}
                onPivotcellmousedown={eventHandler3}
                onPivotcellclick={eventHandler3}
                onPivotcelldblclick={eventHandler3}
                source={pivotSource}
                treeStyleRows={true}
                autoResize={false}
                multipleSelectionEnabled={true}
            />
            <br />
            <JqxTextArea theme={'material-purple'} ref={eventsLog} width={800} height={100} />
            <br />
            <JqxButton theme={'material-purple'} onClick={onClearLog} width={90}> Clear Log</JqxButton>
        </div>
    );
};

export default App;