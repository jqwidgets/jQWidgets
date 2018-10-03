<template>
    <JqxSplitter
        :width="850" :height="850" :orientation="'horizontal'"
        :panels="[{ size: '50%' }, { size: '50%' }]">
        <div>
            <JqxSplitter class="jqx-splitter-nested"
                :width="'100%'" :height="'100%'" :orientation="'vertical'"
                :panels="[{ size: 300, collapsible: false }]">
                <div>
                    <JqxSplitter class="jqx-splitter-nested"
                        :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                        :panels="[{ size: 150 }]">
                        <div>
                            <span>Panel 1</span>
                        </div>
                        <div>
                            <span>Panel 2</span>
                        </div>
                    </JqxSplitter>
                </div>
                <div>
                    <span>Panel 3</span>
                </div>
            </JqxSplitter>
        </div>
        <div>
            <JqxSplitter class="jqx-splitter-nested"
                :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                :panels="[{ size: 150, collapsible: false }]">
                <div>
                    <span>Panel 4</span>
                </div>
                <div>
                    <span>Panel 5</span>
                </div>
            </JqxSplitter>
        </div>
    </JqxSplitter>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';

    export default {
        components: {
            JqxSplitter
        }
    }
</script>

<style>
    .jqx-splitter-nested {
        border: none !important;
    }
</style>