import * as React from 'react';
import { useState } from 'react';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const [mode] = useState<'fixed'>('fixed');
    const [tooltip] = useState<boolean>(true);
    const styleSettings: React.CSSProperties = { margin: '10px 0px' };

    return (
        <div style={{ float: 'left' }}>
            <div style={styleSettings}>Default</div>
            <JqxSlider theme="material-purple" mode={mode} tooltip={tooltip} />

            <div style={styleSettings}>Primary</div>
            <JqxSlider theme="material-purple" template="primary" mode={mode} tooltip={tooltip} />

            <div style={styleSettings}>Success</div>
            <JqxSlider theme="material-purple" template="success" mode={mode} tooltip={tooltip} />

            <div style={styleSettings}>Info</div>
            <JqxSlider theme="material-purple" template="info" mode={mode} tooltip={tooltip} />

            <div style={styleSettings}>Warning</div>
            <JqxSlider theme="material-purple" template="warning" mode={mode} tooltip={tooltip} />

            <div style={styleSettings}>Danger</div>
            <JqxSlider theme="material-purple" template="danger" mode={mode} tooltip={tooltip} />
        </div>
    );
};

export default App;