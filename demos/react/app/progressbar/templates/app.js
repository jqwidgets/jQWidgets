import React from 'react';
import ReactDOM from 'react-dom';

import JqxProgressBar from '../../../jqwidgets-react/react_jqxprogressbar.js';

class App extends React.Component {
    componentDidMount() {
        let values = {};
        let addInterval = (id, intervalStep) => {
            values[id] = { value: 0 };
            values[id].interval = setInterval(() => {
                values[id].value++;
                if (values[id].value == 100) {
                    clearInterval(values[id].interval);
                }

                this.refs[id].val(values[id].value);
            }, intervalStep);
        };

        addInterval('jqxProgressBar2', 20);
        addInterval('jqxProgressBar3', 30);
        addInterval('jqxProgressBar4', 40);
        addInterval('jqxProgressBar5', 50);
        addInterval('jqxProgressBar6', 60);
    }
    render() {
        let renderText = (text, value) => {
            if (value < 55) {
                return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
            }
            return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
        };
        return (
            <div style={{ height: 300 }}>
                <div style={{ marginTop: 10 }}>Primary</div>
                <JqxProgressBar ref='jqxProgressBar2'
                    animationDuration={0}
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    template={'primary'}
                />
                <div style={{ marginTop: 10 }}>Success</div>
                <JqxProgressBar ref='jqxProgressBar3'
                    animationDuration={0}
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    template={'success'}
                />
                <div style={{ marginTop: 10 }}>Info</div>
                <JqxProgressBar ref='jqxProgressBar4'
                    animationDuration={0}
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    template={'info'}
                />
                <div style={{ marginTop: 10 }}>Warning</div>
                <JqxProgressBar ref='jqxProgressBar5'
                    animationDuration={0}
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    template={'warning'}
                />
                <div style={{ marginTop: 10 }}>Danger</div>
                <JqxProgressBar ref='jqxProgressBar6'
                    animationDuration={0}
                    width={250}
                    height={30}
                    value={0}
                    showText={true}
                    renderText={renderText}
                    template={'danger'}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
