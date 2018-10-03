<template>
    <div id="jqxWidget" style="font-size: 13px; font-family: Verdana; float: left;">
        <div style="margin-top: 10px;">
            Number
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :rtl="true"
                            :spinButtons="true"
                            :inputMode="'simple'"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div style="margin-top: 10px;">
            Percentage
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :rtl="true"
                            :spinButtons="true"
                            :digits="3"
                            :symbolPosition="'right'"
                            :symbol="'%'"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div style="margin-top: 10px;">
            Currency
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :rtl="true"
                            :spinButtons="true"
                            :symbol="'$'"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
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
