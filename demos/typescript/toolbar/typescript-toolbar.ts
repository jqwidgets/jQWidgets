/// <reference path="../../../jqwidgets-ts/jqwidgets.d.ts" />
function createToolBar(selector)
{
    let theme = $.jqx.theme;
       
    // defining options
    let options: jqwidgets.ToolBarOptions = {
        width: 800,
        height: 35,
        tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input | custom',
        initTools: function (typeOfButton:string, index:number, tool, menuToolIninitialization) {
            if (typeOfButton == "toggleButton") {
                var icon = document.createElement('div');
                icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-'+ theme + ' buttonIcon ';
            }
            switch (index) {
                case 0:
                    icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + theme; 
                    icon.setAttribute("title", "Bold");
                    tool[0].appendChild(icon);
                    break;
                case 1:
                    icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + theme;
                    icon.setAttribute("title", "Italic");
                    tool[0].appendChild(icon);
                    break;
                case 2:
                    icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + theme;
                    icon.setAttribute("title", "Underline");
                    tool[0].appendChild(icon);
                    break;
                case 3:
                    // defining options
                    var toggleButtonOptions: jqwidgets.ButtonOptions = {
                        width: 80,
                        toggled: true
                    };
                    // creating instance
                    var toggleButtonInstance: jqwidgets.jqxButton = jqwidgets.createInstance(tool, 'jqxToggleButton', toggleButtonOptions );
                    tool[0].innerText = 'Enabled';
                    var toggleButtonDOM = document.getElementById(tool[0].id);
                    toggleButtonDOM.addEventListener('click', function () {
                        var toggled = toggleButtonInstance.toggled;
                        if (toggled) {
                            tool[0].innerText = 'Enabled';
                        } else {
                            tool[0].innerText = 'Disabled';
                        }
                    });
                    break;
                case 4:
                    //defining options
                    var dropDownListOptions: jqwidgets.DropDownListOptions = {
                        width: 130,
                        source: ["<span style='font-family: Courier New;'>Courier New</span>",
                            "<span style='font-family: Times New Roman;'>Times New Roman</span>",
                            "<span style='font-family: Verdana;'>Verdana</span>"],
                        selectedIndex: 1
                    };
                    //creating an instance
                    var dropDownListInstance: jqwidgets.jqxDropDownList = jqwidgets.createInstance(tool, 'jqxDropDownList', dropDownListOptions);
                    break;
                case 5:
                    //defining options
                    var comboBoxOptions: jqwidgets.ComboBoxOptions = {
                        width: 50,
                        source: [8, 9, 10, 11, 12, 14, 16, 18, 20],
                        selectedIndex: 3
                    };
                    //creating an instance
                    var comboBoxInstance: jqwidgets.jqxComboBox = jqwidgets.createInstance(tool, 'jqxComboBox', comboBoxOptions);
                    break;
                case 6:
                    //defining options
                    var inputOptions: jqwidgets.InputOptions = {
                        width: 200,
                        placeHolder: "Type here to search..."
                    };
                    //creating an instance
                    var inputOptionsInstance: jqwidgets.jqxInput = jqwidgets.createInstance(tool, 'jqxInput', inputOptions );
                    break;
                case 7:
                    var button = document.createElement('div');
                    var buttonId = 'adminButton';
                    button.id = buttonId;
                    var imageElement = document.createElement('img');
                    button.appendChild(imageElement);
                    imageElement.src = '../../../images/administrator.png';
                    button.setAttribute('title', 'Custom tool');
                    tool[0].appendChild(button);

                    //defining options
                    var butonOptions: jqwidgets.ButtonOptions = {
                        height: 15
                    };
                    //creating an instance
                    var buttoninstance: jqwidgets.jqxButton = jqwidgets.createInstance('#' + buttonId, 'jqxButton', butonOptions);
                    break;
            }
        }
    };

    // creating instances
    var toolbarInstance: jqwidgets.jqxToolBar = jqwidgets.createInstance(selector, 'jqxToolBar', options);
}