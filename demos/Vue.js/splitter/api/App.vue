<template>
    <div>
        <JqxButton ref="orientationButton" @click="orientationButtonClick()" :width="90">Orientation</JqxButton>

        <JqxButton ref="expandFirstButton" @click="expandFirstButtonClick()" :width="90">Expand first</JqxButton>

        <JqxButton ref="expandLastButton" @click="expandLastButtonClick()" :width="90">Expand last</JqxButton>

        <JqxButton ref="collapseFirstButton" @click="collapseFirstButtonClick()" :width="97">Collapse first</JqxButton>

        <JqxButton ref="collapseLastButton" @click="collapseLastButtonClick()" :width="97">Collapse last</JqxButton>

        <JqxButton ref="enableButton" @click="enableButtonClick()" :width="90">Enable</JqxButton>

        <JqxButton ref="disableButton" @click="disableButtonClick()" :width="90">Disable</JqxButton>

        <br /><br />

        <JqxSplitter ref="mySplitter" :height="600" :width="850" :panels="[{ size: 250 }]">
            <div style="background-color:#F5FFF2;"></div>
            <div style="background-color:#EBF1FF;"></div>
        </JqxSplitter>
    </div>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';

    export default {
        components: {
            JqxSplitter,
            JqxButton
        },
        methods: {
            orientationButtonClick: function () {
                const currentOrientation = this.$refs.mySplitter.orientation;
                if (currentOrientation === 'vertical') {
                    this.$refs.mySplitter.orientation = 'horizontal';
                } else {
                    this.$refs.mySplitter.orientation = 'vertical';
                }
            },
            expandFirstButtonClick: function () {
                const panels = this.$refs.mySplitter.panels;
                panels[0].collapsible = true;
                panels[1].collapsible = false;
                this.$refs.mySplitter.panels = panels;
                this.$refs.mySplitter.expand();
            },
            expandLastButtonClick: function () {
                const panels = this.$refs.mySplitter.panels;
                panels[0].collapsible = false;
                panels[1].collapsible = true;
                this.$refs.mySplitter.panels = panels;
                this.$refs.mySplitter.expand();
            },
            collapseFirstButtonClick: function () {
                const panels = this.$refs.mySplitter.panels;
                panels[0].collapsible = true;
                panels[1].collapsible = false;
                this.$refs.mySplitter.panels = panels;
                this.$refs.mySplitter.collapse();
            },
            collapseLastButtonClick: function () {
                const panels = this.$refs.mySplitter.panels;
                panels[0].collapsible = false;
                panels[1].collapsible = true;
                this.$refs.mySplitter.panels = panels;
                this.$refs.mySplitter.collapse();
            },
            enableButtonClick: function () {
                this.$refs.mySplitter.enable();
            },
            disableButtonClick: function () {
                this.$refs.mySplitter.disable();
            }      
        }
    }
</script>

<style>
    .jqx-button {
        display: inline-block;
        margin-right: 5px;
    }
</style>