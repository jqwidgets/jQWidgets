import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.myDropDownList.on('select', (event) => {
            let index = event.args.index;
            switch (index) {
                case 0:
                    $.getScript('../jqwidgets/globalization/globalize.culture.cs-CZ.js', () => {
                        this.refs.myCalendar.culture('cs-CZ');
                    });
                    break;
                case 1:
                    $.getScript('../jqwidgets/globalization/globalize.culture.de-DE.js', () => {
                        this.refs.myCalendar.culture('de-DE');
                    });
                    break;
                case 2:
                    $.getScript('../jqwidgets/globalization/globalize.culture.en-CA.js', () => {
                        this.refs.myCalendar.culture('en-CA');
                    });
                    break;
                case 3:
                    $.getScript('../jqwidgets/globalization/globalize.culture.en-US.js', () => {
                        this.refs.myCalendar.culture('en-US');
                    });
                    break;
                case 4:
                    $.getScript('../jqwidgets/globalization/globalize.culture.fr-FR.js', () => {
                        this.refs.myCalendar.culture('fr-FR');
                    });
                    break;
                case 5:
                    $.getScript('../jqwidgets/globalization/globalize.culture.it-IT.js', () => {
                        this.refs.myCalendar.culture('it-IT');
                    });
                    break;
                case 6:
                    $.getScript('../jqwidgets/globalization/globalize.culture.ja-JP.js', () => {
                        this.refs.myCalendar.culture('ja-JP');
                    });
                    break;
                case 7:
                    $.getScript('../jqwidgets/globalization/globalize.culture.he-IL.js', () => {
                        this.refs.myCalendar.culture('he-IL');
                    });
                    break;
                case 8:
                    $.getScript('../jqwidgets/globalization/globalize.culture.ru-RU.js', () => {
                        this.refs.myCalendar.culture('ru-RU');
                    });
                    break;
                case 9:
                    $.getScript('../jqwidgets/globalization/globalize.culture.hr-HR.js', () => {
                        this.refs.myCalendar.culture('hr');
                    });
                    break;
                case 10:
                    $.getScript('../jqwidgets/globalization/globalize.culture.sa-IN.js', () => {
                        this.refs.myCalendar.culture('sa-IN');
                    });
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
                <JqxCalendar ref='myCalendar' style={{ float: 'left', marginRight: 20 }}
                    width={220} height={220} enableTooltips={false}
                />

                <div style={{ float: 'left' }}>
                    <div style={{ float: 'left', fontFamily: 'Verdana', fontSize: 13 }}>
                        Choose Culture
                    </div>
                    <br /> <br />

                    <JqxDropDownList ref='myDropDownList' style={{ float: 'left' }}
                        width={220} height={25} selectedIndex={3} source={availableCultures}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
