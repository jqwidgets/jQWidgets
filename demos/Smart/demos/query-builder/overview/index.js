Smart('#queryBuilder', class {
    get properties() {
        return {
            allowDrag: true,
            fields: [
                { label: 'Id', dataField: 'id', dataType: 'number' },
                { label: 'Product', dataField: 'productName', dataType: 'string' },
                { label: 'Unit Price', dataField: 'price', dataType: 'number' },
                { label: 'Purchased', dataField: 'purchased', dataType: 'datetime' },
                { label: 'Available', dataField: 'available', dataType: 'boolean' }
            ]
        };
    }
});
