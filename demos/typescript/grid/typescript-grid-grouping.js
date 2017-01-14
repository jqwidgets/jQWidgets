/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridGrouping(selector, expandSelector, collapseSelector, expandallSelector, collapseallSelector, groupnumSelector, expandedgroupLogSelector, collapsedgroupLogSelector) {
    var url = "../../sampledata/customers.xml";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
            { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
            { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: url
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    // Create jqxGrid
    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    var options = {
        width: 850,
        source: dataAdapter,
        groupable: true,
        columns: [
            { text: 'Company Name', datafield: 'CompanyName', width: 250 },
            { text: 'City', datafield: 'City', width: 120 },
            { text: 'Country', datafield: 'Country' }
        ],
        groups: ['City']
    };
    // creates an instance
    var myGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
    var buttonsOptions = {};
    var expand = jqwidgets.createInstance(expandSelector, 'jqxButton', buttonsOptions), collapse = jqwidgets.createInstance(collapseSelector, 'jqxButton', buttonsOptions), expandall = jqwidgets.createInstance(expandallSelector, 'jqxButton', buttonsOptions), collapseall = jqwidgets.createInstance(collapseallSelector, 'jqxButton', buttonsOptions);
    // expand group.
    expand.addEventHandler('click', function () {
        var groupnumContent = document.getElementById(groupnumSelector).value;
        var groupnum = parseInt(groupnumContent);
        if (!isNaN(groupnum)) {
            myGrid.expandgroup(groupnum);
        }
    });
    // collapse group.
    collapse.addEventHandler('click', function () {
        var groupnumContetnt = document.getElementById(groupnumSelector).value;
        var groupnum = parseInt(groupnumContetnt);
        if (!isNaN(groupnum)) {
            myGrid.collapsegroup(groupnum);
        }
    });
    // expand all groups.
    expandall.addEventHandler('click', function () {
        myGrid.expandallgroups();
    });
    // collapse all groups.
    collapseall.addEventHandler('click', function () {
        myGrid.collapseallgroups();
    });
    // trigger expand and collapse events.
    myGrid.addEventHandler('groupexpand', function (event) {
        var expandedgroupLog = document.getElementById(expandedgroupLogSelector);
        expandedgroupLog.innerText = "Group: " + event.args.group + ", Level: " + event.args.level;
    });
    myGrid.addEventHandler('groupcollapse', function (event) {
        var collapsedgroupLog = document.getElementById(collapsedgroupLogSelector);
        collapsedgroupLog.innerText = "Group: " + event.args.group + ", Level: " + event.args.level;
    });
}
//# sourceMappingURL=typescript-grid-grouping.js.map