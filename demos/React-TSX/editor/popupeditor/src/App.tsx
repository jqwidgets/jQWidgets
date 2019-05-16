import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxEditor from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

class App extends React.PureComponent<{}> {

    private myWindow = React.createRef<JqxWindow>();

    constructor(props: {}) {
        super(props);
        this.btnOnClick = this.btnOnClick.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxButton theme={'material-purple'} onClick={this.btnOnClick} width={100}>Open Editor</JqxButton>

                <JqxWindow theme={'material-purple'} ref={this.myWindow}
                    width={350} height={400} maxWidth={800}
                    autoOpen={false} resizable={false} position={'top, left'}>
                    <div>jqxEditor</div>
                    <div id="myEditor" />
                </JqxWindow>
            </div>
        );
    }

    private btnOnClick(): void {
        this.myWindow.current!.open();
        ReactDOM.render(
            <JqxEditor theme={'material-purple'}
                width={'100%'} height={'99%'} tools={'bold italic underline font size'}
            />,
            document.querySelector('#myEditor'));
    }
}

export default App;