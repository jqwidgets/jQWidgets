<template>
    <div>
        <JqxDropDownList @select="listOnSelect($event)"
                         :width="200" :height="25" :source="dataAdapter" :selectedIndex="2"
                         :displayMember="'ContactName'" :valueMember="'CompanyName'">
        </JqxDropDownList>

        <div ref="log" style="font-size: 12px; font-family: Verdana"></div>
    </div>
</template>

<script>
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
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
                url: 'customers.txt'
            };
        },
        methods: {
            listOnSelect: function (event) {
                if (event.args) {
                    let item = event.args.item;
                    if (item) {
                        let valueElement = document.createElement('div');
                        valueElement.innerHTML = `Value: ${item.value}`;

                        let labelElement = document.createElement('div');
                        labelElement.innerHTML = `Label: ${item.label}`;

                        let selectionLog = this.$refs.log;
                        selectionLog.innerHTML = '';
                        selectionLog.appendChild(labelElement);
                        selectionLog.appendChild(valueElement);
                    }
                }
            }
        }
    }
</script>

<style>
</style>