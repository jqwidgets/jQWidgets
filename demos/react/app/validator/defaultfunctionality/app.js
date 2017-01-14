import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxValidator from '../../../jqwidgets-react/react_jqxvalidator.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';
import JqxMaskedInput from '../../../jqwidgets-react/react_jqxmaskedinput.js';
import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';

class App extends React.Component {
  componentDidMount() {
    this.refs.SendButton.on('click', (event) => {
      this.refs.myValidator.validate(document.getElementById('form'));
    });
  }
  render () {
    let rules =
    [
        { input: '.userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
        { input: '.realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
        { input: '.realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=3,12' },
        {
           input: '.birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2014.', action: 'valueChanged',
           rule: (input, commit) =>
           {
               let date = this.refs.dateTimeInput.value();
               let result = date.getFullYear() >= 1900 && date.getFullYear() <= 2014;
               return result;
           }
        },
        { input: '.passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
        { input: '.passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
        {
           input: '.passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
           rule: (input, commit) =>
           {
               if (this.refs.passwordInput.val() === this.refs.confirmPasswordInput.val())
               {
                   return true;
               }
               return false;
           }
        },
        { input: '.emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
        { input: '.emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
        { input: '.ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
        { input: '.phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
        { input: '.zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
        { input: '.acceptCheckBox', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:170,0' }
    ]
    return (
      <JqxExpander width={300} showArrow={false} toggleMode={'none'}>
          <div><h3>Register</h3></div>
          <div>
              <JqxValidator ref='myValidator' rules={rules}>
                  <form id='form' action="./">
                      <table className="register-table">
                        <tbody>
                          <tr>
                              <td>Username:</td>
                              <td><JqxInput className="userInput text-input"/></td>
                          </tr>
                          <tr>
                              <td>Password:</td>
                              <td><JqxPasswordInput ref='passwordInput' className="passwordInput text-input"/></td>
                          </tr>
                          <tr>
                              <td>Confirm password:</td>
                              <td><JqxPasswordInput ref='confirmPasswordInput' className="passwordConfirmInput text-input"/></td>
                          </tr>
                          <tr>
                              <td>Real name:</td>
                              <td><JqxInput createWidget={{  }} className="realNameInput text-input"/></td>
                          </tr>
                          <tr>
                              <td>Birth date:</td>
                              <td><JqxDateTimeInput ref='dateTimeInput' width={156} height={22} value={new Date(2014, 4, 1)} className="birthInput"/></td>
                          </tr>
                          <tr>
                              <td>E-mail:</td>
                              <td><JqxInput placeHolder={'someone@mail.com'} className="emailInput text-input"/></td>
                          </tr>
                          <tr>
                              <td>SSN:</td>
                              <td><JqxMaskedInput width={156} height={22} mask={'###-##-####'} className="ssnInput"/></td>
                          </tr>
                          <tr>
                              <td>Phone:</td>
                              <td><JqxMaskedInput  width={156} height={22} mask={'(###)###-####'} className="phoneInput"/></td>
                          </tr>
                          <tr>
                              <td>Zip code:</td>
                              <td><JqxMaskedInput  width={156} height={22} mask={'#####-####'} className="zipInput"/></td>
                          </tr>
                          <tr>
                              <td colSpan="2" style={{ paddingLeft: 80,paddingTop:10, paddingBottom: 10 }}>
                                  <JqxCheckBox width={130} className="acceptCheckBox" value='I accept terms'/>
                              </td>
                          </tr>
                          <tr>
                              <td colSpan="2">
                                  <JqxButton width={60} height={25} ref='SendButton' value='Send' style={{ marginLeft: 8 + 'em' }}/>
                              </td>
                          </tr>
                        </tbody>
                      </table>
                  </form>
              </JqxValidator>
          </div>
      </JqxExpander>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
