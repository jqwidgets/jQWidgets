 
import { Component } from '@angular/core';

import { jqxGridComponent } from '../../../../../jqwidgets-ts/angular_jqxgrid';

@Component({
    selector: 'my-app',
    template:
        `<jqxGrid #reference 
            [width]='850' [source]='dataAdapter' [pageable]='true'
            [editable]='true' [autoheight]='true' [columns]='columns'>
        </jqxGrid>`
})

export class AppComponent
{
    source: any =
    {
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
        url: "../../sampledata/products.xml"
    };

    dataAdapter: any = new $.jqx.dataAdapter(this.source);

    unitsInStockRenderer: any = (row, columnfield, value, defaulthtml, columnproperties, rowdata) =>
    {
        if (value < 20)
        {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>';
        }
        else
        {
            return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
        }
    };
       
    columns: any[] =
    [
        {
            text: 'Product Name', columngroup: 'ProductDetails',
            datafield: 'ProductName', width: 250
        },
        {
            text: 'Quantity per Unit', columngroup: 'ProductDetails',
            datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right', width: 200
        },
        {
            text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2', width: 200
        },
        {
            text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', width: 100, cellsrenderer: this.unitsInStockRenderer
        },
        {
            text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued'
        }
    ]; 
}