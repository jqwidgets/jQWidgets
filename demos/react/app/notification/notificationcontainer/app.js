import React from 'react';
import ReactDOM from 'react-dom';

import JqxNotification from '../../../jqwidgets-react/react_jqxnotification.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        let quotes =
            [
                'I\'m gonna make him an offer he can\'t refuse.', 'Toto, I\'ve got a feeling we\'re not in Kansas anymore.',
                'You talkin\' to me?', 'Bond. James Bond.', 'I\'ll be back.', 'Round up the usual suspects.',
                'I\'m the king of the world!', 'A martini. Shaken, not stirred.',
                'May the Force be with you.',
                'Well, nobody\'s perfect.'
            ];

        this.refs.openNotification.on('click', () => {
            document.getElementById('notificationContent').innerHTML = quotes[Math.round(Math.random() * quotes.length)];
            this.refs.myNotification.open();
        });
    }
    render() {
        let containerStyle = { width: 300, height: 400, marginTop: 15, backgroundColor: '#F2F2F2', border: '1px dashed #AAAAAA', overflow: 'auto' };
        return (
            <div>

                <JqxNotification ref='myNotification'
                    width={'100%'} opacity={0.9} appendContainer={'#container'}
                    autoClose={true} template={'info'}
                >
                    <div id='notificationContent' />
                </JqxNotification>
                
                <JqxButton ref='openNotification' value='Open notification'
                    style={{ marginTop: '20px', position: 'relative' }}
                />

                <div id='container' style={containerStyle} />

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
