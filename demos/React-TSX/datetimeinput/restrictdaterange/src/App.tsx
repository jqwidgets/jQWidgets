import * as React from 'react';
import { useState } from 'react';
import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

function App() {
    const [min] = useState<Date>(new Date(2017, 0, 1));
    const [max] = useState<Date>(new Date(2019, 11, 31));

    return (
        <div>
            <div style={{ textAlign: 'center', width: '250px', fontFamily: 'Verdana', fontSize: '13px' }}>
                The navigation is restricted from 01/01/2017 to 01/01/2020
            </div>
            <br />
            <JqxDateTimeInput theme={'material-purple'} width={250} height={30} min={min} max={max} />
        </div>
    );
}

export default App;
