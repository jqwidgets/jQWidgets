import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxButtonComponent } from '../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxWindowComponent } from '../../../jqwidgets-ts/angular_jqxwindow';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('customWindow') customWindow: jqxWindowComponent;
    @ViewChild('searchTextButton') searchTextButton: jqxButtonComponent; 
    @ViewChild('searchTextInput') searchTextInput: ElementRef;

    _searchButtonHandle = () => {
        if (this.searchTextInput.nativeElement !== null) {
            if (this.searchTextInput.nativeElement.value !== '') {
                this.searchTextButton.disabled(false);
            }
            else {
                this.searchTextButton.disabled(true);
            }
        }
    }

    onKey(event: any): void {
        this._searchButtonHandle();
    };

    onKeyUp(event: any): void {
        this._searchButtonHandle();
    };

    onChange(event: any): void {
        this._searchButtonHandle();
    };

    showWindowButtonClick(): void {
        this.customWindow.open();
    }

    hideWindowButtonClick(): void {
        this.customWindow.close();
    }

    pinWindowButtonClick(): void {
        this.customWindow.draggable(false);
    }

    unpinWindowButtonClick(): void {
        this.customWindow.draggable(true);
    }

    collapseWindowButtonClick(): void {
        this.customWindow.collapse();
    }

    expandWindowButtonClick(): void {
        this.customWindow.expand();
    }
}