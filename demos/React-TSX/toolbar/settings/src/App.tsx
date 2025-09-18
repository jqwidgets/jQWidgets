import * as React from 'react';

import './App.css';

import JqxButton from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxbuttons';
import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxdropdownlist';
import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxnumberinput';
import JqxToolbar, { IToolBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

const countries = ['Argentina', 'Austria', 'Canada', 'China', 'France', 'Germany', 'Japan', 'Mexico', 'Spain', 'Sweden', 'Switzerland', 'UK', 'USA'];
const theme = '';
const widgetsWidth = 150;

const App = () => {
    const myToolBar = React.useRef<JqxToolbar>(null);
    const myDropDownList = React.useRef<JqxDropDownList>(null);
    const myNumberInput = React.useRef<JqxNumberInput>(null);

    const [tools] = React.useState<string>('toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input |');
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initTools = React.useCallback<IToolBarProps['initTools']>((type, index, tool, menuToolIninitialization) => {
        const icon = document.createElement('div');
        if (type === 'toggleButton') {
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
                tool.jqxDropDownList({
                    width: 150,
                    source: [
                        "<span style='font-family: Courier New;'>Courier New</span>",
                        "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                        "<span style='font-family: Verdana;'>Verdana</span>"
                    ],
                    selectedIndex: 1
                });
                break;
            case 5:
                tool.jqxComboBox({
                    width: 50,
                    source: [8, 9, 10, 11, 12, 14, 16, 18, 20],
                    selectedIndex: 3
                });
                break;
            case 6:
                tool.jqxInput({ width: 200, placeHolder: 'Type here to search...' });
                break;
        }
    }, []);

    const addToggleBtnOnClick = React.useCallback((event: any) => {
        const position = myDropDownList.current!['val']();
        myToolBar.current!['addTool']('toggleButton', position, false, (type: string, tool: any, menuToolIninitialization: boolean) => {
            let width;
            if (menuToolIninitialization) {
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
    }, []);

    const addCustomToolBtnOnClick = React.useCallback((event: any) => {
        const position = myDropDownList.current!['val']();
        const currentCountry = countries[Math.floor(Math.random() * countries.length)];
        myToolBar.current!['addTool']('custom', position, false, (type: string, tool: any, menuToolIninitialization: boolean) => {
            tool.append('<img src="https://www.jqwidgets.com/react/images/' + currentCountry + '.png" style="float: left; clear: both;" />');
            if (menuToolIninitialization) {
                tool.find('img').css('margin-right', '10px');
                tool.find('img').css('margin-top', '4px');
                tool.append('<div style="float: left; height: 100%; vertical-align: middle;">' + currentCountry + '</div>');
            } else {
                tool.attr('title', 'Flag of ' + currentCountry);
            }
        });
    }, []);

    const disableToolBtnOnClick = React.useCallback((event: any) => {
        const toolIndex = myNumberInput.current!['val']();
        myToolBar.current!['disableTool'](toolIndex, true);
    }, []);

    const enableToolBtnOnClick = React.useCallback((event: any) => {
        const toolIndex = myNumberInput.current!['val']();
        myToolBar.current!['disableTool'](toolIndex, false);
    }, []);

    const destroyToolBtnOnClick = React.useCallback((event: any) => {
        const toolIndex = myNumberInput.current!['val']();
        myToolBar.current!['destroyTool'](toolIndex);
    }, []);

    const styleButtons: React.CSSProperties = { marginTop: 50, display: "flex", justifyContent: 'flex-start' };
    const styleLabels: React.CSSProperties = { marginTop: 10, marginBottom: 2 };

    return (
        <div>
            <JqxToolbar
                ref={myToolBar}
                width={'100%'}
                height={35}
                tools={tools}
                initTools={initTools}
            />

            <div style={styleButtons}>
                <JqxButton theme={'material-purple'} onClick={addToggleBtnOnClick} width={widgetsWidth}>Add a Toggle Button</JqxButton>
                <JqxButton theme={'material-purple'} onClick={addCustomToolBtnOnClick} width={widgetsWidth}>Add a Custom Tool</JqxButton>
            </div>
            <div style={styleLabels}>
                Insert position:
            </div>
            <JqxDropDownList
                theme={'material-purple'}
                ref={myDropDownList}
                width={widgetsWidth}
                height={25}
                source={['first', 'last']}
                selectedIndex={1}
                autoDropDownHeight={true}
            />

            <div style={styleButtons}>
                <JqxButton theme={'material-purple'} onClick={disableToolBtnOnClick} width={widgetsWidth}>Disable Tool</JqxButton>
                <JqxButton theme={'material-purple'} onClick={enableToolBtnOnClick} width={widgetsWidth}>Enable Tool</JqxButton>
                <JqxButton theme={'material-purple'} onClick={destroyToolBtnOnClick} width={widgetsWidth}>Destroy Tool</JqxButton>
            </div>
            <div style={styleLabels}>
                Tool index:
            </div>
            <JqxNumberInput
                theme={'material-purple'}
                ref={myNumberInput}
                width={50}
                height={30}
                decimal={0}
                decimalDigits={0}
                inputMode={"simple"}
            />
        </div>
    );
};

export default App;