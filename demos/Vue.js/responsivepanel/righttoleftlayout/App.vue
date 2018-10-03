<template>
    <div style="float: right; width: 600px;">
        <div id="header">
            <div id="toggleResponsivePanel"></div>
        </div>
        <JqxResponsivePanel :width="250" :height="'auto'" 
                            :collapseBreakpoint="800" :autoClose="false"
                            :toggleButton="'#toggleResponsivePanel'" 
                            :animationDirection="'right'">
            <img src="../../../images/leo.jpg" />
            <br />
            <strong>Leo</strong> the Lion is one of the earliest recognized constellations.
            The Mesopotamians are known to have documented the 'lion' constellation. The Persians
            called it Ser or Shir; the Turks, Artan; the Syrians, Aryo; the Jewish, Arye; the
            Indians, Simha. These are all translated as 'lion.'
        </JqxResponsivePanel>

    </div>
</template>

<script>
    import JqxResponsivePanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxresponsivepanel.vue';

    export default {
        components: {
            JqxResponsivePanel
        }    
    }
</script>

<style>
    #header {
        box-sizing: border-box;
        margin-bottom: 2px;
        width: 100%;
        height: 50px;
        padding: 10px 0 0 10px;
    }

    .jqx-responsive-panel, #toggleResponsivePanel {
        float: right;
    }

    #toggleResponsivePanel {
        margin-right: 10px;
    }

    .jqx-responsive-panel {
        padding: 5px;
        direction: rtl !important;
    }
</style>