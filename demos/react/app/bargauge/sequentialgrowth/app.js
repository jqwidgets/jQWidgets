import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
    componentDidMount() {
        this.setState({
            loop: 0
        });
        this.refs.myBarGauge.on('drawEnd', () => {

            let arrayA = [20, 60, 0, 0];
            let arrayB = [20, 60, 80, 0];
            let arrayC = [20, 60, 80, 100];

            switch (this.state.loop) {
                case 0:
                    this.refs.myBarGauge.val(arrayA);
                    break;
                case 1:
                    this.refs.myBarGauge.val(arrayB);
                    break;
                case 2:
                    this.refs.myBarGauge.val(arrayC);
                    break;
                default:
                    console.log('Render time is finished.');
                    break;
            }
            this.setState({
                loop: this.state.loop + 1
            });
        })
    }
    render() {
        let labels = { precision: 0, indent: 15, connectorWidth: 1 };
        return (
            <JqxBarGauge ref='myBarGauge'
                width={650} height={650} animationDuration={300}
                colorScheme={'scheme02'} values={[20, 0, 0, 0]}
                relativeInnerRadius={0.2} barSpacing={14}
                startAngle={180} endAngle={-180} labels={labels}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
