import { Component, ViewChild } from '@angular/core';

import { jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxTabs', { static: false }) jqxTabs: jqxTabsComponent;
    
    clickAdd(): void {
        this.jqxTabs.addLast('Sample title', 'Sample content');
        this.jqxTabs.ensureVisible(-1);
    };

    clickRemove(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        let disabledItems = this.jqxTabs.getDisabledTabsCount();
        let items = this.jqxTabs.length();
        if (items > disabledItems + 1) {
            this.jqxTabs.removeAt(selectedItem);
        }
    };
    
    clickDisable(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        this.jqxTabs.disableAt(selectedItem);
    };

    clickEnable(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        this.jqxTabs.enableAt(selectedItem);
    };

    clickEnableAll(): void {
        this.jqxTabs.enable();
    };

    clickDisableAll(): void {
        this.jqxTabs.disable();
    };
}