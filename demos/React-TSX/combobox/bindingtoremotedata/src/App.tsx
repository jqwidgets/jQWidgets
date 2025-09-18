import * as React from 'react';
import { useRef, useState, useMemo } from 'react';
import JqxComboBox, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcombobox';

function App() {
    const selectionLog = useRef<HTMLDivElement>(null);

    const source = useMemo(() => {
        return new jqx.dataAdapter({
            data: {
                featureClass: "P",
                maxRows: 50,
                style: "full",
                username: "jqwidgets"
            },
            datafields: [
                { name: 'countryName' },
                { name: 'name' },
                { name: 'population', type: 'float' },
                { name: 'continentCode' }
            ],
            datatype: "jsonp",
            url: "http://api.geonames.org/searchJSON"
        });
    }, []);

    const myComboBoxOnSelect = (event: any) => {
        if (event.args) {
            const item = event.args.item;
            if (item) {
                const valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                const labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                const selectionLogEl = selectionLog.current!;
                selectionLogEl.innerHTML = '';
                selectionLogEl.appendChild(labelElement);
                selectionLogEl.appendChild(valueElement);
            }
        }
    };

    return (
        <div>
            <JqxComboBox
                theme="material-purple"
                onSelect={myComboBoxOnSelect}
                width={200}
                height={30}
                source={source}
                selectedIndex={0}
                displayMember="countryName"
                valueMember="name"
            />
            <div ref={selectionLog} style={{ fontSize: '12px', fontFamily: 'Verdana' }} />
        </div>
    );
}

export default App;