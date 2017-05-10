import React from 'react';
import ReactDOM from 'react-dom';

import JqxSlider from '../../../jqwidgets-react/react_jqxslider.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        let displayEvent = (event) => {
            var eventData = event.type;
            eventData += ': ' + event.args.value;
            this.refs.events.clearcontent();
            this.refs.events.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
        };

        this.refs.mySlider.on('change', (event) => {
            displayEvent(event);
        });
    }
    render() {
        return (
            <div>
                <JqxSlider ref='mySlider'
                    mode={'fixed'}
                />
                <div style={{ fontFamily: 'Verdana', fontSize: 12 }}>Events:</div>
                <JqxPanel ref='events' style={{ borderWidth: 0 }}
                    height={250} width={450}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
