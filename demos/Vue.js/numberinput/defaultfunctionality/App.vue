<template>
    <div>
        <div style="margin-top: 10px;">
            Number
        </div>
        <JqxNumberInput :width="250" :height="25" :spinButtons="true"></JqxNumberInput>
        <div style="margin-top: 10px;">
            Percentage
        </div>
        <JqxNumberInput :width="250" :height="25" :symbolPosition="'right'"
                        :symbol="'%'" :spinButtons="true" :digits="3">
        </JqxNumberInput>
        <div style="margin-top: 10px;">
            Currency
        </div>
        <JqxNumberInput :width="250" :height="25" :symbol="'$'" :spinButtons="true">
        </JqxNumberInput>
        <div style="margin-top: 10px;">
            Disabled
        </div>
        <JqxNumberInput :width="250" :height="25" :disabled="true" :spinButtons="true">
        </JqxNumberInput>
    </div>
</template>
<script>
    import JqxNumberInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue";

    export default {
        components: {
            JqxNumberInput
        }
    }
</script>

<style>
</style>
