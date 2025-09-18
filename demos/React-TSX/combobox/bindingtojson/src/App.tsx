import * as React from 'react';
import { useRef, useState, useMemo, useCallback } from 'react';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

function App() {
    const selectionLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => {
        const src: any = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(src);
    }, []);

    const myComboBoxOnSelect = useCallback((event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item && selectionLog.current) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                const selectionLogElem = selectionLog.current;
                selectionLogElem.innerHTML = '';
                selectionLogElem.appendChild(labelElement);
                selectionLogElem.appendChild(valueElement);
            }
        }
    }, []);

    return (
        <div>
            <JqxComboBox
                theme={'material-purple'}
                onSelect={myComboBoxOnSelect}
                width={150}
                height={30}
                source={source}
                selectedIndex={0}
                displayMember={'ContactName'}
                valueMember={'CompanyName'}
            />
            <div ref={selectionLog} style={{ fontSize: '12px', fontFamily: 'Verdana' }} />
        </div>
    );
}

export default App;