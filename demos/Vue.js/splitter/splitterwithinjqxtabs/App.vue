<template>
    <JqxTabs :height="850" :width="850" :initTabContent="initTabContent">
        <ul>
            <li style="margin-left: 30px;">Tab 1</li>
            <li>Tab 2</li>
        </ul>
        <div class="jqx-hidescrollbars">
            <div class="jqx-hideborder" ref="mySplitter1">
                <div>
                    Content 1.1
                </div>
                <div>
                    Content 1.2
                </div>
            </div>
        </div>
        <div class="jqx-hidescrollbars">
            <div class="jqx-hideborder" ref="mySplitter2">
                <div>
                    Content 2.1
                </div>
                <div>
                    Content 2.2
                </div>
            </div>
        </div>
    </JqxTabs>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxSplitter,
            JqxTabs
        },
        methods: {
            initTabContent: function (tab) {
                if (tab == 0) {
                    jqwidgets.createInstance(this.$refs.mySplitter1, 'jqxSplitter', {
                        height: '100%',
                        width: '100%',
                        panels: [{ size: '50%' }]
                    });
                }
                else {
                    jqwidgets.createInstance(this.$refs.mySplitter2, 'jqxSplitter', {
                        orientation: 'horizontal',
                        height: '100%',
                        width: '100%',
                        panels: [{ size: '50%' }]
                    });
                }
            }
        }
    }
</script>