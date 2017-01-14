/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createDefaultFunctionalityGrid(selector) {
    var url = "../../sampledata/products.xml";
    // prepare the data
    var source = {
        datatype: "xml",
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        root: "Products",
        record: "Product",
        id: 'ProductID',
        url: url
    };
    var cellsrenderer = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
        if (value < 20) {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };
    var dataAdapter = new $.jqx.dataAdapter(source, {
        downloadComplete: function (data, status, xhr) { },
        loadComplete: function (data) { },
        loadError: function (xhr, status, error) { }
    });
    // initialize jqxGrid
    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    var options = {
        width: 850,
        source: dataAdapter,
        pageable: true,
        autoheight: true,
        sortable: true,
        altrows: true,
        enabletooltips: true,
        editable: true,
        selectionmode: 'multiplecellsadvanced',
        columns: [
            { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
            { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200 },
            { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200 },
            { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer: cellsrenderer, width: 100 },
            { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued' }
        ],
        columngroups: [
            { text: 'Product Details', align: 'center', name: 'ProductDetails' }
        ]
    };
    // creates an instance
    var myGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
}
//# sourceMappingURL=typescript-grid.js.map