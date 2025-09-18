import * as React from 'react';
import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

function App() {
    const tooltip = {
        formatFunction: (value: number): string => {
            return 'Year: 2016<br/>Price Index:' + value;
        },
        visible: true,
    };

    const values = [102, 115, 130, 137];

    return (
        <JqxBarGauge
            // @ts-ignore
            width={'100%'}
            max={150}
            colorScheme={'scheme02'}
            values={values}
            tooltip={tooltip}
        />
    );
}

export default App;