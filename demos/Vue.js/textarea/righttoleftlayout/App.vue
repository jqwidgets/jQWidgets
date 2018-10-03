<template>
    <JqxTextArea ref="myTextArea"
        :width="300" :height="100" :rtl="true" 
    />
</template>

<script>
    import JqxTextArea from 'jqwidgets-scripts/jqwidgets-vue/vue_jqxtextarea.vue';

    export default {
        components: {
            JqxTextArea
        },
        data: function () {
            return {  
                text: 'jQWidgets is a comprehensive and innovative widget library built on top of the jQuery JavaScript Library. It empowers developers to deliver professional, cross-browser compatible web applications, while significantly minimizing their development time. jQWidgets contains more than 60 UI widgets and is one of the fastest growing JavaScript UI frameworks on the Web.'
            }
        },
        mounted: function () {
            this.$refs.myTextArea.val(this.text);
        }
    }
</script>