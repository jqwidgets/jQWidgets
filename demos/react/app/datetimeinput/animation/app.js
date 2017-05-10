import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.noneAnimation.on('checked', () => {
            this.refs.myDateTimeInput.animationType('none');
        });
        this.refs.fadeAnimation.on('checked', () => {
            this.refs.myDateTimeInput.animationType('fade');
        });
        this.refs.slideAnimation.on('checked', () => {
            this.refs.myDateTimeInput.animationType('slide');
        });
    }
    render() {
        return (
            <div>
                <div style={{ float: 'left' }}>
                    <h3>Animation Type</h3>
                    <JqxRadioButton ref='noneAnimation' checked={false}>
                        None
                    </JqxRadioButton>
                    <JqxRadioButton ref='slideAnimation' checked={false} style={{ marginTop: 10 }}>
                        Slide
                    </JqxRadioButton>
                    <JqxRadioButton ref='fadeAnimation' checked={true} style={{ marginTop: 10 }}>
                        Fade
                    </JqxRadioButton>
                </div>
                <JqxDateTimeInput ref='myDateTimeInput' style={{ float: 'left', marginTop: 40, marginLeft: 100 }}
                    width={150} height={25} animationType={'fade'}
                    dropDownHorizontalAlignment={'right'}
                />
            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
