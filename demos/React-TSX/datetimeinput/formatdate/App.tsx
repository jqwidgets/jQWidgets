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
            formatString: 'd',
            selectedIndex: 0,
            source: [
                'short date pattern', 'long date pattern', 'short time pattern', 'long time pattern', 'long date, short time pattern',
                'long date, long time pattern', 'month/day pattern', 'month/year pattern', 'custom'
            ]
        }
    }

    public render() {
        return (
            <div>
                <JqxDateTimeInput theme={'material-purple'} width={300} height={30} formatString={this.state.formatString} />
                <br />
                <div>
                    <div style={{ fontFamily: 'Verdana', fontSize: '13px' }}>
                        Choose Format:
                    </div>
                    <br />
                    <JqxDropDownList theme={'material-purple'} onSelect={this.listOnSelect}
                        width={230} height={30}
                        source={this.state.source} selectedIndex={this.state.selectedIndex} />
                </div >
            </div>
        );
    }

    private listOnSelect(event: any): void {
        const index: number = event.args.index;
        let newFormatString: IDateTimeInputProps['formatString'];

        switch (index) {
            case 0:
                newFormatString = 'd';
                break;
            case 1:
                newFormatString = 'D';
                break;
            case 2:
                newFormatString = 't';
                break;
            case 3:
                newFormatString = 'T';
                break;
            case 4:
                newFormatString = 'f';
                break;
            case 5:
                newFormatString = 'F';
                break;
            case 6:
                newFormatString = 'M';
                break;
            case 7:
                newFormatString = 'Y';
                break;
            case 8:
                newFormatString = 'dddd-MMMM-yyyy';
                break;
        }

        this.setState({
            formatString: newFormatString,
            selectedIndex: index
        });
    }
}

export default App;