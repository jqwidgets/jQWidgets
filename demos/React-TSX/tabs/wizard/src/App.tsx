import * as React from 'react';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxcheckbox';
import JqxListBox from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxlistbox';
import JqxTabs from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtabs';

function App() {
    const myTabs = React.useRef<JqxTabs>(null);
    const usernameInput = React.useRef<HTMLInputElement>(null);
    const passwordInput = React.useRef<HTMLInputElement>(null);
    const acceptCheckBox = React.useRef<JqxCheckBox>(null);
    const products = React.useRef<JqxListBox>(null);
    const orderContainer = React.useRef<HTMLDivElement>(null);

    const getSource = React.useCallback(() => [
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/numberinput.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxNumberInput</span></div>", title: 'jqxNumberInput' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/progressbar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxProgressBar</span></div>", title: 'jqxProgressBar' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/calendar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxCalendar</span></div>", title: 'jqxCalendar' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/button.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxButton</span></div>", title: 'jqxButton' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/dropdownlist.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxDropDownList</span></div>", title: 'jqxDropDownList' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/listbox.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxListBox</span></div>", title: 'jqxListBox' },
        { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='https://www.jqwidgets.com/react/images/tooltip.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxTooltip</span></div>", title: 'jqxTooltip' }
    ], []);

    const showHint = React.useCallback((message: string, selector?: string) => {
        let sel = selector || '.hint';
        let msg = message || 'You can continue.';
        if (sel.indexOf('.') === 0) {
            const hintElem = document.getElementsByClassName(sel.slice(1))[0] as HTMLElement;
            if (hintElem) hintElem.innerHTML = '<strong>' + msg + '</strong>';
        } else {
            const hintElem = document.getElementById(sel.slice(1));
            if (hintElem) hintElem.innerHTML = '<strong>' + msg + '</strong>';
        }
    }, []);

    const isItemSelected = React.useCallback((array: any) => {
        let count = array.length;
        if (count === 0) return false;
        while (count) {
            count -= 1;
            if (array[count] !== -1 && typeof array[count] !== 'undefined') {
                return true;
            }
        }
        return false;
    }, []);

    const firstTab = React.useCallback((notify: boolean) => {
        const username = usernameInput.current?.value || '';
        const password = passwordInput.current?.value || '';
        let message = '';
        if (username.length < 3) {
            message += 'You have to enter valid username. <br />';
        }
        if (password.length < 3) {
            message += 'You have to enter valid password. <br />';
        }
        if (!acceptCheckBox.current?.getOptions("checked")) {
            message += 'You have to accept the terms. <br />';
        }
        if (message !== '') {
            if (notify) showHint(message, '#hintSection');
            return false;
        }
        showHint('You can continue.', '#hintSection');
        return true;
    }, [showHint]);

    const secondTab = React.useCallback((notify?: boolean) => {
        const selected = products.current?.getOptions("selectedIndexes") || [];
        if (!isItemSelected(selected)) {
            showHint('You have to select at least one item.', '#hintBasket');
            return false;
        } else {
            showHint('You can continue.', '#hintBasket');
        }
        return true;
    }, [showHint, isItemSelected]);

    const validate = React.useCallback((notify: boolean) => {
        if (!firstTab(notify)) {
            myTabs.current?.disableAt(1);
            myTabs.current?.disableAt(2);
            return;
        } else {
            myTabs.current?.enableAt(1);
        }
        if (!secondTab(notify)) {
            myTabs.current?.disableAt(2);
            return;
        } else {
            myTabs.current?.enableAt(2);
        }
    }, [firstTab, secondTab]);

    const acceptCheckBoxChange = React.useCallback((event: any) => {
        validate(true);
    }, [validate]);

    const productsChange = React.useCallback((event: any) => {
        validate(true);
        const selectedItems = products.current?.getOptions('selectedIndexes') || [];
        let count = selectedItems.length;
        const parent = orderContainer.current;
        if (!parent) return;

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
        while (count) {
            count--;
            if (typeof selectedItems[count] !== 'undefined' && selectedItems[count] !== -1) {
                const currentHtmlContent = parent.innerHTML;
                parent.innerHTML = currentHtmlContent + '<div style="width: 190px; height: 20px;">' + (getSource()[selectedItems[count]].html) + '</div>';
            }
        }
    }, [getSource, validate]);

    const productsUnselect = React.useCallback((event: any) => {
        validate(true);
    }, [validate]);

    React.useEffect(() => {
        if (!usernameInput.current || !passwordInput.current) return;

        const handleUsernameKeyup = () => validate(true);
        const handleUsernameChange = () => validate(true);
        const handlePasswordKeyup = () => validate(true);

        usernameInput.current.addEventListener('keyup', handleUsernameKeyup);
        usernameInput.current.addEventListener('change', handleUsernameChange);
        passwordInput.current.addEventListener('keyup', handlePasswordKeyup);

        const nextButtonClass = document.querySelectorAll('.nextButton');
        const handleNextClick = () => {
            validate(true);
            const selectedTab = myTabs.current?.getOptions('selectedItem');
            if (typeof selectedTab === 'number') myTabs.current?.select(selectedTab + 1);
        };
        nextButtonClass.forEach(nextButton =>
            nextButton.addEventListener('click', handleNextClick)
        );

        const backButtonClass = document.querySelectorAll('.backButton');
        const handleBackClick = () => {
            validate(true);
            const selectedTab = myTabs.current?.getOptions('selectedItem');
            if (typeof selectedTab === 'number') myTabs.current?.select(selectedTab - 1);
        };
        backButtonClass.forEach(backButton =>
            backButton.addEventListener('click', handleBackClick)
        );

        validate(true);
        showHint('Validation hints.', '#hintSection');

        return () => {
            usernameInput.current?.removeEventListener('keyup', handleUsernameKeyup);
            usernameInput.current?.removeEventListener('change', handleUsernameChange);
            passwordInput.current?.