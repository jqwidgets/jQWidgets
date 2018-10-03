<template>
    <div>
        <JqxComplexInput ref="myComplexInput"
                         :width="250" :height="25" :value="'15 + 7.2i'" :spinButtons="true">
        </JqxComplexInput>

        <br />
        <div style="margin-top: 20px"></div>

        <JqxButton @click="btnOnClick()" :width="200">
            Set wrong value: "11- 2ii"
        </JqxButton>
    </div>
</template>

<script>
    import JqxComplexInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxComplexInput,
            JqxButton
        },
        methods: {
            btnOnClick: function () {
                this.$refs.myComplexInput.value = '11- 2ii';
            }
        }
    };
</script>

<style>
</style>