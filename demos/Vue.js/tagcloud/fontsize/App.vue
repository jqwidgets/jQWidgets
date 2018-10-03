<template>
    <div>
        <JqxTagCloud ref="myTagCloud"
                     :width="600" :source="dataAdapter" :fontSizeUnit="'px'"
                     :displayMember="'country'" :valueMember="'rate'"
                     :minFontSize="12" :maxFontSize="30" :urlBase="'http://localhost/'"
                     :minColor="'#00AA99'" :maxColor="'#FF0000'">
        </JqxTagCloud>

        <div class="text">
            <p>minFontSize:</p>
            <p>maxFontSize:</p>
            <p>fontSizeUnit:</p>
        </div>

        <JqxInput ref="myInput1"
            :width="200" :height="25" :value="12">
        </JqxInput>

        <JqxInput ref="myInput2"
            :width="200" :height="25" :value="20">
        </JqxInput>

        <JqxInput ref="myInput3"
            :width="200" :height="25" :value="'px'" :minLength="1" :source="['em','px','%']">
        </JqxInput>

        <JqxButton :width="100" @click="setFontSizeBtnOnClick()">Set Font</JqxButton>
    </div>
</template>

<script>
    import JqxTagCloud from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtagcloud.vue';
    import JqxButton from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue';
    import JqxInput from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxinput.vue';

    export default {
        components: {
            JqxTagCloud,
            JqxButton,
            JqxInput
        },
        beforeCreate: function () {
            const unemploymentRate =
                [
                    { 'country': 'Namibia', 'rate': 37.6 },
                    { 'country': 'Macedonia, FYR', 'rate': 32.0 },
                    { 'country': 'Latvia', 'rate': 18.7 },
                    { 'country': 'Lithuania', 'rate': 17.8 },
                    { 'country': 'Estonia', 'rate': 16.9 },
                    { 'country': 'Serbia', 'rate': 16.6 },
                    { 'country': 'Georgia', 'rate': 16.5 },
                    { 'country': 'Yemen, Rep.', 'rate': 14.6 },
                    { 'country': 'Slovak Republic', 'rate': 14.4 },
                    { 'country': 'Dominican Republic', 'rate': 14.2 },
                    { 'country': 'Tunisia', 'rate': 14.2 },
                    { 'country': 'Armenia', 'rate': 28.6 },
                    { 'country': 'Bosnia and Herzegovina', 'rate': 27.2 },
                    { 'country': 'Lesotho', 'rate': 25.3 },
                    { 'country': 'South Africa', 'rate': 24.7 },
                    { 'country': 'Spain', 'rate': 20.1 },
                    { 'country': 'Albania', 'rate': 13.8 },
                    { 'country': 'Ireland', 'rate': 13.6 },
                    { 'country': 'Jordan', 'rate': 12.9 },
                    { 'country': 'Greece', 'rate': 12.5 }
                ];

            const source =
                {
                    datatype: 'array',
                    localdata: unemploymentRate,
                    datafields: [
                        { name: 'country' },
                        { name: 'rate' }
                    ]
                };

            this.dataAdapter = new jqx.dataAdapter(source);
        },
        methods: {
            setFontSizeBtnOnClick: function () {
                this.$refs.myTagCloud.setOptions({
                    minFontSize: this.$refs.myInput1.val(),
                    maxFontSize: this.$refs.myInput2.val(),
                    fontSizeUnit: this.$refs.myInput3.val()
                });
            }
        }
    }
</script>

<style>
    .text p {
        display: inline-block;
        width: 210px;
        text-align: center;
    }
    .jqx-input {
        margin-right: 10px !important;
    }
    .jqx-button {
        margin-top: 10px;
    }
</style>