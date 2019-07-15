<template>
    <div>
        <div id="timepicker">
            <JqxTimePicker ref="timepicker"
            @change="change($event)"
            :width="size" :height="size" :format="format" />
        </div>
        <div id="settingsForm">
            <JqxForm
                @formDataChange="formDataChange($event)"
                @buttonClick="buttonClick($event)"
                :template="template" :value="sampleValue" 
                :padding="padding" />
        </div>
    </div>
</template>

<script>
    import JqxForm from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxform.vue';
    import JqxTimePicker from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtimepicker.vue';
    
    const timeFormatting = function (value) {
        let hour = value.getHours();
        let minutes = value.getMinutes();
        let minutesString = minutes < 10 ? "0" + minutes : minutes;
        return "<span>" + hour + ":" + minutesString + "</span>";
    };

    export default {
        components: {
            JqxTimePicker,
            JqxForm
        },
        data: function () {
            return {
                size: 400,
                format: "24-hour",
                template: [
                    {
                        type: "label",
                        label: "<span class='settings'>Settings</span>",
                        rowHeight: "40px",
                    },
                    {
                        type: "label",
                        label: "Selection",
                        rowHeight: "40px",
                    },
                    {
                        bind: "radiobuttonSelection",
                        type: "option",
                        label: "Selection",
                        labelPosition: "right",
                        columnWidth: "100px",
                        align: "left",
                        optionslayout: "horizontal",
                        options: [
                            { label: "Hours", value: "hour" },
                            { label: "Minutes", value: "minute" }
                        ]
                    },
                    {
                        type: "label",
                        label: "Minute Interval",
                        rowHeight: "40px",
                    },
                    {
                        bind: "radiobuttonMinuteinterval",
                        type: "option",
                        label: "Minute Interval",
                        labelPosition: "right",
                        columnWidth: "100px",
                        align: "left",
                        optionslayout: "horizontal",
                        options: [
                            { label: "1", value: "value1" },
                            { label: "5", value: "value2" },
                            { label: "15", value: "value3" }
                        ]
                    },
                    {
                        name: "sethours",
                        type: "button",
                        text: "Set hours to 20",
                        height: "30px",
                        rowHeight: "40px",
                        columnWidth: "50%"
                    },
                    {
                        name: "setminutes",
                        type: "button",
                        text: "Set minutes to 12",
                        height: "30px",
                        rowHeight: "40px",
                        columnWidth: "50%"
                    },
                    {
                        name: "now",
                        type: "button",
                        text: "Set to now",
                        height: "30px",
                        rowHeight: "40px",
                        columnWidth: "50%"
                    },
                    {
                        type: "label",
                        label: "Current value: <span id=\"currenttime\"></span>",
                        rowHeight: "40px",
                    }
                ],
                sampleValue: {
                    "radiobuttonSelection": "hour",
                    "radiobuttonMinuteinterval": "value1"
                },
                padding: { left: 10, top: 10, right: 0, bottom: 10 }
            }
        },
        methods: {
            formDataChange: function (event) {
                const args = event.args;
                const newValue = args.value;
                const previousValue = args.previousValue;
                for (let i in newValue) {
                    let newInputValue = newValue[i];
                    if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                        switch (i) {
                            case "radiobuttonSelection":
                                this.$refs.timepicker.selection = newValue[i];
                                break;
                            case "radiobuttonMinuteinterval":
                                let currentValue = newValue[i];
                                if (currentValue === "value1") {
                                    this.$refs.timepicker.minuteInterval = 1;
                                    
                                } else if (currentValue === "value2") {
                                    this.$refs.timepicker.minuteInterval = 5;
                                } else {
                                    this.$refs.timepicker.minuteInterval = 15;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                }
            },
            buttonClick: function (event) {
                var args = event.args;
                var name = args.name;
                switch (name) {
                    case "sethours":
                        this.$refs.timepicker.setHours(20);
                        break
                    case "setminutes":
                        this.$refs.timepicker.setMinutes(12);
                        break;
                    case "now":
                        this.$refs.timepicker.value = new Date();
                        break;
                    default:
                        break;
                }
            },
            change: function (event) {
                let args = event.args;
                let newDate = args.value;
                document.getElementById("currenttime").innerHTML = timeFormatting(newDate);
            }
        },
        mounted: function () {
            let value = this.$refs.timepicker.value;
            document.getElementById("currenttime").innerHTML = timeFormatting(value);
        }
    }
</script>
<style>
    #timepicker {
        float: left;
    }
    #settingsForm {
        width: 280px;
        float: left;
        margin-left: 80px;
    }
    .settings {
        font-weight: bold;
        font-size: 1.2em;
    }
</style>
