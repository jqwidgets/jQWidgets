<template>
    <JqxBulletChart 
        :width="getWidth" :height="80" :barSize="'40%'" :ranges="ranges" 
        :title="'Profit'" :description="'(1000s)'" :ticks="ticks" 
        :pointer="pointer" :target="target" :showToolTip="true">
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
                    { startValue: -50, endValue: 150, color: '#000000', opacity: 0.5 },
                    { startValue: 150, endValue: 200, color: '#000000', opacity: 0.3 },
                    { startValue: 200, endValue: 250, color: '#000000', opacity: 0.1 }
                ],
                pointer: { value: -20, label: 'Profit', size: '25%', color: 'Black' },
                target: { value: 200, label: 'Target profit', size: 4, color: 'Black' },
                ticks:{ position: 'far', interval: 50, size: 10 }
            }
        }
    }
</script>

<style>   
</style>