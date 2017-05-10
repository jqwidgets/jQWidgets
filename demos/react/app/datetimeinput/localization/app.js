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
                    this.refs.myDateTimeInput.culture('cs-CZ');
                    break;
                case 1:
                    this.refs.myDateTimeInput.culture('de-DE');
                    break;
                case 2:
                    this.refs.myDateTimeInput.culture('en-CA');
                    break;
                case 3:
                    this.refs.myDateTimeInput.culture('en-US');
                    break;
                case 4:
                    this.refs.myDateTimeInput.culture('fr-FR');
                    break;
                case 5:
                    this.refs.myDateTimeInput.culture('it-IT');
                    break;
                case 6:
                    this.refs.myDateTimeInput.culture('ja-JP');
                    break;
                case 7:
                    this.refs.myDateTimeInput.culture('he-IL');
                    break;
                case 8:
                    this.refs.myDateTimeInput.culture('ru-RU');
                case 9:
                    this.refs.myDateTimeInput.culture('hr');
                    break;
                case 10:
                    this.refs.myDateTimeInput.culture('sa-IN');
                    break;
            }
        });
    }
    render() {
        let availableCultures =
            [
                'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
                'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
            ];
        return (
            <div>
                <JqxDateTimeInput ref='myDateTimeInput'
                    width={250} height={25}
                />
                <br />
                <div>
                    <div style={{ fontFamily: 'Verdana', fontSize: 13 }}>Choose Culture</div>
                    <br />
                    <JqxDropDownList ref='myDropDownList'
                        width={200} height={25}
                        source={availableCultures} selectedIndex={3}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
