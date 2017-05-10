import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount () {
    this.refs.submitButton.on('click', () => {
      let passwordValue = this.refs.passwordInput.val();
      let confirmValue = this.refs.passwordConfirmInput.val();
      let userNameValue = this.refs.userNameInput.val();

      if (userNameValue.length === 0 || confirmValue.length === 0 || passwordValue === 0)
      {
          alert("You have an empty field!");
          this.refs.userNameInput.val('');
          return false;
      }

      if (passwordValue === confirmValue)
      {
          alert("Submitting Data");
      } else
      {
          alert("Passwords do not match!");
      }

      this.refs.passwordInput.val('');
      this.refs.passwordConfirmInput.val('');
      this.refs.userNameInput.val('');
    });
  }
  render () {
    return (
      <JqxExpander width={235} toggleMode={'none'} showArrow={false}>
          <div>
              Create a new account
          </div>
          <div>
              <table style={{ overflow: 'hidden', margin: 10 }}>
                <tbody>
                  <tr>
                      <td colSpan="2">
                          Choose your username:
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          <JqxInput ref='userNameInput' width={200} height={21}/>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          Create a password:
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          <JqxPasswordInput ref='passwordInput'
                            width={200} height={21}
                            showStrength={true} showStrengthPosition={'right'}
                          />
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          Confirm your password:
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          <JqxPasswordInput ref='passwordConfirmInput' width={200} height={21}/>
                      </td>
                  </tr>
                  <tr>
                      <td colSpan="2">
                          <JqxButton ref='submitButton' width={150} height={25} style={{ marginTop: 13, marginLeft: 26 }} value='Create account'/>
                      </td>
                  </tr>
                </tbody>
              </table>
          </div>
      </JqxExpander>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
