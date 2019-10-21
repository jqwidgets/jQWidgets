import { Component, ViewChild } from '@angular/core';

import { jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree', { static: false }) myTree: jqxTreeComponent;

    // prepare the data
    source = {
        datatype: 'xml',
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
            { name: 'City', map: 'm\\:properties>d\\:City' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
            { name: 'Country', map: 'm\\:properties>d\\:Country' }
        ],
        root: 'entry',
        record: 'content',
        id: 'm\\:properties>d\\:CustomerID',
        url: './../../../sampledata/customers.xml',
        async: false
    };
    // create data adapter.
    dataAdapter = new jqx.dataAdapter(this.source, { autoBind: true });
    // get the tree items. The first parameter is the grouping fields. The second parameter is the sub items collection name. The third parameter is the group's name. 
    // Each jqxTree item has a 'label' property, but in the data source, we have a 'CompanyName' field. The last parameter 
    // specifies the mapping between the 'CompanyName' and 'label' fields.  
    records = this.dataAdapter.getGroupedRecords(['Country', 'City'], 'items', 'label', [{ name: 'uid', map: 'value' }, { name: 'CompanyName', map: 'label' }], 'row', 'value');
}