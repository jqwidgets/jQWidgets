window.onload = function () {
    const smartDockingLayout = document.querySelector('smart-docking-layout'),
        dropDownList = document.querySelector('smart-drop-down-list');

    smartDockingLayout.layout = [
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    id: 'tab0',
                    type: 'LayoutPanel',
                    label: 'Tabs 0',
                    size: '65%',
                    items: [{
                        label: 'Tab 0',
                        content: 'Content of Tab 0'
                    }]
                },
                {
                    id: 'tab1',
                    type: 'LayoutPanel',
                    label: 'Tabs 1',
                    items: [{
                        label: 'Tab 1',
                        content: 'Content of Tab 1'
                    }]
                }
            ]
        },
        {
            type: 'LayoutGroup',
            orientation: 'horizontal',
            items: [
                {
                    id: 'tab2',
                    type: 'LayoutPanel',
                    label: 'Tabs 2',
                    size: '25%',
                    items: [{
                        label: 'Tab 2',
                        content: 'Content of Tab 2'
                    }]
                },
                {
                    id: 'tab3',
                    type: 'LayoutPanel',
                    label: 'Tabs 3',
                    items: [{
                        label: 'Tab 3',
                        content: 'Content of Tab 3',
                    }]
                }
            ]
        }
    ];

	let itemsCount = 0;
	
    document.getElementById('remove').addEventListener('click', function () {		
		smartDockingLayout.remove(document.getElementById(dropDownList.selectedValues[0]));
        dropDownList.remove(dropDownList.selectedIndexes[0]);
		itemsCount++;
		
		if (itemsCount === 3) {
			document.getElementById('remove').disabled = true;
			dropDownList.disabled = true;
			return;
		}

    });
}