<template>
    <div>
        <JqxFileUpload style="float: left"
                       @select="onSelect($event)" @remove="onRemove($event)"
                       @uploadStart="onUploadStart($event)" @uploadEnd="onUploadEnd($event)"
                       :width="300" :uploadUrl="'upload.php'" :fileInputName="'fileToUpload'">
        </JqxFileUpload>

        <div style="float: left; margin-left: 50px">
            <div style="margin-bottom: 10px; font-family: Verdana; font-size: smaller">
                Events log:
            </div>

            <JqxPanel ref="myPanel" :width="300" :height="150"></JqxPanel>

        </div>
    </div>
</template>

<script>
    import JqxFileUpload from "jqwidgets-scripts/jqwidgets-vue/vue_jqxfileupload.vue";
    import JqxPanel from "jqwidgets-scripts/jqwidgets-vue/vue_jqxpanel.vue";

    export default {
        components: {
            JqxFileUpload,
            JqxPanel
        },
        methods: {
            onSelect: function (event) {
                let args = event.args;
                let fileName = args.file;
                let fileSize = args.size;
                this.$refs.myPanel.append('<strong>' + event.type + ':</strong> ' +
                    fileName + ';<br />' + 'size: ' + fileSize + '<br />');
            },
            onRemove: function (event) {
                let fileName = event.args.file;
                this.$refs.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
            },
            onUploadStart: function (event) {
                let fileName = event.args.file;
                this.$refs.myPanel.append('<strong>' + event.type + ':</strong> ' + fileName + '<br />');
            },
            onUploadEnd: function (event) {
                let args = event.args;
                let fileName = args.file;
                let serverResponce = args.response;
                this.$refs.myPanel.append('<strong>' + event.type + ':</strong> ' +
                    fileName + ';<br />' + 'server response: ' + serverResponce + '<br />');
            }
        }
    }
</script>

<style>
</style>