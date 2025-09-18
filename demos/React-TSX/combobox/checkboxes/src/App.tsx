import * as React from 'react';
import { useEffect, useRef, useState, useCallback } from 'react';
import JqxComboBox, { IComboBoxProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

const App = () => {
    const myComboBox = useRef<JqxComboBox>(null);
    const selectionLog = useRef<HTMLDivElement>(null);
    const checkedItemsLog = useRef<HTMLDivElement>(null);

    const [source] = useState(() => {
        const src: any = {
            async: false,
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt',
        };
        return new jqx.dataAdapter(src);
    });

    const myComboBoxOnCheckChange = useCallback((event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                const checkedElement = document.createElement('div');
                checkedElement.innerHTML = 'Checked: ' + item.checked;
                const selectionLogEl = selectionLog.current!;
                selectionLogEl.innerHTML = '';
                selectionLogEl.appendChild(labelElement);
                selectionLogEl.appendChild(valueElement);
                selectionLogEl.appendChild(checkedElement);

                const items = myComboBox.current!.getCheckedItems();
                let checkedItems = '';
                for (const obj of items) {
                    checkedItems += obj.label + ', ';
                }
                checkedItemsLog.current!.innerHTML = checkedItems;
            }
        }
    }, []);

    useEffect(() => {
        myComboBox.current!.checkIndex(0);
    }, []);

    return (
        <div>
            <JqxComboBox
                theme="material-purple"
                ref={myComboBox}
                style={{ float: 'left' }}
                onCheckChange={myComboBoxOnCheckChange}
                width={200}
                height={30}
                source={source}
                checkboxes={true}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
            <div style={{ float: 'left', marginLeft: '20px', fontSize: '13px', fontFamily: 'Verdana' }}>
                <div ref={selectionLog} />
                <div ref={checkedItemsLog} style={{ maxWidth: '300px', marginTop: '20px' }} />
            </div>
        </div>
    );
};

export default App;