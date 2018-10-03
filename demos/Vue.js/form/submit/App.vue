<template>
    <JqxForm ref='myForm'
        style='width: 500px; height: auto;'
        :template='template' :value='value'>
    </JqxForm>
</template>

<script>
    import JqxForm from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxform.vue';

    export default {
        components: {
            JqxForm
        },
        mounted: function () {
            const myForm = this.$refs.myForm;
            const btn = myForm.getComponentByName('submitButton');
            btn.on('click', function () {
                // function: submit
                // arg1: url
                // arg2, optional: target, default is _blank
                // arg3, optional: submit method - GET or POST, default is POST
                myForm.submit('https://www.jqwidgets.com/form_demo/', '_blank', 'POST');
            });
        },
        data: function () {
            return {
                template: [
                    {
                        bind: 'textBoxValue',
                        type: 'text',
                        label: 'Text input',
                        labelPosition: 'left',
                        labelWidth: '30%',
                        align: 'left',
                        width: '250px',
                        required: true
                    },
                    {
                        bind: 'passwordBoxValue',
                        type: 'password',
                        label: 'Password input',
                        labelPosition: 'left',
                        labelWidth: '30%',
                        align: 'left',
                        width: '250px',
                        required: true
                    },
                    {
                        bind: 'nubmberBoxValue',
                        type: 'number',
                        label: 'Number input',
                        labelPosition: 'left',
                        labelWidth: '30%',
                        align: 'left',
                        width: '250px',
                        required: true
                    },
                    {
                        bind: 'dropdownValue',
                        type: 'option',
                        label: 'Drop down list',
                        labelPosition: 'left',
                        labelWidth: '30%',
                        align: 'left',
                        width: '250px',
                        required: true,
                        component: 'jqxDropDownList',
                        options: [
                            { label: 'Option 1', value: 'value1' },
                            { label: 'Option 2', value: 'value2' },
                            { label: 'Option 3', value: 'value3' }
                        ]
                    },
                    {
                        type: 'label',
                        label: 'Radio buttons:',
                        rowHeight: '40px',
                    },
                    {
                        bind: 'radiobuttonValue',
                        type: 'option',
                        label: 'Radio buttons',
                        labelPosition: 'right',
                        columnWidth: '150px',
                        align: 'left',
                        optionsLayout: 'horizontal',
                        options: [
                            { label: 'Option 1', value: 'value1' },
                            { label: 'Option 2', value: 'value2' },
                            { label: 'Option 3', value: 'value3' }
                        ]
                    },
                    {
                        type: 'label',
                        bind: 'radiobuttonValue_out',
                        label: 'Boolean options / checkboxes:',
                        rowHeight: '40px',
                    },
                    {
                        columns: [
                            {
                                columnWidth: '140px',
                                bind: 'checkboxValue1',
                                type: 'boolean',
                                label: 'Checkbox 1',
                                labelPosition: 'right',
                                align: 'left',
                                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
                            },
                            {
                                columnWidth: '140px',
                                bind: 'checkboxValue2',
                                type: 'boolean',
                                label: 'Checkbox 2',
                                labelPosition: 'right',
                                align: 'left',
                                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
                            },
                            {
                                columnWidth: '140px',
                                bind: 'checkboxValue3',
                                type: 'boolean',
                                label: 'Checkbox 3',
                                labelPosition: 'right',
                                align: 'left',
                                labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
                            }
                        ]
                    },
                    {
                        type: 'blank',
                        rowHeight: '20px',
                    },
                    {
                        name: 'submitButton',
                        type: 'button',
                        text: 'Submit Form Data',
                        align: 'right',
                        padding: { left: 0, top: 5, bottom: 5, right: 40 }
                    }
                ],
                value: {
                    'textBoxValue': 'text box value',
                    'passwordBoxValue': 'password box',
                    'nubmberBoxValue': 67.44,
                    'dropdownValue': 'value3',
                    'radiobuttonValue': 'value2',
                    'checkboxValue1': false,
                    'checkboxValue2': false,
                    'checkboxValue3': true
                }
            }
        }
    }
</script>