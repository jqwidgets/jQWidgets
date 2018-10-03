<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <div style="margin-top: 3px;">
            <JqxNumberInput ref="numericInput"
                            :spinButtons="true"
                            :symbol="'$'"
                            :min="0"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div>
            <div style="float: left;">
                <div style="width: 170px; margin-top: 20px;">
                    <JqxCheckBox @change="change($event)" :checked="true">
                        Show Spin Buttons
                    </JqxCheckBox>
                </div>
                <div style="margin-top: 10px;">
                    Symbol Position
                </div>
                <div style="margin-top: 5px;">
                    <JqxRadioButton @checked="checkedLeftbutton($event)" :checked="true">
                        Left
                    </JqxRadioButton>
                </div>
                <div style="margin-top: 5px;">
                    <JqxRadioButton @checked="checkedRightbutton($event)">
                        Right
                    </JqxRadioButton>

                </div>
            </div>
            <div style="margin-left: 30px; float: left;">
                <div style="margin-top: 20px; margin-bottom:10px;">
                    Symbol
                </div>
                <JqxDropDownList @select="symboltypeSelect($event)"
                                 :source="symboltypes"
                                 :autoDropDownHeight="true"
                                 :selectedIndex="0"
                                 :width="60"
                                 :height="20">
                </JqxDropDownList>
                <div style="margin-top: 10px; margin-bottom: 10px;">
                    Decimal Digits
                </div>
                <JqxDropDownList @select="decimaldigitsSelect($event)"
                                 :source="decimaldigitsNumbers"
                                 :autoDropDownHeight="true"
                                 :selectedIndex="2"
                                 :width="60"
                                 :height="20">
                </JqxDropDownList>
                <div style="margin-top: 10px; margin-bottom: 10px;">
                    Digits
                </div>
                <JqxDropDownList @select="digitsSelect($event)"
                                 :source="digitsNumbers"
                                 :autoDropDownHeight="true"
                                 :selectedIndex="7"
                                 :width="60"
                                 :height="20">
                </JqxDropDownList>
            </div>
        </div>
    </div>
</template>
<script>
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";
    import JqxCheckBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxNumberInput,
            JqxCheckBox,
            JqxRadioButton,
            JqxDropDownList
        },
        beforeCreate: function () {
            this.symboltypes = ['$', '%', 'None'];
            this.decimaldigitsNumbers = ['0', '1', '2', '3', '4'];
            this.digitsNumbers = ['1', '2', '3', '4', '5', '6', '7', '8'];
        },
        methods: {
            change: function(event) {
                let checked = event.args.checked;
                this.$refs.numericInput.spinButtons = checked;
            },
            checkedLeftbutton: function (event) {
                this.$refs.numericInput.symbolPosition = 'left';
            },
            checkedRightbutton: function (event) {
                this.$refs.numericInput.symbolPosition = 'right';
            },
            symboltypeSelect: function (event) {
                let index = event.args.index;
                if (index == 2) {
                    this.$refs.numericInput.symbol = '';
                }
                else {
                    let symbol = this.symboltypes[index];
                    this.$refs.numericInput.symbol = symbol;
                }
            },
            decimaldigitsSelect: function (event) {
                let index = event.args.index;
                this.$refs.numericInput.decimalDigits = this.decimaldigitsNumbers[index];
            },
            digitsSelect: function (event) {
                let index = event.args.index;
                this.$refs.numericInput.digits = this.digitsNumbers[index];
            }
        }
    }
</script>

<style>
</style>
