import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myTree') myTree: jqxTreeComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    source: any[] =
    [
        {
            icon: 'https://www.jqwidgets.com/angular/images/mailIcon.png', label: 'Mail', expanded: true,
            items:
            [
                { icon: 'https://www.jqwidgets.com/angular/images/calendarIcon.png', label: 'Calendar' },
                { icon: 'https://www.jqwidgets.com/angular/images/contactsIcon.png', label: 'Contacts', selected: true }
            ]
        },
        {
            icon: 'https://www.jqwidgets.com/angular/images/folder.png', label: 'Inbox', expanded: true,
            items:
            [
                { icon: 'https://www.jqwidgets.com/angular/images/folder.png', label: 'Admin' },
                { icon: 'https://www.jqwidgets.com/angular/images/folder.png', label: 'Corporate' },
                { icon: 'https://www.jqwidgets.com/angular/images/folder.png', label: 'Finance' },
                { icon: 'https://www.jqwidgets.com/angular/images/folder.png', label: 'Other' },
            ]
        },
        { icon: 'https://www.jqwidgets.com/angular/images/recycle.png', label: 'Deleted Items' },
        { icon: 'https://www.jqwidgets.com/angular/images/notesIcon.png', label: 'Notes' },
        { iconsize: 14, icon: 'https://www.jqwidgets.com/angular/images/settings.png', label: 'Settings' },
        { icon: 'https://www.jqwidgets.com/angular/images/favorites.png', label: 'Favorites' },
    ];

    counter: number = 0;
    myTreeOnSelect(event: any): void {
        let args = event.args;
        let item = this.myTree.getItem(args.element);
        if (this.counter > 1) {
            this.myPanel.prepend('<div style="margin-top: 5px;">Selected: ' + item.label + '</div>');
        }
        this.counter++;
    };

    myTreeOnExpand(event: any): void {
        let args = event.args;
        let item = this.myTree.getItem(args.element);
        this.myPanel.prepend('<div style="margin-top: 5px;">Expanded: ' + item.label + '</div>');
    };

    myTreeOnCollapse(event: any): void {
        let args = event.args;
        let item = this.myTree.getItem(args.element);
        this.myPanel.prepend('<div style="margin-top: 5px;">Collapsed: ' + item.label + '</div>');
    };

}