import React from 'react';
import ReactDOM from 'react-dom';

import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';

class App extends React.Component {
  render () {
    return (
      <div id='content'>
        <label>Date Input</label>
        <JqxDateTimeInput
          width={300} height={25}
        />
        <br />
        <label>Time Input</label>
        <JqxDateTimeInput
          width={300} height={25} showCalendarButton={false}
          formatString={'T'} showTimeButton={true}
        />
        <br />
        <label>Date Time Input</label>
        <JqxDateTimeInput
          width={300} height={25}
          formatString={'F'} showTimeButton={true}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
