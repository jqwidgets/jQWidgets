import React from 'react';
import ReactDOM from 'react-dom';

import JqxBarGauge from '../../../jqwidgets-react/react_jqxbargauge.js';

class App extends React.Component {
  render () {
    return (
      <JqxBarGauge
        width={600} height={600} max={150}
        colorScheme={'scheme02'} values={[102, 115, 130, 137]}
      />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
