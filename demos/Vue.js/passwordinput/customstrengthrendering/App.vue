<template>
    <JqxPasswordInput :placeHolder="'Enter password'"
                      :showStrength="true"
                      :showStrengthPosition="'right'"
                      :passwordStrength="passwordStrength"
                      :width="200"
                      :height="25">
    </JqxPasswordInput>
</template>

<script>
    import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpasswordinput.vue';

    export default {
        components: {
            JqxPasswordInput
        },
        methods: {
            passwordStrength: function (password, characters, defaultStrength) {
                let length = password.length;
                let letters = characters.letters;
                let numbers = characters.numbers;
                let specialKeys = characters.specialKeys;
                let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers * specialKeys;
                let strengthValue;
                if (length < 4) {
                    strengthValue = 'Too short';
                } else if (strengthCoefficient < 10) {
                    strengthValue = 'Weak';
                } else if (strengthCoefficient < 20) {
                    strengthValue = 'Fair';
                } else if (strengthCoefficient < 30) {
                    strengthValue = 'Good';
                } else {
                    strengthValue = 'Strong';
                };

                return strengthValue;
            },
            strengthTypeRenderer: function (password, characters, defaultStrength) {
                let length = password.length;
                let letters = characters.letters;
                let numbers = characters.numbers;
                let specialKeys = characters.specialKeys;
                let strengthCoefficient = letters + numbers + 2 * specialKeys + letters * numbers / 2 + length;
                let strengthValue;
                let color;
                if (length < 8) {
                    strengthValue = 'Too short';
                    color = 'rgb(170, 0, 51)';
                } else if (strengthCoefficient < 20) {
                    strengthValue = 'Weak';
                    color = 'rgb(170, 0, 51)';
                } else if (strengthCoefficient < 30) {
                    strengthValue = 'Fair';
                    color = 'rgb(255, 204, 51)';
                } else if (strengthCoefficient < 40) {
                    strengthValue = 'Good';
                    color = 'rgb(45, 152, 243)';
                } else {
                    strengthValue = 'Strong';
                    color = 'rgb(118, 194, 97)';
                };

                return '<div style="font-style: italic; font-weight: bold; color: "' + color + ';">' + strengthValue + '</div>';
            }
        }
    }
</script>