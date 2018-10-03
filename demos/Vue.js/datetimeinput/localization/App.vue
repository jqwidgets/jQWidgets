<template>
    <div>
        <JqxDateTimeInput ref="myDateTimeInput"
                          :width="250" :height="25">
        </JqxDateTimeInput>

        <br />
        <div>
            <div style="font-family: Verdana; font-size: 13px">
                Choose Culture:
            </div>
            <br />

            <JqxDropDownList @select="listOnSelect($event)"
                             :width="200" :height="25"
                             :source="availableCultures" :selectedIndex="3">
            </JqxDropDownList>

        </div>
    </div>
</template>

<script>
    import JqxDateTimeInput from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdatetimeinput.vue";
    import JqxDropDownList from "jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue";

    export default {
        components: {
            JqxDateTimeInput,
            JqxDropDownList
        },
        data: function () {
            return {
                availableCultures: [
                    'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
                    'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
                ]
            }
        },
        methods: {
            listOnSelect: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myDateTimeInput.culture = 'cs-CZ';
                        break;
                    case 1:
                        this.$refs.myDateTimeInput.culture = 'de-DE';
                        break;
                    case 2:
                        this.$refs.myDateTimeInput.culture = 'en-CA';
                        break;
                    case 3:
                        this.$refs.myDateTimeInput.culture = 'en-US';
                        break;
                    case 4:
                        this.$refs.myDateTimeInput.culture = 'fr-FR';
                        break;
                    case 5:
                        this.$refs.myDateTimeInput.culture = 'it-IT';
                        break;
                    case 6:
                        this.$refs.myDateTimeInput.culture = 'ja-JP';
                        break;
                    case 7:
                        this.$refs.myDateTimeInput.culture = 'he-IL';
                        break;
                    case 8:
                        this.$refs.myDateTimeInput.culture = 'ru-RU';
                        break;
                    case 9:
                        this.$refs.myDateTimeInput.culture = 'hr';
                        break;
                    case 10:
                        this.$refs.myDateTimeInput.culture = 'sa-IN';
                        break;
                }
            }
        }
    };
</script>

<style>
</style>