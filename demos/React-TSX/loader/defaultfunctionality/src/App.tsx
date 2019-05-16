import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxLoader, { ILoaderProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxloader';

class App extends React.PureComponent<{}, ILoaderProps> {

    private myLoader = React.createRef<JqxLoader>();

    constructor(props: {}) {
        super(props);
        this.openLoaderClick = this.openLoaderClick.bind(this);
        this.closeLoaderClick = this.closeLoaderClick.bind(this);
    }

    public render() {
        const style = { display: 'inline-block' };
        return (
            <div>
                <JqxLoader theme={'material-purple'} ref={this.myLoader}
                    width={100} height={60} imagePosition={'top'} />

                <JqxButton theme={'material-purple'} style={style} onClick={this.openLoaderClick} width={150}>
                    Open Loader
                </JqxButton>
                <JqxButton theme={'material-purple'} style={style} onClick={this.closeLoaderClick} width={100}>
                    Close
                </JqxButton>
            </div>
        );
    }

    private openLoaderClick(event: any): void {
        this.myLoader.current!.open();
    };

    private closeLoaderClick(event: any): void {
        this.myLoader.current!.close();
    };
}

export default App;