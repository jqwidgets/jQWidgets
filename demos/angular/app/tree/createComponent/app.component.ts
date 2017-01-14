/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" /> 
import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxExpanderComponent } from '../../../../../jqwidgets-ts/angular_jqxexpander';
import { jqxTreeComponent } from '../../../../../jqwidgets-ts/angular_jqxtree';

@Component({
    selector: 'my-app',
    template: `<jqxExpander #expanderReference [auto-create]='false'> 
                  <div>
                      Folders
                  </div>
                  <div style="overflow: hidden;">
                      <jqxTree #treeReference [auto-create]='false'></jqxTree>
                  </div>
               </jqxExpander>`,

    styles: [`
        angularTree > div:first-child
        {
            height: 100%;
            border: none;
        }
    `]
})

export class AppComponent implements AfterViewInit
{
    @ViewChild('expanderReference') expander: jqxExpanderComponent;
    @ViewChild('treeReference') tree: jqxTreeComponent;

    ngAfterViewInit(): void 
    {
        this.expander.createComponent(this.expanderSettings);
        this.tree.createComponent(this.treeSettings);
        this.tree.selectItem(null);
    }

    expanderSettings: jqwidgets.ExpanderOptions =
    {
        width: '300px',
        height: '370px',
        showArrow: false,
        toggleMode: 'none'
    };

    treeSource =
    [
        {
            icon: "../../../../images/mailIcon.png", label: "Mail", expanded: true,
            items:
            [
                { icon: "../../../../images/calendarIcon.png", label: "Calendar" },
                { icon: "../../../../images/contactsIcon.png", label: "Contacts", selected: true }
            ]
        },
        {
            icon: "../../../../images/folder.png", label: "Inbox", expanded: true,
            items:
            [
                { icon: "../../../../images/folder.png", label: "Admin" },
                { icon: "../../../../images/folder.png", label: "Corporate" },
                { icon: "../../../../images/folder.png", label: "Finance" },
                { icon: "../../../../images/folder.png", label: "Other" },
            ]
        },
        { icon: "../../../../images/recycle.png", label: "Deleted Items" },
        { icon: "../../../../images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "../../../../images/settings.png", label: "Settings" },
        { icon: "../../../../images/favorites.png", label: "Favorites" }
    ];

    treeSettings: jqwidgets.TreeOptions =
    {
        width: '100%',
        height: '100%',
        source: this.treeSource
    }
}
