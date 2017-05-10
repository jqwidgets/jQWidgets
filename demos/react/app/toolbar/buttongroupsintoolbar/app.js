import React from 'react';
import ReactDOM from 'react-dom';

import JqxToolBar from '../../../jqwidgets-react/react_jqxtoolbar.js';

class App extends React.Component {
    render () {
        let tools = 'button button button | button button button | button button | button';
        let theme = ''
        let initTools = (type, index, tool, menuToolIninitialization) => {
            let icon = document.createElement('div');
            if (type == 'button') {
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
                    icon.className += 'jqx-editor-toolbar-icon-justifyleft jqx-editor-toolbar-icon-justifyleft-' + theme;
                    icon.setAttribute('title', 'Align Text Left');
                    tool[0].appendChild(icon);
                    break;
                case 4:
                    icon.className += 'jqx-editor-toolbar-icon-justifycenter jqx-editor-toolbar-icon-justifycenter-' + theme;
                    icon.setAttribute('title', 'Center');
                    tool[0].appendChild(icon);
                    break;
                case 5:
                    icon.className += 'jqx-editor-toolbar-icon-justifyright jqx-editor-toolbar-icon-justifyright-' + theme;
                    icon.setAttribute('title', 'Align Text Right');
                    tool[0].appendChild(icon);
                    break;
                case 6:
                    icon.className += 'jqx-editor-toolbar-icon-outdent jqx-editor-toolbar-icon-outdent-' + theme;
                    icon.setAttribute('title', 'Decrease Indent');
                    tool[0].appendChild(icon);
                    break;
                case 7:
                    icon.className += 'jqx-editor-toolbar-icon-indent jqx-editor-toolbar-icon-indent-' + theme;
                    icon.setAttribute('title', 'Increase Indent');
                    tool[0].appendChild(icon);
                    break;
                case 8:
                    icon.className += 'jqx-editor-toolbar-icon-insertimage jqx-editor-toolbar-icon-insertimage-' + theme;
                    icon.setAttribute('title', 'Insert Image');
                    tool[0].appendChild(icon);
                    break;
            }
        }
        return (
            <JqxToolBar
                width={400} height={35}
                initTools={initTools} tools={tools}
            />
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
