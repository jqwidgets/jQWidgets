import * as React from 'react';
import { useRef, useMemo } from 'react';
import './App.css';
import JqxToolbar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

const App = () => {
    const myToolBar = useRef<any>(null);
    const theme = '';

    const initTools = useMemo(() => (
        (type: any, index: any, tool: any, menuToolIninitialization: any) => {
            const icon = document.createElement('div');
            if (type === "toggleButton") {
                icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + theme + ' buttonIcon ';
            }
            switch (index) {
                case 0:
                    icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + theme;
                    icon.setAttribute('title', 'Bold');
                    tool[0].appendChild(icon);
                    break;
                case 1:
                    icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + theme;
                    icon.setAttribute('title', 'Italic');
                    tool[0].appendChild(icon);
                    break;
                case 2:
                    icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + theme;
                    icon.setAttribute('title', 'Underline');
                    tool[0].appendChild(icon);
                    break;
                case 3:
                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool[0].innerText = 'Enabled';
                    tool.on('click', () => {
                        const toggled = tool.jqxToggleButton('toggled');
                        if (toggled) {
                            tool.text('Enabled');
                        } else {
                            tool.text('Disabled');
                        }
                    });
                    break;
                case 4:
                    tool.jqxDropDownList({ width: 130, source: [{ html: "<span style='font-family: Courier New;'>Courier New</span>" }, { html: "<span style='font-family: Times New Roman;'>Times New Roman</span>" }, { html: "<span style='font-family: Verdana;'>Verdana</span>" }], selectedIndex: 1 });
                    break;
                case 5:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 6:
                    tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                    break;
            }
        }
    ), []);

    const tools = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input';

    return (
        <JqxToolbar
            ref={myToolBar}
            width={'50%'}
            height={35}
            rtl={true}
            tools={tools}
            initTools={initTools}
        />
    );
};

export default App;