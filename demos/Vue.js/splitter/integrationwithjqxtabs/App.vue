<template>
    <JqxSplitter 
        :panels="[{ size: '20%' }, { size: '80%' }]"
        :orientation="'horizontal'"
        :height="850" :width="850">
        <div>
            Top Panel
        </div>
        <div>
            <JqxSplitter
                :width="'100%'" :height="'100%'"
                :panels="[{ size: 200 }, { size: 200}]">
                <div>
                    Left Panel
                </div>
                <div>
                    <JqxTabs class="jqx-hideborder jqx-hidescrollbars"
                        :width="'100%'" :height="'100%'">
                        <ul>
                            <li style="margin-left: 30px;">Tab 1</li>
                            <li>Tab 2</li>
                        </ul>
                        <div>
                            Content 1
                        </div>
                        <div>
                            Content 2
                        </div>
                    </JqxTabs>
                </div>
            </JqxSplitter>
        </div>
    </JqxSplitter>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxTabs from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtabs.vue';

    export default {
        components: {
            JqxSplitter,
            JqxTabs
        }
    }
</script>