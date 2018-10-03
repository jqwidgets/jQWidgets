<template>
    <div>
        <JqxSplitter 
            @resize="resize($event)"
            @expanded="expanded($event)"
            @collapsed="collapsed($event)"
            height="480" :width="850" :panels="[{ size: 200 }]">
            <div class="splitter-panel" style="background-color:#F5FFF2;"><span style="margin: 5px;">Panel 1</span></div>
            <div class="splitter-panel" style="background-color:#F5FFF2;"><span style="margin: 5px;">Panel 2</span></div>
        </JqxSplitter>

        <br />

        <div style="font-family: Verdana; font-size: 13px;">
            Events:
        </div>

        <JqxPanel ref="myPanel"
            :height="250" :width="450">
        </JqxPanel>
    </div>
</template>

<script>
    import JqxSplitter from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxsplitter.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxSplitter,
            JqxPanel
        },
        methods: {
            capitaliseFirstLetter: function (string) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            },
            displayEvent: function (event) {
                let eventData = 'Event:' + this.capitaliseFirstLetter(event.type);
                eventData += ', Panel 1: ' + event.args.panels[0].size;
                eventData += ', Panel 2: ' + event.args.panels[1].size;
                this.$refs.myPanel.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
            },
            resize(event) {
                this.displayEvent(event);
            },
            expanded(event) {
                this.displayEvent(event);
            },
            collapsed(event) {
                this.displayEvent(event);
            }
        }
    }
</script>

<style>
    .jqx-panel {
        border: none;
    }
</style>