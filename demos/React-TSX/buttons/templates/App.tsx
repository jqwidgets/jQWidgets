import * as React from 'react';
 

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    };

    public render() {
        return (
            <div>
                <JqxButton theme={'material-purple'} width={80} style={{ float: 'left' }}>Default</JqxButton>
                <JqxButton theme={'material-purple'} template={'primary'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Primary</JqxButton>
                <JqxButton theme={'material-purple'} template={'info'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Info</JqxButton>
                <JqxButton theme={'material-purple'} template={'success'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Success</JqxButton>
                <JqxButton theme={'material-purple'} template={'warning'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Warning</JqxButton>
                <JqxButton theme={'material-purple'} template={'danger'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Danger</JqxButton>
                <JqxButton theme={'material-purple'} template={'inverse'} width={80} style={{ float: 'left', marginLeft: '4px' }}>Inverse</JqxButton>
                <JqxButton theme={'material-purple'} template={'link'} width={80} style={{ float: 'left' }}>Link</JqxButton>
            </div>
        );
    }
}

export default App;