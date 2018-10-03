<template>
    <div>
        <div style="white-space: pre-line;">The value is: {{ value }}</div><br />

        <JqxTextArea v-model="value" 
            :width="200" :height="100" :placeHolder="'Enter Something'" 
        />
    </div>
</template>

<script>
    import JqxTextArea from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue';

    export default {
        components: {
            JqxTextArea
        },
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>