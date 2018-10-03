<template>
    <div style="font-size: 13px; font-family: Verdana;">
        <JqxRating @change="change($event)"
                   :width="350"
                   :height="35"></JqxRating>
        <div style="margin-top: 10px;">
            <div style="float: left;">Rating: </div><div style="float: left;" ref="rate"></div>
        </div>
    </div>
</template>

<script>
    import JqxRating from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxrating.vue';

    export default {
        components: {
            JqxRating
        },     
        methods: {
            change: function(event) {
                let rate = this.$refs.rate;

                rate.innerHTML = '<span> ' + event.value + '</span>';
            }
        }
    }
</script>

<style>
</style>