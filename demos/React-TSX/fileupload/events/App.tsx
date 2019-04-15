import * as React from 'react';
 


import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

class App extends React.PureComponent<{}> {

    private myPanel = React.createRef<JqxPanel>();

    constructor(props: {}) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onUploadStart = this.onUploadStart.bind(this);
        this.onUploadEnd = this.onUploadEnd.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxFileUpload theme={'material-purple'} style={{ float: 'left' }}
                    onSelect={this.onSelect} onRemove={this.onRemove}
                    onUploadStart={this.onUploadStart} onUploadEnd={this.onUploadEnd}
                    width={300} uploadUrl={'upload.php'} fileInputName={'fileToUpload'} />

                <div style={{ float: 'left', marginLeft: '50px' }}>
                    <div style={{ marginBottom: '10px', fontFamily: 'Verdana', fontSize: 'smaller' }}>
                        Events log:
                    </div>
                    <JqxPanel theme={'material-purple'} ref={this.myPanel} width={300} height={150} />
                </div>
            </div>
        );
    }

    private onSelect(event: any): void {
        const args = event.args;
        const fileName = args.file;
        const fileSize = args.size;
        this.myPanel.current!.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'size: ' + fileSize + '<br />');
    };

    private onRemove(event: any): void {
        const fileName = event.args.file;
        this.myPanel.current!.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    };

    private onUploadStart(event: any): void {
        const fileName = event.args.file;
        this.myPanel.current!.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    };

    private onUploadEnd(event: any): void {
        const args = event.args;
        const fileName = args.file;
        const serverResponce = args.response;
        this.myPanel.current!.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'server response: ' + serverResponce + '<br />');
    };
}

export default App;