import React from 'react';
import ReactDOM from 'react-dom';

import JqxEditor from '../../../jqwidgets-react/react_jqxeditor.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myButton.on('click', () => {
            this.refs.myWindow.open();
        });
    }
    render() {
        let tools = 'bold italic underline font size';
        return (
            <div>
                <JqxButton ref='myButton' value='Open Editor' />
                <JqxWindow ref="myWindow"
                    width={600} height={400} maxWidth={800}
                    autoOpen={false} resizable={false} position={'top, left'}>
                    <div>jqxEditor</div> 
                    <div>
                        <JqxEditor width={'100%'} height={'100%'} tools={tools} />
                    </div>
                </JqxWindow>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
