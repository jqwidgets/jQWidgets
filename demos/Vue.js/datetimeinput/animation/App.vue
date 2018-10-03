<template>
    <div>
        <div style="float: left">
            <h3>Animation Type</h3>

            <JqxRadioButton @checked="noneAnimationBtn()" :checked="false">
                None
            </JqxRadioButton>

            <div style="margin-top: 10px"></div>
            <JqxRadioButton @checked="slideAnimationBtn()" :checked="false">
                Slide
            </JqxRadioButton>

            <div style="margin-top: 10px"></div>
            <JqxRadioButton @checked="fadeAnimationBtn()" :checked="true">
                Fade
            </JqxRadioButton>

        </div>

        <JqxDateTimeInput ref="myDateTimeInput" style="float: left; margin-top: 40px; margin-left: 100px"
                          :width="150" :height="25" :animationType="'fade'"
                          :dropDownHorizontalAlignment="'right'">
        </JqxDateTimeInput>
    </div>
</template>

<script>
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";

    export default {
        components: {
            JqxRadioButton,
            JqxDateTimeInput
        },
        methods: {
            noneAnimationBtn: function () {
                this.$refs.myDateTimeInput.animationType = 'none';
            },
            slideAnimationBtn: function () {
                this.$refs.myDateTimeInput.animationType = 'slide';
            },
            fadeAnimationBtn: function () {
                this.$refs.myDateTimeInput.animationType = 'fade';
            }
        }
    };
</script>

<style>
</style>