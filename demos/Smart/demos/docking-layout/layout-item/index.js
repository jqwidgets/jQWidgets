window.onload = function () {
    const docking = document.querySelector('smart-docking-layout');

    docking.layout = [
        {
            //The Base Group
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    //DockingLayout Item A
                    label: 'TabsWindow A',
                    size: '50%',
                    items: [{
                        //Tab Item A1 of Item A
                        label: 'Tab A1',
                        content: 'Content of A1'
                    }]
                },
                {
                    //DockingLayout Item B
                    label: 'TabsWindow B',
                    size: '25%',
                    items: [{
                        //Tab Item B1 of Item B
                        label: 'Tab B1',
                        selected: true,
                        content: 'Content of B1'
                    },
                    {
                        //Tab Item B2 of Item B
                        label: 'Tab B2',
                        content: 'Content of B2'
                    }]
                },
                {
                    //DockingLayout Item C
                    label: 'TabsWindow C',
                    size: '25%',
                    items: [{
                        //Tab Item C1 of Item C
                        label: 'Tab C1',
                        content: 'Content of C1'
                    }]
                }]
        }];
}