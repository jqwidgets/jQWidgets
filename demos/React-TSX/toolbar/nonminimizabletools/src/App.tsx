import React, { useMemo } from 'react';
import './App.css';
import JqxToolbar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';
import JqxWindow from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxwindow';

const App = () => {
    const theme = '';
    const tools = 'button button button | toggleButton | dropdownlist combobox | input';

    const initTools = useMemo(() => {
        return (type: any, index: any, tool: any, menuToolIninitialization: any): any => {
            const icon = document.createElement('div');
            if (type === 'button') {
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
                    let dropDownListWidth: any;
                    if (menuToolIninitialization) {
                        dropDownListWidth = '95%';
                    } else {
                        dropDownListWidth = 130;
                    }
                    tool.jqxDropDownList({
                        width: dropDownListWidth,
                        source: [
                            "<span style='font-family: Courier New;'>Courier New</span>",
                            "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                            "<span style='font-family: Verdana;'>Verdana</span>"
                        ],
                        selectedIndex: 1
                    });
                    break;
                case 5:
                    let comboBoxWidth;
                    if (menuToolIninitialization) {
                        comboBoxWidth = '95%';
                    } else {
                        comboBoxWidth = 50;
                    }
                    tool.jqxComboBox({
                        width: comboBoxWidth,
                        source: [8, 9, 10, 11, 12, 14, 16, 18, 20],
                        selectedIndex: 3
                    });
                    tool.css("border-color", "#CC0000");
                    return { minimizable: false };
                case 6:
                    tool.jqxInput({ width: 185, placeHolder: 'Type here to search...' });
                    tool.css("border-color", "#EE8D4D");
                    return { menuTool: false };
            }
        }
    }, []);

    return (
        <div style={{ fontSize: 'small', fontFamily: 'Verdana' }}>
            <div>
                Resize the window to minimize or restore tools. The <span style={{ color: '#CC0000' }}>combobox</span>
                is non-minimizable and the <span style={{ color: '#EE8D4D' }}>input</span> does not appear
                in the pop-up menu when minimized.
            </div>
            <JqxWindow
                theme={'material-purple'}
                width={500}
                height={250}
                minWidth={250}
                position={{ x: 5, y: 90 }}
            >
                <div>
                    Resizable jqxToolBar
                </div>
                <div style={{ overflow: "hidden" }}>
                    <JqxToolbar
                        width={"100%"}
                        height={35}
                        minimizeWidth={200}
                        tools={tools}
                        initTools={initTools}
                    />
                </div>
            </JqxWindow>
        </div>
    );
};

export default App;