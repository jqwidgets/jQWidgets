window.onload = function () {
            const smartDockingLayout = document.querySelector('smart-docking-layout'),
                input = document.getElementById('indexInput'),
                tabsWindowObject =
                    {
                        label: 'New Item',
                        items: [{
                            label: 'New Tab Item',
                            content: 'New Tab Item Content'
                        }]
                    };

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
                }
            ];

				let insertCount = 0;
			
			const validate = function() {
				insertCount++;
        
				if (insertCount === 2 ) {
					document.getElementById('insertLayoutLeft').disabled = true;
					document.getElementById('insertLayoutRight').disabled = true;
					document.getElementById('insertLayoutTop').disabled = true;
					document.getElementById('insertLayoutBottom').disabled = true;					
					return true;
				}
				
				if (insertCount > 2) {
					return false;
				}
			
				return true;
			}
			
            document.getElementById('insertLayoutLeft').addEventListener('click', function () {
				const result = validate();
				
				if (!result) {
					return;
				}
				
				smartDockingLayout.insertLayoutLeft(tabsWindowObject);
            });

            document.getElementById('insertLayoutRight').addEventListener('click', function () {
				const result = validate();
				
				if (!result) {
					return;
				}
				smartDockingLayout.insertLayoutRight(tabsWindowObject);
            });
			

            document.getElementById('insertLayoutTop').addEventListener('click', function () {
				const result = validate();
				
				if (!result) {
					return;
				}

				smartDockingLayout.insertLayoutTop(tabsWindowObject);
            });

            document.getElementById('insertLayoutBottom').addEventListener('click', function () {
				const result = validate();
				
				if (!result) {
					return;
				}
				
				smartDockingLayout.insertLayoutBottom(tabsWindowObject);
            });      
        }