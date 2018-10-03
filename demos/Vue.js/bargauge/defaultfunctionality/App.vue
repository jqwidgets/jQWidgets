<template>
    <JqxBarGauge :width="getWidth" :height="600" :colorScheme="'scheme02'"
                 :max="150" :values="values" :tooltip="tooltip" />
</template>

<script>
    import JqxBarGauge from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbargauge.vue';

    export default {
        components: {
            JqxBarGauge
        },
        data: function () {
            return {
                getWidth: '90%',
                tooltip: {
                    visible: true,
                    formatFunction: (value) => {
                        let realVal = parseInt(value);
                        return ('Year: 2016<br/>Price Index:' + realVal);
                    }
                },
                values: [102, 115, 130, 137]
            }
        }
    }
</script>