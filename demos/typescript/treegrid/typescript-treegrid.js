/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createTreeGrid(selector) {
    var source = {
        dataType: "csv",
        dataFields: [
            { name: 'EmployeeKey', type: 'number' },
            { name: 'ParentEmployeeKey', type: 'number' },
            { name: 'FirstName', type: 'string' },
            { name: 'LastName', type: 'string' },
            { name: 'Title', type: 'string' },
            { name: 'HireDate', type: 'date' },
            { name: 'BirthDate', type: 'date' },
            { name: 'Phone', type: 'string' },
            { name: 'Gender', type: 'string' },
            { name: 'DepartmentName', type: 'string' }
        ],
        hierarchy: {
            keyDataField: { name: 'EmployeeKey' },
            parentDataField: { name: 'ParentEmployeeKey' }
        },
        id: 'EmployeeKey',
        url: '../../sampledata/employeesadv.csv'
    };
    var dataAdapter = new $.jqx.dataAdapter(source);
    // Create Tree Grid
    //// initialization options - validated in typescript
    //// jqwidgets.TreeGridOptions has generated TS definition
    var options = {
        width: 850,
        source: dataAdapter,
        pageable: true,
        columnsResize: true,
        ready: function () {
            // expand row with 'EmployeeKey = 32'
            myTreeGrid.expandRow(32);
        },
        columns: [
            { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'LastName', dataField: 'LastName', width: 200 },
            { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
            { text: 'Title', dataField: 'Title', width: 300 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
            { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
            { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
        ]
    };
    // creates an instance
    var myTreeGrid = jqwidgets.createInstance(selector, 'jqxTreeGrid', options);
}
//# sourceMappingURL=typescript-treegrid.js.map