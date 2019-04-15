import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

class App extends React.PureComponent<{}> {

    private myRangeSelector = React.createRef<JqxRangeSelector>();

    constructor(props: {}) {
        super(props);
        this.onClickGet = this.onClickGet.bind(this);
        this.onClickSet = this.onClickSet.bind(this);
    }

    public render() {
        return (
            <div>
                <JqxRangeSelector theme={'material-purple'} ref={this.myRangeSelector}
                    width={'80%'} height={100} min={0} max={100}
                    range={{ from: 10, to: 50 }} majorTicksInterval={10} minorTicksInterval={1} />

                <div style={{ marginLeft: '30px', marginTop: '50px' }}>
                    <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={this.onClickSet} width={80}>
                        Set range
                    </JqxButton>
                    <JqxButton theme={'material-purple'} style={{ display: 'inline-block' }} onClick={this.onClickGet} width={80}>
                        Get range
                    </JqxButton>
                </div>
            </div>
        );
    }

    private onClickGet(): void {
        // Get Range.
        const range = this.myRangeSelector.current!.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    private onClickSet(): void {
        // Set Range.
        this.myRangeSelector.current!.setRange(30, 70);
    };
}

export default App;
