import React from 'react';
import ReactDOM from 'react-dom';

import JqxScrollBar from '../../../jqwidgets-react/react_jqxscrollbar.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.jqxScrollBar.on('valueChanged', (event) => {
            document.getElementById('HorizontalDiv').innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
        });
    }
    render() {
        return (
            <div>
                <div style={{ marginTop: 20 }} id='HorizontalDiv'>Horizontal</div>
                <JqxScrollBar ref='jqxScrollBar'
                    rtl={true} width={280} height={18} min={0} max={1000}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
