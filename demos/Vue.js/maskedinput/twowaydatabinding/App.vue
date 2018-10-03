<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxMaskedInput v-model="value" :width="200" :height="25" :mask="'(###)###-####'" />
    </div>
</template>

<script>
    import JqxMaskedInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxmaskedinput.vue';

    export default {
        components: {
            JqxMaskedInput
        },
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>