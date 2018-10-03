<template>
    <JqxBulletChart :width="'80%'" :height="80" :barSize="'40%'" :labelsFormat="'c'"
                    :showToolTip="true" :title="title" :description="description"
                    :ranges="ranges" :pointer="pointer" :target="target" :ticks="ticks">
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

                title: 'Revenue 2014 YTD',
                description: '(U.S. $ in thousands)',
                ranges: [
                    { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
                    { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
                    { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
                ],
                pointer: {
                    value: 270,
                    label: 'Revenue 2014 YTD',
                    size: '25%',
                    color: 'Black'
                },
                target: {
                    value: 260,
                    label: 'Revenue 2013 YTD',
                    size: 4,
                    color: 'Black'
                },
                ticks: {
                    position: 'both',
                    interval: 50,
                    size: 10
                }
            }
        }
    }
</script>

<style>
</style>