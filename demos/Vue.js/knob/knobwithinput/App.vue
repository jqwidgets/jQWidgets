<template>
    <div>
        <JqxKnob ref="myKnob" @change="myKnobOnChange($event)"
                 :width="400" :height="400"
                 :value="30" :min="0" :max="100" :rotation="'clockwise'"
                 :styleProperty="{ fill: '#fff' }" :progressBar="progressBar" :pointer="pointer"
                 :dial="dial" :startAngle="270" :endAngle="630">
        </JqxKnob>

        <JqxInput ref="myInput" @change="myInputOnChange()" :value="30"></JqxInput>
    </div>
</template>
<script>
    import JqxKnob from "jqwidgets-scripts/jqwidgets-vue/vue_jqxknob.vue";
    import JqxInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue";

    export default {
        components: {
            JqxKnob,
            JqxInput
        },
        data: function () {
            return {
                progressBar: {
                    style: { fill: '#00a644' },
                    background: { fill: '#eeeeee' },
                    size: '30%',
                    offset: '70%'
                },
                pointer: {
                    type: 'line',
                    style: { fill: '#00a644' },
                    size: '30%',
                    offset: '70%',
                    thickness: 20
                },
                dial: {
                    style: {
                        fill: '#fff'
                    },
                    innerRadius: '68%',
                    outerRadius: '92%',
                    startAngle: 0,
                    endAngle: 360
                }
            }
        },
        methods: {
            myKnobOnChange: function(event) {
                if (event.target.nodeName === 'INPUT')
                    return;
                this.$refs.myInput.val(event.args.value);
            },
            myInputOnChange: function () {
                this.$refs.myKnob.val(this.$refs.myInput.val());
            }
        }
    }
</script>

<style>
    .jqx-input {
        width: 110px;
        height: 70px;
        position: absolute;
        vertical-align: middle;
        border: 0px;
        font-weight: bold;
        font-variant: normal;
        font-stretch: normal;
        font-size: 48px !important;
        font-family: Arial !important;
        text-align: center;
        color: #00a644 !important;
        padding: 0px !important;
        background: none !important;
        margin-top: -35px !important;
        margin-left: -55px !important;
        left: 210px;
        top: 230px;
        border: none !important;
        box-shadow: none !important;
    }
</style>
