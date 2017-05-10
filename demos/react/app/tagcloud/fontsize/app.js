import React from 'react';
import ReactDOM from 'react-dom';

import JqxTagCloud from '../../../jqwidgets-react/react_jqxtagcloud.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.minFontSize.val(12);
        this.refs.maxFontSize.val(20);
        this.refs.fontSizeUnit.val('px');

        this.refs.setFontSize.on('click', (event) => {
            this.refs.tagCloud.setOptions({
                minFontSize: this.refs.minFontSize.val(),
                maxFontSize: this.refs.maxFontSize.val(),
                fontSizeUnit: this.refs.fontSizeUnit.val(),
            });
        });
    }
    render () {
        let unemploymentRate = [
                { 'country': 'Namibia', 'rate': 37.6 },
                { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                { 'country': 'Latvia', 'rate': 18.7 },
                { 'country': 'Lithuania', 'rate': 17.8 },
                { 'country': 'Estonia', 'rate': 16.9 },
                { 'country': 'Serbia', 'rate': 16.6 },
                { 'country': 'Georgia', 'rate': 16.5 },
                { 'country': 'Yemen, Rep.', 'rate': 14.6 },
                { 'country': 'Slovak Republic', 'rate': 14.4 },
                { 'country': 'Dominican Republic', 'rate': 14.2 },
                { 'country': 'Tunisia', 'rate': 14.2 },
                { 'country': 'Armenia', 'rate': 28.6 },
                { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                { 'country': 'Lesotho', 'rate': 25.3 },
                { 'country': 'South Africa', 'rate': 24.7 },
                { 'country': 'Spain', 'rate': 20.1 },
                { 'country': 'Albania', 'rate': 13.8 },
                { 'country': 'Ireland', 'rate': 13.6 },
                { 'country': 'Jordan', 'rate': 12.9 },
                { 'country': 'Greece', 'rate': 12.5 }
        ];
        let source =
        {
            datatype: 'array',
            localdata: unemploymentRate,
            datafields: [
                { name: 'country' },
                { name: 'rate' }
            ]
        };
        let dataAdapter = new $.jqx.dataAdapter(source, {});
        return (
            <div>

                <JqxTagCloud ref='tagCloud'
                    width={600} source={dataAdapter} fontSizeUnit={'px'} 
                    minFontSize={12} maxFontSize={20} 
                    displayMember={'country'} valueMember={'rate'}
                    urlBase={'http://localhost/'} minColor={'#00AA99'} maxColor={'#FF0000'}
                />

                <div style={{ float: 'left', marginRight: 5 }}>
                    minFontSize:
                    <JqxInput ref='minFontSize'
                        width={200} height={25}
                        placeHolder={'MinFontSize'}
                    />
                </div>
                <div style={{ float: 'left', marginRight: 5 }}>
                    maxFontSize:
                    <JqxInput ref='maxFontSize'
                        width={200} height={25}
                        placeHolder={'maxFontSize'}
                    />
                </div>
                <div style={{ float: 'left', marginRight: 5 }}>
                    fontSizeUnit:
                    <JqxInput ref='fontSizeUnit'
                        width={200} height={25}
                        minLength={1} source={['em', 'px', '%']}
                        placeHolder={'em/px/%'}
                    />
                </div>
                <JqxButton ref='setFontSize' value='Set Font' style={{ display: 'inline-block', margin: '2px 0 0 0'}}/>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
