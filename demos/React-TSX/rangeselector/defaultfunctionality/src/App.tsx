import * as React from 'react';
import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxRangeSelector from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxrangeselector';

function App() {
    const myRangeSelector = React.useRef<JqxRangeSelector>(null);

    const onClickGet = () => {
        const range = myRangeSelector.current!.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    const onClickSet = () => {
        myRangeSelector.current!.setRange(30, 70);
    };

    return (
        <div>
            <JqxRangeSelector
                theme={'material-purple'}
                ref={myRangeSelector}
                width={'100%'}
                height={100}
                min={0}
                max={200}
                range={{ from: 10, to: 50 }}
                majorTicksInterval={10}
                minorTicksInterval={1}
            />

            <div style={{ marginLeft: '30px', marginTop: '50px' }}>
                <JqxButton
                    theme={'material-purple'}
                    style={{ display: 'inline-block' }}
                    onClick={onClickSet}
                    width={80}
                >
                    Set range
                </JqxButton>
                <JqxButton
                    theme={'material-purple'}
                    style={{ display: 'inline-block' }}
                    onClick={onClickGet}
                    width={80}
                >
                    Get range
                </JqxButton>
            </div>
        </div>
    );
}

export default App;