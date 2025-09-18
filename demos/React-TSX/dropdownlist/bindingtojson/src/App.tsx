import * as React from 'react';
import { useRef, useState, useMemo, useCallback } from 'react';
import JqxDropDownList, { IDropDownListProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const log = useRef<HTMLDivElement>(null);

    const source = useMemo(
        () =>
            new jqx.dataAdapter({
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                datatype: 'json',
                id: 'id',
                url: 'customers.txt'
            }),
        []
    );

    const listOnSelect = useCallback((event: any) => {
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
    }, []);

    return (
        <div>
            <JqxDropDownList
                theme="material-purple"
                onSelect={listOnSelect}
                width={200}
                height={30}
                source={source}
                selectedIndex={2}
                displayMember="ContactName"
                valueMember="CompanyName"
            />
            <div ref={log} style={{ fontSize: '12px', fontFamily: 'Verdana' }} />
        </div>
    );
};

export default App;