<template>
    <JqxBulletChart 
        :width="getWidth" :height="80" :barSize="'40%'" :ranges="ranges" 
        :title="'Revenue 2014 YTD'" :description="'(U.S. $ in thousands)'" :ticks="ticks" 
        :pointer="pointer" :target="target" :showToolTip="true" :labelsFormat="'c'">
    </JqxBulletChart>
</template>

<script>
    import JqxBulletChart from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbulletchart.vue';

    export default {
        components: {
            JqxBulletChart
        },
        data: function () { 
            return {
                getWidth: '90%',
                ranges: [
                    { startValue: 0, endValue: 200, color: '#CC0000', opacity: 1 },
                    { startValue: 200, endValue: 250, color: '#FFD633', opacity: 1 },
                    { startValue: 250, endValue: 300, color: '#00CC00', opacity: 1 }
                ],
                pointer: { value: 270, label: 'Revenue 2014 YTD', size: '25%', color: '' },
                target: { value: 260, label: 'Revenue 2013 YTD', size: 4, color: '' },
                ticks: { position: 'far', interval: 50, size: 10 }
            }
        }
    }
</script>

<style>   
</style>