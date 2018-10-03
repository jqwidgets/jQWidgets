<template>
    <div>
        <div id="container" style="font-family: Verdana; font-size: 12px; float: left">
            <b>Default Layout</b>
            <JqxProgressBar :width="300"
                            :height="40"
                            :value="50">
            </JqxProgressBar><br />
            <JqxProgressBar style="margin-top: 10px;"
                            :width="40"
                            :height="300"
                            :orientation="'vertical'"
                            :value="50">
            </JqxProgressBar>
            <div style="margin-top: 10px;" id='verticalProgressBar'></div>
        </div>
        <div style="float: right; font-family: Verdana; font-size: 12px;" id="rightContainer">
            <b>Reversed Layout</b>
            <JqxProgressBar :width="300"
                            :height="40"
                            :layout="'reverse'"
                            :value="50">
            </JqxProgressBar><br />
            <JqxProgressBar style="float: right;"
                            :width="40"
                            :height="300"
                            :orientation="'reverse'"
                            :layout="'vertical'"
                            :value="50">
            </JqxProgressBar>
        </div>
    </div>
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