import React from 'react';
import ReactDOM from 'react-dom';

import JqxLoader from '../../../jqwidgets-react/react_jqxloader.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myOpenLoader.on('click', () => {
            this.refs.myLoader.open();
        });

        this.refs.myCloseLoader.on('click', () => {
            this.refs.myLoader.close();
        });
    }
    render () {
        return (
            <div>
                <JqxLoader ref='myLoader'
                  width={100} height={60} imagePosition={'top'}
                />
                <JqxButton ref='myOpenLoader' width={150} height={25} value="Open Loader"/>
                <JqxButton ref='myCloseLoader' width={150} height={25} style={{marginTop: '5px'}} value="Close"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
