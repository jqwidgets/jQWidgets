import * as React from 'react';
import { useRef } from 'react';
import JqxDropDownList, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

function App() {
    const log = useRef<HTMLDivElement>(null);

    const sourceSetting: any = {
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

    const source = React.useMemo(() => new jqx.dataAdapter(sourceSetting), []);

    const listOnSelect = (event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item && log.current) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${item.value}`;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${item.label}`;
                log.current.innerHTML = '';
                log.current.appendChild(labelElement);
                log.current.appendChild(valueElement);
            }
        }
    };

    return (
        <div>
            <JqxDropDownList
                theme='material-purple'
                onSelect={listOnSelect}
                width={200}
                height={30}
                source={source}
                selectedIndex={0}
                displayMember='ContactName'
                valueMember='CompanyName'
            />
            <div ref={log} style={{ fontSize: '12px', fontFamily: 'Verdana' }} />
        </div>
    );
}

export default App;