<template>
    <div>
        <JqxNotification ref="myNotification"
                         :template="'info'"
                         :icon="{ width: 25, height: 25, url: '../../../images/smiley.png', padding: 5}"
                         :blink="false"
                         :autoOpen="false"
                         :autoClose="true"
                         :closeOnClick="true"
                         :position="'top-right'"
                         :opacity="0.9"
                         :width="'auto'">
            <div>
                <span>
                    Welcome to our website.
                </span>
            </div>
        </JqxNotification>

        <div style="float: left; margin-left: 25%;">
            <JqxButton @click="openNotificationClick()" :width="160">Open notification</JqxButton>
            <JqxButton @click="closeLastNotificationClick()" :width="160">Close last notification</JqxButton>
            <JqxButton @click="closeNotificationsClick()" :width="160">Close all notifications</JqxButton>
        </div>

        <div style="float: left; margin-left: 15px;">
            <JqxExpander :toggleMode="'none'"
                         :showArrow="false"
                         :height="385"
                         :width="200">
                <div>
                    JqxNotification settings
                </div>
                <div style="padding: 5px;">
                    <div>
                        Position:
                    </div>
                    <ul style="list-style: none; padding: 0px; margin-top: 10px; margin-left: 20px; font-family: Verdana;
                font-size: 12px;">
                        <li>
                            <JqxRadioButton :checked="false" :groupName="'position'" @checked="topLeftChecked()">
                                Top-Left
                            </JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton :checked="true" :groupName="'position'" @checked="topRightChecked()">
                                Top-Right
                            </JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton :checked="false" :groupName="'position'" @checked="bottomLeftChecked()">
                                Bottom-Left
                            </JqxRadioButton>
                        </li>
                        <li>
                            <JqxRadioButton :checked="false" :groupName="'position'" @checked="bottomRightChecked()">
                                Bottom-Right
                            </JqxRadioButton>
                        </li>
                    </ul>
                    <br />
                    <div>
                        Template:
                    </div>
                    <JqxDropDownList @change="change($event)"
                                     :source="source"
                                     :width="'100%'"
                                     :height="25"
                                     :autoDropDownHeight="true"
                                     :selectedIndex="0">
                    </JqxDropDownList>
                    <br />
                    <JqxCheckBox :checked="true" @change="closeOnClickCheckboxChange($event)">
                        Close on click
                    </JqxCheckBox>
                    <JqxCheckBox :checked="true" @change="autoCloseCheckBoxChange($event)">
                        Auto close
                    </JqxCheckBox>
                    <JqxCheckBox :checked="false" @change="blinkCheckboxChange($event)">
                        Blink
                    </JqxCheckBox>
                </div>
            </JqxExpander>
        </div>
    </div>
</template>
<script>
    import JqxNotification from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnotification.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";

    export default {
        components: {
            JqxNotification,
            JqxButton,
            JqxExpander,
            JqxRadioButton,
            JqxDropDownList,
            JqxCheckBox
        },
        data: function () {
            return {
                source: ['info', 'warning', 'success', 'error', 'mail', 'time', 'null']
            }
        },
        methods: {
            openNotificationClick: function() {
                this.$refs.myNotification.open();
            },
            closeLastNotificationClick: function () {
                this.$refs.myNotification.closeLast();
            },
            closeNotificationsClick: function () {
                this.$refs.myNotification.closeAll();
            },
            topLeftChecked: function () {
                this.$refs.myNotification.position = 'top-left';
            },
            topRightChecked: function () {
                this.$refs.myNotification.position = 'top-right';
            },
            bottomLeftChecked: function () {
                this.$refs.myNotification.position = 'bottom-left';
            },
            bottomRightChecked: function () {
                this.$refs.myNotification.position = 'bottom-right';
            },
            change: function (event) {
                let choice = event.args.item.label;
                let newTemplate;
                if (choice != "null") {
                    newTemplate = choice;
                } else {
                    newTemplate = null;
                }
                this.$refs.myNotification.template = newTemplate;
            },
            closeOnClickCheckboxChange: function (event) {
                let checked = event.args.checked;
                this.$refs.myNotification.closeOnClick = checked;
            },
            autoCloseCheckBoxChange: function (event) {
                let checked = event.args.checked;
                this.$refs.myNotification.autoClose = checked;
            },
            blinkCheckboxChange: function (event) {
                let checked = event.args.checked;
                this.$refs.myNotification.blink = checked;
            }
        }
    }
</script>

<style>
    .jqx-button, .jqx-radiobutton, .jqx-checkbox {
        margin-bottom: 10px;
    }
</style>
