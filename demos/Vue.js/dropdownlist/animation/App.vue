<template>
    <div>
        <div style="float: left; font-size: 13px; font-family: Verdana">
            <h3>Animation Type</h3>

            <JqxRadioButton @checked="noneAnimationBtnOnChacked()">
                None
            </JqxRadioButton>

            <JqxRadioButton style="margin-top: 10px" @checked="slideAnimationBtnOnChacked()">
                Slide
            </JqxRadioButton>

            <JqxRadioButton style="margin-top: 10px" @checked="fadeAnimationBtnOnChacked()" :checked=true>
                Fade
            </JqxRadioButton>

        </div>

        <JqxDropDownList ref="myDropDownList" style="float: left; margin-top: 20px; margin-left: 100px"
                         :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                         :animationType="'fade'" :dropDownHorizontalAlignment="'right'"
                         :dropDownWidth="200" :displayMember="'ContactName'" :valueMember="'CompanyName'">
        </JqxDropDownList>
    </div>
</template>

<script>
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxRadioButton,
            JqxDropDownList
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source)
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                id: 'id',
                url: 'customers.txt',
                async: false
            };
        },
        methods: {
            noneAnimationBtnOnChacked: function () {
                this.$refs.myDropDownList.animationType = 'none';
            },
            slideAnimationBtnOnChacked: function () {
                this.$refs.myDropDownList.animationType = 'slide';
            },
            fadeAnimationBtnOnChacked: function () {
                this.$refs.myDropDownList.animationType = 'fade';
            }
        }
    };
</script>

<style>
</style>