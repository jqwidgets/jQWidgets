<template>
    <div>
        <JqxButton @click="showWindowButtonClick()"
                   :width="80" style="float: left;">
            Open
        </JqxButton>

        <JqxButton @click="hideWindowButtonClick()"
                   :width="100" style="float: left; margin-left: 3px;">
            Close
        </JqxButton>

        <JqxButton @click="pinWindowButtonClick()"
                   :width="80" style="float: left; margin-left: 3px;">
            Pin
        </JqxButton>

        <JqxButton @click="unpinWindowButtonClick()"
                   :width="80" style="float: left; margin-left: 5px;">
            Unpin
        </JqxButton>

        <JqxButton @click="collapseWindowButtonClick()"
                   :width="80" style="float: left; margin-left: 3px;">
            Collapse
        </JqxButton>

        <JqxButton @click="expandWindowButtonClick()"
                   :width="80" style="float: left; margin-left: 3px;">
            Expand
        </JqxButton>

        <JqxWindow ref="customWindow"
                   :width="400" :height="115" :position="{ x: 50, y: 120 }"
                   :cancelButton="'#cancelButton'"
                   :initContent="init"
                   :resizable="false">
            <div>Find</div>
            <div>
                <div id="customWindowContent" style="overflow: hidden;">
                    <div style="margin: 10px;">
                        Fi<u>n</u>d what:
                        <input ref="searchTextInput"
                               @keyup="onKey($event)"
                               @keydown="onKeyUp($event)"
                               @change="onChange($event)"
                               type='text' style="margin-left: 5px; height: 17px; width: 175px; border: 1px solid #aaa;" />

                        <div style="float: right">
                            <input type="button" value="Find Next" style="margin-bottom: 5px;" id="searchTextButton" /><br />
                            <input type="button" value="Cancel" id="cancelButton" />
                        </div>
                        <br />
                        <br />
                        <JqxCheckbox ref="checkBox" :width="150">Match case</JqxCheckbox>
                    </div>
                </div>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxCheckbox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';

    export default {
        components: {
            JqxWindow,
            JqxButton,
            JqxCheckbox
        },
        beforeCreate: function () {
            this.searchTextButton = null;
        },
        methods: {
            init: function () {
                this.searchTextButton = new jqxButton('#searchTextButton', { width: '80px', disabled: true });
                new jqxButton('#cancelButton', { width: '80px', disabled: false });
            },
            searchButtonHandle: function () {
                if (this.$refs.searchTextInput !== null) {
                    if (this.$refs.searchTextInput.value !== '') {
                        this.searchTextButton.disabled = false;
                    }
                    else {
                        this.searchTextButton.disabled = true;
                    }
                }
            },
            onKey: function (event) {
                this.searchButtonHandle();
            },
            onKeyUp: function (event) {
                this.searchButtonHandle();
            },
            onChange: function (event) {
                this.searchButtonHandle();
            },
            showWindowButtonClick: function () {
                this.$refs.customWindow.open();
            },
            hideWindowButtonClick: function () {
                this.$refs.customWindow.close();
            },
            pinWindowButtonClick: function () {
                this.$refs.customWindow.draggable = false;
            },
            unpinWindowButtonClick: function () {
                this.$refs.customWindow.draggable = true;
            },
            collapseWindowButtonClick: function () {
                this.$refs.customWindow.collapse();
            },
            expandWindowButtonClick: function () {
                this.$refs.customWindow.expand();
            }
        }
    }
</script>

<style>
</style>
