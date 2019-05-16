import * as React from 'react';
 


import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}> {

    private myRangeSelector = React.createRef<JqxRangeSelector>();

    constructor(props: {}) {
        super(props);
    }

    public componentDidMount() {
        this.myRangeSelector.current!.setRange(30, 60);
    }

    public render() {
        return (
            <JqxRangeSelector theme={'material-purple'} ref={this.myRangeSelector}
                // @ts-ignore
                width={'100%'} height={100} min={0}
                max={100} range={{ from: 40, to: 60 }} rtl={true}
                majorTicksInterval={10} minorTicksInterval={10} />
        );
    }
}

export default App;
