import * as React from 'react';
 


import JqxDateTimeInput, { IDateTimeInputProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends IDateTimeInputProps {
    selectedIndex: IDropDownListProps['selectedIndex'];
    source: IDropDownListProps['source'];
}

class App extends React.PureComponent<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.listOnSelect = this.listOnSelect.bind(this);

        this.state = {
            culture: 'en-US',
            selectedIndex: 3,
            source: [
                'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
                'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
            ]
        }
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'} width={300} height={30} culture={this.state.culture} />
                <br />
                <div>
                    <div style={{ fontFamily: 'Verdana', fontSize: '13px' }}>
                        Choose Culture:
                    </div>
                    <br />
                    <JqxDropDownList theme={'material-purple'} onSelect={this.listOnSelect}
                        width={200} height={30}
                        source={this.state.source} selectedIndex={this.state.selectedIndex} />
                </div >
            </div>
        );
    }

    private listOnSelect(event: any): void {
        const index: number = event.args.index;
        let newCulture: IDateTimeInputProps['culture'];

        switch (index) {
            case 0:
                newCulture = 'cs-CZ';
                break;
            case 1:
                newCulture = 'de-DE';
                break;
            case 2:
                newCulture = 'en-CA';
                break;
            case 3:
                newCulture = 'en-US';
                break;
            case 4:
                newCulture = 'fr-FR';
                break;
            case 5:
                newCulture = 'it-IT';
                break;
            case 6:
                newCulture = 'ja-JP';
                break;
            case 7:
                newCulture = 'he-IL';
                break;
            case 8:
                newCulture = 'ru-RU';
                break;
            case 9:
                newCulture = 'hr';
                break;
            case 10:
                newCulture = 'sa-IN';
                break;
        }

        this.setState({
            culture: newCulture,
            selectedIndex: index
        });
    }
}

export default App;