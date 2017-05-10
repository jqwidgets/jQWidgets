import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    this.refs.myDateTimeInput.formatString('d');
                    break;
                case 1:
                    this.refs.myDateTimeInput.formatString('D');
                    break;
                case 2:
                    this.refs.myDateTimeInput.formatString('t');
                    break;
                case 3:
                    this.refs.myDateTimeInput.formatString('T');
                    break;
                case 4:
                    this.refs.myDateTimeInput.formatString('f');
                    break;
                case 5:
                    this.refs.myDateTimeInput.formatString('F');
                    break;
                case 6:
                    this.refs.myDateTimeInput.formatString('M');
                    break;
                case 7:
                    this.refs.myDateTimeInput.formatString('Y');
                    break;
                case 8:
                    this.refs.myDateTimeInput.formatString('dddd-MMMM-yyyy');
                    break;
            }
        });
    }
    render() {
        let availableFormats =
            [
                'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
                'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
            ];
        return (
            <div>
                <JqxDateTimeInput ref='myDateTimeInput'
                    width={300} height={25} formatString={'d'}
                />
                <br />
                <div>
                    <div style={{ fontFamily: 'Verdana', fontSize: 13 }}>
                        Choose Format:
                    </div>
                    <br />
                    <JqxDropDownList ref='myDropDownList'
                        width={230} height={25}
                        source={availableFormats} selectedIndex={0}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
