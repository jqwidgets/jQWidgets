<template>
    <JqxForm ref="myForm"
        style="width: 400px; height: auto;"
        :template="template" :value="value">
    </JqxForm>
</template>

<script>
    import JqxForm from "jqwidgets-scripts/jqwidgets-vue/vue_jqxform.vue";

    export default {
        components: {
            JqxForm
        },
        data: function () {
            return {
                template: [
                    {
                        bind: 'item1',
                        type: 'text',
                        label: 'Input left alignment',
                        align: 'left',
                        labelWidth: '160px',
                        width: '160px'
                    },
                    {
                        bind: 'item2',
                        type: 'text',
                        label: 'Input center alignment',
                        align: 'center',
                        labelWidth: '160px',
                        width: '160px'
                    },
                    {
                        bind: 'item3',
                        type: 'text',
                        label: 'Input right alignment',
                        align: 'right',
                        labelWidth: '160px',
                        width: '160px'
                    },
                    {
                        bind: 'item4',
                        type: 'text',
                        label: 'Label left alignment',
                        labelAlign: 'left',
                        labelWidth: '160px',
                        width: '160px'
                    },
                    {
                        bind: 'item5',
                        type: 'text',
                        label: 'Label center alignment',
                        labelAlign: 'center',
                        labelWidth: '160px',
                        width: '160px'
                    },
                    {
                        bind: 'item6',
                        type: 'text',
                        label: 'Label right alignment',
                        labelAlign: 'right',
                        labelWidth: '160px',
                        width: '160px'
                    }
                ],
                value: {
                    item1: 'left aligned',
                    item2: 'center aligned',
                    item3: 'right aligned',
                    item4: 'left aligned',
                    item5: 'left aligned',
                    item6: 'left aligned'
                }
            }
        }
    }
</script>