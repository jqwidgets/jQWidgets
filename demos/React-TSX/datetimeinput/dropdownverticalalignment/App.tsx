import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>                
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <br /><br /><br /><br />
                <label>Date Input</label>
                <JqxDateTimeInput theme={'material-purple'}
                    width={300} height={30} dropDownVerticalAlignment={'top'} />
                <label>Time Input</label>
                <JqxDateTimeInput theme={'material-purple'} 
                    width={300} height={30} dropDownVerticalAlignment={'top'}
                    showCalendarButton={false} showTimeButton={true}  />
                <label>Date/Time Input</label>
                <JqxDateTimeInput theme={'material-purple'}
                    width={300} height={30} dropDownVerticalAlignment={'top'}
                    showCalendarButton={true} showTimeButton={true} />
            </div>
        );
    }
}

export default App;