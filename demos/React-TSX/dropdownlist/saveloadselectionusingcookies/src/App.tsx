import React, { useState, useEffect, useCallback } from 'react';
import JqxDropDownList, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

const App = () => {
    const [selectedIndex, setSelectedIndex] = useState(() => {
        const idx = jqx.cookie.cookie('jqxDropDownList_jqxWidget');
        return idx === undefined ? 0 : idx;
    });

    const [source] = useState(() => {
        const dataSource = {
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            datatype: 'json',
            id: 'id',
            url: 'customers.txt'
        };
        return new jqx.dataAdapter(dataSource);
    });

    const listOnSelect = useCallback((event: any) => {
        jqx.cookie.cookie('jqxDropDownList_jqxWidget', event.args.index);
        setSelectedIndex(event.args.index);
    }, []);

    useEffect(() => {
        setSelectedIndex(prev => {
            const idx = jqx.cookie.cookie('jqxDropDownList_jqxWidget');
            return idx === undefined ? 0 : idx;
        });
    }, [source]);

    return (
        <JqxDropDownList
            theme={'material-purple'}
            onSelect={listOnSelect}
            width={200}
            height={30}
            source={source}
            selectedIndex={selectedIndex}
            displayMember={'ContactName'}
            valueMember={'CompanyName'}
        />
    );
};

export default App;