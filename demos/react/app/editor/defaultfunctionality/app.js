import React from 'react';
import ReactDOM from 'react-dom';

import JqxEditor from '../../../jqwidgets-react/react_jqxeditor.js';

class App extends React.Component {
  render () {
    return (
      <JqxEditor width={800} height={400}>
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
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
