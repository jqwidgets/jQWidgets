import React from 'react';
import ReactDOM from 'react-dom';

import JqxTabs from '../../../jqwidgets-react/react_jqxtabs.js';
import JqxCheckBox from '../../../jqwidgets-react/react_jqxcheckbox.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxListBox from '../../../jqwidgets-react/react_jqxlistbox.js';

class App extends React.Component {
    componentDidMount() {

        let _addHandlers = () => {
            this.refs.usernameInput.addEventListener('keyup', () => {
                validate(true);
            });

            this.refs.usernameInput.addEventListener('change', () => {
                validate(true);
            });

            this.refs.passwordInput.addEventListener('keyup', () => {
                validate(true);
            });

            let nextButtonClass = document.getElementsByClassName('nextButton');
            for (let i = 0; i < nextButtonClass.length; i++) {
                let currentNextButton = nextButtonClass[i];
                currentNextButton.addEventListener('click', () => {
                    validate(true);
                    this.refs.myTabs.next();
                });
            }

            let backButtonClass = document.getElementsByClassName('backButton');
            for (let i = 0; i < backButtonClass.length; i++) {
                let currentBackButton = backButtonClass[i];
                currentBackButton.addEventListener('click', () => {
                    validate(true);
                    this.refs.myTabs.previous();
                });
            }

            this.refs.acceptCheckBox.on('change', (event) => {
                validate(true);
            });

            this.refs.products.on('change', (event) => {
                validate(true);
                let selectedItems = this.refs.products.selectedIndexes(),
                    count = selectedItems.length;

                var parent = document.getElementById('orderContainer');
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
                
                while (count) {
                    count--;
                    if (typeof selectedItems[count] !== 'undefined' &&
                        selectedItems[count] !== -1) {
                        var currentHtmlContent = document.getElementById('orderContainer').innerHTML;
                        document.getElementById('orderContainer').innerHTML = currentHtmlContent + '<div style="width: 190px; height: 20px;">' + (this.getSource()[selectedItems[count]].html) + '</div>';
                    }
                }
            });            
        };

        // Checking if any product have been selected
        let _isItemSelected = (array) => {
            let count = array.length;
            if (count === 0) {
                return false;
            }
            while (count) {
                count -= 1;
                if (array[count] !== -1 &&
                    typeof array[count] !== 'undefined') {
                    return true;
                }
            }
            return false;
        };

        // Validating all wizard tabs
        let validate = (notify) => {
            if (!firstTab(notify)) {
                this.refs.myTabs.disableAt(1);
                this.refs.myTabs.disableAt(2);
                return;
            } else {
                this.refs.myTabs.enableAt(1);
            }

            if (!secondTab(notify)) {
                this.refs.myTabs.disableAt(2);
                return;
            } else {
                this.refs.myTabs.enableAt(2);
            }
        }

        // Displaying message to the user
        let showHint = (message, selector) => {
            if (typeof selector === 'undefined') {
                selector = '.hint';
            }

            if (message === '') {
                message = 'You can continue.';
            }

            // Check is a class or not
            if (selector.indexOf('.') == 0) {
                document.getElementsByClassName(selector.slice(1)).innerHTML = '<strong>' + message + '</strong>';
            } else {
                document.getElementById(selector.slice(1)).innerHTML = '<strong>' + message + '</strong>';
            }
        }

        // Validating the first tab
        let firstTab = (notify) => {
            let username = this.refs.usernameInput.value,
                password = this.refs.passwordInput.value,
                message = '';

            if (username.length < 3) {
                message += 'You have to enter valid username. <br />';
            }

            if (password.length < 3) {
                message += 'You have to enter valid password. <br />';
            }
            
            if (!this.refs.acceptCheckBox.checked()) {
                message += 'You have to accept the terms. <br />';
            }

            if (message !== '') {
                if (notify) {
                    showHint(message, '#hintSection');
                }

                return false;
            }

            showHint('You can continue.', '#hintSection');
            return true;
        }

        // Validating the second tab
        let secondTab = () => {
            let products = this.refs.products.selectedIndex();
            if (!_isItemSelected(this.refs.products.selectedIndexes())) {
                showHint('You have to select at least one item.', '#hintBasket');
                return false;
            } else {
                showHint('You can continue.', '#hintBasket');
            }
            return true;
        }

        validate(true);
        _addHandlers();
        showHint('Validation hints.');
    };
    getSource() {
        return [
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/numberinput.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxNumberInput</span></div>", title: 'jqxNumberInput' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/progressbar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxProgressBar</span></div>", title: 'jqxProgressBar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/calendar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxCalendar</span></div>", title: 'jqxCalendar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/button.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxButton</span></div>", title: 'jqxButton' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/dropdownlist.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxDropDownList</span></div>", title: 'jqxDropDownList' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/listbox.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxListBox</span></div>", title: 'jqxListBox' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='../../images/tooltip.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxTooltip</span></div>", title: 'jqxTooltip' }
        ];
    }
    render() {
        // init default settings 
        let buttonWidth = 50;
        let source = this.getSource();
        return (
            <div>
                <JqxTabs ref='myTabs'
                    width={500} height={230} keyboardNavigation={false}
                >
                    <ul>
                        <li style={{ marginLeft: 30 }}>Personal info</li>
                        <li>Shopping basket</li>
                        <li>Review order</li>
                    </ul>

                    <div className='section'>
                        <div id='form'>
                            <div className='inputContainer'>
                                Username:
                        <input ref='usernameInput' className='formInput' type='text' /></div>
                            <div className='inputContainer'>
                                Password:
                        <input ref='passwordInput' className='formInput' type='password' /></div>
                        </div>
                        <div id='hintWrapper'>
                            <div id='hintSection' className='hint'></div>
                        </div>
                        <div id='checkBoxWrapper'>
                            <JqxCheckBox ref='acceptCheckBox' width={250} value='I accept the terms and conditions' />
                        </div>
                        <div id='sectionButtonsWrapper'>
                            <JqxButton ref='nextButtonInfo' className='nextButton' value='Next' width={buttonWidth} />
                        </div>
                    </div>

                    <div className='section'>
                        <JqxListBox ref='products'
                            width={490} height={130}
                            source={source} multiple={true}
                        />
                        <div className='hint' id='hintBasket'>
                        </div>
                        <div id='basketButtonsWrapper'>
                            <JqxButton ref='backButtonBasket' className='backButton' value='Back' width={buttonWidth} />
                            <JqxButton ref='nextButtonBasket' className='nextButton' value='Next' width={buttonWidth} />
                        </div>
                    </div>

                    <div className='section'>
                        <div id='selectedProductsHeader'>
                            <h4>Selected products</h4>
                            <div id='orderContainer'>
                            </div>
                        </div>
                        <div id='selectedProductsButtonsWrapper'>
                            <JqxButton ref='backButtonReview' className='backButton' value='Back' width={buttonWidth} />
                        </div>
                    </div>

                </JqxTabs>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
