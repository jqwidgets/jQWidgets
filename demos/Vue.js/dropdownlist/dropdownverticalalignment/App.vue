<template>
    <div>
        <JqxDropDownList ref="myDropDownList" style="float: left; margin-top: 270px"
                         :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                         :displayMember="'ContactName'" :valueMember="'notes'"
                         :dropDownVerticalAlignment="'top'" :dropDownWidth="200">
        </JqxDropDownList>

        <div style="float: left; font-size: 13px; font-family: Verdana; margin-left: 100px; margin-top: 270px">
            <h3>Alignment</h3>

            <JqxRadioButton @checked="topAlignBtnOnChecked()" :checked="true">
                Top
            </JqxRadioButton>

            <JqxRadioButton @checked="bottomAlignBtnOnChecked()">
                Bottom
            </JqxRadioButton>

        </div>
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
            bottomAlignBtnOnChecked: function () {
                this.$refs.myDropDownList.dropDownVerticalAlignment = 'bottom';
            },
            topAlignBtnOnChecked: function () {
                this.$refs.myDropDownList.dropDownVerticalAlignment = 'top';
            }
        }
    }
</script>

<style>
</style>