import React from 'react';
import ReactDOM from 'react-dom';

import JqxLoader from '../../../jqwidgets-react/react_jqxloader.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.openLoader.on('click', () => {
            this.refs.myLoader.open();
        });
    }
    render() {
        return (
            <div>
                <JqxLoader ref='myLoader' style={{ marginTop: 230 }}
                    width={100} height={60}
                    imagePosition={'top'} isModal={true}
                />
                <JqxButton ref='openLoader'
                    value='Open Loader' width={150} height={25}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
