import * as React from 'react';
import { useRef, useState } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxExpander from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxexpander';
import JqxNotification from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnotification';
import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxradiobutton';

const App = () => {
    const myNotification = useRef<JqxNotification>(null);

    const [position, setPosition] = useState<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
    const [template, setTemplate] = useState<string | null>('info');
    const [closeOnClick, setCloseOnClick] = useState<boolean>(true);
    const [autoClose, setAutoClose] = useState<boolean>(true);
    const [blink, setBlink] = useState<boolean>(false);

    const openNotificationClick = () => {
        myNotification.current?.open();
    };

    const closeLastNotificationClick = () => {
        myNotification.current?.closeLast();
    };

    const closeNotificationsClick = () => {
        myNotification.current?.closeAll();
    };

    const topLeftChecked = () => {
        setPosition('top-left');
        myNotification.current?.setOptions({ position: 'top-left' });
    };

    const topRightChecked = () => {
        setPosition('top-right');
        myNotification.current?.setOptions({ position: 'top-right' });
    };

    const bottomLeftChecked = () => {
        setPosition('bottom-left');
        myNotification.current?.setOptions({ position: 'bottom-left' });
    };

    const bottomRightChecked = () => {
        setPosition('bottom-right');
        myNotification.current?.setOptions({ position: 'bottom-right' });
    };

    const onChange = (event: any) => {
        const choice = event.args.item.label;
        let newTemplate: string | null;
        if (choice !== "null") {
            newTemplate = choice;
        } else {
            newTemplate = null;
        }
        setTemplate(newTemplate);
        myNotification.current?.setOptions({ template: newTemplate });
    };

    const closeOnClickCheckboxChange = (event: any) => {
        const checked = event.args.checked;
        setCloseOnClick(checked);
        myNotification.current?.setOptions({ closeOnClick: checked });
    };

    const autoCloseCheckBoxChange = (event: any) => {
        const checked = event.args.checked;
        setAutoClose(checked);
        myNotification.current?.setOptions({ autoClose: checked });
    };

    const blinkCheckboxChange = (event: any) => {
        const checked = event.args.checked;
        setBlink(checked);
        myNotification.current?.setOptions({ blink: checked });
    };

    return (
        <div>
            <JqxNotification
                theme="material-purple"
                ref={myNotification}
                width="auto"
                autoOpen={false}
                autoClose={autoClose}
                template={template as any}
                blink={blink}
                icon={{ width: 25, height: 25, url: 'https://www.jqwidgets.com/react/images/smiley.png', padding: 5 }}
                closeOnClick={closeOnClick}
                opacity={0.9}
                position={position}
            >
                <div>
                    <span>
                        Welcome to our website.
                    </span>
                </div>
            </JqxNotification>

            <div style={{ float: 'left', marginLeft: '25%' }}>
                <JqxButton theme="material-purple" onClick={openNotificationClick} width={160}>Open notification</JqxButton>
                <JqxButton theme="material-purple" onClick={closeLastNotificationClick} width={160}>Close last notification</JqxButton>
                <JqxButton theme="material-purple" onClick={closeNotificationsClick} width={160}>Close all notifications</JqxButton>
            </div>

            <div style={{ float: 'left', marginLeft: '15px' }}>
                <JqxExpander theme="material-purple" width={200} height={385} toggleMode="none" showArrow={false}>
                    <div>
                        jqxNotification settings
                    </div>
                    <div style={{ padding: '5px' }}>
                        <div>
                            Position:
                        </div>
                        <ul style={{ listStyle: 'none', padding: '0px', marginTop: '10px', marginLeft: '20px', fontFamily: 'Verdana', fontSize: '12px' }}>
                            <li>
                                <JqxRadioButton
                                    theme="material-purple"
                                    checked={position === 'top-left'}
                                    groupName="position"
                                    onChecked={topLeftChecked}
                                >
                                    Top-Left
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton
                                    theme="material-purple"
                                    checked={position === 'top-right'}
                                    groupName="position"
                                    onChecked={topRightChecked}
                                >
                                    Top-Right
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton
                                    theme="material-purple"
                                    checked={position === 'bottom-left'}
                                    groupName="position"
                                    onChecked={bottomLeftChecked}
                                >
                                    Bottom-Left
                                </JqxRadioButton>
                            </li>
                            <li>
                                <JqxRadioButton
                                    theme="material-purple"
                                    checked={position === 'bottom-right'}
                                    groupName="position"
                                    onChecked={bottomRightChecked}
                                >
                                    Bottom-Right
                                </JqxRadioButton>
                            </li>
                        </ul>
                        <br />
                        <div>
                            Template:
                        </div>
                        <JqxDropDownList
                            theme="material-purple"
                            onChange={onChange}
                            width="100%"
                            height={25}
                            source={['info', 'warning', 'success', 'error', 'mail', 'time', 'null']}
                            autoDropDownHeight={true}
                            selectedIndex={template === null ? 6 : ['info', 'warning', 'success', 'error', 'mail', 'time', 'null'].indexOf(template)}
                        />
                        <br />
                        <JqxCheckBox theme="material-purple" checked={closeOnClick} onChange={closeOnClickCheckboxChange}>
                            Close on click
                        </JqxCheckBox>
                        <JqxCheckBox theme="material-purple" checked={autoClose} onChange={autoCloseCheckBoxChange}>
                            Auto close
                        </JqxCheckBox>
                        <JqxCheckBox theme="material-purple" checked={blink} onChange={blinkCheckboxChange}>
                            Blink
                        </JqxCheckBox>
                    </div>
                </JqxExpander>
            </div>
        </div>
    );
};

export default App;