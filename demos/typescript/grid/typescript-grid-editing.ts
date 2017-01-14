/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createGridWithEditing(selector) {
    // prepare the data
    
    let data = generatedata(200);
    let source =
        {
            localdata: data,
            datatype: "array",
            updaterow: function (rowid, rowdata, commit) {
                // synchronize with the server - send update command
                // call commit with parameter true if the synchronization with the server is successful 
                // and with parameter false if the synchronization failder.
                commit(true);
            },
            datafields:
            [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'available', type: 'bool' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' }
            ]
        };
    let dataAdapter = new $.jqx.dataAdapter(source);

    // initialize jqxGrid

    // initialization options - validated in typescript
    // jqwidgets.GridOptions has generated TS definition
    let options: jqwidgets.GridOptions = {
        width: 850,
        source: dataAdapter,
        editable: true,
        enabletooltips: true,
        selectionmode: 'multiplecellsadvanced',
        columns: [
            { text: 'First Name', columntype: 'textbox', datafield: 'firstname', width: 120 },
            { text: 'Last Name', datafield: 'lastname', columntype: 'textbox', width: 120 },
            { text: 'Product', columntype: 'dropdownlist', datafield: 'productname', width: 195 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67 },
            {
                text: 'Ship Date', datafield: 'date', columntype: 'datetimeinput', width: 110, align: 'right', cellsalign: 'right', cellsformat: 'd',
                validation: function (cell: any, value: any) {
                    if (value.toString() == "")
                        return true;

                    let valueD = new Date(1, 1, 1, 1, 1, 1, 1);
                    let year = valueD.getFullYear();
                    if (year >= 2017) {
                        return { result: false, message: "Ship Date should be before 1/1/2017" };
                    }
                    return true;
                }
            },
            {
                text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right', columntype: 'numberinput',
                validation: function (cell: any, value: any) {
                    if (value < 0 || value > 150) {
                        return { result: false, message: "Quantity should be in the 0-150 interval" };
                    }
                    return true;
                },
                createeditor: function (row, cellvalue, editor) {
                    editor.jqxNumberInput({ decimalDigits: 0, digits: 3 });
                }
            },
            {
                text: 'Price', datafield: 'price', align: 'right', cellsalign: 'right', cellsformat: 'c2', columntype: 'numberinput',
                validation: function (cell: any, value: any) {
                    if (value < 0 || value > 15) {
                        return { result: false, message: "Price should be in the 0-15 interval" };
                    }
                    return true;
                },
                createeditor: function (row: Number, cellvalue: any, editor: any) {
                    editor.jqxNumberInput({ digits: 3 });
                }
            }
        ]
    };

    // creates an instance
    let myGrid: jqwidgets.jqxGrid = jqwidgets.createInstance(selector, 'jqxGrid', options);
}