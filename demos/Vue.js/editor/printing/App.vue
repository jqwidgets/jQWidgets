<template>
    <JqxEditor ref="myEditor"
               :width="getWidth" :height="400" :tools="tools" :createCommand="createCommand">
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
                tools: 'bold italic underline | format font size | left center right | print'
            }
        },
        methods: {
            createCommand: function (name) {
                switch (name) {
                    case 'print':
                        return {
                            type: 'button',
                            tooltip: 'Print',
                            init: (widget) => {
                                widget.jqxButton({ height: 25, width: 40 });
                                widget.html('<span style="line-height: 23px;">Print</span>');
                            },
                            refresh: (widget, style) => {
                                // do something here when the selection is changed.
                            },
                            action: (widget, style) => {
                                // return nothing and perform a custom action.
                                this.$refs.myEditor.print();
                            }
                        }
                }
            }
        }
    }
</script>

<style>
</style>