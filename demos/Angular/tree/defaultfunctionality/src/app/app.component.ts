import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree';
import { jqxDropDownButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownbutton';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('treeReference') tree: jqxTreeComponent;
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.tree.selectItem(null);
        });
    }
    treeSource: any[] =
    [
        {
            icon: "https://www.jqwidgets.com/angular/images/mailIcon.png", label: "Mail", expanded: true,
            items:
            [
                { icon: "https://www.jqwidgets.com/angular/images/calendarIcon.png", label: "Calendar" },
                { icon: "https://www.jqwidgets.com/angular/images/contactsIcon.png", label: "Contacts", selected: true }
            ]
        },
        {
            icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Inbox", expanded: true,
            items:
            [
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Admin" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Corporate" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Finance" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Other" },
            ]
        },
        { icon: "https://www.jqwidgets.com/angular/images/recycle.png", label: "Deleted Items" },
        { icon: "https://www.jqwidgets.com/angular/images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "https://www.jqwidgets.com/angular/images/settings.png", label: "Settings" },
        { icon: "https://www.jqwidgets.com/angular/images/favorites.png", label: "Favorites" }
    ];
}