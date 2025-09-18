import * as React from 'react'
import { useMemo } from 'react'
import JqxGrid, { IGridProps, jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid'

function App() {
    const source = useMemo(() => ({
        datafields: [
            { name: 'ProductName', type: 'string' },
            { name: 'QuantityPerUnit', type: 'int' },
            { name: 'UnitPrice', type: 'float' },
            { name: 'UnitsInStock', type: 'float' },
            { name: 'Discontinued', type: 'bool' }
        ],
        datatype: 'xml',
        id: 'ProductID',
        record: 'Product',
        root: 'Products',
        url: 'products.xml'
    }), [])

    const cellsrenderer = useMemo(() => (
        (row: number, columnfield: string, value: string | number, defaulthtml: string, columnproperties: any, rowdata: any): string => {
            if (value < 20) {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #ff0000;">' + value + '</span>'
            } else {
                return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>'
            }
        }
    ), [])

    const columngroups = useMemo(() => [
        { text: 'Product Details', align: 'center', name: 'ProductDetails' }
    ], [])

    const columns = useMemo(() => [
        { text: 'Product Name', columngroup: 'ProductDetails', datafield: 'ProductName', width: 250 },
        { text: 'Quantity per Unit', columngroup: 'ProductDetails', datafield: 'QuantityPerUnit', cellsalign: 'right', align: 'right' },
        { text: 'Unit Price', columngroup: 'ProductDetails', datafield: 'UnitPrice', align: 'right', cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Units In Stock', datafield: 'UnitsInStock', cellsalign: 'right', cellsrenderer, width: 100 },
        { text: 'Discontinued', columntype: 'checkbox', datafield: 'Discontinued', align: 'center' }
    ], [cellsrenderer])

    const dataAdapter = useMemo(() => new jqx.dataAdapter(source), [source])

    return (
        <JqxGrid
            theme="material-purple"
            // @ts-ignore
            width="100%"
            source={dataAdapter}
            columns={columns}
            pageable={true}
            autoheight={true}
            sortable={true}
            altrows={true}
            enabletooltips={true}
            editable={true}
            selectionmode="multiplecellsadvanced"
            columngroups={columngroups}
        />
    )
}

export default App