import * as React from 'react';
 


import './App.css';

import JqxToolbar, { IToolBarProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

class App extends React.PureComponent<{}, IToolBarProps> {
    private theme = '';
    constructor(props: {}) {
        super(props);

        this.state = {
            initTools: (type: any, index: any, tool: any, menuToolIninitialization: any) => {
                const icon = document.createElement('div');
                if (type === 'button') {
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
                        icon.className += 'jqx-editor-toolbar-icon-justifyleft jqx-editor-toolbar-icon-justifyleft-' + this.theme;
                        icon.setAttribute('title', 'Align Text Left');
                        tool[0].appendChild(icon);
                        break;
                    case 4:
                        icon.className += 'jqx-editor-toolbar-icon-justifycenter jqx-editor-toolbar-icon-justifycenter-' + this.theme;
                        icon.setAttribute('title', 'Center');
                        tool[0].appendChild(icon);
                        break;
                    case 5:
                        icon.className += 'jqx-editor-toolbar-icon-justifyright jqx-editor-toolbar-icon-justifyright-' + this.theme;
                        icon.setAttribute('title', 'Align Text Right');
                        tool[0].appendChild(icon);
                        break;
                    case 6:
                        icon.className += 'jqx-editor-toolbar-icon-outdent jqx-editor-toolbar-icon-outdent-' + this.theme;
                        icon.setAttribute('title', 'Decrease Indent');
                        tool[0].appendChild(icon);
                        break;
                    case 7:
                        icon.className += 'jqx-editor-toolbar-icon-indent jqx-editor-toolbar-icon-indent-' + this.theme;
                        icon.setAttribute('title', 'Increase Indent');
                        tool[0].appendChild(icon);
                        break;
                    case 8:
                        icon.className += 'jqx-editor-toolbar-icon-insertimage jqx-editor-toolbar-icon-insertimage-' + this.theme;
                        icon.setAttribute('title', 'Insert Image');
                        tool[0].appendChild(icon);
                        break;
                }
            },
            tools: 'button button button | button button button | button button | button'
        }
    }

    public render() {
        return (
            <JqxToolbar
                width={370}
                height={35}
                tools={this.state.tools}
                initTools={this.state.initTools}
            />
        );
    }


}

export default App;
