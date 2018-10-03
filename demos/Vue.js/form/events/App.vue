<template>
    <div>
        <JqxForm ref="myForm" @formDataChange="formDataChange($event)"
                 style="width: 400px; height: auto;"
                 :template="template" :value="value">
        </JqxForm>

        <div ref="eventsBox"></div>
    </div>
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
                        bind: 'firstName',
                        type: 'text',
                        label: 'First name',
                        required: true,
                        labelWidth: '85px',
                        width: '250px',
                        info: 'Enter first name',
                        infoPosition: 'right'
                    },
                    {
                        bind: 'lastName',
                        type: 'text',
                        label: 'Last name',
                        required: true,
                        labelWidth: '85px',
                        width: '250px',
                        info: 'Enter last name',
                        infoPosition: 'right'
                    },
                    {
                        bind: 'company',
                        type: 'text',
                        label: 'Company',
                        required: false,
                        labelWidth: '85px',
                        width: '250px'
                    },
                    {
                        bind: 'address',
                        type: 'text',
                        label: 'Address',
                        required: true,
                        labelWidth: '85px',
                        width: '250px'
                    },
                    {
                        bind: 'city',
                        type: 'text',
                        label: 'City',
                        required: true,
                        labelWidth: '85px',
                        width: '250px'
                    },
                    {
                        bind: 'state',
                        type: 'option',
                        label: 'State',
                        required: true,
                        labelWidth: '85px',
                        width: '250px',
                        component: 'jqxDropDownList',
                        options: [
                            { value: 'California' },
                            { value: 'New York' },
                            { value: 'Oregon' },
                            { value: 'Illinois' },
                            { value: 'Texas' }
                        ]
                    },
                    {
                        bind: 'zip',
                        type: 'text',
                        label: 'Zip code',
                        required: true,
                        labelWidth: '85px',
                        width: '250px'
                    },
                    {
                        type: 'blank',
                        rowHeight: '10px'
                    },
                    {
                        columns: [
                            {
                                type: 'button',
                                text: 'Sign up',
                                width: '90px',
                                columnWidth: '50%',
                                align: 'right'
                            },
                            {
                                type: 'button',
                                text: 'Cancel',
                                width: '90px',
                                columnWidth: '50%'
                            }
                        ]
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
        },
        methods: {
            formDataChange: function (event) {
                const args = event.args;
                const newValue = args.value;
                const previousValue = args.previousValue;
                let html = '<h3>Event: formdatachange</h3>';

                for (let i in newValue) {
                    let newInputValue = newValue[i];
                    let previousInputValue = '';
                    if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
                        previousInputValue = ', <i>previous value</i>: <span style="color:red;">' + previousValue[i] + '</span>';
                        newInputValue = '<span style="color:green;">' + newInputValue + '</span>';
                    }
                    html += "<b>" + i + "</b>: " + newInputValue + previousInputValue + "<br>";
                }
                this.$refs.eventsBox.innerHTML = html;
            }
        }
    }
</script>