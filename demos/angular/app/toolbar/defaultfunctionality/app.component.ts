 
import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxToolBarComponent } from '../../../../../jqwidgets-ts/angular_jqxtoolbar';
import { jqxButtonComponent } from '../../../../../jqwidgets-ts/angular_jqxbuttons';
import { jqxDropDownListComponent } from '../../../../../jqwidgets-ts/angular_jqxdropdownlist';
import { jqxComboBoxComponent } from '../../../../../jqwidgets-ts/angular_jqxcombobox';
import { jqxInputComponent } from '../../../../../jqwidgets-ts/angular_jqxinput';

@Component({
    selector: 'my-app',
    template: 
        `<jqxToolbar
            [width]='700' [height]='35'
            [tools]='tools' [initTools]='initTools'>
        </jqxToolbar>`,
    styles: [`
        .buttonIcon
        {
            margin: -5px 0 0 -3px;
            width: 16px;
            height: 17px;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent
{
    tools: string = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input | custom';

    initTools: any = (type: string, index: number, tool: any, menuToolIninitialization): void =>
    {
        let icon = document.createElement('div');
        if (type == "toggleButton")
        {
            icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-arctic buttonIcon ';
        }
        switch (index)
        {
            case 0:
                icon.className += "jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-arctic";
                icon.setAttribute("title", "Bold");
                tool[0].appendChild(icon);
                break;
            case 1:
                icon.className += "jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-arctic";
                icon.setAttribute("title", "Italic");
                tool[0].appendChild(icon);
                break;
            case 2:
                icon.className += "jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-arctic";
                icon.setAttribute("title", "Underline");
                tool[0].appendChild(icon);
                break;
            case 3:
                tool.jqxToggleButton({ width: 80, toggled: true });
                tool.text("Enabled");
                tool.on("click", () =>
                {
                    let toggled = tool.jqxToggleButton("toggled");
                    if (toggled)
                    {
                        tool.text("Enabled");
                    } else
                    {
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
                tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                break;
            case 7:
                let button = document.createElement('div');
                let img = document.createElement('img');
                img.src = '../../../../images/administrator.png'
                img.title = 'Custom tool';
                button.appendChild(img);
                tool[0].appendChild(button);
                tool.jqxButton({ height: 15 });
                break;
        }
    };
}
