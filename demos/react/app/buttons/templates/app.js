import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    render() {
        let marginFloat = { float: 'left', marginLeft: 4 }; 
        return (
            <div>
                <JqxButton value='Default' width={60} style={{ float: 'left' }} />
                <JqxButton value='Primary' template={'primary'} width={60} style={marginFloat} />
                <JqxButton value='Info' template={'info'} width={60} style={marginFloat} />
                <JqxButton value='Success' template={'success'} width={60} style={marginFloat} />
                <JqxButton value='Warning' template={'warning'} width={60} style={marginFloat} />
                <JqxButton value='Danger' template={'danger'} width={60} style={marginFloat} />
                <JqxButton value='Inverse' template={'inverse'} width={60} style={marginFloat} />
                <JqxButton value='Link' template={'link'} width={60} style={{ float: 'left' }} />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
