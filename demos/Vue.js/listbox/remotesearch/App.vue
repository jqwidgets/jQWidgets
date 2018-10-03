<template>
    <div style="font-size: 13px; font-family: Verdana; float: left;">
        <div>
            <span style="float: left; margin-top: 5px; margin-right: 4px;">Search for a City: </span>
            <input class="jqx-input" placeholder="Type a City name here" ref="searchField" @keyup="keyup($event)" type="text" style="height: 23px; float: left; width: 197px; margin-bottom: 10px;" />
        </div>
        <div style="clear: both;"></div>
        <JqxListBox :source="dataAdapter"
                    :displayMember="'name'"
                    :valueMember="'countryName'"
                    :renderer="renderer"
                    :height="350"
                    :width="320">
        </JqxListBox>
    </div>
</template>
<script>
    import JqxListBox from "jqwidgets-scripts/jqwidgets-vue/vue_jqxlistbox.vue";

    export default {
        components: {
            JqxListBox
        },
        data: function () {
            return {
                dataAdapter: new jqx.dataAdapter(this.source, {
                    formatData: (data) => {
                        data.name_startsWith = this.$refs.searchField.value;
                        return data;
                    }
                })
            }
        },
        beforeCreate: function () {
            this.source = {
                datatype: "jsonp",
                datafields: [
                    { name: 'countryName' },
                    { name: 'name' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode' },
                    { name: 'adminName1' }
                ],
                url: "http://api.geonames.org/searchJSON",
                data: {
                    featureClass: "P",
                    style: "full",
                    maxRows: 50,
                    username: "jqwidgets"
                }
            };

            this.me = { timer: null };
        },
        methods: {
            renderer: function (index, label, value) {
                let item = this.dataAdapter.records[index];
                if (item != null) {
                    let label = item.name + "(" + item.countryName + ", " + item.adminName1 + ")";
                    return label;
                }

                return "";
            },
            keyup: function (event) {
                if (this.me.timer) {
                    clearTimeout(this.me.timer);
                }

                this.me.timer = setTimeout(_ => {
                    this.dataAdapter.dataBind();
                }, 300);
            }
        }
    }
</script>

<style>
</style>
