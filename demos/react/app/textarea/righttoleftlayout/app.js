import React from 'react';
import ReactDOM from 'react-dom';

import JqxTextArea from '../../../jqwidgets-react/react_jqxtextarea.js';

class App extends React.Component {
    componentDidMount() {
        let text = 'jQWidgets is a comprehensive and innovative widget library built on top of the jQuery JavaScript Library. It empowers developers to deliver professional, cross-browser compatible web applications, while significantly minimizing their development time. jQWidgets contains more than 60 UI widgets and is one of the fastest growing JavaScript UI frameworks on the Web.';
        this.refs.myTextArea.val(text);
    }
    render () {
        return (
            <JqxTextArea ref='myTextArea'
                width={300} height={100} rtl={true}                 
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
