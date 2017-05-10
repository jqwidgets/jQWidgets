import React from 'react';
import ReactDOM from 'react-dom';

import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';

class App extends React.Component {
    componentDidMount() {
        let value = 0;

        let interval = setInterval(() => {
            value++;
            if (value == 100) {
                clearInterval(interval);
            }
            
            this.refs.colorRanges.val(value);
            this.refs.verticalColorRanges.val(value);            
        }, 20);
    }
    render() {
        let renderText = (text, value) => {
            if (value < 60) {
                return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
            }
            return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
        };
        let horizontalColorRanges = [{ stop: 20, color: '#33b5e5' }, { stop: 50, color: '#98ca00' }, { stop: 80, color: '#ff4444' }, { stop: 100, color: '#aa66cc' }];
        let verticalColorRanges = [{ stop: 40, color: '#f0ad4e' }, { stop: 59, color: '#5bc0de' }, { stop: 70, color: '#5cb85c' }, { stop: 100, color: '#d9534f' }];

        return (
            <div style={{ height: 300 }}>
                <div style={{ marginTop: 10 }}>Horizontal</div>
                <JqxProgressBar ref='colorRanges'
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    colorRanges={horizontalColorRanges}
                />
                <div style={{ marginTop: 10 }}>Vertical</div>
                <JqxProgressBar ref='verticalColorRanges' style={{ marginTop: 10, overflow: 'hidden' }}
                    height={250}
                    width={30}
                    value={0}
                    orientation={'vertical'}
                    showText={true}
                    renderText={renderText}
                    colorRanges={verticalColorRanges}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
