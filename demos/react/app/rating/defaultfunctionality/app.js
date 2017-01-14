import React from 'react';
import ReactDOM from 'react-dom';

import JqxRating from '../../../jqwidgets-react/react_jqxrating.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myRating.on('change', (event) => {
            document.getElementById('rate').innerHTML = '&nbsp' + event.value;
        });
    }
    render () {
        return (
            <div>
                <JqxRating ref='myRating'
                  width={350} height={35} theme={'classic'}
                />
                <div style={{ marginTop: 10 }}>
                    <div style={{ float: 'left' }}>Rating:</div>
                    <div id='rate'/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
