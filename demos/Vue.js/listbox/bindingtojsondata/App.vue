<template>
    <div>
        <JqxListBox @select="select($event)"
                    :source="dataAdapter"
                    :displayMember="'ContactName'"
                    :valueMember="'CompanyName'"
                    :height="200"
                    :width="250">
        </JqxListBox>

        <div style="font-size: 13px; font-family: Verdana;" ref="selectionlog">
        </div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxListBox
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
            }
        },
        methods: {
            select: function (event) {
                if (event.args) {
                    let item = event.args.item;
                    if (item) {
                        let valueElement = document.createElement('div');
                        let labelElement = document.createElement('div');

                        valueElement.innerHTML = 'Value: ' + item.value;
                        labelElement.innerHTML = 'Label: ' + item.label;

                        let selectionLog = this.$refs.selectionlog;

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
