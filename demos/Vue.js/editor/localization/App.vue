<template>
    <JqxEditor :width="getWidth" :height="400" :localization="localization">
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
                localization: {
                    'bold': 'Fett',
                    'italic': 'Kursiv',
                    'underline': 'Unterstreichen',
                    'format': 'Block-Format',
                    'font': 'Schriftname',
                    'size': 'Schriftgröße',
                    'color': 'Textfarbe',
                    'background': 'Hintergrundfarbe',
                    'left': 'Links ausrichten',
                    'center': 'Mitte ausrichten',
                    'right': 'Rechts ausrichten',
                    'outdent': 'Weniger Einzug',
                    'indent': 'Mehr Einzug',
                    'ul': 'Legen Sie ungeordnete Liste',
                    'ol': 'Geordnete Liste einfügen',
                    'image': 'Bild einfügen',
                    'link': 'Link einfügen',
                    'html': 'html anzeigen',
                    'clean': 'Formatierung entfernen'
                }
            }
        }
    }
</script>

<style>
</style>