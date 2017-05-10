import React from 'react';
import ReactDOM from 'react-dom';

import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
    componentDidMount () {
        let renderText = (text) => {
            return "<span class='jqx-rc-all' style='background: #ffe8a6; color: #e53d37; font-style: italic;'>" + text + "</span>";
        };

        this.refs.button.on('click', () => {
            let value = $('#ValueInput')[0].value;
            this.refs.horizontalProgressBar.value(value);
            this.refs.verticalProgressBar.value(value);
        });

        this.refs.checkbox.on('change', (event) => {
            this.refs.horizontalProgressBar.showText(event.args.checked);
            this.refs.verticalProgressBar.showText(event.args.checked);
        });

        this.refs.customtextcheckbox.on('change', (event) => {
            if (event.args.checked) {
                this.refs.horizontalProgressBar.setOptions({ renderText:  renderText });
                this.refs.verticalProgressBar.setOptions({ renderText:  renderText });
            } else {
                this.refs.horizontalProgressBar.setOptions({ renderText:  null });
                this.refs.verticalProgressBar.setOptions({ renderText:  null });
            }
        });
    }
    render () {
        return (
            <div style={{ height: 300 }}>
                <div style={{ marginTop: 10 }}>Horizontal</div>
                <JqxProgressBar ref='horizontalProgressBar'
                  width={250} height={30} value={50}
                />
                <div style={{ marginTop: 10 }}>Vertical</div>
                <JqxProgressBar ref='verticalProgressBar' style={{ marginTop: 10, overflow: 'hidden' }}
                  width={30} height={250} value={50} orientation={'vertical'}
                />
                <br />
                <div>Enter a value between 0 and 100</div>
                <input id='ValueInput' type='text' style={{ marginTop: 5 }}/>
                <JqxButton ref='button' style={{marginTop: 3, marginLeft: 3 }} value="Update"/>
                <JqxCheckBox ref='checkbox' width={180} style={{ marginTop: 20 }} value='Show Progress Text'/>
                <JqxCheckBox ref='customtextcheckbox' width={180} style={{ marginTop: 20 }} value='Custom Progress Text'/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
