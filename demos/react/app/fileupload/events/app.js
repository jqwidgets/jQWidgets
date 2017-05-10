import React from 'react';
import ReactDOM from 'react-dom';

import JqxFileUpload from '../../../jqwidgets-react/react_jqxfileupload.js';
import JqxPanel from '../../../jqwidgets-react/react_jqxpanel.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myFileUpload.on('select', (event) => {
            let args = event.args;
            let fileName = args.file;
            let fileSize = args.size;
            this.refs.myPanel.append('<strong>' + event.type + ':</strong> ' +
                fileName + ';<br />' + 'size: ' + fileSize + '<br />');
        });
        this.refs.myFileUpload.on('remove', (event) => {
            let fileName = event.args.file;
            this.refs.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
        });
        this.refs.myFileUpload.on('uploadStart', (event) => {
            let fileName = event.args.file;
            this.refs.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
        });
        this.refs.myFileUpload.on('uploadEnd', (event) => {
            let args = event.args;
            let fileName = args.file;
            let serverResponce = args.response;
            this.refs.myPanel.append('<strong>' + event.type + ':</strong> ' +
                fileName + ';<br />' + 'server response: ' + serverResponce + '<br />');
        });
    }
    render() {
        return (
            <div>
                <JqxFileUpload ref='myFileUpload' style={{ float: 'left' }}
                    width={300} uploadUrl={'upload.php'}
                    fileInputName={'fileToUpload'}
                />
                <div style={{ float: 'left', marginLeft: 50 }}>
                    <div style={{ marginBottom: 10, fontFamily: 'Verdana', fontSize: 'smaller' }}>
                        Events log:
                </div>
                    <JqxPanel ref='myPanel' width={300} height={150} />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
