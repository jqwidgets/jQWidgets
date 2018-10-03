<template>
    <div>
        <div id="settings-panel">
            <div class="sections-top-shadow"></div>
            <div class="settings-section-top settings-section">
                <div class="settings-label">Ringtone</div>
                <div class="settings-setter">
                    <div class="settings-melody">Marimba</div>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-label">New Mail</div>
                <div class="settings-setter">
                    <JqxSwitchButton 
                        @checked="onChecked(1)" @unchecked="onUnchecked(1)"
                        :width="81" :height="27" :checked="true">
                    </JqxSwitchButton>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-label">Sent Mail</div>
                <div class="settings-setter">
                    <JqxSwitchButton
                        @checked="onChecked(2)" @unchecked="onUnchecked(2)"
                        :width="81" :height="27" :checked="true">
                    </JqxSwitchButton>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-label">Calendar Alerts</div>
                <div class="settings-setter">
                    <JqxSwitchButton 
                        @checked="onChecked(3)" @unchecked="onUnchecked(3)"
                        :width="81" :height="27" :checked="true">
                    </JqxSwitchButton>
                </div>
            </div>
            <div class="settings-section">
                <div class="settings-label">Lock Sounds</div>
                <div class="settings-setter">
                    <JqxSwitchButton 
                        @checked="onChecked(4)" @unchecked="onUnchecked(4)"
                        :width="81" :height="27" :checked="true">
                    </JqxSwitchButton>
                </div>
            </div>
            <div class="sections-section-bottom settings-section">
                <div class="settings-label">Keyboard Clicks</div>
                <div class="settings-setter">
                    <JqxSwitchButton 
                        @checked="onChecked(5)" @unchecked="onUnchecked(5)"
                        :width="81" :height="27" :checked="false">
                    </JqxSwitchButton>
                </div>
            </div>
        </div>

        <div class="events-container">
            <div>Events:</div>
            <div ref="events"></div>
        </div>
    </div>
</template>

<script>
    import JqxSwitchButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxswitchbutton.vue';

    export default {
        components: {
            JqxSwitchButton
        },
        data: function () {
            return {
                label: {
                    '1': 'New Mail',
                    '2': 'Sent Mail',
                    '3': 'Calendar Alerts',
                    '4': 'Lock Sounds',
                    '5': 'Keyboard clicks'
                }
            }
        },
        methods: {
            onChecked: function (buttonNumber) {
                this.$refs.events.innerHTML = this.label[buttonNumber] + ': Unchecked';
            },
            onUnchecked: function (buttonNumber) {
                this.$refs.events.innerHTML = this.label[buttonNumber] + ': Checked';
            }
        }
    }
</script>

<style>
    #settings-panel {
        background-color: #fff;
        padding: 20px;
        display: inline-block;
        -moz-border-radius: 10px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        position: relative;
    }

    .settings-section {
        background-color: #f7f7f7;
        height: 45px;
        width: 500px;
        border: 1px solid #b4b7bc;
        border-bottom-width: 0px;
    }

    .settings-section-top {
        border-bottom-width: 0px;
        -moz-border-radius-topleft: 10px;
        -webkit-border-top-left-radius: 10px;
        border-top-left-radius: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .sections-section-bottom {
        border-bottom-width: 1px;
        -moz-border-radius-bottomleft: 10px;
        -webkit-border-bottom-left-radius: 10px;
        border-bottom-left-radius: 10px;
        -moz-border-radius-bottomright: 10px;
        -webkit-border-bottom-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    .sections-top-shadow {
        width: 500px;
        height: 1px;
        position: absolute;
        top: 21px;
        left: 21px;
        height: 30px;
        border-top: 1px solid #e4e4e4;
        -moz-border-radius-topleft: 10px;
        -webkit-border-top-left-radius: 10px;
        border-top-left-radius: 10px;
        -moz-border-radius-topright: 10px;
        -webkit-border-top-right-radius: 10px;
        border-top-right-radius: 10px;
    }

    .settings-label {
        font-weight: bold;
        font-family: Sans-Serif;
        font-size: 14px;
        margin-left: 14px;
        margin-top: 15px;
        float: left;
    }

    .settings-melody {
        color: #385487;
        font-family: Sans-Serif;
        font-size: 14px;
        display: inline-block;
        margin-top: 7px;
    }

    .settings-setter {
        float: right;
        margin-right: 14px;
        margin-top: 8px;
    }

    .events-container {
        margin-left: 20px;
    }

    #theme {
        margin-left: 20px;
        margin-bottom: 20px;
    }

</style>