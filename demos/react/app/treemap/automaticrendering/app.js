import React from 'react';
import ReactDOM from 'react-dom';

import JqxTreeMap from '../../../jqwidgets-react/react_jqxtreemap.js';

class App extends React.Component {
    render () {
        let data = [
                {
                    label: 'USA',
                    value: 104
                },
                {
                    label: 'People\'s Republic of China',
                    value: 88
                },
                {
                    label: 'Great Britain',
                    value: 65
                },
                {
                    label: 'Russian Federation',
                    value: 82
                },
                {
                    label: 'Germany',
                    value: 44
                },
                {
                    label: 'Republic of Korea',
                    value: 28
                },
                {
                    label: 'France',
                    value: 34
                },
                {
                    label: 'Italy',
                    value: 28
                },
                {
                    label: 'Hungary',
                    value: 17
                },
                {
                    label: 'Australia',
                    value: 35
                },
                {
                    label: 'Japan',
                    value: 38
                },
                {
                    label: 'Kazakhstan',
                    value: 13
                },
                {
                    label: 'Netherlands',
                    value: 20
                },
                {
                    label: 'Ukraine',
                    value: 20
                },
                {
                    label: 'New Zealand',
                    value: 13
                },
                {
                    label: 'Cuba',
                    value: 14
                }
        ];
        
        let legendScaleCallback = (v) => {
            v = v.toFixed(1);
            return v;
        }

        return (
            <JqxTreeMap
                width={850} height={400} 
                colorRange={100}
                colorMode={'autoColors'}
                baseColor={'#52CBFF'}
                legendScaleCallback={legendScaleCallback}
                legendLabel={'Olympic medal count - London 2012'}
                source={data}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
