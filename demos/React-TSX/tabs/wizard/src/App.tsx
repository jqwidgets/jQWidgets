import * as React from 'react';
 


import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

class App extends React.PureComponent<{}, {}> {
    private myTabs = React.createRef<JqxTabs>();
    private usernameInput = React.createRef<HTMLInputElement>();
    private passwordInput = React.createRef<HTMLInputElement>();
    private acceptCheckBox = React.createRef<JqxCheckBox>();
    private products = React.createRef<JqxListBox>();
    private orderContainer = React.createRef<HTMLDivElement>();

    constructor(props: {}) {
        super(props);
        this.acceptCheckBoxChange = this.acceptCheckBoxChange.bind(this);
        this.productsChange = this.productsChange.bind(this);
        this.productsUnselect = this.productsUnselect.bind(this);
    }

    public componentDidMount() {
        this.addHandlers();
        this.validate(true);
        this.showHint('Validation hints.', '#hintSection');
    }

    public render() {
        return (
            <JqxTabs theme={'material-purple'} ref={this.myTabs}
                // @ts-ignore
                width={'100%'}
                height={230}
                keyboardNavigation={false}
            >
                <ul>
                    <li style={{ marginLeft: 30 }}>
                        Personal info
                    </li>
                    <li>Shopping basket</li>
                    <li>Review order</li>
                </ul>
                <div className={"section"}>
                    <div id={"form"}>
                        <div className={"inputContainer"}>
                            Username:
                        <input className={"formInput"} type="text" ref={this.usernameInput} />
                        </div>
                        <div className={"inputContainer"}>
                            Password:
                        <input className={"formInput"} type="password" ref={this.passwordInput} />
                        </div>
                    </div>

                    <div id={"hintWrapper"}>
                        <div id={"hintSection"} className={"hint"} />
                    </div>
                    <div id={"checkBoxWrapper"}>
                        <JqxCheckBox theme={'material-purple'} ref={this.acceptCheckBox} onChange={this.acceptCheckBoxChange} width={250}>
                            I accept the terms and conditions
                        </JqxCheckBox>
                    </div>
                    <div id={"sectionButtonsWrapper"}>
                        <JqxButton theme={'material-purple'} className={"nextButton"} width={50}>Next</JqxButton>
                    </div>
                </div>
                <div className={"section"}>
                    <JqxListBox theme={'material-purple'} ref={this.products}
                        onChange={this.productsChange}
                        onUnselect={this.productsUnselect}
                        source={this.getSource()}
                        width={490}
                        height={130}
                        multiple={true}
                    />
                    <div id={"hintWrapper2"}>
                        <div id={"hintBasket"} className={"hint"} />
                    </div>
                    <div id={"basketButtonsWrapper"}>
                        <JqxButton theme={'material-purple'} className={"backButton"} width={50}>Back</JqxButton>
                        <JqxButton theme={'material-purple'} className={"nextButton"} width={50}>Next</JqxButton>
                    </div>
                </div>
                <div className={"section"}>
                    <div id={"selectedProductsHeader"}>
                        <h4>Selected products</h4>
                        <div ref={this.orderContainer} />
                    </div>
                    <div id={"selectedProductsButtonsWrapper"}>
                        <JqxButton theme={'material-purple'} className={"backButton"} width={50}>Back</JqxButton>
                    </div>
                </div>
            </JqxTabs>
        );
    }

    private addHandlers = () => {
        this.usernameInput.current!.addEventListener('keyup', () => {
            this.validate(true);
        });
        this.usernameInput.current!.addEventListener('change', () => {
            this.validate(true);
        });
        this.passwordInput.current!.addEventListener('keyup', () => {
            this.validate(true);
        });

        const nextButtonClass = document.querySelectorAll('.nextButton');
        nextButtonClass.forEach(nextButton => {
            nextButton.addEventListener('click', (e) => {
                this.validate(true);
                const selectedTab = this.myTabs.current!.getOptions('selectedItem');
                this.myTabs.current!.select(selectedTab + 1);
            });
        });

        const backButtonClass = document.querySelectorAll('.backButton');
        backButtonClass.forEach(backButton => {
            backButton.addEventListener('click', () => {
                this.validate(true);
                const selectedTab = this.myTabs.current!.getOptions('selectedItem');
                this.myTabs.current!.select(selectedTab - 1);
            });
        });
    };

