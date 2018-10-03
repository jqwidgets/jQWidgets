<template>
    <div>
        <JqxCalendar ref="myCalendar" style="float: left; margin-right: 20px"
                     :width="220" :height="220" :enableTooltips="false">
        </JqxCalendar>

        <div style="float: left">
            <div style="float: left; font-family: Verdana; font-size: 13px">
                Choose Culture
            </div>
            <br /> <br />

            <JqxDropDownList ref="myDropDownList" style="float: left" v-on:select="myDropDownListOnSelect($event)"
                             :width="220" :height="25" :selectedIndex="3" :source="availableCultures">
            </JqxDropDownList>
        </div>
    </div>
</template>

<script>
    import JqxCalendar from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxcalendar.vue';
    import JqxDropDownList from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxdropdownlist.vue';

    export default {
        components: {
            JqxCalendar,
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
            myDropDownListOnSelect: function (event) {
                let index = event.args.index;
                switch (index) {
                    case 0:
                        this.$refs.myCalendar.culture = 'cs-CZ';
                        break;
                    case 1:
                        this.$refs.myCalendar.culture = 'de-DE';
                        break;
                    case 2:
                        this.$refs.myCalendar.culture = 'en-CA';
                        break;
                    case 3:
                        this.$refs.myCalendar.culture = 'en-US';
                        break;
                    case 4:
                        this.$refs.myCalendar.culture = 'fr-FR';
                        break;
                    case 5:
                        this.$refs.myCalendar.culture = 'it-IT';
                        break;
                    case 6:
                        this.$refs.myCalendar.culture = 'ja-JP';
                        break;
                    case 7:
                        this.$refs.myCalendar.culture = 'he-IL';
                        break;
                    case 8:
                        this.$refs.myCalendar.culture = 'ru-RU';
                        break;
                    case 9:
                        this.$refs.myCalendar.culture = 'hr';
                        break;
                    case 10:
                        this.$refs.myCalendar.culture = 'sa-IN';
                        break;
                }
            }
        }
    }
</script>

<style>
</style>