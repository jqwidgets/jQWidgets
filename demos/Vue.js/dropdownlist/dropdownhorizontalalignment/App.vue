<template>
    <div>
        <div style="float: left; font-size: 13px; font-family: Verdana">
            <h3>Alignment</h3>

            <JqxRadioButton @checked="leftAlignBtnOnChecked()">
                Left
            </JqxRadioButton>

            <JqxRadioButton :checked="true" @checked="rightAlignBtnOnChecked()">
                Right
            </JqxRadioButton>

        </div>

        <JqxDropDownList ref="myDropDownList" style="float: left; margin-top: 20px; margin-left: 100px"
                         :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                         :displayMember="'ContactName'" :valueMember="'notes'"
                         :dropDownHorizontalAlignment="'right'" :dropDownWidth="200">
        </JqxDropDownList>
    </div>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxRadioButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue";

    export default {
        components: {
            JqxDropDownList,
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
            };
        },
        methods: {
            leftAlignBtnOnChecked: function () {
                this.$refs.myDropDownList.dropDownHorizontalAlignment = 'left';
            },
            rightAlignBtnOnChecked: function () {
                this.$refs.myDropDownList.dropDownHorizontalAlignment = 'right';
            }
        }
    }
</script>

<style>
</style>