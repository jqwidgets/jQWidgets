import React from 'react';
import ReactDOM from 'react-dom';

import JqxButtonGroup from '../../../jqwidgets-react/react_jqxbuttongroup.js';
import JqxRadioButton from '../../../jqwidgets-react/react_jqxradiobutton.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.myButtonGroup.on('buttonclick', (event) => {
        let clickedButton = event.args.button;
        document.getElementById('eventsLog').innerHTML = "Clicked: " + clickedButton[0].id;
    });
    this.refs.myDefaultModeButton.on('checked', () => {
        this.refs.myButtonGroup.mode('default');
    });
    this.refs.myRadioModeButton.on('checked', () => {
          this.refs.myButtonGroup.mode('radio');
    });
    this.refs.myCheckBoxModeButton.on('checked', () => {
        this.refs.myButtonGroup.mode('checkbox');
    });
  }
  render() {
    let buttonStyle =
    {
      paddingTop: 4,
      paddingBottom: 4,
      paddingLeft: 16,
      paddingRight: 16
    }
    return (
      <div>
        <JqxButtonGroup ref='myButtonGroup'>
            <button style={buttonStyle} id='Left' value='Left'/>
            <button style={buttonStyle} id='Center' value='Center'/>
            <button style={buttonStyle} id='Right' value='Right'/>
        </JqxButtonGroup>
        <div style={{marginTop: 10}}>
          <h4>Modes</h4>
          <JqxRadioButton ref='myDefaultModeButton' checked={true} style={{margin: 3}} value='Default'/>
          <JqxRadioButton ref='myRadioModeButton' style={{margin: 3}} value='RadioButtons'/>
          <JqxRadioButton ref='myCheckBoxModeButton' style={{margin: 3}} value='CheckBoxes'/>
        </div>
        <div id="eventsLog" style={{marginTop: 10}}></div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
