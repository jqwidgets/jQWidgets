<template>
    <JqxEditor :width="'100%'" :height="'95%'" :tools="'bold italic underline | left center right'">
        &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor designed to simplify web content creation. You can use it as a replacement of your Textarea.
        &lt;br /&gt;
        &lt;br /&gt;
        Features include:
        &lt;br /&gt;
        &lt;ul&gt;
        &lt;li&gt;Text formatting&lt;/li&gt;
        &lt;li&gt;Text alignment&lt;/li&gt;
        &lt;li&gt;Hyperlink dialog&lt;/li&gt;
        &lt;li&gt;Image dialog&lt;/li&gt;
        &lt;li&gt;Bulleted list&lt;/li&gt;
        &lt;li&gt;Numbered list&lt;/li&gt;
        &lt;/ul&gt;
    </JqxEditor>
</template>

<script>
    import JqxEditor from "jqwidgets-scripts/jqwidgets-vue/vue_jqxeditor.vue";

    export default {
        components: {
            JqxEditor
        }
    }
</script>

<style>
    body, html {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 3px;
        box-sizing: border-box;
        margin: 0;
    }
</style>