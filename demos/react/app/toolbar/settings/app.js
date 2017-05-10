import React from 'react';
import ReactDOM from 'react-dom';

import JqxToolBar from '../../../jqwidgets-react/react_jqxtoolbar.js';
import JqxButton from '../../../jqwidgets-react/react_jqxbuttons.js';
import JqxDropDownList from '../../../jqwidgets-react/react_jqxdropdownlist.js';
import JqxNumberInput from '../../../jqwidgets-react/react_jqxnumberinput.js';

class App extends React.Component {
    componentDidMount() {
        this.refs.addToggleButton.on('click', (event) => {
            let position = this.refs.position.val();
            this.refs.myToolBar.addTool('toggleButton', position, false, (type, tool, menuToolIninitialization) => {
                let width;
                if (menuToolIninitialization) {
                    // specific setting for minimized tool
                    width = '100%';
                } else {
                    width = 50;
                }
                tool.jqxToggleButton({ width: width, toggled: false });
                tool.text('Off');
                tool.on('click', () => {
                    let toggled = tool.jqxToggleButton('toggled');
                    if (toggled) {
                        tool.text('On');
                    } else {
                        tool.text('Off');
                    }
                });
            });
        });
        let countries = ['Argentina', 'Austria', 'Canada', 'China', 'France', 'Germany', 'Japan', 'Mexico', 'Spain', 'Sweden', 'Switzerland', 'UK', 'USA'];
            
        this.refs.addCustomTool.on('click', (event) => {
            let position = this.refs.position.val();
            let country = countries[Math.floor(Math.random() * countries.length)];
            this.refs.myToolBar.addTool('custom', position, false, (type, tool, menuToolIninitialization) => {
                let width;
                tool.append("<img src='../../images/" + country + ".png' style='float: left; clear: both;' />");
                if (menuToolIninitialization) {
                    // specific setting for minimized tool
                    tool.find("img").css("margin-right", "10px");
                    tool.find("img").css("margin-top", "4px");
                    tool.append("<div style='float: left; height: 100%; vertical-align: middle;'>" + country + "</div>");
                } else {
                    tool.attr("title", "Flag of " + country);
                }
            });
        });

        this.refs.disableTool.on('click', (event) => {
            let toolIndex = this.refs.index.val();
            this.refs.myToolBar.disableTool(toolIndex, true);
        });

        this.refs.enableTool.on('click', (event) => {
            let toolIndex = this.refs.index.val();
            this.refs.myToolBar.disableTool(toolIndex, false);
        });

        this.refs.destroyTool.on('click', (event) => {
            let toolIndex = this.refs.index.val();
            this.refs.myToolBar.destroyTool(toolIndex);
        });
    }
    render () {
        let tools = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input |';
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
                    tool.jqxDropDownList({ width: 130, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                    break;
                case 5:
                    tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                    break;
                case 6:
                    tool.jqxInput({ width: 200, placeHolder: 'Type here to search...' });
                    break;
            }
        }
        let buttonWidgt = 150;
        return (
            <div>
                <JqxToolBar ref='myToolBar'
                    width={'100%'} height={35}
                    initTools={initTools} tools={tools}
                />
                <div style={{marginTop: 50}}>
                    <JqxButton ref='addToggleButton' value='Add a toggle button' width={buttonWidgt} style={{float: 'left', marginRight: 10}} />
                    <JqxButton ref='addCustomTool' value='Add a custom tool' width={buttonWidgt} style={{marginTop: 10}} />
                </div>
                <div style={{marginTop: 10, marginBottom: 2}}>
                    Insert position:</div>
                <JqxDropDownList ref='position' 
                    width={buttonWidgt} height={22}
                    source={['first', 'last']} selectedIndex={1}
                    autoDropDownHeight={true}
                />

                <div style={{marginTop: 50}}>
                    <JqxButton ref='disableTool' value='Disable tool' width={buttonWidgt} style={{float: 'left', marginRight: 10,}} />
                    <JqxButton ref='enableTool' value='Enable tool' width={buttonWidgt} style={{ marginRight: 10, float: 'left'}} />
                    <JqxButton ref='destroyTool' value='Destroy tool' width={buttonWidgt} style={{marginTop: 10}} />
                </div>

                <div style={{marginTop: 10, marginBottom: 2}}>
                    Tool index:</div>
                <JqxNumberInput ref='index' width={50} height={25} decimal={0} decimalDigits={0} inputMode={'simple'} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
