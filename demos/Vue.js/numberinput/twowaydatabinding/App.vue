<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxNumberInput v-model="value" :width="200" :height="25" :placeHolder="'Enter Something'" />
    </div>
</template>

<script>
    import JqxNumberInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxnumberinput.vue';

    export default {
        components: {
            JqxNumberInput
        },
        data: function () {
            return {
                value: 2018
            }
        }
    }
</script>