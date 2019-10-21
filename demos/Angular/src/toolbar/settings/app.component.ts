import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxToolBarComponent } from 'jqwidgets-ng/jqxtoolbar';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent  {
    @ViewChild('myToolBar', { static: false }) myToolBar: jqxToolBarComponent; 
    @ViewChild('myDropDownList', { static: false }) myDropDownList: jqxDropDownListComponent;
    @ViewChild('myNumberInput', { static: false }) myNumberInput: jqxNumberInputComponent;

    countries: string[] = ['Argentina', 'Austria', 'Canada', 'China', 'France', 'Germany', 'Japan', 'Mexico', 'Spain', 'Sweden', 'Switzerland', 'UK', 'USA'];

    tools: string = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input |';

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
                tool.jqxDropDownList({
                    width: 130, source: ['<span style="font-family: Courier New;">Courier New</span>', '<span style="font-family: Times New Roman;">Times New Roman</span>', '<span style="font-family: Verdana;">Verdana</span>'], selectedIndex: 1 });
                break;
            case 5:
                tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                break;
            case 6:
                tool.jqxInput({ width: 200, placeHolder: 'Type here to search...' });
                break;
        }
    }

    addToggleBtnOnClick(): void {
        let position = this.myDropDownList.val();
        this.myToolBar.addTool('toggleButton', position, false, (type: string, tool: any, menuToolIninitialization: boolean): void => {
            let width;
            if (menuToolIninitialization) {
                // specific setting for minimized tool
                width = '95%';
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
    };

    addCustomToolBtnOnClick(): void {
        let position = this.myDropDownList.val();
        let country = this.countries[Math.floor(Math.random() * this.countries.length)];
        this.myToolBar.addTool('custom', position, false, (type: string, tool: any, menuToolIninitialization: boolean): void => {
            let width;
            tool.append('<img src="../images/' + country + '.png" style="float: left; clear: both;" />');
            if (menuToolIninitialization) {
                // specific setting for minimized tool
                tool.find('img').css('margin-right', '10px');
                tool.find('img').css('margin-top', '4px');
                tool.append('<div style="float: left; height: 100%; vertical-align: middle;">' + country + '</div>');
            } else {
                tool.attr('title', 'Flag of ' + country);
            }
        });
    };

    disableToolBtnOnClick(): void {
        let toolIndex = this.myNumberInput.val();
        this.myToolBar.disableTool(toolIndex, true);
    };

    enableToolBtnOnClick(): void {
        let toolIndex = this.myNumberInput.val();
        this.myToolBar.disableTool(toolIndex, false);
    };

    destroyToolBtnOnClick(): void {
        let toolIndex = this.myNumberInput.val();
        this.myToolBar.destroyTool(toolIndex);
    };
}