import React from 'react';
import ReactDOM from 'react-dom';

import JqxToolBar from '../../../jqwidgets-react/react_jqxtoolbar.js';
import JqxWindow from '../../../jqwidgets-react/react_jqxwindow.js';

class App extends React.Component {
    render () {
        let tools = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input';
        let theme = ''
        let initTools = (type, index, tool, menuToolIninitialization) => {
            let icon = document.createElement('div');
            if (type == 'toggleButton') {
                icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + theme + ' buttonIcon ';
            }
            switch (index) {
                case 0:
                    icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + theme;
                    icon.setAttribute('title', 'Bold');
                    tool[0].appendChild(icon);
                    tool[0].firstChild.style.margin = 0;
                    break;
                case 1:
                    icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + theme;
                    icon.setAttribute('title', 'Italic');
                    tool[0].appendChild(icon);
                    tool[0].firstChild.style.margin = 0;
                    break;
                case 2:
                    icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + theme;
                    icon.setAttribute('title', 'Underline');
                    tool[0].appendChild(icon);
                    tool[0].firstChild.style.margin = 0;
                    break;
                case 3:
                    tool.jqxToggleButton({ width: 80, toggled: true });
                    tool[0].innerText = 'Enabled';
                    tool.on('click', () =>
                    {
                        let toggled = tool.jqxToggleButton('toggled');
                        if (toggled)
                        {
                            tool.text('Enabled');
                        } else
                        {
                            tool.text('Disabled');
                        }
                    });
                    break;
                case 4:
                    let dropDownListWidth;
                    if (menuToolIninitialization) {
                        // specific setting for minimized tool
                        dropDownListWidth = "100%";
                    } else {
                        dropDownListWidth = 130;
                    }
                    tool.jqxDropDownList({ 
                        width: dropDownListWidth, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                    break;
                case 5:
                    let comboBoxWidth;
                    if (menuToolIninitialization) {
                        // specific setting for minimized tool
                        comboBoxWidth = "100%";
                    } else {
                        comboBoxWidth = 50;
                    }
                    tool.jqxComboBox({ width: comboBoxWidth, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    tool[0].style.borderColor = '#CC0000';
                    return { minimizable: false };
                case 6:
                    tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                    tool[0].style.borderColor = '#EE8D4D';
                    break;
            }
        }
        return (
            <div style={{ fontSize: 'small', fontFamily: 'Verdana' }}>

                <div>
                    Resize the window to minimize or restore tools. The <span style={{color: '#CC0000'}}>combobox</span>
                    is non-minimizable and the <span style={{color: '#EE8D4D'}}>input</span> does not appear
                    in the pop-up menu when minimized.
                </div>
                <JqxWindow ref='jqxWindow'
                    width={700} minWidth={250} height={250} position={{ x: 5, y: 60 }}
                >
                    <div>
                        Resizable jqxToolBar
                    </div>
                    <div>
                        <JqxToolBar
                            width={'100%'} height={35}
                            minimizeWidth={200}
                            initTools={initTools} tools={tools}
                        />
                    </div>
                </JqxWindow>

            </div>            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
