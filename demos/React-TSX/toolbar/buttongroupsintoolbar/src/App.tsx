import React, { useRef, useMemo } from 'react';
import './App.css';
import JqxToolbar from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxtoolbar';

const App = () => {
    const theme = useRef('');
    const initTools = useMemo(() => (
        (type: any, index: any, tool: any, menuToolIninitialization: any) => {
            const icon = document.createElement('div');
            if (type === 'button') {
                icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + theme.current + ' buttonIcon ';
            }
            switch (index) {
                case 0:
                    icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + theme.current;
                    icon.setAttribute('title', 'Bold');
                    tool[0].appendChild(icon);
                    break;
                case 1:
                    icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + theme.current;
                    icon.setAttribute('title', 'Italic');
                    tool[0].appendChild(icon);
                    break;
                case 2:
                    icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + theme.current;
                    icon.setAttribute('title', 'Underline');
                    tool[0].appendChild(icon);
                    break;
                case 3:
                    icon.className += 'jqx-editor-toolbar-icon-justifyleft jqx-editor-toolbar-icon-justifyleft-' + theme.current;
                    icon.setAttribute('title', 'Align Text Left');
                    tool[0].appendChild(icon);
                    break;
                case 4:
                    icon.className += 'jqx-editor-toolbar-icon-justifycenter jqx-editor-toolbar-icon-justifycenter-' + theme.current;
                    icon.setAttribute('title', 'Center');
                    tool[0].appendChild(icon);
                    break;
                case 5:
                    icon.className += 'jqx-editor-toolbar-icon-justifyright jqx-editor-toolbar-icon-justifyright-' + theme.current;
                    icon.setAttribute('title', 'Align Text Right');
                    tool[0].appendChild(icon);
                    break;
                case 6:
                    icon.className += 'jqx-editor-toolbar-icon-outdent jqx-editor-toolbar-icon-outdent-' + theme.current;
                    icon.setAttribute('title', 'Decrease Indent');
                    tool[0].appendChild(icon);
                    break;
                case 7:
                    icon.className += 'jqx-editor-toolbar-icon-indent jqx-editor-toolbar-icon-indent-' + theme.current;
                    icon.setAttribute('title', 'Increase Indent');
                    tool[0].appendChild(icon);
                    break;
                case 8:
                    icon.className += 'jqx-editor-toolbar-icon-insertimage jqx-editor-toolbar-icon-insertimage-' + theme.current;
                    icon.setAttribute('title', 'Insert Image');
                    tool[0].appendChild(icon);
                    break;
            }
        }
    ), []);
    const tools = useMemo(() => 'button button button | button button button | button button | button', []);
    return (
        <JqxToolbar
            width={370}
            height={35}
            tools={tools}
            initTools={initTools}
        />
    );
};

export default App;