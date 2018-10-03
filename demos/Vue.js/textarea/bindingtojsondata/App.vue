<template>
    <div>
        <JqxTextArea ref="myTextArea" @change="change($event)"
            :width="300" :height="100" :source="dataAdapter" :placeHolder="'Contact Name:'"
            :displayMember="'ContactName'" :valueMember="'CompanyName'" 
        />

        <label style="font-family: Verdana; font-size: 10px;">
            ex: Ana
        </label>

        <div style="font-family: Verdana; font-size: 13px;" ref="selectionLog"></div>
    </div>
</template>

<script>
    import JqxTextArea from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue';

    export default {
        components: {
            JqxTextArea
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
            change: function (event) {
                const item = event.args.owner.selectedItem;
                this.$refs.selectionLog.innerHTML = '<div>Value: ' + item.value + '</div><div>Label: ' + item.label + '</div>';    
            }
        }
    }
</script>