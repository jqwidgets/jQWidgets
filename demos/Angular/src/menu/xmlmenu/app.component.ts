import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    // prepare the data
    source =
    {
        datatype: "xml",
        datafields: [
            { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
            { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
            { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle' },
            { name: 'City', map: 'm\\:properties>d\\:City' },
            { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode' },
            { name: 'Country', map: 'm\\:properties>d\\:Country' }
        ],
        root: "entry",
        record: "content",
        id: 'm\\:properties>d\\:CustomerID',
        url: "./../../../sampledata/customers.xml",
        async: false
    };

    getAdapter(source: any): any {
        let dataAdapter = new jqx.dataAdapter(source);
        // perform Data Binding.
        dataAdapter.dataBind();
        return dataAdapter;
    };

    // get the tree items. The first parameter is the grouping fields. The second parameter is the sub items collection name. The third parameter is the group's name. 
    // Each jqxMenu item has a 'label' property, but in the data source, we have a 'CompanyName' field. The last parameter 
    // specifies the mapping between the 'CompanyName' and 'label' fields.
    records = this.getAdapter(this.source).getGroupedRecords(['ContactTitle', 'ContactName'], 'items', 'label', [{ name: 'ContactName', map: 'label' }]);
}