<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <div style="margin-top: 10px;">Primary</div>
        <JqxProgressBar ref="jqxProgressBar2"
                        :animationDuration="0"
                        :width="250"
                        :height="30"
                        :value="0"
                        :showText="true"
                        :renderText="renderText"
                        :template="'primary'">
        </JqxProgressBar>
        <div style="margin-top: 10px;">Success</div>
        <JqxProgressBar ref="jqxProgressBar3"
                        :animationDuration="0"
                        :width="250"
                        :height="30"
                        :value="0"
                        :showText="true"
                        :renderText="renderText"
                        :template="'success'">
        </JqxProgressBar>
        <div style="margin-top: 10px;">Info</div>
        <JqxProgressBar ref="jqxProgressBar4"
                        :animationDuration="0"
                        :width="250"
                        :height="30"
                        :value="0"
                        :showText="true"
                        :renderText="renderText"
                        :template="'info'">
        </JqxProgressBar>
        <div style="margin-top: 10px;">Warning</div>
        <JqxProgressBar ref="jqxProgressBar5"
                        :animationDuration="0"
                        :width="250"
                        :height="30"
                        :value="0"
                        :showText="true"
                        :renderText="renderText"
                        :template="'warning'">
        </JqxProgressBar>
        <div style="margin-top: 10px;">Danger</div>
        <JqxProgressBar ref="jqxProgressBar6"
                        :animationDuration="0"
                        :width="250"
                        :height="30"
                        :value="0"
                        :showText="true"
                        :renderText="renderText"
                        :template="'danger'">
        </JqxProgressBar>
    </div>
</template>

<script>
    import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxprogressbar.vue';
  
    export default {
        components: {
            JqxProgressBar
        },
        mounted: function() {
            let values = {};
            let addInterval = (id, intervalStep) => {
                values[id] = { value: 0 };
                values[id].interval = setInterval(() => {
                    values[id].value++;
                    if (values[id].value == 100) {
                        clearInterval(values[id].interval);
                    }

                    this.$refs[id].val(values[id].value);
                }, intervalStep);
            };

            addInterval('jqxProgressBar2', 20);
            addInterval('jqxProgressBar3', 30);
            addInterval('jqxProgressBar4', 40);
            addInterval('jqxProgressBar5', 50);
            addInterval('jqxProgressBar6', 60);
        },
        methods: {
            renderText: function (text, value)  {
                if (value < 55) {
                    return '<span class="jqx-rc-all" style="color: #333;">' + text + '</span>';
                }
                return '<span class="jqx-rc-all" style="color: #fff;">' + text + '</span>';
            }
        }
    }
</script>

<style>
    html, body {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
    }

    .jqx-rc-all {
        position: relative;
    }
</style>