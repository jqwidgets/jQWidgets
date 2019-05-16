import * as React from 'react';
 

import * as ReactDOM from 'react-dom';

import './App.css';

import JqxInput from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxinput';
import JqxToolbar, { IToolBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

class App extends React.PureComponent<{}, IToolBarProps> {
    constructor(props: {}) {
        super(props);

        this.state = {
            initTools: (type: any, index: any, tool: any, menuToolIninitialization: any) => {
                const icon = document.createElement('div');
                if (type === "toggleButton") {
                    icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-arctic buttonIcon ';
                }
                switch (index) {
                    case 0:
                        icon.className += "jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-arctic";
                        icon.setAttribute("title", "Bold");
                        icon.style.marginTop = '-5px';
                        tool[0].appendChild(icon);
                        break;
                    case 1:
                        icon.className += "jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-arctic";
                        icon.setAttribute("title", "Italic");
                        icon.style.marginTop = '-5px';
                        tool[0].appendChild(icon);
                        break;
                    case 2:
                        icon.className += "jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-arctic";
                        icon.setAttribute("title", "Underline");
                        icon.style.marginTop = '-5px';
                        tool[0].appendChild(icon);
                        break;
                    case 3:
                        tool.jqxToggleButton({ width: 80, toggled: true });
                        tool.text("Enabled");
                        tool.on("click", () => {
                            const toggled = tool.jqxToggleButton("toggled");
                            if (toggled) {
                                tool.text("Enabled");
                            } else {
                                tool.text("Disabled");
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
                        const input = <JqxInput theme={'material-purple'} width={200} placeHolder={"Type here to search..."} />;

                        ReactDOM.render(input, tool[0]);

                        break;
                    case 7:
                        const button = document.createElement('div');
                        const img = document.createElement('img');
                        img.src = 'https://www.jqwidgets.com/react/images/administrator.png'
                        img.title = 'Custom tool';
                        button.appendChild(img);
                        tool[0].appendChild(button);
                        tool.jqxButton({ height: 15 });
                        break;
                }
            },
            tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input | custom'
        }
    }

    public render() {
        return (
            <JqxToolbar
                // @ts-ignore
                width={'100%'}
                height={35}
                tools={this.state.tools}
                initTools={this.state.initTools}
            />
        );
    }


}

export default App;
