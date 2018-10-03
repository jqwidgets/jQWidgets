<template>
    <div>
        <div>The value is: {{ value }}</div><br />

        <JqxRating v-model="value" :width="350" :height="35" />
    </div>
</template>

<script>
    import JqxRating from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrating.vue';

    export default {
        components: {
            JqxRating
        },
        data: function () {
            return {
                value: 3
            }
        }
    }
</script>