<template>
    <div>
        <div style="margin-top: 10px">Horizontal</div>

        <JqxProgressBar ref="myProgressBar"
                        :width="250" :height="30" :value="0" :showText="true" :orientation="'horizontal'"
                        :renderText="renderText" :colorRanges="horizontalColorRanges">
        </JqxProgressBar>

        <div style="margin-top: 10px">Vertical</div>

        <JqxProgressBar ref="myVerticalProgressBar"
                        :width="30" :height="250" :value="0" :showText="true" :orientation="'vertical'"
                        :renderText="renderText" :colorRanges="verticalColorRanges">
        </JqxProgressBar>
    </div>
</template>

<script>
    import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxprogressbar.vue';

    export default {
        components: {
            JqxProgressBar
        },
        data: function () {
            return {
                horizontalColorRanges: [{ stop: 20, color: '#33b5e5' }, { stop: 50, color: '#98ca00' }, { stop: 80, color: '#ff4444' }, { stop: 100, color: '#aa66cc' }],
                verticalColorRanges: [{ stop: 40, color: '#f0ad4e' }, { stop: 59, color: '#5bc0de' }, { stop: 70, color: '#5cb85c' }, { stop: 100, color: '#d9534f' }],
                renderText: (text, value) => {
                    if (value < 60) {
                        return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
                    }
                    return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
                }
            }
        },
        mounted: function () {
            let value = 0;
            let interval = setInterval(_ => {
                value++;

                if (value == 100) {
                    clearInterval(interval);
                }

                this.$refs.myProgressBar.val(value);
                this.$refs.myVerticalProgressBar.val(value);
            }, 20);
        }
    }
</script>
<style>
</style>