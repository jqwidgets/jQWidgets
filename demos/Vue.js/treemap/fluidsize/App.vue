<template>
    <JqxTreeMap 
        :width="'75%'" 
        :height="'75%'"
        :colorRange="100"
        :colorMode="'autoColors'"
        :baseColor="'#52CBFF'"
        :legendScaleCallback="legendScaleCallback"
        :legendLabel="'Olympic medal count - London 2012'"
        :source="data">
    </JqxTreeMap>
</template>

<script>
    import JqxTreeMap from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtreemap.vue';

    export default {
        components: {
            JqxTreeMap
        },
        
        beforeCreate: function () {
            this.colorRanges = [
                { min: 1254040000, max: 1454040000, color: '#de290b' },
                { min: 1054040000, max: 1254039999, color: '#de440c' },
                { min: 300000000, max: 1054040000, color: '#ea7707' },
                { min: 210000000, max: 460000000, color: '#ee8a06' },
                { min: 190000000, max: 209999999, color: '#f19505' },
                { min: 180000000, max: 189999999, color: '#f6a903' },
                { min: 160000000, max: 179999999, color: '#f8b203' },
                { min: 140000000, max: 159999999, color: '#fabb02' },
                { min: 100000000, max: 139999999, color: '#fbbf01' },
                { min: 90000000, max: 99999999, color: '#fbcd01' },
                { min: 10000000, max: 89999999, color: '#fbde33' }
            ];

            this.legendScaleCallback = (v) => {
                return v.toFixed(1);
            };

            this.data = [
                {
                    label: 'USA',
                    value: 104
                },
                {
                    label: 'People\'s Republic of China',
                    value: 88
                },
                {
                    label: 'Great Britain',
                    value: 65
                },
                {
                    label: 'Russian Federation',
                    value: 82
                },
                {
                    label: 'Germany',
                    value: 44
                },
                {
                    label: 'Republic of Korea',
                    value: 28
                },
                {
                    label: 'France',
                    value: 34
                },
                {
                    label: 'Italy',
                    value: 28
                },
                {
                    label: 'Hungary',
                    value: 17
                },
                {
                    label: 'Australia',
                    value: 35
                },
                {
                    label: 'Japan',
                    value: 38
                },
                {
                    label: 'Kazakhstan',
                    value: 13
                },
                {
                    label: 'Netherlands',
                    value: 20
                },
                {
                    label: 'Ukraine',
                    value: 20
                },
                {
                    label: 'New Zealand',
                    value: 13
                },
                {
                    label: 'Cuba',
                    value: 14
                }
            ];

        }
    }
</script>

<style>
    .jqx-treemap-legend {
        width: 75%;
        background: rgba(0, 0, 0, 0.4);
    }
    body, html {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        overflow: hidden;
    }
</style>
