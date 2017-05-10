import React from 'react';
import ReactDOM from 'react-dom';

import JqxRepeatButton from '../../../jqwidgets-react/react_jqxrepeatbutton.js';
import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';

class App extends React.Component
{
    componentDidMount()
    {
        this.refs.myRepeatButton.on('click', () =>
        {
            let currentValue = this.refs.myProgressBar.value();
            currentValue += 1;
            this.refs.myProgressBar.setOptions({ animationDuration: 0, value: currentValue });
        });
    }
    render()
    {  
        return (
            <div>
                <JqxRepeatButton ref='myRepeatButton' style={{ marginLeft: 25 }}
                    value='Click Me!' width={200} delay={10}
                />

                <JqxProgressBar ref='myProgressBar' style={{ marginTop: 10 }}
                    width={250} height={25} max={30}
                />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
