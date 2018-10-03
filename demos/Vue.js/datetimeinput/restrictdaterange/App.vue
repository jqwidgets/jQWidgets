<template>
    <div>
        <div style="text-align: center; width: 250px; font-family: Verdana; font-size: 13px">
            The navigation is restricted from 01/01/2010 to 01/01/2020
        </div>
        <br />

        <JqxDateTimeInput :width="250" :height="25"
            :min="min" :max="max">
        </JqxDateTimeInput>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";

    export default {
        components: {
            JqxDateTimeInput
        },
        data: function () {
            return {
                min: new Date(2010, 0, 1),
                max: new Date(2019, 11, 31)
            }
        }
    };
</script>

<style>
</style>