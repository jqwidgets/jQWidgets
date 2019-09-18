 window.onload = function () {
            const smartDockingLayout = document.querySelector('smart-docking-layout');
                createTabsWindowObject = function() {
                    return {
                        label: 'New Item',
                        items: [{
                            label: 'New Tab Item',
                            content: 'New Tab Item Content'
                        }]
                    };
				}
   
            smartDockingLayout.layout = [
                {
                    type: 'LayoutGroup',
					size: '50%',
                    orientation: 'horizontal',
                    items: [
                        {
                            type: 'LayoutPanel',
                            label: 'Tabs 0',
                            size: '50%',
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
                            type: 'LayoutPanel',
                            label: 'Tabs 2',
                            size: '25%',
                            items: [{
                                label: 'Tab 2',
                                content: 'Content of Tab 2'
                            }]
                        },
                        {
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

			let insertCount = 0;
			
			const validate = function() {
				insertCount++;
        
				if (insertCount === 2 ) {
					document.getElementById('insertOutsideTargetGroupLeft').disabled = true;
					document.getElementById('insertOutsideTargetGroupRight').disabled = true;
					document.getElementById('insertOutsideTargetGroupTop').disabled = true;
					document.getElementById('insertOutsideTargetGroupBottom').disabled = true;					
					return true;
				}
				
				if (insertCount > 2) {
					return false;
				}
			
				return true;
			}
			
            document.getElementById('insertOutsideTargetGroupLeft').addEventListener('click', function () {
			    const result = validate();
				
				if (!result) {
					return;
				}
			   smartDockingLayout.insertOutsideTargetGroupLeft(0, new createTabsWindowObject());
            });

            document.getElementById('insertOutsideTargetGroupRight').addEventListener('click', function () {
			    const result = validate();
				
				if (!result) {
					return;
				}
	            smartDockingLayout.insertOutsideTargetGroupRight(0, new createTabsWindowObject());
            });

            document.getElementById('insertOutsideTargetGroupTop').addEventListener('click', function () {
			    const result = validate();
				
				if (!result) {
					return;
				}
				smartDockingLayout.insertOutsideTargetGroupTop(0, new createTabsWindowObject());
            });

            document.getElementById('insertOutsideTargetGroupBottom').addEventListener('click', function () {
			    const result = validate();
				
				if (!result) {
					return;
				}
				
				smartDockingLayout.insertOutsideTargetGroupBottom(0, new createTabsWindowObject());
            });
        }