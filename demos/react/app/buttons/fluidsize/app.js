import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxDropDownButton from '../../../jqwidgets-react/react_jqxdropdownbutton.js';
import JqxSwitchButton from '../../../jqwidgets-react/react_jqxswitchbutton.js';

class App extends React.Component {
    componentDidMount() {
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">DropDownButton</div>';
        this.refs.myDropDownButton.setContent(dropDownContent);
    }
    render() {
        return (
            <div>
                <b>Checkbox</b>
                <JqxCheckBox style={{ marginTop: 10 }} value='eLearning' width={'30%'} />
                <JqxCheckBox style={{ marginTop: 5, marginBottom: 10 }} value='Mobile' width={'30%'} />

                <b>Radio Button</b>
                <JqxRadioButton style={{ marginTop: 10 }} width={'30%'}>On</JqxRadioButton>
                <JqxRadioButton style={{ marginTop: 5, marginBottom: 10 }} width={'30%'}>Off</JqxRadioButton>

                <b>DropDown Button</b>
                <JqxDropDownButton ref='myDropDownButton' style={{ marginTop: 10, marginBottom: 10 }} width={'50%'} height={25}>
                    <div>
                        <ul>
                            <li>Education</li>
                            <li>Financial services</li>
                            <li>Government</li>
                            <li>Manufacturing</li>
                            <li>Solutions
                                <ul>
                                    <li>eLearning</li>
                                    <li>Mobile</li>
                                    <li>RIA</li>
                                    <li>Training</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </JqxDropDownButton>

                <b>Switch Button</b>
                <JqxSwitchButton style={{ marginTop: 10 }} width={'20%'} />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
