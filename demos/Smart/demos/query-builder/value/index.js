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
            ],
            showIcons: true,
            value: [
                [
                    ['purchased', '=', new Date(2019, 0, 4)],
                    'and',
                    ['productName', '<>', 'Monitors'],
                    'or',
                    ['productName', 'isblank']
                ],
                'and',
                [
                    ['available', '=', true],
                    'and',
                    ['price', '<', 1300],
                ],
                'or',
                [
                    ['productName', '=', 'Televisions'],
                    'and',
                    ['price', '<', 4000]
                ]
            ]
        }
    }
});

window.onload = function () {
    const queryBuilder = document.getElementById('queryBuilder'),
        filterQueryValue = document.getElementById('filterQueryValue');

    filterQueryValue.innerHTML = JSON.stringify(queryBuilder.value, null, '\t');

    queryBuilder.addEventListener('change', function () {
        filterQueryValue.innerHTML = JSON.stringify(queryBuilder.value, null, '\t');
    });

    document.getElementById('allowDrag').addEventListener('change', function (event) {
        queryBuilder.allowDrag = event.detail.value;
    });

    document.getElementById('showIcons').addEventListener('change', function (event) {
        queryBuilder.showIcons = event.detail.value;
    });
}
