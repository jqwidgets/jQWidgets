import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.rightAlign.on('checked', () => {
            this.refs.myDateTimeInput.dropDownHorizontalAlignment('right');
        });
        this.refs.leftAlign.on('checked', () => {
            this.refs.myDateTimeInput.dropDownHorizontalAlignment('left');
        });
    }
    render() {
        return (        
            <div>
                <div style={{ float: 'left', fontSize: 12, fontFamily: 'Verdana' }} id="selectionlog">
                    <h3>Alignment</h3>
                    <JqxRadioButton ref='leftAlign' checked={false}>
                        Left
                    </JqxRadioButton>
                    <JqxRadioButton ref='rightAlign' checked={false} style={{ marginTop: 10 }}>
                        Right
                    </JqxRadioButton>
                </div>
                <JqxDateTimeInput ref='myDateTimeInput'
                    style={{ float: 'left', marginTop: 20, marginLeft: 100 }}
                    width={150} height={25} animationType={'fade'}
                    dropDownHorizontalAlignment={'right'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
