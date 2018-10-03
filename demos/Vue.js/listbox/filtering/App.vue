<template>
    <div>
        <JqxListBox ref="myListBox"
                    :filterable="true"
                    :selectedIndex="0"
                    :source="shirts"
                    :itemHeight="90"
                    :renderer="renderer"
                    :width="250"
                    :height="300">
        </JqxListBox>
        <div style="margin-top: 10px;">
            <JqxButton @click="click($event)" :width="120">
                Clear Filter
            </JqxButton>
        </div>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxListBox,
            JqxButton
        },
        data: function () {
            return {
                shirts: [
                    '2 sided dodgers<br>bankrupt<br>t shirt ash',
                    'black retro<br>rock band<br>guitar controller',
                    'bright green<br>gettin lucky<br>in kentucky',
                    'brown loading<br>bar computer geek',
                    'cool story bro',
                    'fear the beard', 'honey badger<br>don t care',
                    'misfits sf<br>giants white',
                    'scott pilgrim<br>red rock<br>band'
                ]
            }
        },
        beforeCreate: function () {
            this.shirtFileNames =  [
                '2-sided-dodgers-bankrupt-t-shirt-ash',
                'black-retro-rock-band-guitar-controller',
                'bright-green-gettin-lucky-in-kentucky',
                'brown-loading-bar-computer-geek',
                'cool-story-bro',
                'fear-the-beard',
                'honey-badger-don-t-care',
                'misfits-sf-giants-white',
                'scott-pilgrim-red-rock-band'
            ]
        },
        methods: {
            renderer: function (index, label, value) {
                let datarecord = this.shirtFileNames[index];
                let imgurl = '../../../images/t-shirts/' + datarecord.toLowerCase() + '.png';
                let img = '<img height="70" width="70" src="' + imgurl + '"/>';
                let table = '<table style="min-width: 130px;"><tr><td style="width: 80px;">' + img + '</td><td>' + label + '</td></tr></table>';

                return table;
            },
            click: function (event) {
                this.$refs.myListBox.clearFilter();
            }       
        }
    }
</script>