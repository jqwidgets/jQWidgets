<template>
    <div>
        <div style="float: left; font-size: 13px; font-family: Verdana;">
            <h3>Alignment</h3>

            <JqxRadioButton @checked="leftBtnOnChecked()">
                Left
            </JqxRadioButton>

            <JqxRadioButton style="margin-top: 10px" @checked="rightBtnOnChecked()" :checked="true">
                Right
            </JqxRadioButton>

        </div>

        <JqxComboBox ref="myComboBox" style="float: left; margin-top: 20px; margin-left: 100px;"
                     :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                     :dropDownHorizontalAlignment="'right'" :dropDownWidth="200"
                     :displayMember="'ContactName'" :valueMember="'CompanyName'">
        </JqxComboBox>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxComboBox,
            JqxRadioButton
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
            leftBtnOnChecked: function () {
                this.$refs.myComboBox.dropDownHorizontalAlignment = 'left';
            },
            rightBtnOnChecked: function () {
                this.$refs.myComboBox.dropDownHorizontalAlignment = 'right';
            }
        }
    };
</script>

<style>
</style>