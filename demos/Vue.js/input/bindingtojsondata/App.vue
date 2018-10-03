<template>
    <div>
        <JqxInput ref="myInput" @select="myInputOnSelect($event)"
                  :width="200" :height="25" :source="dataAdapter"
                  :placeHolder="'Contact Name:'" :valueMember="'CompanyName'"
                  :displayMember="'ContactName'">
        </JqxInput>

        <br />

        <label style="font-family: Verdana; font-size: 10px">ex: Ana</label>

        <div ref="selectionLog" style="font-family: Verdana; font-size: 13px"></div>
    </div>
</template>

<script>
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxInput
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
                url: 'customers.txt'
            }
        },
        methods: {
            myInputOnSelect: function(event) {
                if (event.args) {
                    let item = event.args.item;
                    if (item) {
                        let valueElement = document.createElement('div');
                        valueElement.innerHTML = 'Value: ' + item.value;

                        let labelElement = document.createElement('div');
                        labelElement.innerHTML = 'Label: ' + item.label;

                        let selectionLog = this.$refs.selectionLog;
                        selectionLog.innerHTML = '';

                        selectionLog.appendChild(labelElement);
                        selectionLog.appendChild(valueElement);

                        setTimeout(_ => this.$refs.myInput.val(item.label));
                    }
                }
            }
        }
    }
</script>

<style>
</style>