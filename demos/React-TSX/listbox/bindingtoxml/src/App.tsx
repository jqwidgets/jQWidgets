import React, { useRef, useCallback, useMemo } from 'react';
import JqxListBox, { IListBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';

const App = () => {
    const selectionLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => {
        const dataSource: any = {
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            ],
            datatype: 'xml',
            id: 'm\\:properties>d\\:CustomerID',
            record: 'content',
            root: 'entry',
            url: 'customers.xml'
        };
        return new jqx.dataAdapter(dataSource, { async: false });
    }, []);

    const onSelect = useCallback((event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                const labelElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                labelElement.innerHTML = 'Label: ' + item.label;
                const selectionLogDiv = selectionLog.current;
                if (selectionLogDiv) {
                    selectionLogDiv.innerHTML = '';
                    selectionLogDiv.appendChild(labelElement);
                    selectionLogDiv.appendChild(valueElement);
                }
            }
        }
    }, []);

    return (
        <div>
            <JqxListBox
                theme={'material-purple'}
                onSelect={onSelect}
                width={250}
                height={200}
                source={source}
                displayMember={'ContactName'}
                valueMember={'CompanyName'}
            />
            <div ref={selectionLog} style={{ fontSize: '13px', fontFamily: 'Verdana' }} />
        </div>
    );
};

export default App;