<template>
    <div>
        <JqxNotification ref="myNotification"
                         :template="'info'"
                         :autoClose="true"
                         :appendContainer="'#container'"
                         :opacity="0.9"
                         :width="'100%'">
            <div>
                <div></div>
            </div>
        </JqxNotification>

        <JqxButton @click="click()" :width="120">Open notification</JqxButton>

        <div id="container" style="width: 300px; height: 400px; margin-top: 15px; background-color: #F2F2F2;
        border: 1px dashed #AAAAAA; overflow: auto;">
        </div>
    </div>
</template>
<script>
    import JqxNotification from "jqwidgets-scripts/jqwidgets-vue/vue_jqxnotification.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxNotification,
            JqxButton
        },
        beforeCreate: function () {
            this.quotes = [
                'I\'m gonna make him an offer he can\'t refuse.',
                'Toto, I\'ve got a feeling we\'re not in Kansas anymore.',
                'You talkin\' to me?',
                'Bond. James Bond.',
                'I\'ll be back.',
                'Round up the usual suspects.',
                'I\'m the king of the world!',
                'A martini. Shaken, not stirred.',
                'May the Force be with you.',
                'Well, nobody\'s perfect.'
            ];
        },
        methods: {
            click: function() {
                this.$refs.myNotification.$el.querySelector('.jqx-notification-content').innerHTML = this.quotes[Math.round(Math.random() * this.quotes.length - 1)];
                this.$refs.myNotification.open();
            }
        }
    }
</script>