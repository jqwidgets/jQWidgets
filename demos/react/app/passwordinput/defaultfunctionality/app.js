import React from 'react';
import ReactDOM from 'react-dom';

import JqxExpander from '../../../jqwidgets-react/react_jqxexpander.js';
import JqxValidator from '../../../jqwidgets-react/react_jqxvalidator.js';
import JqxInput from '../../../jqwidgets-react/react_jqxinput.js';
import JqxPasswordInput from '../../../jqwidgets-react/react_jqxpasswordinput.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDateTimeInput from '../../../jqwidgets-react/react_jqxdatetimeinput.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.submitButton.on('click', () => {
            this.refs.myValidator.validate(document.getElementById('form'));
        });

        this.refs.myValidator.on('validationSuccess', () => {
            this.refs.myExpander.setContent('<span style="margin: 10px;">Account created.</span>');
        });
    }
    render() {
        let genders = ['male', 'female'];
        let rules = [
            {
                input: '.firstName', message: 'First name is required!', action: 'keyup, blur', rule: (input, commit) => {
                    return input.val() != '' && input.val() != 'First';
                }
            },
            {
                input: '.lastName', message: 'Last name is required!', action: 'keyup, blur', rule: (input, commit) => {
                    return input.val() != '' && input.val() != 'Last';
                }
            },
            { input: '.userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
            { input: '.passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
            {
                input: '.passwordConfirmInput', message: 'Passwords should match!', action: 'keyup, blur', rule: (input, commit) => {
                    let firstPassword = this.refs.passwordInput.val();
                    let secondPassword = this.refs.passwordConfirmInput.val();
                    return firstPassword == secondPassword;
                }
            },
            {
                input: '.gender', message: 'Gender is required!', action: 'blur', rule: (input, commit) => {
                    let index = this.refs.gender.getSelectedIndex();
                    return index != -1;
                }
            }
        ];
        return (
            <JqxExpander ref='myExpander' width={350} toggleMode={'none'} showArrow={false}>
                <div>
                    Create a new account
                </div>

                <div>
                    <JqxValidator ref='myValidator' rules={rules} hintType={'label'}>
                        <form id='form' style={{ overflow: 'hidden', margin: 10 }} action='./'>
                            <table>
                                <tr>
                                    <td colspan='2'>First Name
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxInput ref='firstNameInput' className='firstName text-input'
                                            width={300} height={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Last Name
                            </td>
                                </tr>
                                <tr>
                                    <td>
                                        <JqxInput ref='lastNameInput' className='lastName text-input'
                                            width={300} height={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Choose your username
                            </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <JqxInput ref='userNameInput' className='userInput text-input'
                                            width={300} height={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Create a password
                            </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <JqxPasswordInput ref='passwordInput' className='passwordInput'
                                            width={300} height={20}
                                            showStrength={true} showStrengthPosition={'right'}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Confirm your password
                            </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <JqxPasswordInput ref='passwordConfirmInput' className='passwordConfirmInput'
                                            width={300} height={20} />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Birthday
                            </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <div id='birthday'>
                                        </div>
                                        <JqxDateTimeInput ref='birthday' className='birthday'
                                            width={300} height={20}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>Gender
                            </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <JqxDropDownList ref='gender' className='gender'
                                            width={300} height={20} source={genders}
                                            selectedIndex={-1} placeHolder={'I am...'}
                                            dropDownHeight={50}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan='2'>
                                        <JqxButton width={120} height={25} ref='submitButton' value='Create account' />
                                    </td>
                                </tr>
                            </table>
                        </form>
                    </JqxValidator>
                </div>
            </JqxExpander>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
