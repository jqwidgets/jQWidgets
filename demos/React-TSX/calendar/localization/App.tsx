import * as React from 'react';
 

import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IDropDownListProps {
    culture: ICalendarProps["culture"]
}

class App extends React.PureComponent<{}, IState> {
    private myCalendar = React.createRef<JqxCalendar>();

    constructor(props: {}) {
        super(props);
        this.dropDownListOnSelect = this.dropDownListOnSelect.bind(this);

        this.state = {
            culture: 'default',
            selectedIndex: 3,
            source: [
                'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
                'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
            ]
        }
    };

    public render() {
        return (
            <div>
                <JqxCalendar theme={'material-purple'} ref={this.myCalendar} style={{ float: 'left', marginRight: '20px' }}
                    width={220} height={220} enableTooltips={false} culture={this.state.culture} />
                <div style={{ float: 'left' }}>
                    <div style={{ float: 'left', fontFamily: 'Verdana', fontSize: '13px' }}>
                        Choose Culture
                    </div>
                    <br /><br />
                    <JqxDropDownList theme={'material-purple'} style={{ float: 'left' }} onSelect={this.dropDownListOnSelect}
                        width={220} height={25} selectedIndex={this.state.selectedIndex} source={this.state.source} />
                </div>
            </div>
        );
    }

    private dropDownListOnSelect(event: any): void {
        const index = event.args.index;
        switch (index) {
            case 0:
                this.setState({
                    culture: 'cs-CZ',
                    selectedIndex: index
                });
                break;
            case 1:
                this.setState({
                    culture: 'de-DE',
                    selectedIndex: index
                });
                break;
            case 2:
                this.setState({
                    culture: 'en-CA',
                    selectedIndex: index
                });
                break;
            case 3:
                this.setState({
                    culture: 'en-US',
                    selectedIndex: index
                });
                break;
            case 4:
                this.setState({
                    culture: 'en-US',
                    selectedIndex: index
                });
                break;
            case 5:
                this.setState({
                    culture: 'it-IT',
                    selectedIndex: index
                });
                break;
            case 6:
                this.setState({
                    culture: 'ja-JP',
                    selectedIndex: index
                });
                break;
            case 7:
                this.setState({
                    culture: 'he-IL',
                    selectedIndex: index
                });
                break;
            case 8:
                this.setState({
                    culture: 'ru-RU',
                    selectedIndex: index
                });
                break;
            case 9:
                this.setState({
                    culture: 'hr',
                    selectedIndex: index
                });
                break;
            case 10:
                this.setState({
                    culture: 'sa-IN',
                    selectedIndex: index
                });
                break;
        }
    }
}

export default App; 