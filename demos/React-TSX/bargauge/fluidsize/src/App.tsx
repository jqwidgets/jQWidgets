import React, { useState } from 'react';
import './App.css';
import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbargauge';

const App = () => {
    const [values] = useState([32, 11, 100, 49, 69, 20]);

    return (
        <JqxBarGauge
            width={'75%'}
            height={'75%'}
            colorScheme={'scheme11'}
            values={values}
        />
    );
};

export default App;