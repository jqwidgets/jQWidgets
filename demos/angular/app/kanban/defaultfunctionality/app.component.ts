 
import { Component, ViewChild } from '@angular/core';

import { jqxSplitterComponent } from '../../../../../jqwidgets-ts/angular_jqxsplitter';
import { jqxKanbanComponent } from '../../../../../jqwidgets-ts/angular_jqxkanban';

@Component({
    selector: 'my-app',
    templateUrl: `../app/kanban/defaultfunctionality/app.component.htm`
})

export class AppComponent
{
    @ViewChild("first") kanbanOne: jqxKanbanComponent;
    @ViewChild("second") kanbanTwo: jqxKanbanComponent;
    @ViewChild("third") kanbanThree: jqxKanbanComponent;

    fields: any =
    [
        { name: "status", map: "state", type: "string" },
        { name: "text", map: "label", type: "string" },
        { name: "tags", type: "string" },
        { name: "color", map: "hex", type: "string" },
        { name: "resourceId", type: "number" }
    ];

    source: any =
    {
        localData:
        [
            { state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
            { state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
            { state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    source2: any =
    {
        localData:
        [
            { state: "ready", label: "Logout issue", tags: "logout, issue", hex: "#5dc3f0", resourceId: 7 },
            { state: "ready", label: "Remember password issue", tags: "password, issue", hex: "#6bbd49", resourceId: 8 },
            { state: "ready", label: "Cart calculation issue", tags: "cart, calculation", hex: "#f19b60", resourceId: 9 },
            { state: "ready", label: "Remove topic issue", tags: "topic, issue", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter2: any = new $.jqx.dataAdapter(this.source2);

    source3: any =
    {
        localData:
        [
            { state: "done", label: "Delete orders", tags: "orders, combine", hex: "#f19b60", resourceId: 4 },
            { state: "work", label: "Add New Address", tags: "address", hex: "#6bbd49", resourceId: 5 },
            { state: "new", label: "Rename items", tags: "rename", hex: "#5dc3f0", resourceId: 6 },
            { state: "work", label: "Update cart", tags: "cart, update", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: this.fields
    };

    dataAdapter3: any = new $.jqx.dataAdapter(this.source3);

    resourcesAdapterFunc: any = (): any =>
    {
        let resourcesSource =
            {
                localData:
                [
                    { id: 0, name: "No name", image: "../../jqwidgets/styles/images/common.png", common: true },
                    { id: 1, name: "Andrew Fuller", image: "../../images/andrew.png" },
                    { id: 2, name: "Janet Leverling", image: "../../images/janet.png" },
                    { id: 3, name: "Steven Buchanan", image: "../../images/steven.png" },
                    { id: 4, name: "Nancy Davolio", image: "../../images/nancy.png" },
                    { id: 5, name: "Michael Buchanan", image: "../../images/Michael.png" },
                    { id: 6, name: "Margaret Buchanan", image: "../../images/margaret.png" },
                    { id: 7, name: "Robert Buchanan", image: "../../images/robert.png" },
                    { id: 8, name: "Laura Buchanan", image: "../../images/Laura.png" },
                    { id: 9, name: "Laura Buchanan", image: "../../images/Anne.png" }
                ],
                dataType: "array",
                dataFields:
                [
                    { name: "id", type: "number" },
                    { name: "name", type: "string" },
                    { name: "image", type: "string" },
                    { name: "common", type: "boolean" }
                ]
            };
        let resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }

    kanbanOneColumns: any[] =
    [
        { text: "Backlog", dataField: "new", maxItems: 10 }
    ];

    kanbanOneColumnRenderer: any = (element: any, collapsedElement: any, column: any): void => 
    {
        if (element[0])
        {
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            let columnItems = this.kanbanOne.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    }
    
    kanbanTwoColumns: any[] =
    [
        { text: "Ready", dataField: "ready", maxItems: 10 }
    ];

    kanbanTwoColumnRenderer: any =  (element: any, collapsedElement: any, column: any): void => 
    {
        if (element[0])
        {
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            let columnItems = this.kanbanTwo.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    }
    
    kanbanThreeColumns: any[] =
    [
        { text: "Backlog", dataField: "new", maxItems: 5 },
        { text: "In Progress", dataField: "work", maxItems: 5 },
        { text: "Done", dataField: "done", maxItems: 5 }
    ];

    kanbanThreeColumnRenderer: any = (element: any, collapsedElement: any, column: any): void => 
    {
        if (element[0])
        {
            let columnItems = this.kanbanThree.getColumnItems(column.dataField).length;
            let headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
            let collapsedHeaderStatus = collapsedElement[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            collapsedHeaderStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    }

    mainSplitterPanels: any[] = [{ size: 250, min: 100 }, { min: 250 }];

    rightSplitterPanels: any[] = [{ min: 200, size: 350, collapsible: false }, { min: 200 }];
}
