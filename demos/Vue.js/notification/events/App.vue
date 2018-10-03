<template>
    <div>
        <JqxNotification ref="jqxNotification"
                         @open="open($event)"
                         @close="close($event)"
                         @click="click($event)"
                         :blink="true"
                         :closeOnClick="true"
                         :autoClose="false"
                         :template="'mail'"
                         :opacity="0.9"
                         :position="'top-right'"
                         :width="'auto'">
            <div>
                You have <b>2</b> new messages.
            </div>
            <div style="font-size: smaller; text-align: center;">
                Click to view.
            </div>
        </JqxNotification>

        <JqxButton @click="clickCheckMail()" :width="120">
            Check mail
        </JqxButton>

        <div style="margin-top: 15px;">
            Events log:
        </div>
        <JqxPanel ref="eventsPanel" :width="150" :height="150">
        </JqxPanel>
        <div ref="messagePanel" style="width: 400px; display: none;">
            <p>
                <b>From:</b> Ken
            </p>
            <p>
                <b>About</b>: Appointment
            </p>
            <p>
                Hi,<br />
                I just wanted to remind you dinner is at 8pm tonight at Carl's.
            </p>
            <hr style="width: 300px; text-align: right;" />
            <p>
                <b>From:</b> Sue
            </p>
            <p>
                <b>About</b>: Shopping
            </p>
            <p>
                Here's the shopping list for tommorow's party:
            </p>
            <ul>
                <li>Wine</li>
                <li>Tomatoes</li>
                <li>Cheese</li>
                <li>Popcorn</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import JqxNotification from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnotification.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxNotification,
            JqxPanel,
            JqxButton
        },
        methods: {
            writeEventType: function(event) {
                this.$refs.eventsPanel.append(event.type + "<br />");
            },
            open: function (event) {
                this.writeEventType(event);
            },
            close: function (event) {
                this.writeEventType(event);
            },
            click: function (event) {
                this.writeEventType(event);
                this.$refs.messagePanel.style.display = 'inline-block';
            },
            clickCheckMail: function () {
                this.$refs.jqxNotification.open();
            }
        }
    }
</script>