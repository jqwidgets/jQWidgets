<template>
    <JqxFileUpload :width="300" :uploadUrl="'upload.php'" :fileInputName="'fileToUpload'" :renderFiles="renderFiles">
    </JqxFileUpload>
</template>

<script>
    import JqxFileUpload from "jqwidgets-scripts/jqwidgets-vue/vue_jqxfileupload.vue";

    export default {
        components: {
            JqxFileUpload
        },
        beforeCreate: function () {
            this.imageTypes = ['.gif', '.jpg', '.png'];
            this.videoTypes = ['.wmv', '.mov', '.avi', '.divx', '.mpeg', '.mpg', '.m4p'];
        },
        methods: {
            renderFiles: function (fileName) {
                let stopIndex = fileName.indexOf('.');
                let name = fileName.slice(0, stopIndex);
                let extension = fileName.slice(stopIndex);
                let iconUrl;
                if (this.imageTypes.indexOf(extension) !== -1) {
                    iconUrl = '../../../images/nav3.png';
                } else if (this.videoTypes.indexOf(extension) !== -1) {
                    iconUrl = '../../../images/movie.png';
                } else {
                    iconUrl = '../../../images/nav1.png';
                }
                return '<div><img src="' + iconUrl + '" style="dislplay: inline; width: 16px; height: 16px; margin-right: 5px;" /><span>' + name + '<strong>' + extension + '</strong></span></div>';
            }
        }
    }
</script>

<style>
</style>