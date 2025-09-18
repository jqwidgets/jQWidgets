import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import JqxComboBox, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

const App = () => {
    const selectionLog = useRef<HTMLDivElement>(null);
    const [source, setSource] = useState<any>(null);

    useEffect(() => {
        const src: any = {
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' }
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };
        setSource(new jqx.dataAdapter(src));
    }, []);

    const myComboBoxOnSelect = (event: any): void => {
        if (event.args) {
            const item = event.args.item;
            if (item && selectionLog.current) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                selectionLog.current.innerHTML = '';
                selectionLog.current.appendChild(labelElement);
                selectionLog.current.appendChild(valueElement);
            }
        }
    };

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
};

export default App;