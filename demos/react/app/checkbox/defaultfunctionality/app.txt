import React from 'react';
import ReactDOM from 'react-dom';

import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.CheckBox10.on('change', (event) =>  {
        let checked = event.args.checked;
        if (checked) {
            document.getElementById(event.target.id).children[1].innerHTML = 'Checked';
        }
        else {
            document.getElementById(event.target.id).children[1].innerHTML = 'Unchecked';
        }
    });
      this.refs.CheckBox11.on('change', (event) =>  {
        let checked = event.args.checked;
        if (checked) {
            document.getElementById(event.target.id).children[1].innerHTML = 'Checked';
        }
        else {
            document.getElementById(event.target.id).children[1].innerHTML = 'Unchecked';
        }
    });
      this.refs.CheckBox12.on('change', (event) =>  {
        let checked = event.args.checked;
        if (checked) {
            document.getElementById(event.target.id).children[1].innerHTML = 'Checked';
        }
        else if (false == checked) {
            document.getElementById(event.target.id).children[1].innerHTML = 'Unchecked';
        }
        else {
            document.getElementById(event.target.id).children[1].innerHTML = 'Indeterminate';
        }
    });
  }
  render() {
    let chexboxCSS = { marginLeft: 10, float: 'left' };
    let checkboxParentCSS = { float: 'left', width: 400, marginTop: 10 };
    return (
      <div id='jqxWidget' style={{ fontFamily: 'Verdana Arial', fontSize: 12, width: 400 }}>
            <div style={{ float: 'left', width: 400 }}>
              <h3 style={{ marginLeft: 15 }}>Categories</h3>
              <JqxCheckBox style={chexboxCSS} value='Entertainment'
                 width={120} height={25}
              />
              <JqxCheckBox style={chexboxCSS} value='Computers'
                 width={120} height={25} checked={true}
              />
              <JqxCheckBox style={chexboxCSS} value='Sports'
                 width={120} height={25}
              />
            </div>
            <div style={checkboxParentCSS}>
              <JqxCheckBox style={chexboxCSS} value='Health'
                 width={120} height={25}
              />
              <JqxCheckBox style={chexboxCSS} value='Finance'
                 width={120} height={25}
              />
              <JqxCheckBox style={chexboxCSS} value='Travel'
                 width={120} height={25}
              />
            </div>
            <div style={checkboxParentCSS}>
              <JqxCheckBox style={chexboxCSS} value='Music'
                 width={120} height={25}
              />
              <JqxCheckBox style={chexboxCSS} value='Technology'
                 width={120} height={25}
              />
              <JqxCheckBox style={chexboxCSS} value='Publishing'
                 width={120} height={25}
              />
            </div>
            <br />
            <div style={checkboxParentCSS}>
              <h3 style={{ marginLeft: 15 }}>States</h3>
              <JqxCheckBox style={chexboxCSS} value='Checked' ref='CheckBox10'
                 width={120} height={25} checked={true}
              />
              <JqxCheckBox style={chexboxCSS} value='Unchecked' ref='CheckBox11'
                 width={120} height={25} checked={false}
              />
            </div>
              <div style={checkboxParentCSS}>
              <JqxCheckBox style={chexboxCSS} value='Indeterminate' ref='CheckBox12'
                 width={120} height={25} checked={null} hasThreeStates={true}
              />
              <JqxCheckBox style={chexboxCSS} value='Disabled'
                 width={120} height={25} checked={true} disabled={true}
              />
            </div>
        </div>
    )
  }
}

//Render our App Component to the desirable element
ReactDOM.render(<App />, document.getElementById('app'));
