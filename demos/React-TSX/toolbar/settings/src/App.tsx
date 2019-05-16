import * as React from 'react';
 


import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxToolbar, { IToolBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

class App extends React.PureComponent<{}, IToolBarProps> {
    private myToolBar = React.createRef<JqxToolbar>();
    private myDropDownList = React.createRef<JqxDropDownList>();
    private myNumberInput = React.createRef<JqxNumberInput>();
    private countries: string[] = ['Argentina', 'Austria', 'Canada', 'China', 'France', 'Germany', 'Japan', 'Mexico', 'Spain', 'Sweden', 'Switzerland', 'UK', 'USA'];
    private theme: string = '';
    private widgetsWidth: number = 150;

    constructor(props: {}) {
        super(props);
        this.addToggleBtnOnClick = this.addToggleBtnOnClick.bind(this);
        this.addCustomToolBtnOnClick = this.addCustomToolBtnOnClick.bind(this);
        this.disableToolBtnOnClick = this.disableToolBtnOnClick.bind(this);
        this.enableToolBtnOnClick = this.enableToolBtnOnClick.bind(this);
        this.destroyToolBtnOnClick = this.destroyToolBtnOnClick.bind(this);

        this.state = {
            initTools: (type: any, index: any, tool: any, menuToolIninitialization: any) => {
                const icon = document.createElement('div');
                if (type === 'toggleButton') {
                    icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + this.theme + ' buttonIcon ';
                }
                switch (index) {
                    case 0:
                        icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + this.theme;
                        icon.setAttribute('title', 'Bold');
                        tool[0].appendChild(icon);
                        break;
                    case 1:
                        icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + this.theme;
                        icon.setAttribute('title', 'Italic');
                        tool[0].appendChild(icon);
                        break;
                    case 2:
                        icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + this.theme;
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
                        tool.jqxDropDownList({ width: 150, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                        break;
                    case 5:
                        tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                        break;
                    case 6:
                        tool.jqxInput({ width: 200, placeHolder: 'Type here to search...' });
                        break;
                }
            },
            tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input |'
        }
    }

    public render() {
        const styleButtons: React.CSSProperties = { marginTop: 50, display: "flex", justifyContent: 'flex-start' };
        const styleLabels: React.CSSProperties = { marginTop: 10, marginBottom: 2 };
        return (
            <div>
                <JqxToolbar ref={this.myToolBar}
                    width={'100%'}
                    height={35}
                    tools={this.state.tools}
                    initTools={this.state.initTools}
                />

                <div style={styleButtons}>
                    <JqxButton theme={'material-purple'} onClick={this.addToggleBtnOnClick} width={this.widgetsWidth}>Add a Toggle Button</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.addCustomToolBtnOnClick} width={this.widgetsWidth}>Add a Custom Tool</JqxButton>
                </div>
                <div style={styleLabels}>
                    Insert position:
                </div>
                <JqxDropDownList theme={'material-purple'} ref={this.myDropDownList}
                    width={this.widgetsWidth}
                    height={25}
                    source={['first', 'last']}
                    selectedIndex={1}
                    autoDropDownHeight={true}
                />

                <div style={styleButtons}>
                    <JqxButton theme={'material-purple'} onClick={this.disableToolBtnOnClick} width={this.widgetsWidth}>Disable Tool</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.enableToolBtnOnClick} width={this.widgetsWidth}>Enable Tool</JqxButton>
                    <JqxButton theme={'material-purple'} onClick={this.destroyToolBtnOnClick} width={this.widgetsWidth}>Destroy Tool</JqxButton>
                </div>
                <div style={styleLabels}>
                    Tool index:
                </div>
                <JqxNumberInput theme={'material-purple'} ref={this.myNumberInput}
                    width={50}
                    height={30}
                    decimal={0}
                    decimalDigits={0}
                    inputMode={"simple"}
                />
            </div>
        );
    }


    // Event handling
    private addToggleBtnOnClick(event: any): void {
        const position = this.myDropDownList.current!.val();
        this.myToolBar.current!.addTool('toggleButton', position, false, (type: string, tool: any, menuToolIninitialization: boolean): void => {
            let width;
            if (menuToolIninitialization) {
                // specific setting for minimized tool
                width = '95%';
            } else {
                width = 50;
            }
            tool.jqxToggleButton({ width, toggled: false });
            tool.text('Off');
            tool.on('click', () => {
                const toggled = tool.jqxToggleButton('toggled');
                if (toggled) {
                    tool.text('On');
                } else {
                    tool.text('Off');
                }
            });
        });
    }

    private addCustomToolBtnOnClick(event: any): void {
        const position = this.myDropDownList.current!.val();
        const currentCountry = this.countries[Math.floor(Math.random() * this.countries.length)];
        this.myToolBar.current!.addTool('custom', position, false, (type: string, tool: any, menuToolIninitialization: boolean): void => {
            tool.append('<img src="https://www.jqwidgets.com/react/images/' + currentCountry + '.png" style="float: left; clear: both;" />');
            if (menuToolIninitialization) {
                // specific setting for minimized tool
                tool.find('img').css('margin-right', '10px');
                tool.find('img').css('margin-top', '4px');
                tool.append('<div style="float: left; height: 100%; vertical-align: middle;">' + currentCountry + '</div>');
            } else {
                tool.attr('title', 'Flag of ' + currentCountry);
            }
        });
    }

    private disableToolBtnOnClick(event: any): void {
        const toolIndex = this.myNumberInput.current!.val();
        this.myToolBar.current!.disableTool(toolIndex, true);
    }

    private enableToolBtnOnClick(event: any): void {
        const toolIndex = this.myNumberInput.current!.val();
        this.myToolBar.current!.disableTool(toolIndex, false);
    }

    private destroyToolBtnOnClick(event: any): void {
        const toolIndex = this.myNumberInput.current!.val();
        this.myToolBar.current!.destroyTool(toolIndex);
    }
}

export default App;
