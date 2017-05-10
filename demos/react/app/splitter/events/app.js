import React from 'react';
import ReactDOM from 'react-dom';

import JqxSplitter from '../../../jqwidgets-react/react_jqxsplitter.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        let capitaliseFirstLetter = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        };
        let displayEvent = (event) => {
            let eventData = "Event:" + capitaliseFirstLetter(event.type);
            eventData += ", Panel 1: " + event.args.panels[0].size;
            eventData += ", Panel 2: " + event.args.panels[1].size;
            this.refs.events.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
        };

        this.refs.mainSplitter.on('resize', (event) => {
            displayEvent(event);
        });

        this.refs.mainSplitter.on('expanded', (event) => {
            displayEvent(event);
        });

        this.refs.mainSplitter.on('collapsed', (event) => {
            displayEvent(event);
        });
    }
    render() {
        return (
            <div id='container' style={{ float: 'left' }}>

                <JqxSplitter ref='mainSplitter'
                    width={850} height={480}
                    panels={[{ size: 200 }]}
                >
                    <div style={{ backgroundColor: '#F5FFF2' }}><span style={{ margin: 5 }}>Panel 1</span></div>
                    <div style={{ backgroundColor: '#F5FFF2' }}><span style={{ margin: 5 }}>Panel 2</span></div>
                </JqxSplitter>

                <div>
                    <div style={{ fontFamily: 'Verdana', fontSize: 13 }}>
                        Events:</div>
                        <JqxPanel ref='events' style={{ borderWidth: '0px' }}
                            width={450} height={250}
                        />
                </div>

            </div >
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
