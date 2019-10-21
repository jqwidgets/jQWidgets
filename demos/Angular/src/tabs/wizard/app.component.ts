import { Component, ViewChild, AfterViewInit, ViewEncapsulation, ElementRef } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
import { jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTabs', { static: false }) jqxTabs: jqxTabsComponent;
    @ViewChild('acceptCheckBox', { static: false }) acceptCheckBox: jqxCheckBoxComponent;
    @ViewChild('products', { static: false }) products: jqxListBoxComponent;
    @ViewChild('usernameInput', { static: false }) usernameInput: ElementRef;
    @ViewChild('passwordInput', { static: false }) passwordInput: ElementRef;
    @ViewChild('orderContainer', { static: false }) orderContainer: ElementRef;
   
    getWidth() : any {
		if (document.body.offsetWidth < 500) {
			return '90%';
		}
		
		return 500;
	}
	
    ngAfterViewInit() {
        this.validate(true);
        this._addHandlers();
    }

    _addHandlers = () => {
        this.usernameInput.nativeElement.addEventListener('keyup', () => {
            this.validate(true);
        });

        this.usernameInput.nativeElement.addEventListener('change', () => {
            this.validate(true);
        });

        this.passwordInput.nativeElement.addEventListener('keyup', () => {
            this.validate(true);
        });

        let nextButtonClass = document.getElementsByClassName('nextButton');
        for (let i = 0; i < nextButtonClass.length; i++) {
            let currentNextButton = nextButtonClass[i];
            currentNextButton.addEventListener('click', () => {
                this.validate(true);
                this.jqxTabs.next();
            });
        }

        let backButtonClass = document.getElementsByClassName('backButton');
        for (let i = 0; i < backButtonClass.length; i++) {
            let currentBackButton = backButtonClass[i];
            currentBackButton.addEventListener('click', () => {
                this.validate(true);
                this.jqxTabs.previous();
            });
        }
    };

    acceptCheckBoxChange(event: any): void {
        this.validate(true);
    };

    productsChange(event: any): void {
        this.validate(true);
        let selectedItems = this.products.selectedIndexes(),
            count = selectedItems.length;

        let parent = this.orderContainer.nativeElement;

        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }

        while (count) {
            count--;
            if (typeof selectedItems[count] !== 'undefined' &&
                selectedItems[count] !== -1) {
                let currentHtmlContent = parent.innerHTML;
                parent.innerHTML = currentHtmlContent + '<div style="width: 190px; height: 20px;">' + (this.getSource()[selectedItems[count]].html) + '</div>';
            }
        }
    };

    productsUnselect(event: any): void {
        this.validate(true);
    };

    // Checking if any product have been selected
    _isItemSelected = (array) => {
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
    validate = (notify) => {
        if (!this.firstTab(notify)) {
            this.jqxTabs.disableAt(1);
            this.jqxTabs.disableAt(2);
            return;
        } else {
            this.jqxTabs.enableAt(1);
        }

        if (!this.secondTab(notify)) {
            this.jqxTabs.disableAt(2);
            return;
        } else {
            this.jqxTabs.enableAt(2);
        }
    }

    // Displaying message to the user
    showHint = (message, selector) => {
        if (typeof selector === 'undefined') {
            selector = '.hint';
        }

        if (message === '') {
            message = 'You can continue.';
        }

        // Check is a class or not
        if (selector.indexOf('.') == 0) {
            document.getElementsByClassName(selector.slice(1))[0].innerHTML = '<strong>' + message + '</strong>';
        } else {
            document.getElementById(selector.slice(1)).innerHTML = '<strong>' + message + '</strong>';
        }
    }

    // Validating the first tab
    firstTab = (notify) => {
        let username = this.usernameInput.nativeElement.value,
            password = this.passwordInput.nativeElement.value,
            message = '';

        if (username.length < 3) {
            message += 'You have to enter valid username. <br />';
        }

        if (password.length < 3) {
            message += 'You have to enter valid password. <br />';
        }

        if (!this.acceptCheckBox.checked()) {
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
    }

    // Validating the second tab
    secondTab = (notify?: any) => {
        let products = this.products.selectedIndex();
        if (!this._isItemSelected(this.products.selectedIndexes())) {
            this.showHint('You have to select at least one item.', '#hintBasket');
            return false;
        } else {
            this.showHint('You can continue.', '#hintBasket');
        }
        return true;
    }

    getSource = (): any[] => {
        return [
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/numberinput.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxNumberInput</span></div>", title: 'jqxNumberInput' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/progressbar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxProgressBar</span></div>", title: 'jqxProgressBar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/calendar.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxCalendar</span></div>", title: 'jqxCalendar' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/button.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxButton</span></div>", title: 'jqxButton' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/dropdownlist.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxDropDownList</span></div>", title: 'jqxDropDownList' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/listbox.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxListBox</span></div>", title: 'jqxListBox' },
            { html: "<div style='height: 20px; float: left;'><img style='float: left; margin-top: 2px; margin-right: 5px;' src='./../../../images/tooltip.png'/><span style='float: left; font-size: 13px; font-family: Verdana Arial;'>jqxTooltip</span></div>", title: 'jqxTooltip' }
        ];
    }

    source: any[] = this.getSource();
}