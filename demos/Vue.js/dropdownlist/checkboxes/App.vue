<template>
    <div>
        <JqxDropDownList ref="myDropDownList" @select="listOnSelect($event)"
                         :width="200" :height="25" :source="dataAdapter" :checkboxes="true"
                         :displayMember="'ContactName'" :valueMember="'companyName'">
        </JqxDropDownList>

        <div style="float: left; margin-left: 20px; font-size: 13px; font-family: Verdana">
            <div ref="log"></div>
            <div ref="checkedItemsLog" style="max-width: 300px; margin-top: 20px"></div>
        </div>
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

                        let checkedElement = document.createElement('div');
                        checkedElement.innerHTML = `Checked: ${item.checked}`;

                        let selectionLog = this.$refs.log;
                        selectionLog.innerHTML = '';
                        selectionLog.appendChild(labelElement);
                        selectionLog.appendChild(valueElement);
                        selectionLog.appendChild(checkedElement);

                        let items = this.$refs.myDropDownList.getCheckedItems();
                        let checkedItems = '';
                        for (let i = 0; i < items.length; i++) {
                            checkedItems += items[i].label + ', ';
                        }
                        this.$refs.checkedItemsLog.innerHTML = checkedItems;
                    }
                }
            }
        }
    }
</script>

<style>
</style>