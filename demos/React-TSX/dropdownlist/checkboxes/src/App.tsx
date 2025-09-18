import * as React from 'react';
import { useRef, useState, useEffect, useCallback } from 'react';
import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

function App() {
    const myDropDownList = useRef<JqxDropDownList>(null);
    const log = useRef<HTMLDivElement>(null);
    const checkedItemsLog = useRef<HTMLDivElement>(null);
    const [source, setSource] = useState<any>(null);

    useEffect(() => {
        const s = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        setSource(new jqx.dataAdapter(s));
    }, []);

    const listOnSelect = useCallback((event: any) => {
        if (event.args) {
            const selectedItem = event.args.item;
            if (selectedItem) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${selectedItem.value}`;

                const labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${selectedItem.label}`;

                const checkedElement = document.createElement('div');
                checkedElement.innerHTML = `Checked: ${selectedItem.checked}`;

                const selectionLog = log.current!;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
                selectionLog.appendChild(checkedElement);

                const items = myDropDownList.current!.getCheckedItems();
                let checkedItems = '';
                for (const item of items) {
                    checkedItems += item.label + ', ';
                }
                checkedItemsLog.current!.innerHTML = checkedItems;
            }
        }
    }, []);

    return (
        <div>
            <JqxDropDownList
                theme="material-purple"
                ref={myDropDownList}
                onSelect={listOnSelect}
                width={200}
                height={30}
                source={source}
                checkboxes={true}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
            <div style={{ float: 'left', marginLeft: '20px', fontSize: '13px', fontFamily: 'Verdana' }}>
                <div ref={log} />
                <div ref={checkedItemsLog} style={{ maxWidth: '300px', marginTop: '20px' }} />
            </div>
        </div>
    );
}

export default App;