    // Checking if any product have been selected
    private isItemSelected = (array: any) => {
        let count = array.length;
        if (count === 0) {
            return false;
        }

        while (count) {
            count -= 1;
            if (array[count] !== -1 && typeof array[count] !== 'undefined') {
                return true;
            }
        }

        return false;
    };

    // Validating all wizard tabs
    private validate = (notify: boolean) => {
        if (!this.firstTab(notify)) {
            this.myTabs.current!.disableAt(1);
            this.myTabs.current!.disableAt(2);
            return;
        } else {
            this.myTabs.current!.enableAt(1);
        }
        if (!this.secondTab(notify)) {
            this.myTabs.current!.disableAt(2);
            return;
        } else {
            this.myTabs.current!.enableAt(2);
        }
    };

    // Displaying message to the user
    private showHint = (message: string, selector: string) => {
        if (typeof selector === 'undefined') {
            selector = '.hint';
        }
        if (message === '') {
            message = 'You can continue.';
        }
        // Check is a class or not
        if (selector.indexOf('.') === 0) {
            document.getElementsByClassName(selector.slice(1))[0].innerHTML = '<strong>' + message + '</strong>';
        } else {
            document.getElementById(selector.slice(1))!.innerHTML = '<strong>' + message + '</strong>';
        }
    }

    // Validating the first tab
    private firstTab = (notify: boolean) => {
        const username = this.usernameInput.current!.value;
        const password = this.passwordInput.current!.value;
        let message = '';
        if (username.length < 3) {
            message += 'You have to enter valid username. <br />';
        }
        if (password.length < 3) {
            message += 'You have to enter valid password. <br />';
        }
        if (!this.acceptCheckBox.current!.getOptions("checked")) {
            message += 'You have to accept the terms. <br />';
        }
        if (message !== '') {
            if (notify) {
                this.showHint(message, '#hintSection');
            }
            return false;
        }

        this.showHint('You can continue.', '#hintSection');
        return true;
    };

    // Validating the second tab
    private secondTab = (notify?: boolean) => {
        const products = this.products.current!.getOptions("selectedIndexes");
        if (!this.isItemSelected(products)) {
            this.showHint('You have to select at least one item.', '#hintBasket');
            return false;
        } else {
            this.showHint('You can continue.', '#hintBasket');
        }
        return true;
    };

    // Event handling
    private acceptCheckBoxChange(event: any): void {
        this.validate(true);
    }

    private productsChange(event: any): void {
        this.validate(true);
        const selectedItems = this.products.current!.getOptions('selectedIndexes')
        let count = selectedItems.length;
        const parent = this.orderContainer.current!;
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        while (count) {
            count--;
            if (typeof selectedItems[count] !== 'undefined' &&
                selectedItems[count] !== -1) {
                const currentHtmlContent = parent.innerHTML;
                parent.innerHTML = currentHtmlContent + '<div style="width: 190px; height: 20px;">' + (this.getSource()[selectedItems[count]].html) + '</div>';
            }
        }
    }

    private productsUnselect(event: any): void {
        this.validate(true);
    }

    private getSource = (): any[] => {
        return [
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/numberinput.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxNumberInput</span></div>", title: 'jqxNumberInput' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/progressbar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxProgressBar</span></div>", title: 'jqxProgressBar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/calendar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxCalendar</span></div>", title: 'jqxCalendar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/button.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxButton</span></div>", title: 'jqxButton' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/dropdownlist.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxDropDownList</span></div>", title: 'jqxDropDownList' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/listbox.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxListBox</span></div>", title: 'jqxListBox' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/tooltip.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxTooltip</span></div>", title: 'jqxTooltip' }
        ];
    }
}

export default App;
