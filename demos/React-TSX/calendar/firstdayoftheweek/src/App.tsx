import * as React from 'react';
 

import JqxCalendar, { ICalendarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcalendar';
import JqxDropDownList, { IDropDownListProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';

export interface IState extends ICalendarProps {
    selectedIndex: IDropDownListProps["selectedIndex"];
    source: IDropDownListProps["source"];
}

class App extends React.PureComponent<{}, IState> {
    private myCalendar = React.createRef<JqxCalendar>();

    constructor(props: {}) {
        super(props);
        this.dropDownListOnSelect = this.dropDownListOnSelect.bind(this);

        this.state = {
            firstDayOfWeek: 0,
            selectedIndex: 6,
            source: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    };

    public render() { 
        return (
            <div>
                <JqxCalendar theme={'material-purple'} ref={this.myCalendar}
                    width={220} height={220} firstDayOfWeek={this.state.firstDayOfWeek} enableTooltips={false} />

                <br /><br />
                <div>Choose the first day of the week</div>
                <br /><br />

                <JqxDropDownList theme={'material-purple'} onSelect={this.dropDownListOnSelect}
                    width={220} height={25} source={this.state.source}
                    selectedIndex={this.state.selectedIndex} autoDropDownHeight={true}/>
            </div>
        );
    }

    private dropDownListOnSelect(event: any): void {
        let index = event.args.index;
        if (index === 6) {
            index = -1;
        }
        this.setState({
            firstDayOfWeek: index + 1,
            selectedIndex: index
        });
    }
}

export default App;