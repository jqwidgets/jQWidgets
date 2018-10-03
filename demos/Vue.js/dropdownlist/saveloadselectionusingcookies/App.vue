<template>
    <JqxDropDownList @select="listOnSelect($event)"
                     :width="200" :height="25" :source="dataAdapter" :selectedIndex="index"
                     :displayMember="'ContactName'" :valueMember="'CompanyName'">
    </JqxDropDownList>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDropDownList
        },
        data: function () {
            return {
                index: this.index,
                dataAdapter: new jqx.dataAdapter(this.source)
            }
        },
        beforeCreate: function () {
            this.index = +jqx.cookie.cookie('jqxDropDownList_jqxWidget');

            if (!this.index) {
                this.index = 0;
            };

            this.source = {
                datatype: 'json',
                datafields: [
                    { name: 'CompanyName' },
                    { name: 'ContactName' }
                ],
                id: 'id',
                url: 'customers.txt'
            };
        },
        methods: {
            listOnSelect: function (event) {
                jqx.cookie.cookie('jqxDropDownList_jqxWidget', event.args.index);
            }
        }
    }
</script>

<style>
</style>