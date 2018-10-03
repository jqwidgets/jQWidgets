<template>
    <div style="font-size: small; font-family: Verdana">
        <div>
            Resize the window to minimize or restore tools. The <span style="color: #CC0000">combobox</span>
            is non-minimizable and the <span style="color: #EE8D4D">input</span> does not appear
            in the pop-up menu when minimized.
        </div>

        <div>Resize the window to minimize or restore tools.</div>
        <JqxWindow :width="700" :height="250" :minWidth="250" :position="{ x: 5, y: 90 }">
            <div>
                Resizable jqxToolBar
            </div>
            <div style="overflow: hidden">
                <JqxToolbar 
                    :width="'100%'" :height="35" :minimizeWidth="200"
                    :tools="tools" :initTools="initTools">
                </JqxToolbar>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxToolbar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtoolbar.vue';
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';

    export default {
        components: {
            JqxToolbar,
            JqxWindow
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input'
            }
        },
        methods: {
            initTools: function (type, index, tool, menuToolIninitialization) {
                const icon = document.createElement('div');
                if (type == 'toggleButton') {
                    icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-arctic buttonIcon ';
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
                        let dropDownListWidth;
                        if (menuToolIninitialization) {
                            dropDownListWidth = '95%';
                        } else {
                            dropDownListWidth = 130;
                        }
                        tool.jqxDropDownList({
                            width: dropDownListWidth, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1
                        });
                        break;
                    case 5:
                        let comboBoxWidth;
                        if (menuToolIninitialization) {
                            comboBoxWidth = '95%';
                        } else {
                            comboBoxWidth = 50;
                        }
                        tool.jqxComboBox({ width: comboBoxWidth, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                        tool[0].style.borderColor = '#CC0000';
                        return { minimizable: false };
                    case 6:
                        tool.jqxInput({ width: 185, placeHolder: 'Type here to search...' });
                        tool[0].style.borderColor = '#EE8D4D';
                        return { menuTool: false };
                }
            }
        }
    }
</script>

<style>
    .buttonIcon {
        margin: -5px 0 0 -3px;
        width: 16px;
        height: 17px;
    }
    .jqx-listbox {
        z-index: 999999 !important;
    }
</style>