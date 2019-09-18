window.onload = function () {
    const treeDataSource = [{
        label: 'Cats',
        selected: true,
        items: [
            {
                label: 'Tiger',
                selected: true
            },
            {
                label: 'Lion'
            },
            {
                label: 'Jaguar'
            },
            {
                label: 'Leopard'
            },
            {
                label: 'Serval'
            },
            {
                label: 'Domestic cat'
            }
        ]
    },
        {
            label: 'Dogs',
            expanded: true,
            items: [
                {
                    label: 'Gray wolf'
                },
                {
                    label: 'Ethiopian wolf',
                    selected: true
                },
                {
                    label: 'Arctic fox',
                    selected: true
                },
                {
                    label: 'Dingo'
                },
                {
                    label: 'Domestic dog',
                    selected: true
                }
            ]
        }
    ];

    document.getElementById('tree').dataSource = treeDataSource;
}