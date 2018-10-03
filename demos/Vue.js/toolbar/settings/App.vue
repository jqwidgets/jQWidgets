<template>
    <div>
        <JqxToolbar ref="myToolbar"
            :width="getWidth" :height="35"
            :tools="tools" :initTools="initTools">
        </JqxToolbar>

        <div style="margin-top: 50px"></div>

        <JqxButton @click="addToggleBtnOnClick()" :width="150">Add a Toggle Button</JqxButton>
        <JqxButton @click="addCustomToolBtnOnClick()" :width="150">Add a Custom Tool</JqxButton>
        
        <div style="margin-top: 10px; margin-bottom: 2px">
            Insert position:
        </div>

        <JqxDropDownList ref="myDropDownList"
            :width="150" :height="22" :source="['first','last']"
            :selectedIndex="1" :autoDropDownHeight="true">
        </JqxDropDownList>

        <div style="margin-top: 50px"></div>

        <JqxButton @click="disableToolBtnOnClick()" :width="150">Disable Tool</JqxButton>
        <JqxButton @click="enableToolBtnOnClick()" :width="150">Enable Tool</JqxButton>
        <JqxButton @click="destroyToolBtnOnClick()" :width="150">Destroy Tool</JqxButton>  

        <div style="margin-top: 10px; margin-bottom: 2px">
            Tool index:
        </div>

        <JqxNumberInput ref="myNumberInput"
            :width="50" :height="25" :decimal="0"
            :decimalDigits="0" :inputMode="'simple'">
        </JqxNumberInput>
    </div>
</template>

<script>
    import JqxToolbar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtoolbar.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxToolbar,
            JqxButton,
            JqxNumberInput,
            JqxDropDownList
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input',
                countries: ['Argentina', 'Austria', 'Canada', 'China', 'France', 'Germany', 'Japan', 'Mexico', 'Spain', 'Sweden', 'Switzerland', 'UK', 'USA']
            }
        },
        methods: {
            initTools: function (type, index, tool, menuToolIninitialization) {
                const icon = document.createElement('div');
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
                        tool.jqxDropDownList({
                            width: 130, source: ['<span style="font-family: Courier New;">Courier New</span>', '<span style="font-family: Times New Roman;">Times New Roman</span>', '<span style="font-family: Verdana;">Verdana</span>'], selectedIndex: 1
                        });
                        break;
                    case 5:
                        tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                        break;
                    case 6:
                        tool.jqxInput({ width: 200, placeHolder: 'Type here to search...' });
                        break;
                }
            },
            addToggleBtnOnClick: function () {
                const position = this.$refs.myDropDownList.val();
                this.$refs.myToolbar.addTool('toggleButton', position, false, (type, tool, menuToolIninitialization) => {              
                    const width = menuToolIninitialization ? '95%' : 50;
                    tool.jqxToggleButton({ width: width, toggled: false });
                    tool.text('Off');
                    tool.on('click', () => {
                        const toggled = tool.jqxToggleButton('toggled');
                        toggled ? tool.text('On') : tool.text('Off');
                    });
                });
            },
            addCustomToolBtnOnClick: function () {
                const position = this.$refs.myDropDownList.val();
                const country = this.countries[Math.floor(Math.random() * this.countries.length)];
                this.$refs.myToolbar.addTool('custom', position, false, (type, tool, menuToolIninitialization) => {
                    tool.append('<img src="../../../images/' + country + '.png" style="float: left; clear: both;" />');
                    if (menuToolIninitialization) {
                        tool.find('img').css('margin-right', '10px');
                        tool.find('img').css('margin-top', '4px');
                        tool.append('<div style="float: left; height: 100%; vertical-align: middle;">' + country + '</div>');
                    } else {
                        tool.attr('title', 'Flag of ' + country);
                    }
                });
            },
            disableToolBtnOnClick: function () {
                const toolIndex = this.$refs.myNumberInput.val();
                this.$refs.myToolbar.disableTool(toolIndex, true);
            },
            enableToolBtnOnClick: function () {
                const toolIndex = this.$refs.myNumberInput.val();
                this.$refs.myToolbar.disableTool(toolIndex, false);
            },
            destroyToolBtnOnClick: function () {
                const toolIndex = this.$refs.myNumberInput.val();
                this.$refs.myToolbar.destroyTool(toolIndex);
            }
        }
    }
</script>

<style>
    .jqx-button:not(.jqx-toolbar-tool) {
        display: inline-block;
        margin-right: 5px;
    }
    .buttonIcon {
        margin: -5px 0 0 -3px;
        width: 16px;
        height: 17px;
    }
    .jqx-listbox {
        z-index: 999999 !important;
    }
</style>