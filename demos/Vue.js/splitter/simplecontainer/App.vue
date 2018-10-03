<template>
    <JqxSplitter 
        :width="850" :height="850" :orientation="'horizontal'"
        :panels="[{ size: '20%' }, { size: '80%' }]">
        <div>
            North
        </div>
        <div>
            <JqxSplitter 
                :width="'100%'" :height="'100%'"
                :panels="[{ size: '30%' }, { size: '60%' }]">
                <div>
                    West
                </div>
                <div>
                    East
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