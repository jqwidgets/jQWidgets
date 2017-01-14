/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridWithNestedGrids(selector, secondSelector, thirdSelector) {
    var url = "../../sampledata/employees.xml";
    var source =
        {
            datafields: [
                { name: 'FirstName' },
                { name: 'LastName' },
                { name: 'Title' },
                { name: 'Address' },
                { name: 'City' }
            ],
            root: "Employees",
            record: "Employee",
            id: 'EmployeeID',
            datatype: "xml",
            async: false,
            url: url
        };
    var employeesAdapter = new $.jqx.dataAdapter(source, { autoBind: true });
    var orderdetailsurl = "../../sampledata/orderdetails.xml";
    var ordersSource =
        {
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            root: "Orders",
            record: "Order",
            datatype: "xml",
            url: orderdetailsurl,
            async: false
        };
    var ordersDataAdapter = new $.jqx.dataAdapter(ordersSource, { autoBind: true });
    var orders = ordersDataAdapter.records;
    var nestedGrids = new Array();
    // create nested grid.
    var initrowdetails = function (index: number, parentElement: any, gridElement: any, record: any) {
        var id = record.uid.toString();
        var grid = parentElement;
        nestedGrids[index] = grid;
        var filtergroup = new $.jqx.filter();
        var filter_or_operator = 1;
        var filtervalue = id;
        var filtercondition = 'equal';
        var filter = filtergroup.createfilter('stringfilter', filtervalue, filtercondition);
        // fill the orders depending on the id.
        var ordersbyid = [];
        for (var m = 0; m < orders.length; m++) {
            var result = filter.evaluate(orders[m]["EmployeeID"]);
            if (result)
                ordersbyid.push(orders[m]);
        }
        var orderssource = {
            datafields: [
                { name: 'EmployeeID', type: 'string' },
                { name: 'ShipName', type: 'string' },
                { name: 'ShipAddress', type: 'string' },
                { name: 'ShipCity', type: 'string' },
                { name: 'ShipCountry', type: 'string' },
                { name: 'ShippedDate', type: 'date' }
            ],
            id: 'OrderID',
            localdata: ordersbyid
        }
        let nestedGridAdapter = new $.jqx.dataAdapter(orderssource);

        if (grid != null) {
            // Get selector of nested grid
            let nestedGridSelector = grid.getElementsByTagName('div')[0];
            let nestedGridOptions: jqwidgets.GridOptions = {
                source: nestedGridAdapter, width: 780, height: 200,
                columns: [
                    { text: 'Ship Name', datafield: 'ShipName', width: 200 },
                    { text: 'Ship Address', datafield: 'ShipAddress', width: 200 },
                    { text: 'Ship City', datafield: 'ShipCity', width: 150 },
                    { text: 'Ship Country', datafield: 'ShipCountry', width: 150 },
                    { text: 'Shipped Date', datafield: 'ShippedDate', width: 200 }
                ]
            };
            // Create instance for nested grid
            let instanceOfNestedGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(nestedGridSelector, 'jqxGrid', nestedGridOptions);
        }
    };

    var records = employeesAdapter.records;
    var photorenderer = function (row:number, column:string, value:any):string {
        var name = records[row].FirstName;
        var imgurl = '../../../images/' + name.toLowerCase() + '.png';
        var img = '<div style="background: white;"><img style="margin:2px; margin-left: 10px;" width="32" height="32" src="' + imgurl + '"></div>';
        return img;
    };
    var renderer = function (row:number, column:string, value:any):string {
        return '<span style="margin-left: 4px; margin-top: 9px; float: left;">' + value + '</span>';
    };

    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    var options: jqwidgets.GridOptions = {
        width: 850,
        height: 365,
        source: source,
        rowdetails: true,
        rowsheight: 35,
        initrowdetails: initrowdetails,
        rowdetailstemplate: { rowdetails: "<div id='grid' style='margin: 10px;'></div>", rowdetailsheight: 220, rowdetailshidden: true },
        columns: [
            { text: 'Photo', width: 50, datafield: 'photo', cellsrenderer: photorenderer },
            { text: 'First Name', datafield: 'FirstName', width: 100, cellsrenderer: renderer },
            { text: 'Last Name', datafield: 'LastName', width: 100, cellsrenderer: renderer },
            { text: 'Title', datafield: 'Title', width: 180, cellsrenderer: renderer },
            { text: 'Address', datafield: 'Address', width: 300, cellsrenderer: renderer },
            { text: 'City', datafield: 'City', width: 170, cellsrenderer: renderer }
        ]
    };

    // creates an instance
    var myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
    myGrid.showrowdetails(1);
}