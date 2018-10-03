<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <div>The input is restricted from 0 to 1000</div>
        <div style='margin-top: 10px;'>
            Number
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :min="0"
                            :max="1000"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div style="margin-top: 10px;">
            Currency
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :min="0"
                            :max="1000"
                            :symbol="'$'"
                            :width="250"
                            :height="25">
            </JqxNumberInput>
        </div>
        <div style="margin-top: 10px;">
            Custom Validation Message
        </div>
        <div style="margin-top: 3px;">
            <JqxNumberInput :min="0"
                            :max="1000"
                            :value="0"
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
