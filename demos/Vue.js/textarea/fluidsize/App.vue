<template>
    <JqxTextArea
        :width="'30%'" :height="100" :source="dataAdapter" :placeHolder="'Contact Name:'"
        :displayMember="'ContactName'" :valueMember="'CompanyName'" 
    />
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
        }
    }
</script>