<template>
    <div>
        <!--Notifications-->
        <JqxNotification ref="timerNotification"
                         :position="position"
                         :animationCloseDelay="0"
                         :autoOpen="true"
                         :autoClose="false"
                         :template="'time'"
                         :width="notificationWidth">
            <div ref="timerNotificationContent">
                Hurry, you have <span class="timer">30</span> seconds left!
            </div>
        </JqxNotification>
        <JqxNotification :position="position"
                         :autoOpen="false"
                         :autoClose="false"
                         :template="'time'"
                         :width="notificationWidth">
            <div>Time is up!</div>
        </JqxNotification>
        <JqxNotification ref="correctNotification"
                         :position="position"
                         :autoOpen="false"
                         :autoClose="true"
                         :template="'success'"
                         :width="notificationWidth">
            <div>Your answer is correct.</div>
        </JqxNotification>
        <JqxNotification ref="wrongNotification"
                         :position="position"
                         :autoOpen="false"
                         :autoClose="true"
                         :template="'error'"
                         :width="notificationWidth">
            <div>Your answer is incorrect.</div>
        </JqxNotification>
        <JqxNotification ref="errorTimeOutNotification"
                         :position="position"
                         :autoOpen="false"
                         :autoClose="true"
                         :template="'error'"
                         :width="notificationWidth">
            <div>Time is up!</div>
        </JqxNotification>
        <!--Layout-->
        <div>
            Solve the equasion in 30 seconds:
        </div>
        <div>
            20 - 3 × 4 =
            <JqxInput ref="answerInput" :width="50" :height="25"></JqxInput>
        </div>
        <br />
        <JqxButton @click="submitAnswerClick()">Submit answer</JqxButton>
    </div>
</template>
<script>
    import JqxNotification from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnotification.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxNotification,
            JqxButton,
            JqxInput
        },
        data: function () {
            return {
                notificationWidth: 300,
                position: 'top-right'
            }
        },
        beforeCreate: function () {
            this.interval = null;
            this.seconds = 30;
        },
        mounted: function () {
            this.interval = this.intervalStart();
        },
        methods: {
            intervalStart: function() {
                let interval = setInterval(() => {
                    if (this.seconds > 1) {
                        this.seconds--;
                        let innerSpan = this.$refs.timerNotificationContent.getElementsByTagName('SPAN')[0];
                        innerSpan.innerText = this.seconds;

                        this.$refs.timerNotification.closeLast();
                        this.$refs.timerNotification.open();
                    } else {
                        clearInterval(interval);
                        this.$refs.timerNotification.closeLast();
                    }
                }, 1000);

                return interval;
            },
            submitAnswerClick: function() {
                if (this.seconds > 1) {
                    if (this.$refs.answerInput.val() == 8) {
                        this.$refs.correctNotification.open()
                        clearInterval(this.interval);
                        this.$refs.timerNotification.closeLast();
                    } else {
                        this.$refs.wrongNotification.open();
                    }
                } else {
                    this.$refs.errorTimeOutNotification.open();
                }
            }
        }
    }
</script>

<style>
    .jqx-button {
        width: fit-content;
    }
</style>
