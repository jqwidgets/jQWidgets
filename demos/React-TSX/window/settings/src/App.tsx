import * as React from 'react';
import { useRef, useState, useCallback } from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

function App() {
    const myWindow = useRef<JqxWindow>(null);
    const findButton = useRef<JqxButton>(null);
    const searchTextInput = useRef<HTMLInputElement>(null);

    const [draggable, setDraggable] = useState(true);

    const SearchButtonHandle = useCallback(() => {
        if (findButton.current && searchTextInput.current) {
            if (searchTextInput.current.value !== '') {
                findButton.current.setOptions({ disabled: false });
            } else {
                findButton.current.setOptions({ disabled: true });
            }
        }
    }, []);

    const onKeyUp = useCallback(() => {
        SearchButtonHandle();
    }, [SearchButtonHandle]);

    const onKeyDown = useCallback(() => {
        SearchButtonHandle();
    }, [SearchButtonHandle]);

    const onChange = useCallback(() => {
        SearchButtonHandle();
    }, [SearchButtonHandle]);

    const showWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.open();
        }
    }, []);

    const hideWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.close();
        }
    }, []);

    const pinWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.setOptions({ draggable: false });
            setDraggable(false);
        }
    }, []);

    const unpinWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.setOptions({ draggable: true });
            setDraggable(true);
        }
    }, []);

    const collapseWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.collapse();
        }
    }, []);

    const expandWindowButtonClick = useCallback(() => {
        if (myWindow.current) {
            myWindow.current.expand();
        }
    }, []);

    const buttonsStyle: React.CSSProperties = { float: "left", marginLeft: 5 };

    return (
        <div>
            <JqxButton theme={'material-purple'} style={{ float: "left" }} onClick={showWindowButtonClick} width={80}>
                Open
            </JqxButton>
            <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={hideWindowButtonClick} width={80}>
                Close
            </JqxButton>
            <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={pinWindowButtonClick} width={80}>
                Pin
            </JqxButton>
            <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={unpinWindowButtonClick} width={80}>
                Unpin
            </JqxButton>
            <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={collapseWindowButtonClick} width={80}>
                Collapse
            </JqxButton>
            <JqxButton theme={'material-purple'} style={buttonsStyle} onClick={expandWindowButtonClick} width={80}>
                Expand
            </JqxButton>

            <JqxWindow
                theme={'material-purple'}
                ref={myWindow}
                width={400}
                height={120}
                cancelButton={'.cancelButton'}
                resizable={false}
                position={{ x: 90, y: 140 }}
                draggable={draggable}
            >
                <div>
                    Find
                </div>
                <div>
                    <div style={{ overflow: 'hidden' }}>
                        <div style={{ margin: 10 }}>
                            Fi<u>n</u>d what:
                            <input
                                ref={searchTextInput}
                                style={{ marginLeft: 5, height: 20, width: 175, border: '1px solid #aaa' }}
                                onKeyUp={onKeyUp}
                                onKeyDown={onKeyDown}
                                onChange={onChange}
                            />
                            <div style={{ float: "right" }}>
                                <JqxButton
                                    theme={'material-purple'}
                                    ref={findButton}
                                    style={{ marginBottom: 5 }}
                                    width={80}
                                    disabled={true}
                                >
                                    Find Next
                                </JqxButton>
                                <JqxButton theme={'material-purple'} className={'cancelButton'} width={80}>
                                    Cancel
                                </JqxButton>
                            </div>
                            <br />
                            <br />
                            <JqxCheckBox theme={'material-purple'} width={150}>Match case</JqxCheckBox>
                        </div>
                    </div>
                </div>
            </JqxWindow>
        </div>
    );
}

export default App;