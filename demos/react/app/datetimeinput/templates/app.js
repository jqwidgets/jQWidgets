import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
    render() {
        return (
            <div>               
                <div>Default</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'default'}
                />
                <br />
                <div>Primary</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'primary'}
                />
                <br />
                <div>Success</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'success'}
                />
                <br />
                <div>Info</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'info'}
                />
                <br />
                <div>Warning</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'warning'}
                />
                <br />
                <div>Danger</div>
                <JqxDateTimeInput
                    width={300} height={30}
                    showTimeButton={true} template={'danger'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
