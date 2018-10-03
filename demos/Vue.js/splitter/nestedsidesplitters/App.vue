<template>
    <JqxSplitter 
        :width="850" :height="850" :orientation="'vertical'"
        :panels="[{ size: '50%' }, { size: '50%' }]">
        <div>
            <JqxSplitter :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                         :panels="[{ size: '50%' }, { size: '50%' }]">
                <div>
                    West - North
                </div>
                <div>
                    West - South
                </div>
            </JqxSplitter>
        </div>
        <div>
            <JqxSplitter 
                :width="'100%'" :height="'100%'" :orientation="'horizontal'"
                :panels="[{ size: '50%' }, { size: '50%' }]">
                <div>
                    East - North
                </div>
                <div>
                    East - South
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