import React from 'react';
import ReactDOM from 'react-dom';

import JqxRangeSelector from '../../../jqwidgets-react/react_jqxrangeselector.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.setSelection.on('click', () => {
            this.refs.myRangeSelector.setRange(30,70);
        });
        this.refs.getSelection.on('click', () => {
            let range = this.refs.myRangeSelector.getRange();
            alert("The selected range is from " + range.from + " to " + range.to);
        });
    }
    render () {
        return (
            <div>
                <JqxRangeSelector ref='myRangeSelector'
                  width={750} height={100} min={0}
                  max={200} range={{ from: 10, to: 50 }}
                  majorTicksInterval={10} minorTicksInterval={1}
                />
                <div style={{ marginLeft: 30, marginTop: 50 }}>
                    <JqxButton ref='setSelection' value='Set range' style={{ float: 'left', marginRight: 10}}
                      width={100} height={25}
                    />
                    <JqxButton ref='getSelection' value='Get range'
                      width={100} height={25}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
