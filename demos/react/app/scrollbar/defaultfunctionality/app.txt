import React from 'react';
import ReactDOM from 'react-dom';

import JqxScrollBar from '../../../jqwidgets-react/react_jqxscrollbar.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myScrollBar.on('valueChanged', function (event) {
            document.getElementById('HorizontalDiv').innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
        });
        this.refs.myVerticalScrollBar.on('valueChanged', function (event) {
            document.getElementById('VerticalDiv').innerText = 'Vertical (' + parseInt(event.currentValue) + ')';
        });
    }
    render () {
        return (
            <div>
                <div id='VerticalDiv'>Vertical</div>
                <JqxScrollBar ref='myVerticalScrollBar'
                  width={280} height={18} min={0} max={1000}
                />

                <div style={{ marginTop: 20 }} id='HorizontalDiv'>Horizontal</div>
                <JqxScrollBar ref='myScrollBar'
                  width={18} height={280} min={0} max={1000} vertical={true}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
