<template>
    <div>
        <JqxComboBox @select="myComboBoxOnSelect($event)"
                     :width="150" :height="25" :source="dataAdapter" :selectedIndex="0"
                     :displayMember="'countryName'" :valueMember="'name'">
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
                datatype: "jsonp",
                datafields: [
                    { name: 'countryName' },
                    { name: 'name' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode' }
                ],
                url: "http://api.geonames.org/searchJSON",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 50,
                    username: "jqwidgets"
                }
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