import * as React from 'react';
 


import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdatetimeinput';

class App extends React.PureComponent<{}> {

    constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <div>
                <label>Date Input</label>
                <JqxDateTimeInput theme={'material-purple'} width={320} height={25} />
                <br />

                <label>Time Input</label>
                <JqxDateTimeInput theme={'material-purple'}
                    width={320} height={30} formatString={'T'} showTimeButton={true} showCalendarButton={false} />
                <br />

                <label>Date Time Input</label>
                <JqxDateTimeInput theme={'material-purple'}
                    width={320} height={30} formatString={'F'} showTimeButton={true} />
            </div>
        );
    }
}

export default App;