  window.onload = function () {
            const smartDockingLayout = document.querySelector('smart-docking-layout'),
                input = document.getElementById('indexInput'),
                dropDownList = document.querySelector('smart-drop-down-list'),
                tabsWindowObject =
                    {
                        label: 'New Item',
                        size: '25%',
                        items: [{
                            label: 'New Tab Item',
                            content: 'New Tab Item Content'
                        }]
                    },
                createListItem = function () {
                    const item = document.createElement('smart-list-item');

                    item.label = 'Tabs ' + dropDownList.items.length;
                    dropDownList.appendChild(item);
                }

            smartDockingLayout.layout = [
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 0',
                    items: [{
                        label: 'Tab 0',
                        content: 'Content of Tab 0'
                    }]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 1',
                    items: [{
                        label: 'Tab 1',
                        content: 'Content of Tab 1',
                    }]
                },
                {
                    type: 'LayoutPanel',
                    label: 'Tabs 2',
                    items: [{
                        label: 'Tab 2',
                        content: 'Content of Tab 2'
                    }]
                }
            ];

			let itemsCount = 0;
			
            document.getElementById('insertAfterItem').addEventListener('click', function () {
                if (itemsCount === 1 ) {
					document.getElementById('insertAfterItem').disabled = true;				
					document.getElementById('insertBeforeItem').disabled = true;				
				}
				
 			    smartDockingLayout.insertAfterItem(dropDownList.selectedIndexes[0], tabsWindowObject);
                createListItem();
				itemsCount++;
            });

            document.getElementById('insertBeforeItem').addEventListener('click', function () {
                if (itemsCount === 1 ) {
					document.getElementById('insertAfterItem').disabled = true;				
					document.getElementById('insertBeforeItem').disabled = true;				
				}
			
			smartDockingLayout.insertBeforeItem(dropDownList.selectedIndexes[0], tabsWindowObject);
                createListItem();
				itemsCount++;
			});

            smartDockingLayout.addEventListener('stateChange', function () {
                let layoutItems = this.items, index, tabItem, i
                undockedItems = this.undockedItems;

                for (i = 0; i < layoutItems.length; i++) {
                    layoutItems[i].label = 'Tabs ' + i;
                    layoutItems[i].update(0, 'Tab ' + i, 'Content of Tab ' + i);
                }

                for (i = 0; i < undockedItems.length; i++) {
                    undockedItems[i].label = 'Undocked Tabs';
                    undockedItems[i].update(0, 'Tab', 'Content of Undocked Tab');
                }
            });
        }