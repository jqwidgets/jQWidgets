<template>
    <div>
        <JqxButton @click="showWindowButtonClick()"
                   :width="80">
            Show
        </JqxButton>

        <div style="margin-top: 10px;">Events Log:</div>
        <JqxPanel ref="events" style="width: 300px; height: 200px; border-width: 0px;"></JqxPanel>
        <JqxWindow ref="eventWindow"
                   @close="onClose($event)"
                   @moved="onMoved($event)"
                   @open="onOpen($event)"
                   :width="270" :height="155"
                   :maxHeight="160" :maxWidth="280" :minHeight="30" :minWidth="250"
                   :isModal="true" :modalOpacity="0.3"
                   :position="{ x: 50, y: 120 }"
                   :okButton="'.ok'"
                   :cancelButton="'.cancel'"
                   :resizable="false">
            <div>
                <img width="14" height="14" src="../../../images/help.png" alt="" />
                Modal Window
            </div>
            <div>
                <div>
                    Please click "OK", "Cancel" or the close button to close the modal window. The dialog
                    result will be displayed in the events log.
                </div>
                <div style="float: right; margin-top: 15px;">
                    <JqxButton class="ok" style="display: inline-block; margin-right: 10px;" :width="80">OK</JqxButton>
                    <JqxButton class="cancel" style="display: inline-block;" :width="80">Cancel</JqxButton>
                </div>
            </div>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxWindow from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxPanel from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue';

    export default {
        components: {
            JqxWindow,
            JqxButton,
            JqxPanel
        },
        methods: {

            capitaliseFirstLetter: function (value) {
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
            displayEvent: function (event) {
                let eventData = 'Event: ' + this.capitaliseFirstLetter(event.type);
                if (event.type === 'moved') {
                    eventData += ', X: ' + event.args.x + ', Y: ' + event.args.y;
                }

                if (event.type === 'close') {
                    eventData += ', Dialog result: ';
                    if (event.args.dialogResult.OK) {
                        eventData += 'OK';
                    } else if (event.args.dialogResult.Cancel) {
                        eventData += 'Cancel';
                    } else {
                        eventData += 'None';
                    }
                }

                let content = document.createElement('div');
                content.style.marginTop = '5px';
                content.innerText = eventData;

                this.$refs.events.$el.prepend(content);
            },
            onClose: function (event) {
                this.displayEvent(event);
            },
            onMoved: function (event) {
                this.displayEvent(event);
            },
            onOpen: function (event) {
                this.displayEvent(event);
            },
            showWindowButtonClick: function () {
                this.$refs.eventWindow.open();
            }
        }
    }
</script>

<style>
</style>
