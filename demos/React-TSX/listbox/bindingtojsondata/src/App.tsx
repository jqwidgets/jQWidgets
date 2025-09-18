import * as React from 'react';
import JqxListBox, { IListBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

function App() {
    const selectionLog = React.useRef<HTMLDivElement>(null);

    const [source] = React.useState(() => {
        const sourceConfig = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(sourceConfig);
    });

    const onSelect = React.useCallback((event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item && selectionLog.current) {
                const valueElement = document.createElement('div');
                const labelElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                labelElement.innerHTML = 'Label: ' + item.label;
                const selectionDiv = selectionLog.current;
                selectionDiv.innerHTML = '';
                selectionDiv.appendChild(labelElement);
                selectionDiv.appendChild(valueElement);
            }
        }
    }, []);

    return (
        <div>
            <JqxListBox
                theme="material-purple"
                onSelect={onSelect}
                width={250}
                height={200}
                source={source}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
            <div ref={selectionLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
        </div>
    );
}

export default App;