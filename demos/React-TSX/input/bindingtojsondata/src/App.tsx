import * as React from 'react';
import JqxInput, { IInputProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';

const App = () => {
    const myInput = React.useRef<JqxInput>(null);
    const selectionLog = React.useRef<HTMLDivElement>(null);

    const [source] = React.useState(() => {
        const s: any = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(s);
    });

    const myInputOnSelect = React.useCallback((event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;

                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;

                const selectionLogCurrent = selectionLog.current!;
                selectionLogCurrent.innerHTML = '';

                selectionLogCurrent.appendChild(labelElement);
                selectionLogCurrent.appendChild(valueElement);

                setTimeout(() => myInput.current!.val(item.label));
            }
        }
    }, []);

    return (
        <div>
            <JqxInput
                theme="material-purple"
                ref={myInput}
                onSelect={myInputOnSelect}
                width={200}
                height={25}
                source={source}
                placeHolder="Contact Name:"
                valueMember="CompanyName"
                displayMember="ContactName"
            />
            <br />
            <label style={{ fontFamily: 'Verdana', fontSize: '10px' }}>ex: Ana</label>
            <div ref={selectionLog} style={{ fontFamily: 'Verdana', fontSize: '13px' }} />
        </div>
    );
};

export default App;