import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myBarGauge.on('drawEnd', () => {
            let values = [];
            values[0] = this.getRandomInt(1, 99);
            setTimeout(() => {
                this.refs.myBarGauge.val(values);
            }, 1000);
        });
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    render() {

        let barGaugePalette = ['#307DD7', '#AA4643', '#89A54E', '#71588F', '#4198AF'];

        let formatFunction = (value, index, color) => {
            if (value < 20) {
                return barGaugePalette[0];
            }
            if (value < 40) {
                return barGaugePalette[1];
            }
            if (value < 60) {
                return barGaugePalette[2];
            }
            if (value < 80) {
                return barGaugePalette[3];
            }
            if (value <= 100) {
                return barGaugePalette[4];
            }
        };

        return (
            <JqxBarGauge ref='myBarGauge'
                width={'100%'} height={600} values={[25]}
                relativeInnerRadius={0.6} formatFunction={formatFunction}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
