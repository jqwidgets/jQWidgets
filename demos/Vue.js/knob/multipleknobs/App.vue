<template>
    <div>
        <JqxKnob ref="myKnobOne" style="position: relative" @change="myKnobOneOnChange($event)"
                 :value="60" :min="0" :max="100" :startAngle="180"
                 :endAngle="540" :rotation="'clockwise'" :snapToStep="true"
                 :styleProperty="{ fill: '#FFFFFF' }" :marks="marks" :progressBar="progressBar"
                 :pointer="pointer" :pointerGrabAction="'progressBar'">
        </JqxKnob>
    </div>
</template>
<script>
    import JqxKnob from "jqwidgets-scripts/jqwidgets-vue/vue_jqxknob.vue";

    export default {
        components: {
            JqxKnob
        },
        data: function () {
            return {
                marks: {
                    drawAboveProgressBar: true,
                    colorRemaining: 'white',
                    colorProgress: 'white',
                    style: 'line',
                    offset: '78%',
                    thickness: 3,
                    size: '18%',
                    minorInterval: 5
                },
                progressBar: {
                    style: { fill: '#407ec3', stroke: '#407ec3' },
                    size: '18%',
                    offset: '78%',
                    background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
                },
                pointer: {
                    type: 'line',
                    visible: false,
                    style: { fill: '#407ec3' },
                    size: '18%',
                    offset: '78%',
                    thickness: 0
                },
                spinner: {
                    style: { fill: '#66707e', stroke: '#66707e' },
                    innerRadius: '0%', // specifies the inner Radius of the dial
                    outerRadius: '58%', // specifies the outer Radius of the dial
                    marks: {
                        colorRemaining: '#a2da39',
                        colorProgress: '#a2da39',
                        type: 'circle',
                        offset: '55%',
                        thickness: 3,
                        size: '1%',
                        majorSize: '1%',
                        majorInterval: 10,
                        minorInterval: 10
                    }
                }
            }
        },
        mounted: function () {
            // Create Second and Third Knobs
            let knobOneContainer = this.$refs.myKnobOne.$parent.$el;

            let knobTwoContainer = document.createElement('div');
            let knobThreeContainer = document.createElement('div');
            knobTwoContainer.id = 'myKnobTwo';
            knobThreeContainer.id = 'myKnobThree';

            knobOneContainer.appendChild(knobTwoContainer);

            let knobTwoOptions =
                {
                    value: 60,
                    min: 0,
                    max: 100,
                    startAngle: 190,
                    width: 300,
                    height: 300,
                    endAngle: 350,
                    snapToStep: true,
                    pointerGrabAction: 'progressBar',
                    rotation: 'clockwise',
                    style: { fill: 'transparent' },
                    progressBar: {
                        style: { fill: '#ef6100', stroke: '#ef6100' },
                        size: '18%',
                        offset: '78%',
                        background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
                    },
                    pointer: { type: 'line', visible: false, style: { fill: '#33AADD' }, size: '18%', offset: '78%', thickness: 0 }
                };
            let myKnobTwo = jqwidgets.createInstance('#myKnobTwo', 'jqxKnob', knobTwoOptions);

            knobTwoContainer.appendChild(knobThreeContainer);


            let knobThreeOptions =
                {
                    value: 60,
                    min: 0,
                    max: 100,
                    startAngle: 10,
                    width: 300,
                    height: 300,
                    endAngle: 170,
                    snapToStep: true,
                    pointerGrabAction: 'progressBar',
                    rotation: 'clockwise',
                    style: { fill: 'transparent' },
                    progressBar: {
                        style: { fill: '#18a25e', stroke: '#18a25e' },
                        size: '18%',
                        offset: '78%',
                        background: { fill: '#cfd0d4', stroke: '#cfd0d4' }
                    },
                    pointer: { type: 'line', visible: false, style: { fill: '#00a4e1' }, size: '18%', offset: '78%', thickness: 0 }
                };
            let myKnobThree = jqwidgets.createInstance('#myKnobThree', 'jqxKnob', knobThreeOptions);

            knobTwoContainer.style.cssText = 'position: absolute !important; top: 90px; left: 60px;';
            knobThreeContainer.style.cssText = 'position: absolute !important; top: 0px; left: 0px;';

            myKnobTwo.addEventHandler('change', (event) => {
                if (event.target !== event.currentTarget) {
                    return;
                }
                let inputDiv = document.getElementsByClassName('inputField2')[0];
                inputDiv.children[1].innerHTML = event.args.value;
            });

            myKnobThree.addEventHandler('change', (event) => {
                if (event.target !== event.currentTarget) {
                    return;
                }
                let inputDiv = document.getElementsByClassName('inputField3')[0];
                inputDiv.children[0].innerHTML = event.args.value;
            });
            // End Creating Second and Third Knobs

            const startValue1 = 60;
            const startValue2 = 60;
            const startValue3 = 60;
            // Create Input Div's
            let inputDiv = document.createElement('div');
            inputDiv.className = 'inputField1';
            inputDiv.innerHTML = '<span style="font-size: 14px; width: 33%; display:inline-block; color: #407ec3">All</span><span style="width:33%; display:inline-block;">' + startValue1 + '</span><span style="width:33%; font-size: 14px; color: #00a4e1; display:inline-block;">Calls</span>'
            knobOneContainer.appendChild(inputDiv);

            let inputDiv2 = document.createElement('div');
            inputDiv2.className = 'inputField2';
            inputDiv2.innerHTML = '<div style="font-size: 14px; color: #ef6100">Resolved Issues</div><div>' + startValue2 + '</div>';
            knobTwoContainer.appendChild(inputDiv2);

            let inputDiv3 = document.createElement('div');
            inputDiv3.className = 'inputField3';
            inputDiv3.innerHTML = '<div>' + startValue3 + '</div><div style="font-size: 14px; color: #18a25e">Pending Issues</div>';
            knobThreeContainer.appendChild(inputDiv3);
        // End Creating Input Div's
        },
        methods: {
            myKnobOneOnChange: function(event) {
                if (event.target !== event.currentTarget) {
                    return;
                }
                let inputDiv = document.getElementsByClassName('inputField1')[0];
                inputDiv.children[1].innerHTML = event.args.value;
            }
        }
    }
</script>

<style>
    #myKnobTwo {
        top: 75px !important;
    }

    .inputField1 {
        left: 110px;
        top: -220px;
        width: 180px;
        height: 40px;
        color: black;
        font-size: 30px;
        position: relative;
        background: transparent;
        text-align: center;
        border: none;
    }

    .inputField2 {
        left: 60px;
        top: 60px;
        width: 180px;
        height: 80px;
        color: black;
        font-size: 20px;
        position: absolute;
        background: transparent;
        text-align: center;
        border: none;
    }

    .inputField3 {
        left: 60px;
        top: 190px;
        width: 180px;
        height: 40px;
        color: black;
        font-size: 20px;
        position: absolute;
        background: transparent;
        text-align: center;
        border: none;
    }
</style>
