import React, { useRef, useCallback } from 'react';
import JqxFileUpload from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxfileupload';
import JqxPanel from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxpanel';

const App = () => {
    const myPanel = useRef<JqxPanel>(null);

    const onSelect = useCallback((event: any) => {
        const args = event.args;
        const fileName = args.file;
        const fileSize = args.size;
        myPanel.current?.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'size: ' + fileSize + '<br />');
    }, []);

    const onRemove = useCallback((event: any) => {
        const fileName = event.args.file;
        myPanel.current?.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    }, []);

    const onUploadStart = useCallback((event: any) => {
        const fileName = event.args.file;
        myPanel.current?.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
    }, []);

    const onUploadEnd = useCallback((event: any) => {
        const args = event.args;
        const fileName = args.file;
        const serverResponse = args.response;
        myPanel.current?.append('<strong>' + event.type + ':</strong> ' +
            fileName + ';<br />' + 'server response: ' + serverResponse + '<br />');
    }, []);

    return (
        <div>
            <JqxFileUpload theme={'material-purple'} style={{ float: 'left' }}
                onSelect={onSelect} onRemove={onRemove}
                onUploadStart={onUploadStart} onUploadEnd={onUploadEnd}
                width={300} uploadUrl={'upload.php'} fileInputName={'fileToUpload'} />
            <div style={{ float: 'left', marginLeft: '50px' }}>
                <div style={{ marginBottom: '10px', fontFamily: 'Verdana', fontSize: 'smaller' }}>
                    Events log:
                </div>
                <JqxPanel theme={'material-purple'} ref={myPanel} width={300} height={150} />
            </div>
        </div>
    );
};

export default App;