import { Component, ViewChild } from '@angular/core';

import { jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxMenu', { static: false }) jqxMenu: jqxMenuComponent;
    
    isRightClick(event: any): boolean {
        let rightclick;
        if (!event) event = window.event;
        if (event.which) rightclick = (event.which == 3);
        else if (event.button) rightclick = (event.button == 2);
        return rightclick;
    }

    contextmenuMenu(): boolean {
        return false;
    };

    mousedown(event: any): boolean {
        let rightClick = this.isRightClick(event) || jqx.mobile.isTouchDevice();
        if (rightClick) {
            this.jqxMenu.open(parseInt(event.clientX), parseInt(event.clientY));
            return false;
        }
    };
}