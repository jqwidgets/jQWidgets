/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createTree(selector, secondSelector) {
    // Create jqxExpander
    var expanderOptions = {
        showArrow: false,
        toggleMode: 'none',
        width: '300px',
        height: '370px'
    };
    var expander = jqwidgets.createInstance(secondSelector, 'jqxExpander', expanderOptions);
    // Create jqxTree
    var source = [
        {
            icon: "../../../images/mailIcon.png", label: "Mail", expanded: true, items: [
                { icon: "../../../images/calendarIcon.png", label: "Calendar" },
                { icon: "../../../images/contactsIcon.png", label: "Contacts", selected: true }
            ]
        },
        {
            icon: "../../../images/folder.png", label: "Inbox", expanded: true, items: [
                { icon: "../../../images/folder.png", label: "Admin" },
                { icon: "../../../images/folder.png", label: "Corporate" },
                { icon: "../../../images/folder.png", label: "Finance" },
                { icon: "../../../images/folder.png", label: "Other" },
            ]
        },
        { icon: "../../../images/recycle.png", label: "Deleted Items" },
        { icon: "../../../images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "../../../images/settings.png", label: "Settings" },
        { icon: "../../../images/favorites.png", label: "Favorites" }
    ];
    // initialization options - validated in typescript
    // jqwidgets.TreeOptions has generated TS definition
    var options = {
        source: source,
        width: '100%',
        height: '100%'
    };
    // creates an instance
    var myTree = jqwidgets.createInstance(selector, 'jqxTree', options);
    myTree.selectItem(null);
}
//# sourceMappingURL=typescript-tree.js.map