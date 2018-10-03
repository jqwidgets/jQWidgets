<template>
    <JqxExpander ref="createAccount"
                 :showArrow="false"
                 :toggleMode="'none'"
                 :width="350">
        <div>
            Create a new account
        </div>
        <div style="font-family: Verdana; font-size: 13px;">
            <JqxValidator ref="myValidator" @validationSuccess="validationSuccess($event)" :rules="rules" :hintType="'label'">
                <form id="form" style="overflow: hidden; margin: 10px;" action="./">
                    <table>
                        <tr>
                            <td colspan="2">
                                First Name
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxInput ref="firstName" class="firstName" :width="300" :height="21"></JqxInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Last Name
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <JqxInput ref="lastName" class="lastName" :width="300" :height="21"></JqxInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Choose your username
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxInput ref="userName" class="userName" :width="300" :height="21"></JqxInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Create a password
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxPasswordInput ref="password" class="password" :width="300" :height="21"></JqxPasswordInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Confirm your password
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxPasswordInput ref="passwordConfirm" class="passwordConfirm" :width="300" :height="21"></JqxPasswordInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Birthday
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxDateTimeInput :width="300"
                                                  :height="21">
                                </JqxDateTimeInput>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                Gender
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxDropDownList ref="gender" class="gender"
                                                 :source="genders"
                                                 :selectedIndex="-1"
                                                 :placeHolder="'I am...'"
                                                 :dropDownHeight="50"
                                                 :width="300"
                                                 :height="21">
                                </JqxDropDownList>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="2">
                                <JqxButton :width="150" @click="buttonClicked()">Create account</JqxButton>
                            </td>
                        </tr>
                    </table>
                </form>
            </JqxValidator>
        </div>
    </JqxExpander>
</template>

<script>
    import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpasswordinput.vue';
    import JqxExpander from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue';
    import JqxValidator from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxvalidator.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxPasswordInput,
            JqxExpander,
            JqxValidator,
            JqxInput,
            JqxDateTimeInput,
            JqxDropDownList,
            JqxButton
        },
        data: function () {
            return {
                genders: ["male", "female"],
                rules: [
                    {
                        input: ".firstName", message: "First name is required!", action: 'keyup, blur', rule: (input, commit) => {
                            return this.$refs.firstName.val() != "" && this.$refs.firstName.val() != "First";
                        }
                    },
                    {
                        input: ".lastName", message: "Last name is required!", action: 'keyup, blur', rule: (input, commit) => {
                            return this.$refs.lastName.val() != "" && this.$refs.lastName.val() != "Last";
                        }
                    },
                    { input: ".userName", message: "Username is required!", action: 'keyup, blur', rule: 'required' },
                    { input: ".password", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
                    { input: ".passwordConfirm", message: "Password is required!", action: 'keyup, blur', rule: 'required' },
                    {
                        input: ".passwordConfirm", message: "Passwords should match!", action: 'keyup, blur', rule: (input, commit) => {
                            let firstPassword = this.$refs.password.val();
                            let secondPassword = this.$refs.passwordConfirm.val();
                            return firstPassword == secondPassword;
                        }
                    },
                    {
                        input: ".gender", message: "Gender is required!", action: 'blur', rule: (input, commit) => {
                            let index = this.$refs.gender.getSelectedIndex();
                            return index != -1;
                        }
                    }
                ]
            }
        },
        methods: {
            buttonClicked: function() {
                this.$refs.myValidator.validate(document.getElementById('form'));
            },
            validationSuccess: function(event) {
                this.$refs.createAccount.setContent('<span style="margin: 10px;">Account created.</span>');
            }
        }
    }
</script>