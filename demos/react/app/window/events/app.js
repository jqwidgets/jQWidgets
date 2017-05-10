import React from 'react';
import ReactDOM from 'react-dom';

import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';
import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.okButton.focus();
        
        this.refs.showWindowButton.on('click', (event) => {
            this.refs.eventWindow.open();
        });
        
        this.refs.eventWindow.on('close', (event) => {
            this.displayEvent(event);
        });

        this.refs.eventWindow.on('moved', (event) => {
            this.displayEvent(event);
        });

        this.refs.eventWindow.on('open', (event) => {
            this.displayEvent(event);
        });
    }

    capitaliseFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    displayEvent(event) {
        let eventData = 'Event: ' + this.capitaliseFirstLetter(event.type);
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

        this.refs.events.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    }

    render () {
        let offset = { left: 40, top: 95 };
        return (
            <div>
                <JqxButton ref='showWindowButton' width={80} value='Show' />

                <div style={{ marginTop: 10 }}>Events Log:</div>
                <JqxPanel ref='events' width={450} height={250} style={{ width: '300px', height: '200px', borderWidth: '0px' }} />
                
                <JqxWindow ref='eventWindow'
                    width={270} height={155} position={{ x: offset.left + 50, y: offset.top + 50 }}
                    maxHeight={160} maxWidth={280} minHeight={30} minWidth={250}
                    resizable={false} isModal={true} modalOpacity={0.3}
                    cancelButton={'.cancel'} okButton={'.ok'}  
                    >

                    <div>
                        <img width="14" height="14" src="../../images/help.png" alt="" />
                        Modal Window
                    </div>

                    <div>

                        <div>
                            Please click "OK", "Cancel" or the close button to close the modal window. The dialog
                            result will be displayed in the events log.
                        </div>

                        <div style={{ float: 'right', marginTop: '15px' }}>
                            <JqxButton ref='okButton' width={80} value='OK' style={{ display: 'inline-block', marginRight: 10 }} className='ok' />
                            <JqxButton ref='cancelButton' width={80} value='Cancel' style={{ display: 'inline-block' }} className='cancel' />
                        </div>

                    </div>

                </JqxWindow>

            </div>
        )
}
}

ReactDOM.render(<App />, document.getElementById('app'));
