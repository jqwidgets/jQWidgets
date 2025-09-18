import * as React from 'react';
import { useRef, useEffect, useState, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxDocking, { IDockingProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdocking';
import JqxSlider from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxslider';

const App = () => {
    const myDocking = useRef<JqxDocking>(null);
    const collapseButtonsCheckbox = useRef<JqxCheckBox>(null);
    const closeButtonsCheckbox = useRef<JqxCheckBox>(null);
    const mySlider = useRef<JqxSlider>(null);

    const [windowsOffset, setWindowsOffset] = useState(5);

    useEffect(() => {
        if (myDocking.current) {
            myDocking.current.setWindowPosition('window0', 100, 100);
            myDocking.current.pinWindow('window1');
            myDocking.current.hideAllCloseButtons();
            myDocking.current.showAllCollapseButtons();
        }
        if (mySlider.current) {
            mySlider.current.setOptions({ value: 5 });
        }
    }, []);

    const collapseButtonsCheckboxOnChange = useCallback(() => {
        const checked = collapseButtonsCheckbox.current?.getOptions('checked');
        if (checked) {
            myDocking.current?.showAllCollapseButtons();
        } else {
            myDocking.current?.hideAllCollapseButtons();
        }
    }, []);

    const closeButtonsCheckboxOnChange = useCallback(() => {
        const checked = closeButtonsCheckbox.current?.getOptions('checked');
        if (checked) {
            myDocking.current?.showAllCloseButtons();
        } else {
            myDocking.current?.hideAllCloseButtons();
        }
    }, []);

    const disabledCheckboxOnChange = useCallback(() => {
        const disabled = myDocking.current?.getOptions('disabled');
        if (disabled) {
            myDocking.current?.enable();
        } else {
            myDocking.current?.disable();
        }
    }, []);

    const moveButtonOnClick = useCallback(() => {
        myDocking.current?.move('window3', 0, 1);
    }, []);

    const collapseButtonOnClick = useCallback(() => {
        myDocking.current?.collapseWindow('window1');
    }, []);

    const expandButtonOnClick = useCallback(() => {
        myDocking.current?.expandWindow('window1');
    }, []);

    const mySliderOnChange = useCallback((event: any) => {
        setWindowsOffset(event.args.value);
    }, []);

    return (
        <div>
            <div style={{ float: 'left' }}>
                <JqxDocking
                    theme={'material-purple'}
                    ref={myDocking}
                    width={370}
                    orientation={'horizontal'}
                    mode={'default'}
                    windowsMode={{ 'window0': 'floating' }}
                    windowsOffset={windowsOffset}
                >
                    <div id="panel0">
                        <div id="window0" style={{ height: '70px', width: '220px' }}>
                            <div>AngularDock2</div>
                            <div>You cannot drop this object.</div>
                        </div>
                        <div id="window1" style={{ height: '70px', width: '100px' }}>
                            <div>AngularDock1</div>
                            <div>You cannot drag this object.</div>
                        </div>
                    </div>
                    <div id="panel1">
                        <div id="window2" style={{ height: '70px', width: '100px' }}>
                            <div>AngularDock3</div>
                            <div>You can drag and drop this object.</div>
                        </div>
                        <div id="window3" style={{ height: '70px', width: '100px' }}>
                            <div>AngularDock4</div>
                            <div>You can drag and drop this object.</div>
                        </div>
                    </div>
                </JqxDocking>
            </div>
            <div style={{ float: 'left', marginTop: '30px' }}>
                <span style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '30px' }}>Settings</span>
                <table style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '30px' }}>
                    <tbody>
                        <tr>
                            <td>
                                <JqxCheckBox
                                    theme={'material-purple'}
                                    ref={collapseButtonsCheckbox}
                                    onChange={collapseButtonsCheckboxOnChange}
                                    width={200}
                                    checked={true}
                                >
                                    Collapse Buttons
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxButton
                                    theme={'material-purple'}
                                    onClick={moveButtonOnClick}
                                >
                                    Move AngularDock4 To Left Zone
                                </JqxButton>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox
                                    theme={'material-purple'}
                                    ref={closeButtonsCheckbox}
                                    onChange={closeButtonsCheckboxOnChange}
                                    width={200}
                                >
                                    Close Buttons
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxButton
                                    theme={'material-purple'}
                                    onClick={collapseButtonOnClick}
                                >
                                    Collapse AngularDock1
                                </JqxButton>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxCheckBox
                                    theme={'material-purple'}
                                    onChange={disabledCheckboxOnChange}
                                    width={200}
                                >
                                    Disabled
                                </JqxCheckBox>
                            </td>
                            <td>
                                <JqxButton
                                    theme={'material-purple'}
                                    onClick={expandButtonOnClick}
                                >
                                    Expand AngularDock1
                                </JqxButton>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ width: '100px' }}>
                                <span style={{ fontFamily: 'Verdana', fontSize: '13px' }}>Windows Margin</span>
                                <JqxSlider
                                    theme={'material-purple'}
                                    ref={mySlider}
                                    onChange={mySliderOnChange}
                                    width={200}
                                    max={9}
                                    mode={'fixed'}
                                    ticksFrequency={1}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;