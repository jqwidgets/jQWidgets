import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
    tools: string = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input';

    theme: string = ''

    initTools = (type: string, index: number, tool: any, menuToolIninitialization: any): any => {
        let icon = document.createElement('div');
        if (type == 'toggleButton') {
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
                    let toggled = tool.jqxToggleButton('toggled');
                    if (toggled) {
                        tool.text('Enabled');
                    } else {
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
                tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                break;
        }
    }
}