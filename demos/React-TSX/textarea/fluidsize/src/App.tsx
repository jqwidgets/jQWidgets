import * as React from 'react';
import JqxTextArea, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

const App = () => {
    const myTextArea = React.useRef<JqxTextArea>(null);

    const source = React.useMemo(() => ({
        dataFields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        dataType: 'json',
        url: 'customers.txt'
    }), []);

    const dataAdapter = React.useMemo(() => new jqx.dataAdapter(source), [source]);

    return (
        <div>
            <JqxTextArea
                theme="material-purple"
                ref={myTextArea}
                width="30%"
                height={80}
                source={dataAdapter}
                displayMember="ContactName"
                valueMember="CompanyName"
                placeHolder="Contact Name:"
            />
            <label style={{ fontFamily: 'Verdana', fontSize: 10 }}>
                ex: Ana
            </label>
        </div>
    );
};

export default App;