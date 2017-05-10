import React from 'react';
import ReactDOM from 'react-dom';

import JqxToggleButton from '../../../jqwidgets-react/react_jqxtogglebutton.js';

class App extends React.Component
{
    componentDidMount()
    {
        this.refs.myToggleButton.on('click', () =>
        {
            let toggled = this.refs.myToggleButton.toggled();
            if (toggled)
            {
                this.refs.myToggleButton.value('Toggled On');
            }
            else
            {
                this.refs.myToggleButton.value('Toggled Off');
            }
        });
    }
    render()
    {  
        return (
            <div>
                <JqxToggleButton ref='myToggleButton' style={{ marginLeft: 25 }}
                    value='Toggled On' width={200} toggled={true}
                />
                <JqxToggleButton style={{ marginLeft: 25, marginTop: 10 }}
                    value='Disabled' width={200} disabled={true}
                />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
