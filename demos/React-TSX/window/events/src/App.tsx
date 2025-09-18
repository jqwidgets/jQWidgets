import * as React from 'react';
import { useRef, useCallback } from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

function App() {
    const myWindow = useRef<JqxWindow>(null);
    const events = useRef<JqxPanel>(null);

    const capitaliseFirstLetter = useCallback((word: string): string => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }, []);

    const displayEvent = useCallback((event: any): void => {
        let eventData = 'Event: ' + capitaliseFirstLetter(event.type);

        if (event.type === 'moved') {
            eventData += ', X: ' + event.args.x + ', Y: ' + event.args.y;
        }

        if (event.type === 'close') {
            eventData += ', Dialog result: ';
            if (event.args.dialogResult.OK) {
                eventData += 'OK';
            } else if (event.args.dialogResult.Cancel) {
                eventData += 'Cancel';
            } else {
                eventData += 'None';
            }
        }

        events.current?.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }, [capitaliseFirstLetter]);

    const showWindowButtonClick = useCallback((): void => {
        myWindow.current?.open();
    }, []);

    const eventWindowClose = useCallback((event: any): void => {
        displayEvent(event);
    }, [displayEvent]);

    const eventWindowMoved = useCallback((event: any): void => {
        displayEvent(event);
    }, [displayEvent]);

    const eventWindowOpen = useCallback((event: any): void => {
        displayEvent(event);
    }, [displayEvent]);

    return (
        <div>
            <JqxButton theme={'material-purple'} onClick={showWindowButtonClick} width={80}>
                Show
            </JqxButton>

            <div style={{ marginTop: 10 }}>Events Log:</div>
            <JqxPanel theme={'material-purple'} ref={events}
                style={{ border: 'none' }}
                width={450} height={250}
            />

            <JqxWindow theme={'material-purple'} ref={myWindow}
                onClose={eventWindowClose}
                onOpen={eventWindowOpen}
                onMoved={eventWindowMoved}
                width={270}
                height={165}
                maxHeight={180}
                maxWidth={280}
                minHeight={30}
                minWidth={250}
                cancelButton={'.cancel'}
                okButton={'.ok'}
                resizable={false}
                isModal={true}
                modalOpacity={0.3}
                position={{ x: 90, y: 140 }}
                draggable={true}
            >
                <div>
                    <img width="14" height="14" src="https://www.jqwidgets.com/react/images/help.png" alt="" />
                    Modal Window
                </div>

                <div>
                    <div>
                        Please click "OK", "Cancel" or the close button to close the modal window.
                        The dialog result will be displayed in the events log.
                    </div>
                    <div style={{ float: "right", marginTop: 15 }}>
                        <div>
                            <JqxButton theme={'material-purple'} className={'ok'} style={{ display: 'inline-block', marginRight: 10 }} width={80}>
                                OK
                            </JqxButton>
                            <JqxButton theme={'material-purple'} className={'cancel'} style={{ display: 'inline-block' }} width={80}>
                                Cancel
                            </JqxButton>
                        </div>
                    </div>
                </div>
            </JqxWindow>
        </div>
    );
}

export default App;