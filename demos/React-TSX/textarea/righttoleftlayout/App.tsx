import * as React from 'react';
 


import JqxTextArea from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtextarea';

class App extends React.PureComponent<{}, {}> {
    private myTextArea = React.createRef<JqxTextArea>();
    private text: string = 'jQWidgets is a comprehensive and innovative widget library built on top of the jQuery JavaScript Library. It empowers developers to deliver professional, cross-browser compatible web applications, while significantly minimizing their development time. jQWidgets contains more than 60 UI widgets and is one of the fastest growing JavaScript UI frameworks on the Web.';
    
    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.myTextArea.current!.val(this.text);
    }

    public render() {
        return (
                <JqxTextArea theme={'material-purple'} ref={this.myTextArea}
                    width={300}
                    height={100}
                    rtl={true}
                />
        );
    }
}

export default App;
