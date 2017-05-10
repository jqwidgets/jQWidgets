import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myButton.on('click', () => {
            this.refs.myComplexInput.value('11- 2ii');
        });
    }
    render() {
        return (
            <div>
                <JqxComplexInput ref='myComplexInput'
                    width={250} height={25} value={'15 + 7.2i'} spinButtons={false}
                />
                <JqxButton style={{ marginTop: 20 }} ref='myButton' width={200}
                    value='Set wrong value: "11- 2ii"'
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
