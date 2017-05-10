import React from 'react';
import ReactDOM from 'react-dom';

import JqxComplexInput from '../../../jqwidgets-react/react_jqxcomplexinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.GetRealButton.on('click', () => {
        let realPart = this.refs.myComplexInput.getReal();
        alert("Real part is " + realPart);
    });
    this.refs.GetImaginaryButton.on('click', () => {
        let imaginaryPart = this.refs.myComplexInput.getImaginary();
        alert("Imaginary part is " + imaginaryPart);
    });
  }
  render() {
    return (
      <div>
        <JqxComplexInput ref='myComplexInput'
          width={260} height={25} value={"15 + 7.2i"} spinButtons={true}
        />
        <div style={{ marginTop: 20 }}>
          <JqxButton value='Get Real Part' ref='GetRealButton' style={{ display: 'inline-block' }} width={150}/>
          <JqxButton value='Get Imaginary Part' ref='GetImaginaryButton' width={150} style={{ marginLeft: 5, display: 'inline-block' }}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
