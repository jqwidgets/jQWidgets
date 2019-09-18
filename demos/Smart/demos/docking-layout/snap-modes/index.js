window.onload = function () {
            document.querySelector('smart-docking-layout').layout = [
                {
                    id: 'item1',
                    label: 'Tabs 1',
                    items: [{
                        label: 'Tab 1',
                        content: 'Content of Tab 1',
                        selected: true
                    },
                    {
                        label: 'Tab 2',
                        content: 'Content of Tab 2'
                    }],
                    dropPosition: ['top', 'bottom', 'left', 'layout-left', 'layout-top']
                },
                {
                    id: 'item2',
                    label: 'Tabs 2',
                    items: [{
                        label: 'Tab 3',
                        content: 'Content of Tab 3'
                    }]
                }
            ];

            const radioButtons = document.getElementsByTagName('smart-radio-button');

            for (let i = 0; i < radioButtons.length; i++) {
                radioButtons[i].addEventListener('click', function (event) {
                    document.querySelector('smart-docking-layout').snapMode = this.innerHTML.toLowerCase();
                });
            }
        }