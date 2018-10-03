<template>
    <JqxProgressBar :rtl="true"
                    :width="300"
                    :height="30"
                    :value="50">
    </JqxProgressBar>
</template>

<script>
    import JqxProgressBar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxprogressbar.vue';
  
    export default {
        components: {
            JqxProgressBar
        }
    }
</script>

<style>
</style>