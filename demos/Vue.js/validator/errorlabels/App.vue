<template>
    <JqxExpander :width="350" :showArrow="false" :toggleMode="'none'">
        <div><h3 style="padding: 0; margin: 0;">Register</h3></div>
        <div style="padding: 5px;">
            <JqxValidator ref="myValidator" :rules="rules" :animationDuration="0" :hintType="'label'">
                <form id="form" action="./">
                    <table class="register-table">
                        <tbody>
                            <tr>
                                <td>Username:</td>
                                <td><JqxInput class="userInput text-input" :width="195" :height="22"></JqxInput></td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td><JqxPasswordInput ref="passwordInput" class="passwordInput text-input" :width="195" :height="22"></JqxPasswordInput></td>
                            </tr>
                            <tr>
                                <td>Confirm password:</td>
                                <td><JqxPasswordInput ref="confirmPasswordInput" class="passwordConfirmInput text-input" :width="195" :height="22"></JqxPasswordInput></td>
                            </tr>
                            <tr>
                                <td>Real name:</td>
                                <td><JqxInput :width="195" :height="22" class="realNameInput text-input"></JqxInput></td>
                            </tr>
                            <tr>
                                <td>Birth date:</td>
                                <td><JqxDateTimeInput ref="dateTimeInput" :width="195" :height="22" :value="initialDate" class="birthInput"></JqxDateTimeInput></td>
                            </tr>
                            <tr>
                                <td>E-mail:</td>
                                <td><JqxInput :placeHolder="'someone@mail.com'" class="emailInput text-input" :width="195" :height="22"></JqxInput></td>
                            </tr>
                            <tr>
                                <td>SSN:</td>
                                <td><JqxMaskedInput :width="195" :height="22" :mask="'###-##-####'" class="ssnInput"></JqxMaskedInput></td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td><JqxMaskedInput :width="195" :height="22" :mask="'(###)###-####'" class="phoneInput"></JqxMaskedInput></td>
                            </tr>
                            <tr>
                                <td>Zip code:</td>
                                <td><JqxMaskedInput :width="195" :height="22" :mask="'###-##-####'" class="zipInput"></JqxMaskedInput></td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding-left: 100px; padding-top: 10px; padding-bottom: 10px;">
                                    <JqxCheckBox :width="130" class="acceptCheckBox">I accept terms</JqxCheckBox>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2" style="padding-left: 20px;">
                                    <JqxButton @click="sendButton()"
                                               style="text-align: center; margin-left: 8em;"
                                               :width="60" :height="25">
                                        Send
                                    </JqxButton>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </JqxValidator>
        </div>
    </JqxExpander>
</template>

<script>
    import JqxExpander from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue';
    import JqxValidator from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxvalidator.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';
    import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpasswordinput.vue';
    import JqxDateTimeInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue';
    import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxmaskedinput.vue';
    import JqxCheckBox from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcheckbox.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxExpander,
            JqxValidator,
            JqxInput,
            JqxPasswordInput,
            JqxDateTimeInput,
            JqxMaskedInput,
            JqxCheckBox,
            JqxButton
        },
        data: function () {
            return {
                initialDate: new Date(2017, 8, 1),
                rules: [
                    { input: '.userInput', message: 'Username is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '.userInput', message: 'Your username must be between 3 and 12 characters!', action: 'keyup, blur', rule: 'length=3,12' },
                    { input: '.realNameInput', message: 'Real Name is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '.realNameInput', message: 'Your real name must contain only letters!', action: 'keyup', rule: 'notNumber' },
                    { input: '.realNameInput', message: 'Your real name must be between 3 and 12 characters!', action: 'keyup', rule: 'length=2,12' },
                    {
                        input: '.birthInput', message: 'Your birth date must be between 1/1/1900 and 1/1/2020.', action: 'valueChanged',
                        rule: (input, commit) => {
                            let date = this.$refs.dateTimeInput.value;
                            let result = date.getFullYear() >= 1900 && date.getFullYear() <= 2020;
                            return result;
                        }
                    },
                    { input: '.passwordInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '.passwordInput', message: 'Your password must be between 4 and 12 characters!', action: 'keyup, blur', rule: 'length=4,12' },
                    { input: '.passwordConfirmInput', message: 'Password is required!', action: 'keyup, blur', rule: 'required' },
                    {
                        input: '.passwordConfirmInput', message: 'Passwords doesn\'t match!', action: 'keyup, focus',
                        rule: (input, commit) => {
                            if (this.$refs.passwordInput.val() === this.$refs.confirmPasswordInput.val()) {
                                return true;
                            }
                            return false;
                        }
                    },
                    { input: '.emailInput', message: 'E-mail is required!', action: 'keyup, blur', rule: 'required' },
                    { input: '.emailInput', message: 'Invalid e-mail!', action: 'keyup', rule: 'email' },
                    { input: '.ssnInput', message: 'Invalid SSN!', action: 'valuechanged, blur', rule: 'ssn' },
                    { input: '.phoneInput', message: 'Invalid phone number!', action: 'valuechanged, blur', rule: 'phone' },
                    { input: '.zipInput', message: 'Invalid zip code!', action: 'valuechanged, blur', rule: 'zipCode' },
                    { input: '.acceptCheckBox', message: 'You have to accept the terms', action: 'change', rule: 'required', position: 'right:217,0' }
                ]
            }
        },
        methods: {
            sendButton: function() {
                this.$refs.myValidator.validate(document.getElementById('form'));
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    .register-table {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .register-table td,
    .register-table tr {
        margin: 0px;
        padding: 2px;
        border-spacing: 0px;
        border-collapse: collapse;
        font-family: Verdana;
        font-size: 12px;
    }

    h3 {
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
</style>