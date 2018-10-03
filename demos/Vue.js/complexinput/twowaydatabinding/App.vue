<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxComplexInput v-model="value" :width="200" :height="25" :spinButtons="true"/>
    </div>
</template>

<script>
    import JqxComplexInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue';

    export default {
        components: {
            JqxComplexInput
        },
        data: function () {
            return {
                value: '15 + 7.2i'
            }
        }
    }
</script>