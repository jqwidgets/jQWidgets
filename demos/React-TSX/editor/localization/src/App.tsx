import * as React from 'react';
import JqxEditor, { IEditorProps } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxeditor';

const App = () => {
    const [localization] = React.useState<IEditorProps['localization']>({
        background: 'Hintergrundfarbe',
        bold: 'Fett',
        center: 'Mitte ausrichten',
        clean: 'Formatierung entfernen',
        color: 'Textfarbe',
        font: 'Schriftname',
        format: 'Block-Format',
        html: 'html anzeigen',
        image: 'Bild einfügen',
        indent: 'Mehr Einzug',
        italic: 'Kursiv',
        left: 'Links ausrichten',
        link: 'Link einfügen',
        ol: 'Geordnete Liste einfügen',
        outdent: 'Weniger Einzug',
        right: 'Rechts ausrichten',
        size: 'Schriftgröße',
        ul: 'Legen Sie ungeordnete Liste',
        underline: 'Unterstreichen'
    });

    return (
        <JqxEditor
            theme={'material-purple'}
            width={'100%'}
            height={400}
            localization={localization}
        >
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
    );
};

export default App;