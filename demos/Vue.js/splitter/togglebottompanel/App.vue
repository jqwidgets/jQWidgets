<template>
    <JqxSplitter 
        :width="850" :height="400" :orientation="'horizontal'"
        :panels="[{ size: 300, collapsible: false }, { size: 100}]">
        <div class="splitter-panel">
            Panel 1
        </div>
        <div class="splitter-panel">
            Panel 2
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