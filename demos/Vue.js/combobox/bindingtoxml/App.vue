<template>
    <div>
        <JqxComboBox @select="myComboBoxOnSelect($event)"
                     :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                     :displayMember="'ContactName'" :valueMember="'CompanyName'">
        </JqxComboBox>

        <div ref="selectionlog" style="font-size: 12px; font-family: Verdana"></div>
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
                datatype: 'xml',
                datafields: [
                    { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName' },
                    { name: 'ContactName', map: 'm\\:properties>d\\:ContactName' },
                ],
                root: 'entry',
                record: 'content',
                id: 'm\\:properties>d\\:CustomerID',
                url: 'customers.xml'
            };
        },
        methods: {
            myComboBoxOnSelect: function (event) {
                if (event.args) {
                    let item = event.args.item;
                    if (item) {
                        let valueElement = document.createElement('div');
                        valueElement.innerHTML = 'Value: ' + item.value;
                        let labelElement = document.createElement('div');
                        labelElement.innerHTML = 'Label: ' + item.label;
                        let selectionLog = this.$refs.selectionlog;
                        selectionLog.innerHTML = '';
                        selectionLog.appendChild(labelElement);
                        selectionLog.appendChild(valueElement);
                    }
                }
            }
        }
    };
</script>

<style>
</style>