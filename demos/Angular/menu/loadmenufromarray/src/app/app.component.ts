import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any[] = [
        {
            html: "<img src='https://www.jqwidgets.com/angular/images/mailIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Mail</span>", items: [
                { html: "<img src='https://www.jqwidgets.com/angular/images/calendarIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Calendar</span>" },
                { html: "<img src='https://www.jqwidgets.com/angular/images/contactsIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Contacts</span>" }
            ]
        },
        {
            html: "<img src='https://www.jqwidgets.com/angular/images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Inbox</span>", items: [
                { html: "<img src='https://www.jqwidgets.com/angular/images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Admin</span>" },
                { html: "<img src='https://www.jqwidgets.com/angular/images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Corporate</span>" },
                { html: "<img src='https://www.jqwidgets.com/angular/images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Finance</span>" },
                { html: "<img src='https://www.jqwidgets.com/angular/images/folder.png'/><span style='position: relative; left: 3px; top: -2px;'>Other</span>" }]
        },
        { html: "<img src='https://www.jqwidgets.com/angular/images/recycle.png'/><span style='position: relative; left: 3px; top: -2px;'>Deleted Items</span>" },
        { html: "<img src='https://www.jqwidgets.com/angular/images/notesIcon.png'/><span style='position: relative; left: 3px; top: -2px;'>Notes</span>" },
        { html: "<img src='https://www.jqwidgets.com/angular/images/settings.png'/><span style='position: relative; left: 3px; top: -2px;'>Settings</span>" },
        { html: "<img src='https://www.jqwidgets.com/angular/images/favorites.png'/><span style='position: relative; left: 3px; top: -2px;'>Favorites</span>" }
    ];
}