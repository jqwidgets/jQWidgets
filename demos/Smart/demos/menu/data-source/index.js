window.onload = function () {
    const menuDataSource = [
        {
            label: 'File',
            items: [
                {
                    label: 'New',
                    shortcut: 'Ctrl+N'
                },
                {
                    label: 'Open',
                    shortcut: 'Ctrl+0'
                },
                {
                    label: 'Open Containing Folder',
                    items: [
                        {
                            label: 'Explorer'
                        },
                        {
                            label: 'cmd'
                        }
                    ]
                },
                {
                    label: 'Save',
                    shortcut: 'Ctrl+S',
                    disabled: true,
                    separator: true
                },
                {
                    label: 'Exit',
                    shortcut: 'Alt+F4'
                }
            ]
        },
        {
            label: '<img id="helpIcon" src="../../images/help-icon.png" title="Help" />'
        },
        {
            label: '<div class="planetIcon" title="Planet"></div>'
        },
        {
            label: 'About',
            value: 'customValue'
        }
    ];

    document.getElementById('menu').dataSource = menuDataSource;
}