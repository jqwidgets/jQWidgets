<template>
    <div>
        <JqxComboBox ref="myComboBox" style="float:left"
                     @checkChange="myComboBoxOnCheckChange($event)"
                     :width="200" :height="25" :source="dataAdapter" :checkboxes="true"
                     :displayMember="'ContactName'" :valueMember="'CompanyName'">
        </JqxComboBox>

        <div style="float: left; margin-left: 20px; font-size: 13px; font-family: Verdana;">
            <div ref="selectionlog"></div>
            <div ref="checkedItemsLog" style='max-width: 300px; margin-top: 20px;'></div>
        </div>
    </div>
</template>

<script>
    import JqxComboBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcombobox.vue";

    export default {
        components: {
            JqxComboBox
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
        mounted: function () {
            this.$refs.myComboBox.checkIndex(0);
        },
        methods: {
            myComboBoxOnCheckChange: function (event) {
                if (event.args) {
                    let item = event.args.item;
                    if (item) {
                        let valueElement = document.createElement('div');
                        valueElement.innerHTML = 'Value: ' + item.value;
                        let labelElement = document.createElement('div');
                        labelElement.innerHTML = 'Label: ' + item.label;
                        let checkedElement = document.createElement('div');
                        checkedElement.innerHTML = 'Checked: ' + item.checked;
                        let selectionLog = this.$refs.selectionlog;
                        selectionLog.innerHTML = '';
                        selectionLog.appendChild(labelElement);
                        selectionLog.appendChild(valueElement);
                        selectionLog.appendChild(checkedElement);


                        let items = this.$refs.myComboBox.getCheckedItems();
                        let checkedItems = '';
                        for (let obj of items) {
                            checkedItems += obj.label + ', ';
                        }
                        this.$refs.checkedItemsLog.innerHTML = checkedItems;
                    }
                }
            }
        }
    };
</script>

<style>
</style>