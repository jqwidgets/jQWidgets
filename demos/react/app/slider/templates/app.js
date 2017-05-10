import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';

class App extends React.Component {
    render() {
        return (
            <div>
                <div style={{ marginTop: 10 }}>Default</div>
                <JqxSlider ref='jqxSlider' style={{ marginTop: 10 }}
                    tooltip={true} mode={'fixed'}
                />

                <div style={{ marginTop: 10 }}>Primary</div>
                <JqxSlider ref='jqxSlider2' style={{ marginTop: 10 }}
                    template={'primary'} tooltip={true} mode={'fixed'}
                />

                <div style={{ marginTop: 10 }}>Success</div>
                <JqxSlider ref='jqxSlider3' style={{ marginTop: 10 }}
                    template={'success'} tooltip={true} mode={'fixed'}
                />

                <div style={{ marginTop: 10 }}>Info</div>
                <JqxSlider ref='jqxSlider4' style={{ marginTop: 10 }}
                    template={'info'} tooltip={true} mode={'fixed'}
                />

                <div style={{ marginTop: 10 }}>Warning</div>
                <JqxSlider ref='jqxSlider5' style={{ marginTop: 10 }}
                    template={'warning'} tooltip={true} mode={'fixed'}
                />

                <div style={{ marginTop: 10 }}>Danger</div>
                <JqxSlider ref='jqxSlider6' style={{ marginTop: 10 }}
                    template={'danger'} tooltip={true} mode={'fixed'}
                />                
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
