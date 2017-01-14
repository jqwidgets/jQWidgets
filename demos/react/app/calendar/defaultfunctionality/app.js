import React from 'react';
import ReactDOM from 'react-dom';

import JqxCalendar from '../../../jqwidgets-react/react_jqxcalendar.js';

class App extends React.Component {
  render () {
    return (
      <JqxCalendar width={220} height={220} />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
