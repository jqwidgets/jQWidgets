import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
import { jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;
    @ViewChild('myPanel', { static: false }) myPanel: jqxPanelComponent;

    source: any[] =
    [
        {
            icon: './../../../images/mailIcon.png', label: 'Mail', expanded: true,
            items:
            [
                { icon: './../../../images/calendarIcon.png', label: 'Calendar' },
                { icon: './../../../images/contactsIcon.png', label: 'Contacts', selected: true }
            ]
        },
        {
            icon: './../../../images/folder.png', label: 'Inbox', expanded: true,
            items:
            [
                { icon: './../../../images/folder.png', label: 'Admin' },
                { icon: './../../../images/folder.png', label: 'Corporate' },
                { icon: './../../../images/folder.png', label: 'Finance' },
                { icon: './../../../images/folder.png', label: 'Other' },
            ]
        },
        { icon: './../../../images/recycle.png', label: 'Deleted Items' },
        { icon: './../../../images/notesIcon.png', label: 'Notes' },
        { iconsize: 14, icon: './../../../images/settings.png', label: 'Settings' },
        { icon: './../../../images/favorites.png', label: 'Favorites' },
    ];

    counter: number = 0;

    myTreeOnSelect(event: any): void {
        if (this.myTree && this.myPanel) {
            let args = event.args;
            let item = this.myTree.getItem(args.element);
            if (this.counter > 1) {
                this.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
            }
            this.counter++; 
        }
    };

    myTreeOnExpand(event: any): void {
        if (this.myTree && this.myPanel) {
            let args = event.args;
            let item = this.myTree.getItem(args.element);
            this.myPanel.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');
        }
    };

    myTreeOnCollapse(event: any): void {
        if (this.myTree && this.myPanel) {
            let args = event.args;
            let item = this.myTree.getItem(args.element);
            this.myPanel.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');
        }
    };

}