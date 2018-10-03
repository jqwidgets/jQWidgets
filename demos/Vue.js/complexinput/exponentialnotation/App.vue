<template>
    <div>
        <JqxComplexInput ref="myComplexInput" style="float: left"
                         :width="250" :height="25" :value="'330000 - 200i'"
                         :spinButtons="true" :decimalNotation="'exponential'">
        </JqxComplexInput>

        <JqxExpander style="float: left; margin-left: 50px"
                     :width="415" :height="380" :toggleMode="'none'" :showArrow="false">
            <div>Vue ComplexInput Notation Settings</div>
            <div style="padding-left: 15px">
                <h4>Choose notation:</h4>

                <JqxDropDownList style="margin-top: 20px" @change="notationsListOnChange($event)"
                                 :width="200" :height="25" :source="source"
                                 :autoDropDownHeight="true" :selectedIndex="1">
                </JqxDropDownList>

                <div style="margin-top: 20px">
                    <h4>Real part</h4>

                    <JqxButton style="display: inline-block" :width="180"
                               @click="getRealDecimalOnClick()">
                        Get Decimal Value
                    </JqxButton>

                    <JqxButton style="margin-left: 5px; display: inline-block" :width="180"
                               @click="getRealExponentialOnClick()">
                        Get Exponential Notation
                    </JqxButton>

                    <br /><br />

                    <JqxButton style="display: inline-block" :width="180"
                               @click="getRealScientificOnClick()">
                        Get Scientific Notation
                    </JqxButton>

                    <JqxButton style="margin-left: 5px; display: inline-block" :width="180"
                               @click="getRealEngineeringOnClick()">
                        Get Engineering Notation
                    </JqxButton>

                </div>
                <div style="margin-top: 20px">
                    <h4>Imaginary part</h4>

                    <JqxButton style="display: inline-block" :width="180"
                               @click="getImaginaryDecimalOnClick()">
                        Get Decimal Value
                    </JqxButton>

                    <JqxButton style="margin-left: 5px; display: inline-block" :width="180"
                               @click="getImaginaryExponentialOnClick()">
                        Get Exponential Notation
                    </JqxButton>

                    <br /><br />

                    <JqxButton style="display: inline-block" :width="180"
                               @click="getImaginaryScientificOnClick()">
                        Get Scientific Notation
                    </JqxButton>

                    <JqxButton style="margin-left: 5px; display: inline-block" :width="180"
                               @click="getImaginaryEngineeringOnClick()">
                        Get Engineering Notation
                    </JqxButton>

                </div>
            </div>
        </JqxExpander>
    </div>
</template>

<script>
    import JqxComplexInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxcomplexinput.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";
    import JqxExpander from "jqwidgets-scripts/jqwidgets-vue/vue_jqxexpander.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxComplexInput,
            JqxDropDownList,
            JqxExpander,
            JqxButton
        },
        data: function () {
            return {
                source: ['decimal', 'exponential', 'scientific', 'engineering']
            }
        },
        methods: {
            notationsListOnChange: function (event) {
                let args = event.args;
                if (args) {
                    let label = args.item.label;
                    if (label === 'decimal') {
                        label = 'default';
                    }
                    this.$refs.myComplexInput.decimalNotation = label;
                }
            },
            getRealDecimalOnClick: function () {
                let decimalValue = this.$refs.myComplexInput.getReal();
                alert('Decimal value: ' + decimalValue);
            },
            getRealExponentialOnClick: function () {
                let exponentialValue = this.$refs.myComplexInput.getDecimalNotation('real', 'exponential');
                alert('Exponential notation: ' + exponentialValue);
            },
            getRealScientificOnClick: function () {
                let scientificValue = this.$refs.myComplexInput.getDecimalNotation('real', 'scientific');
                alert('Scientific notation: ' + scientificValue);
            },
            getRealEngineeringOnClick: function () {
                let engineeringValue = this.$refs.myComplexInput.getDecimalNotation('real', 'engineering');
                alert('Engineering notation: ' + engineeringValue);
            },
            getImaginaryDecimalOnClick: function () {
                let decimalValue = this.$refs.myComplexInput.getImaginary();
                alert('Decimal value: ' + decimalValue);
            },
            getImaginaryExponentialOnClick: function () {
                let exponentialValue = this.$refs.myComplexInput.getDecimalNotation('imaginary', 'exponential');
                alert('Exponential notation: ' + exponentialValue);
            },
            getImaginaryScientificOnClick: function () {
                let scientificValue = this.$refs.myComplexInput.getDecimalNotation('imaginary', 'scientific');
                alert('Scientific notation: ' + scientificValue);
            },
            getImaginaryEngineeringOnClick: function () {
                let engineeringValue = this.$refs.myComplexInput.getDecimalNotation('imaginary', 'engineering');
                alert('Engineering notation: ' + engineeringValue);
            }
        }
    };
</script>

<style>
</style>