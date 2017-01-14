/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createKanban(firstKanbanSelector, secondKanbanSelector, thirdKanbanSelector, mainSplitterSelector, rightSplitterSelector) {
    var mainSplitterOptions = {
        width: 700, height: 600,
        panels: [{ size: 250, min: 100 }, { min: 250 }]
    };
    var mainSplitter = jqwidgets.createInstance(mainSplitterSelector, 'jqxSplitter', mainSplitterOptions);
    var rightSplitterOptions = {
        width: '100%', height: '100%', orientation: 'horizontal',
        panels: [{ min: 200, size: 350, collapsible: false }, { min: 200 }]
    };
    var rightSplitter = jqwidgets.createInstance(rightSplitterSelector, 'jqxSplitter', rightSplitterOptions);
    var fields = [
        { name: "status", map: "state", type: "string" },
        { name: "text", map: "label", type: "string" },
        { name: "tags", type: "string" },
        { name: "color", map: "hex", type: "string" },
        { name: "resourceId", type: "number" }
    ];
    var source = {
        localData: [
            { state: "new", label: "Combine Orders", tags: "orders, combine", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Change Billing Address", tags: "billing", hex: "#f19b60", resourceId: 1 },
            { state: "new", label: "One item added to the cart", tags: "cart", hex: "#5dc3f0", resourceId: 3 },
            { state: "new", label: "Edit Item Price", tags: "price, edit", hex: "#5dc3f0", resourceId: 4 },
            { state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    var resourcesAdapterFunc = function () {
        var resourcesSource = {
            localData: [
                { id: 0, name: "No name", image: "../../../jqwidgets/styles/images/common.png", common: true },
                { id: 1, name: "Andrew Fuller", image: "../../../images/andrew.png" },
                { id: 2, name: "Janet Leverling", image: "../../../images/janet.png" },
                { id: 3, name: "Steven Buchanan", image: "../../../images/steven.png" },
                { id: 4, name: "Nancy Davolio", image: "../../../images/nancy.png" },
                { id: 5, name: "Michael Buchanan", image: "../../../images/Michael.png" },
                { id: 6, name: "Margaret Buchanan", image: "../../../images/margaret.png" },
                { id: 7, name: "Robert Buchanan", image: "../../../images/robert.png" },
                { id: 8, name: "Laura Buchanan", image: "../../../images/Laura.png" },
                { id: 9, name: "Laura Buchanan", image: "../../../images/Anne.png" }
            ],
            dataType: "array",
            dataFields: [
                { name: "id", type: "number" },
                { name: "name", type: "string" },
                { name: "image", type: "string" },
                { name: "common", type: "boolean" }
            ]
        };
        var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    };
    // initialization options - validated in typescript
    // jqwidgets.KanbanOptions has generated TS definition
    var firstKanbanOptions = {
        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter,
        connectWith: "#kanban2, #kanban3",
        columns: [
            { text: "Backlog", dataField: "new", maxItems: 10 }
        ],
        // render column headers.
        columnRenderer: function (element, collapsedElement, column) {
            var widgetReference = this;
            var headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            var columnItems = widgetReference.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };
    // creates an instance
    var firstKanban = jqwidgets.createInstance(firstKanbanSelector, 'jqxKanban', firstKanbanOptions);
    var source2 = {
        localData: [
            { state: "ready", label: "Logout issue", tags: "logout, issue", hex: "#5dc3f0", resourceId: 7 },
            { state: "ready", label: "Remember password issue", tags: "password, issue", hex: "#6bbd49", resourceId: 8 },
            { state: "ready", label: "Cart calculation issue", tags: "cart, calculation", hex: "#f19b60", resourceId: 9 },
            { state: "ready", label: "Remove topic issue", tags: "topic, issue", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter2 = new $.jqx.dataAdapter(source2);
    var secondKanbanOptions = {
        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter2,
        connectWith: "#kanban1, #kanban3",
        columns: [
            { text: "Ready", dataField: "ready", maxItems: 10 }
        ],
        // render column headers.
        columnRenderer: function (element, collapsedElement, column) {
            var widgetReference = this;
            var headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            var columnItems = widgetReference.getColumnItems(column.dataField).length;
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };
    // creates an instance
    var secondKanban = jqwidgets.createInstance(secondKanbanSelector, 'jqxKanban', secondKanbanOptions);
    var source3 = {
        localData: [
            { state: "done", label: "Delete orders", tags: "orders, combine", hex: "#f19b60", resourceId: 4 },
            { state: "work", label: "Add New Address", tags: "address", hex: "#6bbd49", resourceId: 5 },
            { state: "new", label: "Rename items", tags: "rename", hex: "#5dc3f0", resourceId: 6 },
            { state: "work", label: "Update cart", tags: "cart, update", hex: "#6bbd49" }
        ],
        dataType: "array",
        dataFields: fields
    };
    var dataAdapter3 = new $.jqx.dataAdapter(source3, { autoBind: true });
    var thirdKanbanOptions = {
        width: '100%',
        height: '100%',
        resources: resourcesAdapterFunc(),
        source: dataAdapter3,
        connectWith: "#kanban1, #kanban2",
        columns: [
            { text: "Backlog", dataField: "new", maxItems: 5 },
            { text: "In Progress", dataField: "work", maxItems: 5 },
            { text: "Done", dataField: "done", maxItems: 5 }
        ],
        // render column headers.
        columnRenderer: function (element, collapsedElement, column) {
            var widgetReference = this;
            var columnItems = widgetReference.getColumnItems(column.dataField).length;
            var headerStatus = element[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            headerStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
            var collapsedHeaderStatus = collapsedElement[0].getElementsByClassName("jqx-kanban-column-header-status")[0];
            collapsedHeaderStatus.innerHTML = " (" + columnItems + "/" + column.maxItems + ")";
        }
    };
    // creates an instance
    var thirdKanban = jqwidgets.createInstance(thirdKanbanSelector, 'jqxKanban', thirdKanbanOptions);
    thirdKanban.setOptions(thirdKanbanOptions);
}
//# sourceMappingURL=typescript-kanban.js.map