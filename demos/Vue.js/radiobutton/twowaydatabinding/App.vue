<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxRadioButton v-model="value" :width="250" :height="25">1 Radio</JqxRadioButton>
        <JqxRadioButton v-model="value" :width="250" :height="25">2 Radio</JqxRadioButton>
        <JqxRadioButton v-model="value" :width="250" :height="25">3 Radio</JqxRadioButton>
    </div>
</template>

<script>
    import JqxRadioButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxradiobutton.vue';

    export default {
        components: {
            JqxRadioButton
        },
        data: function () {
            return {
                value: ''
            }
        }
    }
</script>