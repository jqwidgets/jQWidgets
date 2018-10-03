<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxPasswordInput v-model="value" :width="200" :height="25" :placeHolder="'Enter Something'" />
    </div>
</template>

<script>
    import JqxPasswordInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpasswordinput.vue';

    export default {
        components: {
            JqxPasswordInput
        },
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>