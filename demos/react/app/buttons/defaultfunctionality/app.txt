import React from 'react';
import ReactDOM from 'react-dom';

import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.myButton.on('click', (event) => {
      document.getElementById('events').innerHTML = '<span>Button Clicked</span';
    });
    this.refs.mySubmitButton.on('click', (event) => {
      document.getElementById('events').innerHTML = '<span>Submit Button Clicked</span';
    });
    this.refs.myImageButton.on('click', () => {
      document.getElementById('events').innerHTML = '<span>Image Button Clicked</span';
    });
    this.refs.myTextImageButton.on('click', () => {
      document.getElementById('events').innerHTML = '<span>Text/Image Button Clicked</span';
      this.refs.myTextImageButton.setOptions({ textImageRelation: "textBeforeImage", imgPosition: "left", textPosition: "center" });
    });
    this.refs.myHTMLButton.on('click', () => {
      document.getElementById('events').innerHTML = '<span>HTML Button Clicked</span';
      this.refs.myHTMLButton.value("<span style='font-style: italic;'>Thanks for clicking me!</span>");
    });
  }
  render () {
    let marginTop = { marginTop: 20 };
    let eventsStyle = { fontSize: 12, fontFamily: 'Verdana', marginTop: 10 }
    return (
      <div>
        <div>
          <JqxButton ref='myButton' value='Button' width={120} height={40}/>
        </div>
        <div>
          <JqxButton ref='mySubmitButton' style={marginTop} value='Submit' width={120} height={40}/>
        </div>
        <div>
          <JqxButton ref='myImageButton' style={marginTop}
            width={120} height={40}
            imgSrc={"../images/facebook.png"}
          />
        </div>
        <div>
          <JqxButton ref='myTextImageButton' style={marginTop} value='Button'
            width={120} height={40} textImageRelation={"imageBeforeText"}
            textPosition={"left"} imgSrc={"../images/twitter.png"}
          />
        </div>
        <div>
          <JqxButton ref='myHTMLButton' style={marginTop} value="<span style='font-weight: bold;'>HTML Button</span>"
            width={120} height={40}
          />
        </div>
        <div>
          <JqxButton style={marginTop} value='Disabled' width={120} height={40} disabled={true}/>
        </div>
        <div style={eventsStyle}>
          <div>Events:</div>
          <div id='events'></div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
