import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

class App extends React.PureComponent<{}> {

    private myNotification = React.createRef<JqxNotification>();

    constructor(props: {}) {
        super(props);
        this.openNotificationClick = this.openNotificationClick.bind(this);
        this.closeLastNotificationClick = this.closeLastNotificationClick.bind(this);
        this.closeNotificationsClick = this.closeNotificationsClick.bind(this);
        this.topLeftChecked = this.topLeftChecked.bind(this);
        this.topRightChecked = this.topRightChecked.bind(this);
        this.bottomLeftChecked = this.bottomLeftChecked.bind(this);
        this.bottomRightChecked = this.bottomRightChecked.bind(this);
        this.onChange = this.onChange.bind(this);
        this.closeOnClickCheckboxChange = this.closeOnClickCheckboxChange.bind(this);
        this.autoCloseCheckBoxChange = this.autoCloseCheckBoxChange.bind(this);
        this.blinkCheckboxChange = this.blinkCheckboxChange.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxNotification theme={'material-purple'} ref={this.myNotification}
                    width={'auto'} autoOpen={false} autoClose={true} template={'info'}
                    blink={false} icon={{ width: 25, height: 25, url: 'https://www.jqwidgets.com/react/images/smiley.png', padding: 5 }}
                    closeOnClick={true} opacity={0.9} position={'top-right'}>
                    <div>
                        <span>
                            Welcome to our website.
                        </span>
                    </div>
                </JqxNotification>

                <div style={{ float: 'left', marginLeft: '25%' }}>
                    <JqxButton theme={'material-purple'} onClick={this.openNotificationClick} width={160}>Open notification</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.closeLastNotificationClick} width={160}>Close last notification</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.closeNotificationsClick} width={160}>Close all notifications</JqxButton>
                </div>

                <div style={{ float: 'left', marginLeft: '15px' }}>
                    <JqxExpander theme={'material-purple'} width={200} height={385} toggleMode={'none'} showArrow={false}>
                        <div>
                            jqxNotification settings
                        </div>
                        <div style={{ padding: '5px' }}>
                            <div>
                                Position:
                            </div>
                            <ul style={{ listStyle: 'none', padding: '0px', marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} checked={false} groupName={'position'} onChecked={this.topLeftChecked}>
                                        Top-Left
                                    </JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} checked={true} groupName={'position'} onChecked={this.topRightChecked}>
                                        Top-Right
                                    </JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} checked={false} groupName={'position'} onChecked={this.bottomLeftChecked}>
                                        Bottom-Left
                                    </JqxRadioButton>
                                </li>
                                <li>
                                    <JqxRadioButton theme={'material-purple'} checked={false} groupName={'position'} onChecked={this.bottomRightChecked}>
                                        Bottom-Right
                                    </JqxRadioButton>
                                </li>
                            </ul>
                            <br />
                            <div>
                                Template:
                            </div>
                            <JqxDropDownList theme={'material-purple'} onChange={this.onChange}
                                width={'100%'} height={25} source={['info', 'warning', 'success', 'error', 'mail', 'time', 'null']}
                                autoDropDownHeight={true} selectedIndex={0} />
                            <br />
                            <JqxCheckBox theme={'material-purple'} checked={true} onChange={this.closeOnClickCheckboxChange}>
                                Close on click
                            </JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} checked={true} onChange={this.autoCloseCheckBoxChange}>
                                Auto close
                            </JqxCheckBox>
                            <JqxCheckBox theme={'material-purple'} checked={false} onChange={this.blinkCheckboxChange}>
                                Blink
                            </JqxCheckBox>
                        </div>
                    </JqxExpander>
                </div>
            </div>
        );
    }

    private openNotificationClick(): void {
        this.myNotification.current!.open();
    };

    private closeLastNotificationClick(): void {
        this.myNotification.current!.closeLast();
    };

    private closeNotificationsClick(): void {
        this.myNotification.current!.closeAll();
    };

    private topLeftChecked(): void {
        this.myNotification.current!.setOptions({ position: 'top-left' });
    };

    private topRightChecked(): void {
        this.myNotification.current!.setOptions({ position: 'top-right' });
    };

    private bottomLeftChecked(): void {
        this.myNotification.current!.setOptions({ position: 'bottom-left' });
    };

    private bottomRightChecked(): void {
        this.myNotification.current!.setOptions({ position: 'bottom-right' });
    };

    private onChange (event: any): void {
        const choice = event.args.item.label;
        let newTemplate;
        if (choice !== "null") {
            newTemplate = choice;
        } else {
            newTemplate = null;
        }

        this.myNotification.current!.setOptions({ template: newTemplate });
    };

    private closeOnClickCheckboxChange(event: any): void {
        const checked = event.args.checked;
        this.myNotification.current!.setOptions({ closeOnClick: checked });
    };

    private autoCloseCheckBoxChange(event: any): void {
        const checked = event.args.checked;
        this.myNotification.current!.setOptions({ autoClose: checked });
    };

    private blinkCheckboxChange(event: any): void {
        const checked = event.args.checked;
        this.myNotification.current!.setOptions({ blink: checked });
    };
}

export default App;