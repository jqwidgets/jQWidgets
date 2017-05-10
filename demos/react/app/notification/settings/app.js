import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.openNotification.on('click', () => {
            this.refs.jqxNotification.open();
        });

        this.refs.closeLastNotification.on('click', () => {
            this.refs.jqxNotification.closeLast();
        });

        this.refs.closeNotifications.on('click', () => {
            this.refs.jqxNotification.closeAll();
        });
        
        this.refs.topLeft.on('checked', (event) => {
            this.refs.jqxNotification.position('top-left');
        });    
        
        this.refs.topRight.on('checked', (event) => {
            this.refs.jqxNotification.position('top-right');
        });    
        
        this.refs.bottomLeft.on('checked', (event) => {
            this.refs.jqxNotification.position('bottom-left');
        });  

        this.refs.bottomRight.on('checked', (event) => {
            this.refs.jqxNotification.position('bottom-right');
        });    
        
        this.refs.templateDropDownList.on('change', (event) => {
            let choice = event.args.item.label;
                let newTemplate;
                if (choice != "null") {
                    newTemplate = choice;
                } else {
                    newTemplate = null;
                }

            this.refs.jqxNotification.template(newTemplate);
        });    
        
        this.refs.closeOnClickCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.jqxNotification.closeOnClick(checked);
        });    
        
        this.refs.autoCloseCheckBox.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.jqxNotification.autoClose(checked);
        });
        
        this.refs.blinkCheckbox.on('change', (event) => {
            let checked = event.args.checked;
            this.refs.jqxNotification.blink(checked);
        });    
    }
    render() {
        return (
            <div>
                
                <JqxNotification ref='jqxNotification'
                    width={'auto'} opacity={0.9} blink={false} icon={{ width: 25, height: 25, url: '../../images/smiley.png', padding: 5 }}
                    autoClose={true} closeOnClick={true} autoOpen={false} position={'top-right'} template={'info'}
                >
                    Sample notification</JqxNotification>

                <div style={{ float: 'left', marginLeft: '25%' }}>
                    <JqxButton ref='openNotification' style={{ marginBottom: 10 }}
                        value='Open notification' width={150} />

                    <JqxButton ref='closeLastNotification' style={{ marginBottom: 10 }}
                        value='Close last notification' width={150} />

                    <JqxButton ref='closeNotifications'
                        value='Close all notifications' width={150} />
                </div>

                <JqxExpander ref='settingsExpander' style={{ float: 'left', marginLeft: 15 }}
                    width={200}
                    height={385}
                    toggleMode={'none'}
                    showArrow={false}>
                    <div>
                        jqxNotification settings</div>
                    <div style={{ padding: 5 }} >
                        <div>
                            Position:
                       </div>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: 10, marginLeft: 20, fontFamily: 'Verdana', fontSize: 12 }}>
                            <li>
                                <JqxRadioButton ref='topLeft'
                                    checked={false} groupName={'position'}>
                                    Top-left
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton ref='topRight' style={{ marginTop: 5 }}
                                    checked={true} groupName={'position'}>
                                    Top-right
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton ref='bottomLeft' style={{ marginTop: 5 }}
                                    checked={false} groupName={'position'}>
                                    Bottom-left
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton ref='bottomRight' style={{ marginTop: 5 }}
                                    checked={false} groupName={'position'}>
                                    Bottom-right
                                </JqxRadioButton>
                            </li>

                        </ul>
                        <br />
                        <div>
                            Template:
                       </div>
                        <JqxDropDownList ref='templateDropDownList'
                            width={'100%'} height={25}
                            source={['info', 'warning', 'success', 'error', 'mail', 'time', 'null']}
                            selectedIndex={0}
                            autoDropDownHeight={true}
                        />
                        <br />
                        <JqxCheckBox ref='closeOnClickCheckbox' value='Close on click'
                            checked={true}
                        />
                        <JqxCheckBox ref='autoCloseCheckBox' value='Auto close'
                            checked={true}
                        />
                        <JqxCheckBox ref='blinkCheckbox' value='Blink'
                            checked={false}
                        />
                    </div>

                </JqxExpander>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
