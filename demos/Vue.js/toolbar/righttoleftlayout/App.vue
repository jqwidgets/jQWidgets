<template>
    <JqxToolbar
        :width="getWidth" :height="35" :rtl="true"
        :tools="tools" :initTools="initTools">
    </JqxToolbar>
</template>

<script>
    import JqxToolbar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtoolbar.vue';
    import JqxColorPicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcolorpicker.vue';

    export default {
        components: {
            JqxToolbar,
            JqxColorPicker
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input'
            }
        },
        methods: {
            initTools: function (type, index, tool, menuToolIninitialization) {
                let icon = document.createElement('div');
                if (type == 'toggleButton') {
                    icon.className = 'jqx-editor-toolbar-icon buttonIcon ';
                }
                switch (index) {
                    case 0:
                        icon.className += 'jqx-editor-toolbar-icon-bold';
                        icon.setAttribute('title', 'Bold');
                        tool[0].appendChild(icon);
                        break;
                    case 1:
                        icon.className += 'jqx-editor-toolbar-icon-italic';
                        icon.setAttribute('title', 'Italic');
                        tool[0].appendChild(icon);
                        break;
                    case 2:
                        icon.className += 'jqx-editor-toolbar-icon-underline';
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