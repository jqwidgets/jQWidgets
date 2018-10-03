<template>
    <JqxPasswordInput :rtl="true"
                      :placeHolder="'הזן את הסיסמה:'"
                      :showStrength="true"
                      :localization="localization"
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
        data: function () {
            return {
                localization: {
                    showPasswordString: "צג סיסמא",
                    hidePasswordString: "סתר סיסמא",
                    passwordStrengthString: "חוזק סיסמא",
                    tooShort: "קצר מדי",
                    weak: "חלש", fair: "הוגן",
                    good: "טוב", strong: "חזק"
                }
            }
        }
    }
</script>