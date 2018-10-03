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
                        label: 'Label position left',
                        labelPosition: 'left',
                        align: 'left',
                        width: '200px',
                        required: true
                    },
                    {
                        bind: 'item2',
                        type: 'text',
                        label: 'Label position right',
                        labelPosition: 'right',
                        align: 'left',
                        width: '200px',
                        required: true,
                        requiredPosition: 'left'
                    },
                    {
                        bind: 'item3',
                        type: 'text',
                        label: 'Label position top',
                        labelPosition: 'top',
                        align: 'left',
                        width: '200px',
                        required: true
                    },
                    {
                        bind: 'item4',
                        type: 'text',
                        label: 'Label position bottom',
                        labelPosition: 'bottom',
                        labelAlign: 'left',
                        width: '200px',
                        required: true
                    }
                ],
                value: {
                    firstName: 'John',
                    lastName: 'Scott',
                    address: '1st Ave SW',
                    city: 'San Antonio',
                    state: 'Texas',
                    zip: '78209'
                }
            }
        }
    }
</script>