<template>
    <div>
        <JqxButton @click="btnOnClick()" :width="120">Open Editor</JqxButton>

        <JqxWindow ref="myWindow"
                   :width="600" :height="400" :maxWidth="800"
                   :autoOpen="false" :resizable="false" :position="'top, left'">
            <div>jqxEditor</div>
            <JqxEditor :width="'100%'" :height="'94%'"
                       :tools="'bold | italic | underline | font | size'">
            </JqxEditor>
        </JqxWindow>
    </div>
</template>

<script>
    import JqxEditor from "jqwidgets-scripts/jqwidgets-vue/vue_jqxeditor.vue";
    import JqxWindow from "jqwidgets-scripts/jqwidgets-vue/vue_jqxwindow.vue";
    import JqxButton from "jqwidgets-scripts/jqwidgets-vue/vue_jqxbuttons.vue";

    export default {
        components: {
            JqxEditor,
            JqxWindow,
            JqxButton
        },
        methods: {
            btnOnClick: function () {
                this.$refs.myWindow.open();
            }
        }
    }
</script>