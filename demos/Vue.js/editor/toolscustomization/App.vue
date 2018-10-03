<template>
    <JqxEditor :width="getWidth" :height="400" :tools="tools" :createCommand="createCommand">
        &lt;b&gt;jqxEditor&lt;/b&gt; is a HTML text editor designed to simplify web content creation. You can use it as a replacement of your Textarea or you can create it from a DIV element.
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
        },
        data: function () {
            return {
                getWidth: '90%',
                tools: 'bold italic underline | font size | left center right | outdent indent'
            }
        },
        methods: {
            createCommand: function (name) {
                switch (name) {
                    case 'font':
                        return {
                            init: (widget) => {
                                widget.jqxDropDownList({
                                    source: [
                                        { label: 'Arial', value: 'Arial, Helvetica, sans-serif' },
                                        { label: 'Comic Sans MS', value: '"Comic Sans MS", cursive, sans-serif' },
                                        { label: 'Courier New', value: '"Courier New", Courier, monospace' },
                                        { label: 'Georgia', value: 'Georgia,serif' }]
                                });
                            }
                        }
                    case 'size':
                        return {
                            init: (widget) => {
                                widget.jqxDropDownList({
                                    source: [
                                        { label: '8pt', value: 'xx-small' },
                                        { label: '12pt', value: 'small' },
                                        { label: '18pt', value: 'large' },
                                        { label: '36pt', value: 'xx-large' }
                                    ]
                                });
                            }
                        }
                }
            }
        }
    }
</script>

<style>
</style>