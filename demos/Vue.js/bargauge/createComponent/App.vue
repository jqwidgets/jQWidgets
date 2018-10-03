<template>
    <JqxBarGauge ref="myBarGauge" :autoCreate="false"></JqxBarGauge>
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';

    export default {
        components: {
            JqxBarGauge,
        },
        mounted: function() {

            const settings = {
                width: 600,
                height: 600,
                max: 150,
                values: [102, 115, 130, 137],
                colorScheme: 'scheme02',
                tooltip: {
                    visible: true,
                    formatFunction: (value) => {
                        let realVal = parseInt(value);
                        return ('Year: 2016<br/>Price Index:' + realVal);
                    }
                }
            };   

            this.$refs.myBarGauge.createComponent(settings);
        }
    }
</script>

<style scoped>
	
</style>