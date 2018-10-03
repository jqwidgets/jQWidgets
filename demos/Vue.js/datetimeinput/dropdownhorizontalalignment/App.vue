<template>
    <div>
        <div ref="selectionlog" style="float: left; font-size: 12px; font-family: Verdana">
            <h3>Alignment</h3>

            <JqxRadioButton @checked="leftBtn()">
                Left
            </JqxRadioButton>

            <JqxRadioButton style="margin-top: 10px" @checked="rightBtn()" :checked="true">
                Right
            </JqxRadioButton>

        </div>

        <JqxDateTimeInput ref="myDateTimeInput"
                          style="float: left; margin-top: 20px; margin-left: 100px;"
                          :width="150" :height="25" :animationType="'fade'"
                          :dropDownHorizontalAlignment="'right'">
        </JqxDateTimeInput>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxDateTimeInput,
            JqxRadioButton
        },
        methods: {
            leftBtn: function () {
                this.$refs.myDateTimeInput.dropDownHorizontalAlignment = 'left';
            },
            rightBtn: function () {
                this.$refs.myDateTimeInput.dropDownHorizontalAlignment = 'right';
            }
        }
    };
</script>

<style>
</style>